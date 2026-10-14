# 🛒 Compra y Pago - Aplicación Móvil en Ionic

Aplicación móvil híbrida desarrollada con **Ionic Framework**, **Angular** y **Capacitor**, que permite registrar la compra de un producto mediante validaciones estrictas y calcular el pago con descuentos, entregando el cambio o indicando el saldo pendiente al instante.

---

## 📱 Características Principales

1. **Navegación por Pestañas (Tabs) con Íconos Personalizados**:
   - 🏠 **Inicio (`storefront-outline`)**: Pantalla de bienvenida con fotografía/ilustración representativa, descripción del sistema y acceso directo al flujo de compra.
   - 🛒 **Compra (`cart-outline`)**: Formulario reactivo que captura el nombre del producto, cantidad y precio unitario con validaciones en tiempo real. Al enviar el formulario válido, navega automáticamente a la pestaña de Pago.
   - 💳 **Pago (`wallet-outline`)**: Muestra el resumen del producto y subtotal recibido. Permite aplicar un porcentaje de descuento y registrar el dinero entregado por el cliente, calculando automáticamente el total final y determinando si hay cambio a favor o saldo pendiente.

2. **Identidad Visual Neta y Personalizada**:
   - Ícono de aplicación único (bolsa/carrito de compras estilizado en azul Ionic `#3880ff` con tarjeta de crédito y moneda).
   - Splash Screen nativo generado con `@capacitor/assets` con animación suave y fondo coordinado.

3. **Cálculos y Lógica Financiera**:
   $$\text{Subtotal} = \text{Cantidad} \times \text{Precio Unitario}$$
   $$\text{Monto Descuento} = \text{Subtotal} \times \left(\frac{\text{Descuento \%}}{100}\right)$$
   $$\text{Total Final} = \text{Subtotal} - \text{Monto Descuento}$$
   $$\text{Diferencia} = \text{Dinero Recibido} - \text{Total Final}$$
   - Si $\text{Diferencia} \ge 0 \rightarrow$ **Cambio a entregar**: Fondo verde (`success`).
   - Si $\text{Diferencia} < 0 \rightarrow$ **Saldo pendiente**: Fondo rojo (`danger`).

---

## 🔒 Validaciones Implementadas

| Campo | Tipo | Regla de Validación | Mensaje de Error |
| :--- | :--- | :--- | :--- |
| **Nombre del Producto** | Texto | Obligatorio, mínimo 2 caracteres | *"El nombre del producto es obligatorio (mínimo 2 letras)."* |
| **Cantidad** | Número | Obligatorio, entero estricto $> 0$ | *"La cantidad debe ser un número entero mayor a 0."* |
| **Precio Unitario** | Decimal | Obligatorio, estrictamente $> 0$ | *"El precio unitario debe ser mayor a 0."* |
| **Descuento (%)** | Porcentaje | Comprendido entre $0$ y $100$ | *"El descuento debe estar entre 0% y 100%."* |
| **Dinero Recibido** | Decimal | Mayor o igual a $0$ | *"El dinero recibido no puede ser negativo."* |

---

## 📸 Evidencias Visuales

### 1. Ícono Personalizado de la Aplicación
Generado en alta resolución y adaptado a todas las densidades de pantalla Android (`mipmap-mdpi`, `hdpi`, `xhdpi`, `xxhdpi`, `xxxhdpi`):

<p align="center">
  <img src="docs/screenshots/app-icon.png" width="200" alt="Ícono de la Aplicación" />
</p>

### 2. Splash Screen Nativo
Pantalla de bienvenida que se muestra al iniciar la aplicación en el dispositivo físico o emulador:

<p align="center">
  <img src="docs/screenshots/splash-screen.png" width="280" alt="Splash Screen de la Aplicación" />
</p>

### 3. Pantalla de Inicio (Pestaña Inicio)
Ilustración temática de bienvenida y presentación del sistema:

<p align="center">
  <img src="docs/screenshots/welcome-banner.svg" width="400" alt="Banner de Inicio" />
</p>

---

## 🚀 Instalación y Ejecución

### Prerrequisitos
- **Node.js** (v18 o superior)
- **NPM** (v9 o superior)
- **Ionic CLI** (`npm install -g @ionic/cli`)
- **Android Studio** (opcional, para compilar y ejecutar en emulador o dispositivo físico)

### Pasos de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd app-compra-pago
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en el navegador (Modo Desarrollo)**:
   ```bash
   npm start
   # o bien:
   ionic serve
   ```
   La aplicación abrirá automáticamente en `http://localhost:8100/tabs/tab1`.

4. **Compilar y Sincronizar con Android**:
   ```bash
   # Compilar el proyecto web
   npm run build

   # Sincronizar los cambios con la plataforma nativa
   npx cap sync android

   # Abrir el proyecto en Android Studio
   npx cap open android
   ```

5. **Generar / Actualizar Assets con `@capacitor/assets`**:
   Los recursos fuente se encuentran en la carpeta `resources/` (`icon.png` y `splash.png`). Para regenerar los assets nativos:
   ```bash
   npx @capacitor/assets generate --android
   ```

---

## 🧪 Pruebas Unitarias

La aplicación cuenta con pruebas unitarias para el servicio de compras y todos los componentes:
```bash
npm test
```
Resultados de las pruebas:
- `purchase.service.spec.ts`: 3 pruebas (inicialización, cálculo de subtotal y reseteo).
- `tab1.page.spec.ts`, `tab2.page.spec.ts`, `tab3.page.spec.ts`: Creación y montaje de componentes.
- **100% pruebas aprobadas (7 suites, 9 tests).**

---

## 📂 Estructura del Proyecto

```text
app-compra-pago/
├── android/                        # Proyecto nativo Android generado con Capacitor
│   └── app/src/main/res/           # Mipmaps y Drawables personalizados (iconos y splash)
├── resources/                      # Assets fuente de alta resolución
│   ├── icon.png                    # Icono maestro (1024x1024)
│   └── splash.png                  # Splash screen maestro (2732x2732)
├── docs/                           # Documentación y evidencias
│   └── screenshots/                # Capturas de pantalla e imágenes para entrega
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   ├── purchase.service.ts      # Servicio de estado reactivo global
│   │   │   └── purchase.service.spec.ts # Pruebas unitarias
│   │   ├── tab1/                   # Pestaña INICIO (Bienvenida y Banner)
│   │   ├── tab2/                   # Pestaña COMPRA (Formulario reactivo y validaciones)
│   │   ├── tab3/                   # Pestaña PAGO (Resumen, descuentos, cambio/saldo)
│   │   └── tabs/                   # Layout de pestañas con íconos personalizados
│   └── assets/img/
│       └── welcome-banner.svg      # Imagen ilustrativa de la pestaña de inicio
├── capacitor.config.ts             # Configuración de Capacitor y Splash Screen
└── package.json                    # Dependencias y scripts
```

---

## 🎥 Guía para Grabación del Video / Capturas de Entrega

Para la verificación académica requerida en la entrega:
1. **Verificación de Splash Screen e Ícono**:
   - Iniciar la app en un emulador Android desde Android Studio o dispositivo físico.
   - Grabar los primeros 3 segundos para mostrar el **Splash Screen** con el logo y fondo azul.
   - Minimizar la aplicación y volver a la pantalla de inicio del teléfono/emulador para mostrar el **Ícono personalizado** instalado en el cajón de aplicaciones.
2. **Flujo de Compra**:
   - Registrar un producto (ej. "Teclado Mecánico", Cantidad: 2, Precio Unitario: 45.00).
   - Probar una validación errónea (ej. cantidad negativa o vacía) para evidenciar los mensajes de error.
   - Pulsar "Continuar al Pago" para verificar la transición automática a la pestaña Pago.
3. **Flujo de Pago**:
   - Observar el subtotal transferido ($90.00).
   - Aplicar descuento (ej. 10%) $\rightarrow$ Total: $81.00.
   - Caso A (Saldo Pendiente): Ingresar Dinero Recibido: $50.00 $\rightarrow$ Muestra badge rojo: *Saldo Pendiente: $31.00*.
   - Caso B (Cambio a Favor): Ingresar Dinero Recibido: $100.00 $\rightarrow$ Muestra badge verde: *Cambio: $19.00*.
   - Pulsar "Nueva Compra" y verificar que los datos se limpian y regresa a la pestaña Compra.
