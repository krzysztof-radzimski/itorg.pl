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

test("Biały tekst przycisków zachowuje kontrast także po najechaniu", () => {
  const colors = tokens(false);
  for (const background of ["button-bg", "button-hover"]) {
    assert.ok(contrast([255, 255, 255], colors[background]) >= 4.5, background);
  }
});

test("Fokus ma kontrast co najmniej 3:1 na powierzchniach obu motywów", () => {
  for (const dark of [false, true]) {
    const colors = tokens(dark);
    for (const background of ["bg", "surface", "surface-2", "surface-alt"]) {
      assert.ok(contrast(colors.ring, colors[background]) >= 3, `Fokus na ${background}`);
    }
    for (const background of ["ink-deep", "ink-deep-2", "card-dark"]) {
      assert.ok(contrast(colors["ring-on-dark"], colors[background]) >= 3, `Fokus w ciemnej sekcji: ${background}`);
    }
  }
});
