// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PROJECT_ID: string;
    readonly VITE_SANITY_DATASET: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  