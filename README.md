# AI PlayGrounds — Landing Page

Landing page principal de **AI PlayGrounds**, construida con Next.js 16, Payload CMS 3 y MongoDB Atlas. La página es completamente bilingüe (ES/EN) y el contenido es editable desde un panel de administración integrado.

---

## Tecnologías

| Capa | Tecnología |
|------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| CMS | [Payload CMS 3](https://payloadcms.com) (montado dentro de Next.js) |
| Base de datos | [MongoDB Atlas](https://www.mongodb.com/atlas) (vía Mongoose Adapter) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) + CSS Variables |
| Componentes UI | [shadcn/ui](https://ui.shadcn.com) |
| Rich Text | Payload Lexical Editor |
| i18n | Middleware propio (`proxy.ts`) — rutas `/es` y `/en` |
| Animaciones | [Framer Motion](https://www.framer.com/motion) |
| Package manager | [pnpm](https://pnpm.io) |
| Lenguaje | TypeScript |

---

## Estructura del proyecto

```
ai-playgrounds-landing/
│
├── app/                         # Next.js App Router
│   ├── (payload)/               # Rutas de Payload CMS (admin panel)
│   │   └── admin/[[...segments]]/
│   ├── [locale]/                # Rutas i18n (es / en)
│   │   ├── layout.tsx           # Layout con header y footer
│   │   └── page.tsx             # Landing page principal
│   ├── globals.css              # Variables CSS globales
│   └── layout.tsx               # Root layout
│
├── cms/                         # Configuración de Payload CMS
│   ├── collections/
│   │   └── Users.ts             # Colección de usuarios admin
│   ├── globals/                 # Globals de cada sección
│   │   ├── Hero.ts
│   │   ├── Problem.ts
│   │   ├── Program.ts
│   │   ├── Trajectory.ts
│   │   ├── Coming2026.ts
│   │   ├── Faq.ts
│   │   ├── Waitlist.ts
│   │   ├── Footer.ts
│   │   └── Site.ts              # Metadata SEO y navegación
│   ├── hooks/
│   │   └── revalidate-landing.ts  # afterChange hook (revalida /es y /en)
│   └── seed/
│       └── seed.ts              # Script de migración de datos JSON → Payload
│
├── features/landing/            # Feature-sliced design
│   └── components/
│       ├── hero/                # Sección Hero con marquee de logos
│       ├── problem/             # Sección Problema (scroll stack)
│       ├── program/             # Sección Programa (pilares + hitos)
│       ├── trajectory/          # Sección Trayectoria (estadísticas + timeline)
│       ├── coming-2026/         # Sección Próximamente
│       ├── faq/                 # FAQ (accordion — server + client)
│       ├── waitlist/            # Formulario de lista de espera
│       ├── site-header/         # Header sticky con ThemeToggle
│       ├── site-footer/         # Footer con columnas de navegación
│       └── shared/              # ScrollReveal, SectionKicker, LexicalContent...
│
├── public/
│   ├── i18n/
│   │   ├── config.ts            # Definición de locales (es, en)
│   │   ├── load.ts              # Data layer — Payload Local API
│   │   └── paths.ts             # Helpers de rutas con locale
│   └── locales/
│       ├── es/                  # JSON originales en español
│       └── en/                  # JSON originales en inglés
│
├── payload.config.ts            # Configuración de Payload CMS
├── proxy.ts                     # Middleware de i18n (Next.js middleware)
└── next.config.ts               # Configuración de Next.js
```

---

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# MongoDB Atlas — connection string de tu cluster
DATABASE_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

# Payload CMS — clave secreta de mínimo 32 caracteres
PAYLOAD_SECRET=tu_clave_secreta_de_al_menos_32_caracteres_aqui

# URL base del sitio (sin trailing slash)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

> **⚠️ Importante:** Nunca commitees `.env.local`. Está incluido en `.gitignore`.

---

## Inicio rápido

### 1. Instalar dependencias

```bash
pnpm install
```

### 2. Configurar variables de entorno

Crea `.env.local` con las variables indicadas arriba.


### 3. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000/es](http://localhost:3000/es) para ver la landing en español.

---

## Panel de administración (CMS)

El panel de Payload CMS está disponible en:

```
http://localhost:3000/admin
```

Desde ahí puedes editar el contenido de todas las secciones de la landing en ambos idiomas. Al guardar cualquier cambio, el hook `afterChange` revalida automáticamente las páginas `/es` y `/en`.

### Globals disponibles

| Global | Sección |
|--------|---------|
| `site` | Metadata SEO y navegación |
| `hero` | Sección Hero (titular, CTA, logos) |
| `problem` | Sección El Problema |
| `program` | Sección El Programa |
| `trajectory` | Sección Trayectoria |
| `coming2026` | Sección Próximamente |
| `faq` | Preguntas Frecuentes |
| `waitlist` | Lista de Espera |
| `footer` | Pie de página |

---

## Scripts disponibles

```bash
pnpm dev        # Inicia el servidor de desarrollo con Turbopack
pnpm build      # Compila el proyecto para producción
pnpm start      # Inicia el servidor de producción
pnpm lint       # Ejecuta el linter
pnpm seed       # Migra datos JSON → Payload CMS (re-seedeable)
```

---

## Internacionalización (i18n)

El proyecto soporta dos idiomas:

| Ruta | Idioma |
|------|--------|
| `/es` | Español (default) |
| `/en` | English |

El middleware en `proxy.ts` redirige automáticamente `/` → `/es` y preserva las rutas de Payload (`/admin`, `/api/payload`) sin prefijo de locale.

El contenido bilingüe se gestiona desde el admin de Payload. Cada campo marcado como `localized: true` tiene versión en ES y EN.

---

## Arquitectura de datos

```
Browser (solicita /es)
    ↓
Next.js Server Component
    ↓
getSectionContent('es', 'hero')   [public/i18n/load.ts]
    ↓
Payload Local API — findGlobal({ slug: 'hero', locale: 'es' })
    ↓
MongoDB Atlas — globals collection
    ↓
Responde con campos resueltos en español
```

Los Server Components son `async` y hacen fetch directo desde la base de datos sin pasar por HTTP. Cuando se edita contenido en el admin, el hook `revalidateLanding` invalida el caché de Next.js para `/es` y `/en`.

---

## Despliegue en Vercel

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Agrega las variables de entorno en **Project Settings → Environment Variables**:
   - `DATABASE_URI`
   - `PAYLOAD_SECRET`
   - `NEXT_PUBLIC_SERVER_URL` (tu dominio de producción)
3. Despliega — Vercel detecta automáticamente Next.js

> El seed **no se ejecuta automáticamente** en el deploy. Ejecútalo localmente apuntando a la DB de producción, o crea un endpoint seguro de seed si lo necesitas.
