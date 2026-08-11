# Plan de desarrollo — next-shopping

Enfoque de trabajo: **rebanadas verticales** (vertical slices). Cada historia de usuario se desarrolla de punta a punta (backend + frontend) antes de pasar a la siguiente, en vez de construir todo el backend y luego todo el frontend por separado.

---

## Fase 0 — Configuración base (antes de cualquier historia)

Tareas de scaffolding, no de una historia específica:

- [ ] Configurar Tailwind con la paleta de colores y tipografía definida en `05-ui-ux.md`
- [ ] Crear layout general vacío: header y navbar (componentes, sin datos reales todavía)
- [ ] Configurar middlewares base en Express: `verificarJWT`, `verificarAdmin`
- [ ] Configurar CORS con credenciales entre frontend y backend
- [ ] Configurar conexión a Cloudinary
- [ ] Configurar Resend para envío de correos

---

## Fase 1 — Cimientos (autenticación + productos base)

Sin esto, ninguna otra historia se puede probar de verdad.

### HU-01 — Registro de cuenta
- Backend: `POST /api/auth/registro` — validación, hash bcrypt, generación de JWT, cookie httpOnly
- Backend: envío de correo de confirmación (RF-24)
- Frontend: página de registro, formulario, conexión al endpoint

### HU-15 — Verificación de rol / Login
- Backend: `POST /api/auth/login` — validación de credenciales, control de intentos fallidos (RNF-05)
- Backend: middleware `verificarJWT` aplicado a rutas protegidas
- Frontend: página de login, manejo de sesión en `AuthContext`

### HU-16 — Agregar producto (admin)
- Backend: `POST /api/admin/productos` — validación de campos obligatorios, integración con Cloudinary
- Backend: middleware `verificarAdmin`
- Frontend: formulario admin (wireframe ya definido), panel admin con sidebar

---

## Fase 2 — Catálogo público

### HU-06 — Buscar productos
- Backend: `GET /api/productos` — búsqueda por nombre/marca/descripción, paginado por lotes de 20 (RNF-02)
- Frontend: buscador en header, botón "Cargar más"

### HU-07 — Ver detalle de producto
- Backend: `GET /api/productos/:id`
- Frontend: página de detalle (móvil + desktop, según wireframes)

### HU-19 — Productos similares
- Backend: incluir productos de la misma categoría en la respuesta del detalle (máx. 10)
- Frontend: sección de productos similares en el detalle

---

## Fase 3 — Interacción del cliente con productos

### HU-08 — Marcar como favorito
- Backend: `POST /api/favoritos`, `DELETE /api/favoritos/:id`
- Frontend: botón de favorito en catálogo y detalle

### HU-09 — Agregar al carrito
- Backend: `POST /api/carrito` — validación de stock disponible
- Frontend: botón "Agregar al carrito", confirmación visual

### HU-10 — Gestionar carrito
- Backend: `GET /api/carrito`, `PATCH /api/carrito/:id`, `DELETE /api/carrito/:id`
- Frontend: página de carrito (móvil + desktop)

---

## Fase 4 — Compra completa

### HU-04 — Direcciones de envío
- Backend: `POST/GET/PATCH/DELETE /api/direcciones`
- Frontend: gestión de direcciones (dentro de perfil y en checkout)

### HU-11 — Checkout y pago
- Backend: `POST /api/pedidos` — validación y descuento de stock (RF-15), simulación de pago, envío de correo de confirmación (RF-25)
- Frontend: página de checkout (móvil + desktop), manejo de error de pago

### HU-12 — Historial de pedidos
- Backend: `GET /api/pedidos`
- Frontend: lista + detalle de pedidos (patrón maestro-detalle en desktop)

---

## Fase 5 — Personalización y perfil

### HU-13 — Feed personalizado
- Backend: `GET /api/feed` — cálculo de peso por categoría desde `search_history`, fallback a destacados (RF-16, RF-17)
- Frontend: sección "Para ti" en el home, estado con/sin sesión

### HU-14 — Favoritos en el home
- Backend: incluir favoritos recientes en la respuesta del feed
- Frontend: carrusel de favoritos en el home

### HU-02, HU-03, HU-05 — Gestión de perfil
- Backend: actualizar contraseña, recuperación por correo, cambiar nombre de usuario
- Frontend: sección de perfil

---

## Fase 6 — Panel admin completo

### HU-17 — Aplicar ofertas
- Backend: `POST /api/admin/ofertas` — con fechas de vigencia, desactivación automática (RF-22)
- Frontend: tabla de ofertas + formulario (wireframe ya definido)

### HU-18 — Gestión de pedidos (admin)
- Backend: `PATCH /api/admin/pedidos/:id` — validación de secuencia de estados
- Frontend: tabla de pedidos con acción de estado siguiente válido

---

## Convención de ramas por historia
# Fase 0 — Configuración base
feature/fase-0-configuracion-base

# Fase 1 — Cimientos
feature/hu-01-registro
feature/hu-15-login-verificacion-rol
feature/hu-16-admin-agregar-producto

# Fase 2 — Catálogo público
feature/hu-06-buscar-productos
feature/hu-07-detalle-producto
feature/hu-19-productos-similares

# Fase 3 — Interacción del cliente
feature/hu-08-favoritos
feature/hu-09-agregar-carrito
feature/hu-10-gestionar-carrito

# Fase 4 — Compra completa
feature/hu-04-direcciones
feature/hu-11-checkout
feature/hu-12-historial-pedidos

# Fase 5 — Personalización y perfil
feature/hu-13-feed-personalizado
feature/hu-14-favoritos-home
feature/hu-02-actualizar-password
feature/hu-03-recuperar-password
feature/hu-05-cambiar-username

# Fase 6 — Panel admin completo
feature/hu-17-admin-ofertas
feature/hu-18-admin-gestion-pedidos


Cada historia se desarrolla en su propia rama, se prueba de punta a punta (backend + frontend con datos reales), y se fusiona a `main` solo cuando funciona completamente — nunca a medias.