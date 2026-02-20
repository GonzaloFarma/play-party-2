import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Dónde están los tests
  testDir: "./tests/specs",

  // En CI no permite test.only (evita que alguien lo olvide activo)
  forbidOnly: !!process.env.CI,

  // Reintentos: 2 en CI, 0 en local
  retries: process.env.CI ? 2 : 0,

  // Paralelismo: automático en local, 1 worker en CI
  workers: process.env.CI ? 1 : undefined,

  // Reportes
  reporter: [
    ["html"], // playwright-report/
    ["json", { outputFile: "test-results/results.json" }], // Para integraciones
    ["list"], // Output en terminal
  ],

  use: {
    // URL base del sitio bajo test — cambiala según el proyecto
    baseURL: "https://www.farmacity.com",

    // Timeouts por operación
    actionTimeout: 15_000, // click, fill, etc.
    navigationTimeout: 30_000, // carga de página

    // Evidencia automática: solo cuando el test falla
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  // Navegadores a usar
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "mobile-chrome",
    //   use: { ...devices["Pixel 7"] },
    // },
  ],
});
