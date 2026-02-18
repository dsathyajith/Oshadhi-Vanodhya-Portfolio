import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/fd66280e50f16adbf2f433b906f1d37f0d7cbf76.png": path.resolve(
        __dirname,
        "./src/assets/fd66280e50f16adbf2f433b906f1d37f0d7cbf76.png",
      ),
      "figma:asset/fb02bd1caf1c1893b01ebdff0ef78dea0acc46bd.png": path.resolve(
        __dirname,
        "./src/assets/fb02bd1caf1c1893b01ebdff0ef78dea0acc46bd.png",
      ),
      "figma:asset/f8f5d5a1df9e0026d3d93f1c505fb8d97bb772df.png": path.resolve(
        __dirname,
        "./src/assets/f8f5d5a1df9e0026d3d93f1c505fb8d97bb772df.png",
      ),
      "figma:asset/f8afede70941bb9fec2a7c6540e2af2c686ea384.png": path.resolve(
        __dirname,
        "./src/assets/f8afede70941bb9fec2a7c6540e2af2c686ea384.png",
      ),
      "figma:asset/f39d0d2150b95ea21a5463035447baaf07c3795e.png": path.resolve(
        __dirname,
        "./src/assets/f39d0d2150b95ea21a5463035447baaf07c3795e.png",
      ),
      "figma:asset/efe9e16a8b39f7099a4f719f2e41040db69aaa86.png": path.resolve(
        __dirname,
        "./src/assets/efe9e16a8b39f7099a4f719f2e41040db69aaa86.png",
      ),
      "figma:asset/eeda201e36c58f78f60542f69c72ce5619c98d51.png": path.resolve(
        __dirname,
        "./src/assets/eeda201e36c58f78f60542f69c72ce5619c98d51.png",
      ),
      "figma:asset/ec123535667fb7c7348e05688cbc273c4bbe3c41.png": path.resolve(
        __dirname,
        "./src/assets/ec123535667fb7c7348e05688cbc273c4bbe3c41.png",
      ),
      "figma:asset/d80010668a032127fd2a112275edb4f656b5fb2c.png": path.resolve(
        __dirname,
        "./src/assets/d80010668a032127fd2a112275edb4f656b5fb2c.png",
      ),
      "figma:asset/d74e6488dcbe03ed74ff1474f1e91bc271cb835c.png": path.resolve(
        __dirname,
        "./src/assets/d74e6488dcbe03ed74ff1474f1e91bc271cb835c.png",
      ),
      "figma:asset/d6eb931b6226d380330602c906e44e2a9fb892dd.png": path.resolve(
        __dirname,
        "./src/assets/d6eb931b6226d380330602c906e44e2a9fb892dd.png",
      ),
      "figma:asset/d28d7f6b3a41fbad64bc3d49916d40007ca9ec78.png": path.resolve(
        __dirname,
        "./src/assets/d28d7f6b3a41fbad64bc3d49916d40007ca9ec78.png",
      ),
      "figma:asset/cdc485201be523d2faad1eae43ff3ae56478a204.png": path.resolve(
        __dirname,
        "./src/assets/cdc485201be523d2faad1eae43ff3ae56478a204.png",
      ),
      "figma:asset/cc690824e11248be9fe4443526735fe6eca9d755.png": path.resolve(
        __dirname,
        "./src/assets/cc690824e11248be9fe4443526735fe6eca9d755.png",
      ),
      "figma:asset/c4a580d4e08bafea2a67504c5f629aa9fe4e82b2.png": path.resolve(
        __dirname,
        "./src/assets/c4a580d4e08bafea2a67504c5f629aa9fe4e82b2.png",
      ),
      "figma:asset/b0d4daa41efff45a92a84461bb2519cb0b711683.png": path.resolve(
        __dirname,
        "./src/assets/b0d4daa41efff45a92a84461bb2519cb0b711683.png",
      ),
      "figma:asset/9d47c43c7096aca688d62cf6b64b35d845463cc2.png": path.resolve(
        __dirname,
        "./src/assets/9d47c43c7096aca688d62cf6b64b35d845463cc2.png",
      ),
      "figma:asset/972dbe56e157c2720a291d9eccc963f7446adc1a.png": path.resolve(
        __dirname,
        "./src/assets/972dbe56e157c2720a291d9eccc963f7446adc1a.png",
      ),
      "figma:asset/954412963dcb21eca65211548514dd170a77a564.png": path.resolve(
        __dirname,
        "./src/assets/954412963dcb21eca65211548514dd170a77a564.png",
      ),
      "figma:asset/922932e04559a025ca3e5f2fd36c470f125a135b.png": path.resolve(
        __dirname,
        "./src/assets/922932e04559a025ca3e5f2fd36c470f125a135b.png",
      ),
      "figma:asset/8fa0ea6907f49e5ba443dc4837bbaa6a5d8f1aa3.png": path.resolve(
        __dirname,
        "./src/assets/8fa0ea6907f49e5ba443dc4837bbaa6a5d8f1aa3.png",
      ),
      "figma:asset/88c1e7fe5b6134cca2ca8df67d8032992f13cc22.png": path.resolve(
        __dirname,
        "./src/assets/88c1e7fe5b6134cca2ca8df67d8032992f13cc22.png",
      ),
      "figma:asset/8454fc3122cbcf245d65bab9829ab10c6cada7b4.png": path.resolve(
        __dirname,
        "./src/assets/8454fc3122cbcf245d65bab9829ab10c6cada7b4.png",
      ),
      "figma:asset/7441fe066ef693ba97600b097671a3cb34ff838a.png": path.resolve(
        __dirname,
        "./src/assets/7441fe066ef693ba97600b097671a3cb34ff838a.png",
      ),
      "figma:asset/5dd958cbfdb0c841b4f47065da24f6b3175d59ca.png": path.resolve(
        __dirname,
        "./src/assets/5dd958cbfdb0c841b4f47065da24f6b3175d59ca.png",
      ),
      "figma:asset/5c6ea3751323e2dd448f7f8bda5d6136273a3090.png": path.resolve(
        __dirname,
        "./src/assets/5c6ea3751323e2dd448f7f8bda5d6136273a3090.png",
      ),
      "figma:asset/5888b52f30c3730e13613f99adb36bee71e17cfd.png": path.resolve(
        __dirname,
        "./src/assets/5888b52f30c3730e13613f99adb36bee71e17cfd.png",
      ),
      "figma:asset/57e10d11098b17423d2dd35e8f739da4a3b9f8cd.png": path.resolve(
        __dirname,
        "./src/assets/57e10d11098b17423d2dd35e8f739da4a3b9f8cd.png",
      ),
      "figma:asset/55b0832fbd1bb098b6f6961c22eaa1a1bb63c6b2.png": path.resolve(
        __dirname,
        "./src/assets/55b0832fbd1bb098b6f6961c22eaa1a1bb63c6b2.png",
      ),
      "figma:asset/524616a1f7f63515c08aff99d15a6fa2ddfd4d1e.png": path.resolve(
        __dirname,
        "./src/assets/524616a1f7f63515c08aff99d15a6fa2ddfd4d1e.png",
      ),
      "figma:asset/4fd14448f0df2328217b29896eacaabceff1559a.png": path.resolve(
        __dirname,
        "./src/assets/4fd14448f0df2328217b29896eacaabceff1559a.png",
      ),
      "figma:asset/4fb9cbbb9a9d25120eec2b62b3b4ebdc0666ad42.png": path.resolve(
        __dirname,
        "./src/assets/4fb9cbbb9a9d25120eec2b62b3b4ebdc0666ad42.png",
      ),
      "figma:asset/4b51bd1606c56d09a50e4a0d2b3123a5ff5e3e9f.png": path.resolve(
        __dirname,
        "./src/assets/4b51bd1606c56d09a50e4a0d2b3123a5ff5e3e9f.png",
      ),
      "figma:asset/4b1dd6cb0a75b72059958a22344fd8b80023e886.png": path.resolve(
        __dirname,
        "./src/assets/4b1dd6cb0a75b72059958a22344fd8b80023e886.png",
      ),
      "figma:asset/47aa556c3faf518dd1720b34a490f2875487e8a8.png": path.resolve(
        __dirname,
        "./src/assets/47aa556c3faf518dd1720b34a490f2875487e8a8.png",
      ),
      "figma:asset/4573a3f7d62f5d3eb6fbcf9646cbb7645ddddcdd.png": path.resolve(
        __dirname,
        "./src/assets/4573a3f7d62f5d3eb6fbcf9646cbb7645ddddcdd.png",
      ),
      "figma:asset/3ef770cadaf6a46f147abbc14be3a80181cfa1f4.png": path.resolve(
        __dirname,
        "./src/assets/3ef770cadaf6a46f147abbc14be3a80181cfa1f4.png",
      ),
      "figma:asset/3b0a6b6817c3a7b97a4e82e7d82ae23ef914c091.png": path.resolve(
        __dirname,
        "./src/assets/3b0a6b6817c3a7b97a4e82e7d82ae23ef914c091.png",
      ),
      "figma:asset/1e7f3db186973d4889e0984e089dac0312cc6659.png": path.resolve(
        __dirname,
        "./src/assets/1e7f3db186973d4889e0984e089dac0312cc6659.png",
      ),
      "figma:asset/1e3ba89341ab5f78a25db311d4d030ffce0ee1ad.png": path.resolve(
        __dirname,
        "./src/assets/1e3ba89341ab5f78a25db311d4d030ffce0ee1ad.png",
      ),
      "figma:asset/1890d7cb6410d0099d2a0774f1b11e270f3ac316.png": path.resolve(
        __dirname,
        "./src/assets/1890d7cb6410d0099d2a0774f1b11e270f3ac316.png",
      ),
      "figma:asset/1423b5cd039d2e994e26f8022f121f0ead904959.png": path.resolve(
        __dirname,
        "./src/assets/1423b5cd039d2e994e26f8022f121f0ead904959.png",
      ),
      "figma:asset/06f507965d4651157b1f7f6451d3420a17210432.png": path.resolve(
        __dirname,
        "./src/assets/06f507965d4651157b1f7f6451d3420a17210432.png",
      ),
      "figma:asset/061b7fa3874af028916d19b335fb880a0f76fab0.png": path.resolve(
        __dirname,
        "./src/assets/061b7fa3874af028916d19b335fb880a0f76fab0.png",
      ),
      "figma:asset/0505d1faed5a922095c6ea3f080f65fd51459bc2.png": path.resolve(
        __dirname,
        "./src/assets/0505d1faed5a922095c6ea3f080f65fd51459bc2.png",
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5":
        "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@jsr/supabase__supabase-js@2.49.8": "@jsr/supabase__supabase-js",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
