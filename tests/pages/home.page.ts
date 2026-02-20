import { Locator, Page } from "@playwright/test";

export class HomePage {
  private page: Page;
  private searchInput: Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder(
      "Buscá por producto, marca o categoría...",
    );
    this.addToCartButton = page.getByRole("button", {
      name: /agregar al carrito/i,
    });
  }

  async searchProduct(query: string): Promise<void> {
    // Esperar hidratación del input (attached → visible)
    await this.searchInput.waitFor({ state: "attached" });
    await this.searchInput.waitFor({ state: "visible" });

    // Usar pressSequentially para inputs controlados por React
    await this.searchInput.pressSequentially(query);

    // Presionar Enter para enviar la búsqueda
    await this.searchInput.press("Enter");
  }

  async addFirstProductToCart(): Promise<void> {
    // Esperar que los productos se carguen después de la búsqueda
    await this.addToCartButton.first().waitFor({ state: "visible" });
    await this.addToCartButton.first().click();
  }
}
