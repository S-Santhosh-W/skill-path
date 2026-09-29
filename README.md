# SKILL PATH

A responsive React career workspace modeled on the supplied navy/violet reference. Includes landing, authentication, goal onboarding, dashboard, Skill Passport, Career Universe/details, gap analysis, learning roadmap, companies/list/map, simulated IVR, call history, progress, profile and settings.

## Run locally

Requires Node 22.13+ and npm. Run `npm ci`, `npm run db:generate` only after schema changes, and `npm run build`. Apply the included schema to local D1:

```
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_jazzy_matthew_murdock.sql
```

Apply later migrations in filename order once each. Run `npm run dev`. The local sign-in route issues a loopback-only mock identity; the hosted app uses platform sign-in. Open `/auth`, then Continue securely.

## Architecture

- `src/components`: workspace shell and reusable components
- `src/features`: voice and companies workflows
- `src/visualizations`: interactive SVG/React skill network
- `src/i18n`: English-keyed Tamil translation dictionary
- `src/services`: shared catalog, transparent scoring, typed skill records, API transport
- `server/ai`: replaceable provider and response contracts
- `server/middleware`: identity and same-origin mutation checks
- `app/api`: user-scoped persistence, five AI endpoints, maps configuration
- `db/schema.ts`: 18 separate normalized entity tables
- `drizzle`: schema migrations, applied before hosted worker release

## Working interactions

Skills and evidence are editable and persist in D1. Manual edits become self-reported. Matches recalculate from skill requirements with equal weighting. Roadmap milestones persist; completing a module adds a learning-derived skill only when the user does not already have that skill. Assessment scores are computed on the server. Phone keypad accepts clicks and keyboard 1/2; timers reflect wall time. Microphone visualization is opt-in and stays local. Call summaries are stored separately from suggestions. Only checked and explicitly confirmed suggestions update the profile; existing skill levels are preserved. History and data export include saved records. Company filters cover career, skill, location, distance, experience and type. Location is requested only on the Near Me action and is not persisted.

## Honest integration status

- **AI / IVR**: simulated, scripted responses. No telephone call, speech recognition, recording upload, or real model evaluation. Browser speech synthesis depends on installed voices; microphone access is optional.
- **AI integration**: `AI_MODE=remote` and HTTPS `AI_BASE_URL` call `/api/ai/chat`, `/career`, `/skill-gap`, `/analyze-call`, `/voice`. Optional server-only `AI_API_KEY` adds bearer auth. Seven-second failures fall back to mock. All call-derived data remains pending until confirmed. Remote analysis is validated before saving.
- **Google OAuth**: not connected; see `server/auth-integration.md`. Secure platform sign-in works. Do not advertise this edition as Google-enabled.
- **Maps**: schematic fallback is deliberately labeled non-geographic. Set `GOOGLE_MAPS_EMBED_KEY` to enable actual map display. This is a browser-public key and MUST be restricted by HTTP referrer and Maps Embed API. Never use an unrestricted or privileged server key. Company records and vacancies are fictional demo examples.
- **Data**: initial passports contain explicitly marked demo skills/evidence. No real person's details are embedded. Profile identity comes from authenticated account claims. Requirements and landing statistics are illustrative, not verified labor-market facts.
- **Translation**: English/Tamil interface dictionary with English fallback for untranslated explanatory copy and catalog names. Native Tamil review is still recommended.
- **Google OAuth, a live job feed, remote model interoperability, native Tamil content review, and independent security/accessibility/load audits remain launch prerequisites.** This is a functional demo foundation, not a claim of audited production readiness.

## Privacy and deployment

Keep `.env` untracked. `.env.example` contains names only. Set runtime values through the hosting service; never put server credentials in `NEXT_PUBLIC` variables. The hosted app remains owner-private. Requests require platform identity, and all private SQL uses prepared statements and the authenticated owner key. The exported worker must sit behind the trusted Sites dispatcher; do not expose it directly while trusting forwarded identity headers.

## Visual asset

`public/hero.png` was generated with the built-in image generation tool. Prompt: Premium photoreal concept art of a navy cosmic mountain landscape and distant futuristic city at dusk. A small lone backpacked adult viewed from behind stands on a rocky outlook in the right third. Immense delicate electric blue and violet orbital light arcs sweep above the city. Tiny warm orange windows. Deep black navy left half with atmospheric negative space for a future HTML headline. Wide cinematic composition, textured mountains, atmospheric depth. No text, logos, watermark, or UI.
