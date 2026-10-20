import { useId } from "react";

// Oryginalne obrysy z public/logo.svg; przesunięcia rozdzielają części sygnetu.
const parts = [
  {
    color: "violet", offset: "translate(0 4)", edge: "#4c2d5c",
    path: "m96.01563 157.87299-9.65403-9.65675 1.77665-1.77664 1.77664-1.77664 4.4026 4.35578c2.42144 2.39568 6.08594 5.98677 8.14333 7.98019l3.74072 3.6244 7.88351-7.84293 7.88351-7.84294 1.63949 1.63949 1.63949 1.63949-9.65393 9.65665c-5.30966 5.31115-9.71469 9.65664-9.78894 9.65664-.0743 0-4.47932-4.34553-9.78904-9.65674Z",
  },
  {
    color: "berry", offset: "translate(3 -1)", edge: "#640b2b",
    path: "m102.78286 151.25805-1.84359-1.85783 6.34323-6.34736 6.34323-6.34737 1.85279 1.85277 1.85277 1.85278-6.35242 6.35242-6.35242 6.35242Z",
  },
  {
    color: "leaf", offset: "", edge: "#185500",
    path: "m100.12957 153.79782-5.752484-5.75695 5.627414-5.62284 5.6274-5.62285 1.63467 1.65635 1.63468 1.65635-4.50364 4.57101c-2.477 2.51406-4.464994 4.6796-4.417764 4.81231.117374.32976 4.473534 4.77189 4.679554 4.77189 4.51801-4.25753 8.8682-8.69803 13.26002-13.08722l1.73698 1.71497 1.73698 1.71496-7.61794 7.47448c-4.18987 4.11096-7.67992 7.47448-7.75567 7.47448-.0757 0-2.72634-2.59062-5.8902-5.75694Z",
  },
  {
    color: "blue", offset: "translate(-2 -3)", edge: "#002e50",
    path: "m91.984619 145.76774-1.5101-1.52603 7.66896-7.66555 7.668971-7.66555 3.57347 3.56612 3.57348 3.56612-1.67351 1.67351-1.67351 1.6735-1.89126-1.93502-1.89125-1.93503-5.896861 5.88698c-3.24328 3.23784-6.01868 5.88698-6.16757 5.88698-.14889 0-.95026-.68672-1.78082-1.52603Z",
  },
];

// Gęste przekroje tego samego obrysu tworzą ciągłą, pełną krawędź bryły.
const depthSteps = Array.from({ length: 12 }, (_, index) => (12 - index) / 12);

/** Rozłożony sygnet, opcjonalnie przedstawiony jako przestrzenna kompozycja. */
export default function BrandMotif({ className = "", dimensional = false }: { className?: string; dimensional?: boolean }) {
  const id = useId();
  return (
    <svg className={`brand-motif${dimensional ? " brand-motif--dimensional" : ""} ${className}`} viewBox={dimensional ? "0 0 68 64" : "0 0 62 60"} fill="none" aria-hidden="true" focusable="false">
      {dimensional && (
        <defs>
          {parts.map((part) => <path id={`${id}-${part.color}`} key={part.color} d={part.path} />)}
          <linearGradient id={`${id}-light`} x1="0" y1="0" x2="0.65" y2="1">
            <stop stopColor="#fff" stopOpacity="0.24" />
            <stop offset="0.45" stopColor="#fff" stopOpacity="0.04" />
            <stop offset="1" stopColor="#000" stopOpacity="0.12" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-40%" y="-40%" width="190%" height="200%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0.6" dy="2" stdDeviation="1" floodColor="#071826" floodOpacity="0.2" />
          </filter>
        </defs>
      )}
      <g transform={dimensional ? "matrix(1 -0.12 0.18 0.84 -1 9)" : undefined}>
        <path className="brand-motif__outline" transform={dimensional ? "translate(0 5)" : undefined} d="M5 30 31 4l26 26-26 26Z" />
        <g transform="translate(9 8)">
          <g transform="translate(-85.232979 -128.65625)">
            <g transform="translate(-0.85042702 0.40283385)">
              {parts.map((part) => dimensional ? (
                <g key={part.color} className={`brand-motif__${part.color}`} transform={part.offset} filter={`url(#${id}-shadow)`}>
                  {depthSteps.map((depth) => <use key={depth} href={`#${id}-${part.color}`} transform={`translate(${depth * 0.8} ${depth * 2.6})`} fill={part.edge} />)}
                  <use href={`#${id}-${part.color}`} />
                  <use href={`#${id}-${part.color}`} fill={`url(#${id}-light)`} stroke="#fff" strokeOpacity="0.16" strokeWidth="0.12" />
                </g>
              ) : (
                <path key={part.color} className={`brand-motif__${part.color}`} transform={part.offset} d={part.path} />
              ))}
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
