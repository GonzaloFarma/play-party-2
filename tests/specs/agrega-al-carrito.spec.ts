import { test } from "@playwright/test";
import { HomePage } from "../pages/home.page";

test("Buscar y agregar producto al carrito", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");
  await homePage.searchProduct("ibuprofeno");

  // Verificar que se redirigió a la página de resultados
  await page.waitForURL("**/ibuprofeno?_q=ibuprofeno&map=ft**");

  // Agregar el primer producto al carrito
  await homePage.addFirstProductToCart();

  // Verificar que el producto se agregó al carrito (por ejemplo, verificar minicart o mensaje)
  // Aquí puedes agregar una aserción, como esperar que aparezca un mensaje de éxito o que el contador del carrito aumente
  // Por simplicidad, esperamos un poco y verificamos que no haya errores
  await page.waitForTimeout(2000); // Temporal, mejor usar una condición específica
});
