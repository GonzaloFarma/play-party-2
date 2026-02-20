import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { RegionalizationPage } from "../pages/regionalization.page";

test("Usuario sin login ni regionalización ve mensaje al agregar medicamento al carrito", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const regionalizationPage = new RegionalizationPage(page);

  // Navegar a la página principal
  await page.goto("/");

  // Buscar ibuprofeno
  await homePage.searchProduct("ibuprofeno");

  // Verificar que se redirigió a la página de resultados
  await page.waitForURL("**/ibuprofeno?_q=ibuprofeno&map=ft**");

  // Agregar el primer producto al carrito
  await homePage.addFirstProductToCart();

  // Esperar más tiempo para que el modal aparezca y se completen las animaciones
  await page.waitForTimeout(3000);

  // Verificar que aparece el modal/dialog con el mensaje "Estás agregando al carrito"
  // Usar waitFor en lugar de expect para dar más tiempo
  const cartMessage = page.getByRole("heading", {
    name: /estás agregando al carrito/i,
  });
  await cartMessage.waitFor({ state: "visible", timeout: 10000 });

  // Verificar que el producto agregado está visible en el modal
  await expect(page.getByText(/ibuprofeno|ibupirac/i).first()).toBeVisible();
});
