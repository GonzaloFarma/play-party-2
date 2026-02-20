import { Locator, Page, expect } from "@playwright/test";

export class RegionalizationPage {
  private page: Page;
  cartMessageHeading: Locator;
  pickupButton: Locator;
  homeDeliveryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Mensaje "Estás agregando al carrito" que aparece en el modal
    this.cartMessageHeading = page.getByRole("heading", {
      name: /estás agregando al carrito/i,
    });
    this.pickupButton = page.getByRole("button", {
      name: /puntos de retiro/i,
    });
    this.homeDeliveryButton = page.getByRole("button", {
      name: /envío a domicilio/i,
    });
  }

  async verifyCartAddingMessage(): Promise<void> {
    // Verificar que el mensaje "Estás agregando al carrito" sea visible
    await expect(this.cartMessageHeading).toBeVisible();
  }

  async selectPickupMethod(): Promise<void> {
    // Seleccionar método de entrega: Puntos de retiro
    await this.pickupButton.waitFor({ state: "visible" });
    await this.pickupButton.click();
  }

  async selectHomeDeliveryMethod(): Promise<void> {
    // Seleccionar método de entrega: Envío a domicilio
    await this.homeDeliveryButton.waitFor({ state: "visible" });
    await this.homeDeliveryButton.click();
  }

  async isRegionalizationModalOpen(): Promise<boolean> {
    // Verificar si el modal de regionalización está abierto
    return await this.cartMessageHeading.isVisible();
  }
}
