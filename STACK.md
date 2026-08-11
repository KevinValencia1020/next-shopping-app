# STACK.md — Guía de aprendizaje por tecnología (Next Shopping)

Complemento de `CLAUDE.md`. Mientras ese archivo cubre fundamentos de JavaScript/TypeScript/React/Next.js, este cubre las herramientas específicas del stack: qué problema resuelve cada una y qué debo entender de su funcionamiento, no solo su sintaxis.

---

## TanStack Query

### Qué problema resuelve

Sin TanStack Query, manejar datos del servidor en React implica reinventar manualmente: estados de loading/error, cacheo, revalidación, evitar peticiones duplicadas, sincronización tras una mutación. TanStack Query resuelve todo esto con una capa dedicada a "estado del servidor", separada del estado local de React (`useState`).

### Conceptos que debo entender antes de usarlos como receta

- **Query** — una petición de lectura (`GET`), identificada por una `queryKey` única
- **Mutation** — una petición de escritura (`POST`/`PATCH`/`DELETE`)
- **Cache** — por qué TanStack Query no vuelve a pedir datos que ya tiene "frescos"
- **staleTime vs cacheTime** — la diferencia entre "datos considerados actuales" y "datos que se mantienen en memoria aunque no se usen"
- **Invalidación** — por qué después de una mutación (ej: agregar al carrito) necesito invalidar la query del carrito para que se refresque
- **queryKey como dependencia** — cómo cambiar el `queryKey` (ej: incluir el término de búsqueda) hace que TanStack Query trate la petición como distinta

### Dónde lo voy a aplicar en Next Shopping

- Catálogo de productos con scroll infinito por lotes (`useInfiniteQuery`)
- Carrito de compras (query + mutations con invalidación automática)
- Feed personalizado / favoritos

### Antes de usar un hook

Antes de escribir `useQuery` o `useMutation` en una pantalla nueva, quiero entender: ¿qué se está sincronizando con el servidor? ¿Qué pasa en la UI mientras carga? ¿Qué pasa si falla?

---

## Prisma

Ver también `CLAUDE.md` sección 4 y la nueva sección 22 (seguridad en migraciones).

### Qué debo entender, más allá de la sintaxis

- Diferencia entre `schema.prisma` (estructura declarada) y las migraciones (historial real aplicado a la base de datos)
- Por qué Prisma genera SQL en vez de que yo lo escriba a mano
- Qué es el "Prisma Client" generado y cómo se relaciona con los modelos del schema

---

## Autenticación con JWT + cookies httpOnly

### Qué problema resuelve

Sin esto, cada petición al backend no sabría "quién" la está haciendo. JWT permite verificar identidad sin que el servidor tenga que guardar sesiones en memoria.

### Conceptos que debo entender

- Qué contiene un JWT (header, payload, signature) y por qué no debe llevar información sensible en el payload (es legible, no está encriptado, solo firmado)
- Por qué `httpOnly` protege contra XSS (JavaScript del navegador no puede leer la cookie)
- Qué es CORS con credenciales, y por qué frontend y backend en dominios distintos lo necesitan
- Diferencia entre autenticación (quién eres) y autorización (qué puedes hacer — ej: middleware `verificarAdmin`)

---

## Cloudinary

### Qué problema resuelve

Guardar imágenes directamente en mi base de datos o servidor sería ineficiente y caro. Cloudinary almacena las imágenes y las sirve optimizadas, dándome solo una URL para guardar en PostgreSQL.

### Conceptos que debo entender

- Por qué el upload se hace desde el backend, no desde el frontend directo (control de qué se sube y a qué cuenta)
- Qué es una "transformación" de Cloudinary (redimensionar, comprimir) y cómo afecta el límite del plan gratuito

---

## Resend (correos transaccionales)

### Qué problema resuelve

Enviar correos desde mi propio servidor (SMTP manual) es propenso a que terminen en spam y requiere configuración compleja (SPF, DKIM). Resend simplifica esto con una API.

### Conceptos que debo entender

- Qué es una plantilla de correo y cómo se le pasan datos dinámicos (ej: nombre del cliente, número de pedido)
- Diferencia entre correo transaccional (confirmación de pedido) y correo de marketing (no aplica en mi proyecto)

---

## bcrypt

### Qué problema resuelve

Nunca se guardan contraseñas en texto plano. bcrypt las convierte en un "hash" irreversible.

### Conceptos que debo entender

- Por qué un hash no se puede "desencriptar" (no es cifrado, es una función de un solo sentido)
- Qué es el "salt" y por qué hace que el mismo password genere hashes distintos cada vez
- Por qué comparar contraseñas se hace con `bcrypt.compare()`, nunca comparando hashes directamente con `===`