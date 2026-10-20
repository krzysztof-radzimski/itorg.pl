import type { SiteProps } from "@/content/site";
import { yearsSince } from "@/lib/typography";

// Fakty o firmie; liczba lat działalności wyliczana podczas eksportu.
export default function Stats({ site }: SiteProps) {
  const years = yearsSince(site.company.foundedYear);

  return (
    <div className="container stats-band__wrap">
      <ul className="stats-band">
        {site.stats.map((s) => {
          const num = s.kind === "years" ? String(years) : s.number;
          return (
            <li className="stat-card" key={s.label}>
              <span className="stat-card__num">
                {num}
                {s.suffix}
              </span>
              <span className="stat-card__label">{s.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
