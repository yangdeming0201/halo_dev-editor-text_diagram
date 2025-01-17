/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/vue" />

export {};

declare module "*.vue" {
  declare module "*.vue" {
    // NOTE: ts-loader
    import { defineComponent } from "vue";

    const component: ReturnType<typeof defineComponent>;
    export default component;
  }
}

import type { Mermaid } from "mermaid";

declare global {
  interface Window {
    mermaid: Mermaid;
  }
}
