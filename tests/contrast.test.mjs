import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync("app/globals.css", "utf8");
const rgb = (hex) => hex.replace("#", "").match(/\w\w/g).map((channel) => parseInt(channel, 16));
const luminance = (color) => color.map((channel) => {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (first, second) => (Math.max(luminance(first), luminance(second)) + 0.05) / (Math.min(luminance(first), luminance(second)) + 0.05);
const blend = (front, back, opacity) => front.map((channel, index) => channel * opacity + back[index] * (1 - opacity));
const definitions = [...css.matchAll(/--([\w-]+):\s*(#[\da-f]{6})\s*;/gi)];
const tokens = (dark) => Object.fromEntries((dark ? definitions : definitions.filter((entry) => entry.index < css.indexOf("@media (prefers-color-scheme: dark)"))).map((entry) => [entry[1], rgb(entry[2])]));

for (const dark of [false, true]) {
  test(`Kontrast tekstu i kontrolek — motyw ${dark ? "ciemny" : "jasny"}`, () => {
    const colors = tokens(dark);
    for (const background of ["bg", "surface", "surface-2", "surface-alt"]) {
      for (const foreground of ["ink", "ink-2", "ink-3", "brand-text"]) {
        assert.ok(contrast(colors[foreground], colors[background]) >= 4.5, `${foreground} na ${background}`);
      }
      assert.ok(contrast(colors["control-border"], colors[background]) >= 3, `Obramowanie na ${background}`);
    }
    for (const background of ["ink-deep", "ink-deep-2", "card-dark"]) {
      for (const foreground of ["on-dark", "on-dark-2", "eyebrow-on-dark"]) {
        assert.ok(contrast(colors[foreground], colors[background]) >= 4.5, `${foreground} na ${background}`);
      }
    }
  });
}

test("Biały tekst na całym gradiencie przycisków ma kontrast co najmniej 4,5:1", () => {
  const gradient = css.match(/--grad-btn:\s*([^;]+);/)[1];
  const stops = [...gradient.matchAll(/#[\da-f]{6}/gi)].map((entry) => rgb(entry[0]));
  // Górna granica każdego kanału obejmuje także wszystkie kolory pośrednie.
  const brightest = [0, 1, 2].map((index) => Math.max(...stops.map((stop) => stop[index])));
  assert.ok(contrast([255, 255, 255], brightest) >= 4.5);
});

test("Tekst hero zachowuje kontrast także przy maksymalnym nałożeniu dekoracji", () => {
  const colors = tokens(false);
  let background = colors["ink-deep"];
  const aurora = css.match(/\.hero__aurora\s*\{([\s\S]*?)\n\}/)[1];
  const layers = [...aurora.matchAll(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/g)].reverse();
  for (const layer of layers) {
    const front = layer.slice(1, 4).map(Number);
    const alpha = Number(layer[4]);
    // Niezależna górna granica kanałów jest bardziej zachowawcza niż
    // rzeczywisty obraz: dopuszcza wszystkie radialne maksima jednocześnie.
    background = background.map((channel, index) => Math.max(channel, front[index] * alpha + channel * (1 - alpha)));
  }
  background = blend([255, 255, 255], background, 1 - 0.95 ** 2);
  const overlay = css.match(/\.hero::after\s*\{[\s\S]*?rgba\(11, 18, 32, ([\d.]+)\)/)[1];
  background = blend(colors["ink-deep"], background, Number(overlay));
  for (const foreground of ["on-dark", "on-dark-2", "eyebrow-on-dark"]) {
    assert.ok(contrast(colors[foreground], background) >= 4.5, `${foreground}: ${contrast(colors[foreground], background).toFixed(2)}:1`);
  }
});
