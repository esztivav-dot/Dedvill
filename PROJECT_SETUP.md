# PROJECT_SETUP.md – Vite + React + TypeScript projekt létrehozása

Az alábbi lépések Windows PowerShell-ben futtathatók. A parancsokat a kívánt mappában add ki, ahol a projekted mappája létrejöhet.

## 1) Projekt létrehozása parancsokkal

```powershell
npm create vite@latest dedvill-site -- --template react-ts
cd dedvill-site
npm install
npm install react-router-dom
```

Rövid magyarázat (HU):
- `npm create vite@latest dedvill-site -- --template react-ts`: új Vite projekt generálása `dedvill-site` néven, React + TypeScript sablonnal.
- `cd dedvill-site`: belépés a frissen létrehozott projekt mappájába.
- `npm install`: az alap függőségek telepítése.
- `npm install react-router-dom`: kliens oldali útvonalkezelő (routing) hozzáadása.

Megjegyzés: a fő belépési pontok: `src/main.tsx` és `src/App.tsx`.

## 2) Cél fájl- és mappastruktúra (a `src` mappán belül)

```
src/
  assets/
    dedvill-logo-blue.png        // DedVill logó (ezt Te adod majd hozzá)
    vbf-sziget-logo.png          // VBF Sziget logó (ezt Te adod majd hozzá)
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
```

- A fenti fájlokat fokozatosan hozzuk létre és töltjük fel tartalommal a mester terv (COPILOT_PLAN.md) alapján.
- A globális stílusok a `src/styles/global.css` fájlban lesznek.

## 3) Futatás fejlesztői módban

```powershell
npm run dev
```

- A Vite fejlesztői szerver elindul, alapértelmezés szerint a `http://localhost:5173` címen éred el a weboldalt.

## 4) Következő lépések

- A `COPILOT_PLAN.md` alapján létrehozzuk és feltöltjük a komponenseket és oldalakat (Layout, Home, Rólunk, Szolgáltatások, VBF, Kapcsolat).
- A kész projektet később érdemes Netlify-ra vagy Vercelre telepíteni (egyszerű, ingyenes beállításokkal is működik).
