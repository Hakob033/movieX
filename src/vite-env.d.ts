/// <reference types="vite/client" />
declare namespace JSX {
  interface IntrinsicElements {
    "my-header": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      title?: string;
    };
  }
}
