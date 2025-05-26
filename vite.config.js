import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    server: { port: 4008},
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
          // And drop the stray "main_chat_app@" prefix for Vite→Vite
          chatHomeApp: isProd
            ? "https://your-prod-chathome.app/remoteEntry.js"
            : "http://localhost:4010/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
      }),
    ],
  };
});
