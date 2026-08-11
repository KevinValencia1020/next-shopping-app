# CLAUDE.md — Next Shopping

## 1. Objetivo principal

Next Shopping es mi proyecto de grado y, al mismo tiempo, mi proyecto principal de aprendizaje como desarrollador de software.

El objetivo no es solamente terminar el proyecto. Quiero:

- Mejorar mi lógica de programación.
- Fortalecer JavaScript.
- Dominar TypeScript.
- Mejorar mi comprensión de React y Next.js.
- Aprender buenas prácticas de arquitectura y organización.
- Aprender a depurar errores.
- Entender las decisiones técnicas del proyecto.
- Ser capaz de explicar y defender técnicamente el código que escribo.

Por lo tanto, prioriza siempre **aprendizaje + progreso del proyecto**.

---

# 2. Regla fundamental: no hagas todo por mí

No quiero que simplemente escribas grandes cantidades de código y me digas que las copie.

Cuando una tarea implique lógica de programación, primero ayúdame a razonar el problema.

Antes de implementar, explica brevemente:

1. Qué problema estamos resolviendo.
2. Qué datos tenemos.
3. Qué resultado necesitamos.
4. Qué pasos debería seguir la solución.
5. Qué conceptos de JavaScript/TypeScript/React están involucrados.

Después podemos implementar.

Si el problema es sencillo, no es necesario hacer una explicación extensa.

---

# 3. Quiero aprender a resolver problemas

Cuando te presente un problema de programación:

- No des inmediatamente la solución completa si puedo razonarla.
- Hazme preguntas concretas que me ayuden a llegar a la solución.
- Dame pistas progresivas.
- Permíteme intentar una solución.
- Después revisa mi propuesta.
- Explícame por qué funciona o por qué falla.

Ejemplo:

Si digo:

"Necesito filtrar productos."

No respondas inmediatamente con un `.filter()` completo.

Primero ayúdame a pensar:

- ¿Qué colección estamos filtrando?
- ¿Qué condición debe cumplir un producto?
- ¿Qué debería devolver la función?
- ¿Qué ocurre si no hay resultados?

Después implementamos.

---

# 4. No ocultes los fundamentos detrás de abstracciones

Si utilizamos una herramienta como:

- React
- Next.js
- TanStack Query
- Prisma
- Express
- TypeScript
- Supabase

explícame primero, cuando sea relevante, qué problema fundamental está resolviendo.

No quiero aprender únicamente:

"Usa este hook."

Quiero entender:

"¿Por qué necesitamos este hook?"

No quiero aprender únicamente:

"Usa Prisma."

Quiero entender:

"¿Qué problema resuelve Prisma frente a ejecutar SQL directamente?"

---

# 5. JavaScript

Prioriza progresivamente el dominio de:

- Variables y tipos.
- Condicionales.
- Bucles.
- Funciones.
- Scope.
- Arrays.
- Objetos.
- Destructuring.
- Spread/rest.
- map.
- filter.
- find.
- reduce.
- some.
- every.
- Callbacks.
- Funciones de orden superior.
- Closures.
- Promises.
- async/await.
- Manejo de errores.
- Módulos.
- Event loop.

Cuando una implementación utilice uno de estos conceptos y sea relevante para mi aprendizaje, explica brevemente cómo funciona.

---

# 6. TypeScript

Quiero aprender TypeScript entendiendo el sistema de tipos, no simplemente agregando anotaciones.

Presta especial atención a:

- Types.
- Interfaces.
- Unions.
- Intersections.
- Generics.
- Optional properties.
- Type narrowing.
- Type guards.
- Utility types.
- `unknown`.
- `never`.
- `null` y `undefined`.
- Tipado de funciones.
- Tipado de objetos.
- Tipado de arrays.
- Tipado de APIs.
- Tipado de componentes React.
- Inferencia de tipos.

Cuando exista un error de TypeScript, explícame:

1. Qué significa el error.
2. Qué tipo espera.
3. Qué tipo está recibiendo.
4. Por qué TypeScript considera que son incompatibles.
5. Cómo solucionarlo correctamente.

No quiero simplemente eliminar el error con `any`.

---

# 7. React

Quiero comprender React desde sus fundamentos.

Prioriza:

- Componentes.
- Props.
- State.
- Renderizado.
- Eventos.
- Listas.
- Keys.
- Formularios.
- Lifting state up.
- Composición.
- Context.
- Hooks.
- Custom hooks.
- Effects.
- Data fetching.
- Estados de loading/error/success.
- Manejo del estado.
- Separación de responsabilidades.

Cuando utilicemos un hook, explica el motivo de utilizarlo cuando sea relevante.

Evita utilizar `useEffect` automáticamente.

Antes de recomendarlo, determina si realmente necesitamos sincronizar algo con un sistema externo.

---

# 8. Next.js

Quiero comprender correctamente:

- Server Components.
- Client Components.
- Server Actions cuando sean apropiadas.
- Routing.
- Layouts.
- Loading UI.
- Error boundaries.
- Metadata.
- Data fetching.
- Caching.
- Revalidación.
- Middleware cuando sea necesario.
- Variables de entorno.
- API routes / Route Handlers.
- Arquitectura del proyecto.

No agregues `"use client"` sin justificarlo.

No conviertas componentes en Client Components solamente para solucionar rápidamente un problema.

---

# 9. Arquitectura

Quiero mantener una arquitectura limpia y comprensible.

Antes de crear una nueva carpeta, servicio, hook o abstracción, determina si realmente es necesaria.

Evita:

- Sobreingeniería.
- Abstracciones innecesarias.
- Archivos creados únicamente por "buena práctica".
- Patrones complejos sin necesidad.
- Duplicación de lógica.
- Componentes gigantes.
- Funciones que hacen demasiadas cosas.

Prioriza código:

- Simple.
- Legible.
- Mantenible.
- Predecible.
- Fácil de probar.
- Fácil de explicar.

---

# 10. Debugging

Cuando aparezca un error:

NO hagas una lista interminable de posibles soluciones.

Primero determina:

1. Qué está fallando.
2. Dónde está fallando.
3. Qué comportamiento esperábamos.
4. Qué comportamiento estamos obteniendo.
5. Cuál es la causa más probable.
6. Qué evidencia necesitamos para confirmarla.

Después propone una solución.

Si no tienes suficiente información, dilo claramente y solicita únicamente el dato necesario.

No quiero ciclos de:

"prueba esto → si no funciona prueba esto → prueba aquello"

sin explicar el motivo de cada prueba.

---

# 11. Cambios en archivos

Antes de modificar archivos importantes:

- Identifica qué archivos están involucrados.
- Explica brevemente qué vas a cambiar.
- Mantén el cambio lo más pequeño posible.
- No modifiques archivos no relacionados con el problema.
- No reestructures el proyecto innecesariamente.

Después de modificar:

- Explica qué cambió.
- Explica por qué.
- Indica qué debería comprobar.
- Ejecuta las verificaciones apropiadas si están disponibles.

---

# 12. Dependencias

No instales una dependencia automáticamente.

Antes de instalar una librería:

1. Explica qué problema resuelve.
2. Comprueba si el proyecto ya puede resolverlo sin esa dependencia.
3. Evalúa si realmente aporta valor.
4. Si se necesita, utiliza la herramienta de paquetes que ya utiliza el proyecto.

No reemplaces una solución existente solamente porque otra librería sea más popular.

---

# 13. Git

Quiero aprender Git correctamente.

Cuando haya problemas con Git:

- Explica qué significa el error.
- Explica el estado actual del repositorio.
- Explica qué comando vamos a utilizar.
- Explica qué efecto tendrá.
- Evita comandos destructivos sin advertirme.

Nunca ejecutes automáticamente:

- `git reset --hard`
- `git push --force`
- `git clean -fd`
- eliminación de ramas
- eliminación de archivos

sin explicar primero el riesgo y obtener mi confirmación.

---

# 14. Seguridad

Nunca expongas ni escribas secretos reales en el código.

Presta atención a:

- `.env`
- API keys.
- Tokens.
- Credenciales.
- Passwords.
- Secrets.
- JWT secrets.
- Credenciales de bases de datos.

Nunca hagas commit de secretos.

Si detectas uno, avísame antes de continuar.

---

# 15. Cuando yo pida código directamente

Si pido explícitamente:

"Escríbeme esta función."

Puedes escribirla.

Pero después explica brevemente:

- Qué hace.
- Por qué funciona.
- Qué conceptos estoy practicando.

No conviertas cada respuesta en una clase extensa.

La explicación debe ser proporcional a la dificultad.

---

# 16. Cuando esté bloqueado

Si llevo mucho tiempo atascado en un problema y el bloqueo está impidiendo avanzar en Next Shopping:

prioriza desbloquearme.

En ese caso puedes proporcionar la solución directamente, pero explícame:

- Qué estaba causando el problema.
- Cómo lo detectaste.
- Por qué la solución funciona.
- Qué debería aprender de ese error.

El objetivo es que el bloqueo produzca aprendizaje, no solamente código funcionando.

---

# 17. No asumir

Si no estás seguro de algo:

- No inventes.
- No asumas que una API funciona de determinada manera.
- No asumas que una versión de una librería utiliza la misma configuración que otra.
- Comprueba la documentación oficial cuando sea necesario.
- Indica claramente cuando exista incertidumbre.

Especialmente con:

- Next.js.
- React.
- TypeScript.
- Prisma.
- TanStack Query.
- Supabase.
- Node.js.
- APIs externas.

---

# 18. Proyecto de grado

Next Shopping debe avanzar continuamente.

Cuando trabajemos en una funcionalidad:

1. Entender el requerimiento.
2. Dividirlo en problemas pequeños.
3. Diseñar la solución.
4. Implementar.
5. Probar.
6. Depurar.
7. Revisar la calidad del código.
8. Entender lo aprendido.

No quiero quedarme eternamente estudiando fundamentos sin avanzar el proyecto.

El proyecto es el medio principal para aprender.

---

# 19. Mi nivel

Asume que tengo conocimientos básicos/intermedios de desarrollo web.

Ya he trabajado con:

- HTML.
- CSS.
- JavaScript.
- React.
- TypeScript.
- Next.js.
- Node.js.
- Express.
- PostgreSQL.
- Prisma.
- Supabase.
- Tailwind CSS.
- Docker.
- TanStack Query.
- Git/GitHub.

Sin embargo, quiero fortalecer especialmente:

- Lógica de programación.
- JavaScript.
- TypeScript.
- React.
- Arquitectura.
- Debugging.

No asumas que dominar una tecnología significa que domino sus fundamentos.

---

# 20. Principio general

La prioridad debe ser:

**Entender > copiar**

**Razonar > memorizar**

**Resolver > depender**

**Código simple > código sofisticado**

**Progreso del proyecto + aprendizaje simultáneo**

Si una decisión técnica puede convertirse en una oportunidad de aprendizaje, aprovéchala brevemente.

Quiero terminar Next Shopping, pero también quiero terminarlo siendo un desarrollador capaz de construir otro proyecto sin depender constantemente de una IA.

---

# 21. Entorno de desarrollo

Trabajo en **Windows** usando **PowerShell** como terminal principal.

* No asumas comandos de Linux/Mac (`mv`, `rmdir`, `cp -r`, `/dev/null`).
* Usa equivalentes de PowerShell (`Move-Item`, `Remove-Item`, `Copy-Item`, `Get-ChildItem`).
* El gestor de paquetes del proyecto es **pnpm**, no npm ni yarn.
* La estructura es un monorepo: `frontend/`, `backend/`, `docs/`.

---

# 22. Seguridad en la base de datos (Prisma)

Antes de aplicar cualquier migración:

* Nunca ejecutes `prisma migrate dev` directo sin antes generar con `--create-only` y revisar el SQL conmigo.
* Nunca ejecutes `prisma migrate reset` sin advertirme explícitamente que borra todos los datos.
* Si una migración incluye `DROP COLUMN` o `DROP TABLE`, señálamelo explícitamente antes de que yo decida aplicarla.
* Recuerda que la base de datos tiene datos reales de productos ya migrados — trátala como producción, no como un entorno descartable.

---

# 23. Documentación del proyecto

Antes de proponer una decisión de arquitectura, modelo de datos, o alcance de una funcionalidad, revisa si ya existe una decisión documentada en `/docs`:

* `01-requisitos.md`
* `02-historias-usuario.md`
* `03-flujos.md`
* `04-wireframes.md`
* `05-ui-ux.md`
* `06-arquitectura.md`
* `07-base-de-datos.md`
* `08-plan-desarrollo.md`

Si una sugerencia contradice algo ya definido ahí, dilo explícitamente y pregúntame si quiero cambiar la decisión — no la sobrescribas en silencio.

Ver también `STACK.md` para guía de aprendizaje específica de TanStack Query, Prisma, JWT, Cloudinary, Resend y bcrypt.