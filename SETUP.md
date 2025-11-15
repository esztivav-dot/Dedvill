# SETUP.md – Fejlesztői környezet beállítása (HU)

Ez a leírás végigvezet a szükséges eszközök telepítésén és ellenőrzésén Windows alatt.

## 1) Node.js és npm ellenőrzése

Nyiss egy PowerShell ablakot, majd futtasd:

```powershell
node -v
npm -v
```

- Ha verziószámokat látsz, minden rendben. A Node.js verzió legyen 18 vagy újabb.
- Ha hibaüzenet jelenik meg, telepítened kell a Node.js-t.

## 2) Node.js telepítése

- Látogasd meg: https://nodejs.org/
- Töltsd le az LTS (ajánlott) verziót Windowsra, majd futtasd a telepítőt (kövesd az alapértelmezett lépéseket).
- Telepítés után zárd be és nyisd meg újra a PowerShellt, majd ellenőrizd újra: `node -v` és `npm -v`.

## 3) Visual Studio Code telepítése

- Töltsd le és telepítsd innen: https://code.visualstudio.com/
- Indítsd el a VS Code-ot.

## 4) GitHub Copilot bővítmény telepítése és bejelentkezés

- VS Code-ban nyisd meg az Extensions (Bővítmények) panelt (bal oldali ikonsáv → "Extensions" vagy `Ctrl+Shift+X`).
- Keresd meg: "GitHub Copilot" és kattints az Install gombra.
- A telepítés után jelentkezz be GitHub fiókoddal, ha a VS Code kéri (jobb alsó sarokban megjelenő értesítés, vagy Command Palette → "GitHub: Sign in").

## 5) Alap magyarázat a Copilot használatához

- A GitHub Copilot kódrészleteket és fájlokat javasol a projektben elhelyezett terveid és kommentjeid alapján.
- A parancsokat (pl. projekt létrehozása, futtatás) NE a Copilot-tól várd, hanem Te futtasd a saját terminálodban (PowerShell).
- A projekt gyökérkönyvtárában dolgozz, és a parancsokat ott add ki.

Készen állsz a projekt létrehozására. Következő lépés: lásd a `PROJECT_SETUP.md` fájlt.
