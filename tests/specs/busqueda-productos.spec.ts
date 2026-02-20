import { test } from "@playwright/test";
import { HomePage } from "../pages/home.page";

test("Buscar producto desde home", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");
  await homePage.searchProduct("ibuprofeno");

  // Verificar que se redirigió a la página de resultados
  await page.waitForURL("**/ibuprofeno?_q=ibuprofeno&map=ft**");
});
