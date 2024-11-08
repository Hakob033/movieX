/// <reference types="vite/client" />
// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "film-card": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      title?: string;
      imageUrl?: string;
      date?: string;
      vote_average?: string;
    };
  }
}
