# 🎉 Play-Party

¡Bienvenido a **Play-Party**! Este es un proyecto de automatización de pruebas end-to-end utilizando [Playwright](https://playwright.dev/), diseñado para probar aplicaciones web de manera eficiente y confiable.

## 📋 Descripción

Play-Party es una suite de pruebas automatizadas que cubre funcionalidades clave como la búsqueda de productos, la regionalización y la gestión del carrito de compras. Ideal para asegurar la calidad de aplicaciones e-commerce y similares.

## 🚀 Características

- ✅ Pruebas end-to-end con Playwright
- 🔄 Soporte para múltiples navegadores (Chromium, Firefox, WebKit)
- 📱 Pruebas responsivas y de accesibilidad
- 🛠️ Fixtures y páginas reutilizables
- 📊 Reportes detallados de ejecución

## 🛠️ Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/GonzaloFarma/play-party.git
   cd play-party
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Instala los navegadores de Playwright:
   ```bash
   npx playwright install
   ```

## 🏃‍♂️ Uso

### Ejecutar todas las pruebas

```bash
npx playwright test
```

### Ejecutar pruebas en un navegador específico

```bash
npx playwright test --project=chromium
```

### Ejecutar una prueba específica

```bash
npx playwright test tests/specs/agrega-al-carrito.spec.ts
```

### Ver reportes

Después de ejecutar las pruebas, abre el reporte:

```bash
npx playwright show-report
```

## 📁 Estructura del Proyecto

```
play-party/
├── tests/
│   ├── fixtures/
│   │   └── base.fixture.ts          # Configuraciones base para pruebas
│   ├── pages/
│   │   ├── home.page.ts             # Página de inicio
│   │   ├── regionalization.page.ts  # Página de regionalización
│   │   └── example.page.ts          # Ejemplo de página
│   └── specs/
│       ├── agrega-al-carrito.spec.ts        # Pruebas de carrito
│       ├── agrega-sin-regionalizacion.spec.ts # Pruebas sin regionalización
│       ├── busqueda-productos.spec.ts       # Pruebas de búsqueda
│       └── example.spec.ts                  # Ejemplo de pruebas
├── playwright.config.ts             # Configuración de Playwright
├── package.json                     # Dependencias y scripts
└── tsconfig.json                    # Configuración de TypeScript
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un bug o quieres agregar una nueva funcionalidad:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Contacto

Si tienes preguntas o sugerencias, abre un issue en este repositorio o contacta al maintainer.

¡Feliz testing! 🎭</content>
<parameter name="filePath">c:\Users\go_estevez\OneDrive - Farmacity Ar\Escritorio\play-for-all\play-party\README.md
