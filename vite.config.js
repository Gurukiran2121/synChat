import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    server: { port: 4008 },
    build: { target: "esnext" },
    plugins: [
      react(),
      federation({
        name: "synChat",
        remotes: {
          // pick the right URL based on mode
          authApp: isProd
            ? "https://authmicroapp.netlify.app/assets/remoteEntry.js"
            : "http://localhost:4006/assets/remoteEntry.js",

        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
          "@auth0/auth0-react": { singleton: true, requiredVersion: "^2.3.0" },
          zustand: { singleton: true },

        },
      }),
    ],
  };
});
