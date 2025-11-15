🧠 MASTER PROMPT COPILOTNAK – „0-ról kész projektig”

LÉPÉS 1 – Hozz létre egy új fájlt a projektedben pl. COPILOT_PLAN.md, és MÁSOLD BE EZT AZ EGÉSZ BLOKKOT:

# GITHUB COPILOT – FULL PROJECT PLAN FOR "DEDVILL KFT" WEBSITE

You are GitHub Copilot assisting a frontend developer.
The goal is to build a complete company website for **DedVill KFT** from scratch, using **React + TypeScript + Vite**, with **global CSS** and a design that matches the provided logos (DedVill and VBF Sziget).

Follow these instructions step by step and generate all needed code, commands and files.

---

## 1. ENVIRONMENT & INSTALLATION

First, generate a markdown section called `SETUP.md` with clear step-by-step instructions for the user:

- Check if Node.js (>= 18) and npm are installed.
- How to install Node.js if not present (link to nodejs.org).
- How to install VS Code.
- How to install the "GitHub Copilot" extension in VS Code and log in with GitHub.
- Basic explanation: Copilot will help writing code, but commands must be run in a terminal by the user.

The `SETUP.md` should use Hungarian language for explanations.

---

## 2. PROJECT CREATION (VITE + REACT + TYPESCRIPT)

Generate a file called `PROJECT_SETUP.md` that contains:

1. Terminal commands to create the project:

```bash
npm create vite@latest dedvill-site -- --template react-ts
cd dedvill-site
npm install
npm install react-router-dom


Short explanation (in Hungarian) of what each command does.

Note that the main entry will be main.tsx and App.tsx.

3. FILE & FOLDER STRUCTURE

Inside the src folder, Copilot must help create this structure:

src/
	assets/
		dedvill-logo-blue.png        // logo for DedVill (user will provide the file)
		vbf-sziget-logo.png          // logo for VBF Sziget (user will provide the file)
	styles/
		global.css
	components/
		Layout/
			Layout.tsx
			Layout.css
	pages/
		Home/
			Home.tsx
			Home.css
		Rolunk/
			Rolunk.tsx
			Rolunk.css
		Szolgaltatasok/
			Szolgaltatasok.tsx
			Szolgaltatasok.css
		VBF/
			VBF.tsx
			VBF.css
		Kapcsolat/
			Kapcsolat.tsx
			Kapcsolat.css
	App.tsx
	main.tsx


Generate all empty files with basic boilerplate, then fill them according to the instructions below.

4. GLOBAL STYLES (global.css)

Create /src/styles/global.css with:

CSS variables:

:root {
	--color-primary: #0984d8;        /* electric blue */
	--color-primary-dark: #0662a3;   /* darker blue */
	--color-bg: #f5f7fb;
	--color-text: #111827;
	--color-white: #ffffff;
	--color-border: #d0d7e2;
	--radius-card: 18px;
	--radius-pill: 999px;
	--shadow-soft: 0 12px 30px rgba(0, 0, 0, 0.08);
	--transition-fast: 0.2s ease-out;
	--font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}


Base styles:

html, body, #root height: 100%.

body with soft radial gradient background (white to light-blue, inspired by the logos).

Reset margins and use box-sizing: border-box.

Base styles for a, img.

Reusable utility classes:

.container (max-width: 1120px, centered, horizontal padding)

.section (vertical padding)

.section-title (uppercase, tracking, using primary-dark color)

.btn-primary (pill-shaped electric-blue gradient button with hover effect)

.card (rounded corners, white background, soft shadow)

A responsive grid helper: .grid-auto using grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

All comments and class names should be in English, but text content of the site (headlines, paragraphs) must be in Hungarian.

5. ENTRY POINT (main.tsx and App.tsx)

main.tsx

Import BrowserRouter from react-router-dom.

Import App and ./styles/global.css.

Wrap <App /> in <BrowserRouter> and <React.StrictMode>.

App.tsx

Import Routes and Route from react-router-dom.

Import Layout from /components/Layout/Layout.

Import all pages from /pages/....

Define routes:

/ → <Home />

/rolunk → <Rolunk />

/szolgaltatasok → <Szolgaltatasok />

/vbf → <VBF />

/kapcsolat → <Kapcsolat />

fallback * → <Home /> (or a 404 page later)

Wrap <Routes> inside <Layout>.

6. LAYOUT COMPONENT (Layout.tsx + Layout.css)

Create Layout.tsx:

React + TypeScript functional component.

LayoutProps with children: React.ReactNode.

Import NavLink from react-router-dom.

Import dedvill-logo-blue.png.

Header:

Sticky at top, semi-transparent white background with blur.

Left: logo in a circular container with subtle glow (matching circle motif of logos).

Brand text:

DedVill KFT

Villanyszerelés & VBF felülvizsgálat (subtitle)

Right: navigation links as NavLink:

Főoldal /

Rólunk /rolunk

Szolgáltatások /szolgaltatasok

VBF /vbf

Kapcsolat /kapcsolat

Active link has an electric-blue underline.

Footer:

Dark background (#0b1220), light text.

Left: © {year} DedVill KFT – Minden jog fenntartva.

Right: clickable phone tel:+36209540800 and email mailto:dedvillkft@gmail.com.

Create Layout.css:

Classes: .site, .site-header, .site-header-inner, .site-logo, .site-brand, .site-nav, .nav-link, .nav-link.active, .site-footer, etc.

Use the global CSS variables for colors, radius, shadow.

7. HOME PAGE (Home.tsx + Home.css)

Home.tsx sections:

Hero section:

<section> with class hero.

Title (Hungarian): "Villanyszerelés A–Z-ig".

Subtitle: 2–3 sentences about DedVill (villanyszerelés, hibajavítás, villamos biztonsági felülvizsgálat).

CTA button using .btn-primary linking to tel:+36209540800.

Optionally show small circular DedVill logo in the hero.

Services highlight:

Use 4 cards in a responsive grid:

Lakossági villanyszerelés

Hibaelhárítás

V.B.F. felülvizsgálat

Mérőhely szabványosítás

Each card: title, short Hungarian description, icon placeholder (e.g. simple SVG lightning/plug icon).

Pricing preview:

Simple list from a local array of objects: [{ name, price }].

Show 3–5 typical pricing examples (non-binding, "Ft-tól").

Align names left, prices right.

Map preview:

Use a MapPreview div with a placeholder text first.

The developer can later replace with an actual Google Maps iframe.

Create Home.css:

Style hero with a subtle radial-gradient background, aligning content center-left.

Use responsive layout: 2-column on desktop, 1-column on mobile.

Use .card and .grid-auto helpers.

8. RÓLUNK PAGE (Rolunk.tsx + Rolunk.css)

Content:

Title: "Rólunk".

2–3 paragraphs in Hungarian describing DedVill KFT:

tapasztalt villanyszerelő cég

lakossági és kisebb ipari munkák

biztonság, precizitás, határidők.

Highlight row with 3 short pillars:

Megbízhatóság

Tapasztalat

Precizitás

Design:

Clean, simple, text-focused.

Include subtle circular decorative elements (e.g. border-radius: 999px elements) echoing the logo shapes.

9. SZOLGÁLTATÁSOK PAGE (Szolgaltatasok.tsx + Szolgaltatasok.css)

Sections:

Title: "Szolgáltatások".

For each service create a card or block:

Lakossági villanyszerelés

Hibaelhárítás

Mérőhely szabványosítás

VBF felülvizsgálat (short teaser, with link or CTA to the /vbf page)

Use bullet lists with checkmark icons (✓) to list typical tasks.

Layout:

Use .container + .section.

Cards arranged in responsive grid.

10. VBF PAGE (VBF.tsx + VBF.css)

This page is very important. Use the VBF Sziget logo and a clean electric-blue theme.

Content structure:

Title: "Villamos Biztonsági Felülvizsgálat (VBF)".

Intro paragraph: what VBF is, in Hungarian.

Section: "Mikor kötelező a VBF?"

List of typical cases (pl. új ingatlan, bérbeadás, időszakos felülvizsgálat).

Section: "Gyakori hibák a felülvizsgálat során".

Bullet list of typical issues.

Section: "Árak":

Simple table or list with indicative price ranges (Ft-tól).

CTA block:

Short text encouraging to call.

Big .btn-primary button linking tel:+36209540800.

Design:

Import /assets/vbf-sziget-logo.png.

Place the logo prominently at the top.

Cards with rounded corners, white background, blue accents.

A bit more "technical" look.

11. KAPCSOLAT PAGE (Kapcsolat.tsx + Kapcsolat.css)

Content:

Title: "Kapcsolat".

Display:

Telefonszám: +36 20 954 0800 (clickable).

Email: dedvillkft@gmail.com (clickable).

Optionally "Munkavégzés helye" text.

Map section:

Responsive container with a placeholder for Google Maps iframe.

Add a comment where the developer can paste the actual Maps iframe later.

Simple contact form (no backend):

Name (Név), Email, Message (Üzenet).

Submit button – just prevent default and maybe log to console, but no backend.

Design:

Clean, airy layout.

Use card layout for the contact form.

12. REDIRECT PAGE FOR VBFSZIGET.HU

Create a separate vbfsziget-index.html suggestion:

Simple HTML that redirects to https://www.dedvill.hu using:

<meta http-equiv="refresh" content="0; url=https://www.dedvill.hu">


Include fallback message: "Ha nem történik átirányítás, kattints ide: dedvill.hu".

Explain in a short Hungarian comment how this can be uploaded for the vbfsziget.hu domain.

13. FINAL INSTRUCTIONS

After generating all files:

Show in a markdown block how to run the project:

npm run dev


Explain (in Hungarian) that the site will be available on http://localhost:5173 (or Vite default).

Suggest deploying to Netlify or Vercel later.

Ensure all TSX files compile without TypeScript errors.

End of instructions.


---

## 🧩 Hogyan használd a gyakorlatban?

1. **VSCode-ban** nyiss meg egy új üres workspace-t.  
2. Hozd létre a `COPILOT_PLAN.md` fájlt.  
3. Másold bele **az egész fenti blokkot**.  
4. Kezdj el új fájlokat létrehozni (`main.tsx`, `App.tsx`, stb.) – Copilot a háttérben látja a tervet, és a kommentek alapján fog javaslatokat adni.  
5. Ha valahol beakad, belerakhatsz **részleteket** is kommentként a konkrét fájl tetejére (pl. csak a VBF rész).

Ha szeretnéd, a következő körben írhatunk **külön mini promptokat** is minden egyes oldalhoz (konkrétan beszúrásra a fájl tetejére), de ez a master terv már elvisz **telepítéstől a kész projektig**. 💙⚡

/*  
GITHUB COPILOT – AUTO GENERATION MODE  
==============================  
You will now generate the ENTIRE "DedVill KFT" website project from scratch, based on the full instructions inside COPILOT_PLAN.md.

Start immediately by creating all missing folders and files under /src EXACTLY as described.

TASKS TO EXECUTE AUTOMATICALLY:

1) GLOBAL STYLES  
Create /src/styles/global.css with:
- All CSS variables (electric blue palette, radius, shadow, font)
- Base resets (html, body, #root height)
- Radial background in body
- Utility classes: .container, .section, .section-title, .btn-primary, .card, .grid-auto-fit

2) MAIN PROJECT STRUCTURE  
Inside /src, create:
  assets/
    (use placeholder imports for dedvill-logo-blue.png and vbf-sziget-logo.png)
  components/
    Layout/
      Layout.tsx
      Layout.css
  pages/
    Home/
      Home.tsx
      Home.css
    Rolunk/
      Rolunk.tsx
      Rolunk.css
    Szolgaltatasok/
      Szolgaltatasok.tsx
      Szolgaltatasok.css
    VBF/
      VBF.tsx
      VBF.css
    Kapcsolat/
      Kapcsolat.tsx
      Kapcsolat.css
  App.tsx
  main.tsx

3) ROUTING  
Generate App.tsx:
- Import Layout
- Add routes:
    "/" → Home
    "/rolunk" → Rolunk
    "/szolgaltatasok" → Szolgaltatasok
    "/vbf" → VBF
    "/kapcsolat" → Kapcsolat
    "*" → Home

4) main.tsx  
Generate BrowserRouter, import global.css, wrap App.

5) COMPONENT GENERATION  
Generate these TSX + CSS components:

### Layout
- Sticky header
- Logo imported from /assets
- Brand text: "DedVill KFT" + "Villanyszerelés & VBF felülvizsgálat"
- Navigation with NavLink (active underline in electric blue gradient)
- Footer with © year, phone (+36209540800), email (dedvillkft@gmail.com)

### Home Page
Sections:
- HERO: Title: "Villanyszerelés A–Z-ig", subtitle, CTA button (tel:+36209540800)
- Services grid: 4 cards (Lakossági villanyszerelés, Hibaelhárítás, VBF felülvizsgálat, Mérőhely szabványosítás)
- Pricing preview list
- Map preview container

### Rolunk Page
- Title: "Rólunk"
- 2–3 Hungarian paragraphs
- Feature row: Megbízhatóság • Tapasztalat • Precizitás

### Szolgáltatások Page
- Title: "Szolgáltatások"
- Detailed blocks for each service
- Bullet lists with ✓ checkmarks

### VBF Page
- Title: "Villamos Biztonsági Felülvizsgálat (VBF)"
- Import VBF Sziget logo
- Sections: Mi az a VBF? • Mikor kötelező? • Gyakori hibák • Árak • CTA

### Kapcsolat Page
- Phone + email
- Google Maps iframe placeholder
- Contact form (Név, Email, Üzenet) – no backend

6) TYPE SAFETY  
All files must be valid TypeScript with proper props types and no errors.

7) STYLE CONSISTENCY  
Use ONLY:
- global.css
- local component CSS files
DO NOT use Tailwind, styled-components, MUI, Chakra, or inline styles.

8) LANGUAGE  
All user-facing text MUST be in Hungarian.  
All comments and class names in English.

Begin generating files now, one after another.  
==============================  
END OF DIRECTIVE  
*/
