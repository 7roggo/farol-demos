# Farol demos

Demo websites for Farol's restaurant pitches. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.

- `/` — demo gallery
- `/ascua/` — premium steakhouse (asador) demo (fictional restaurant). Content (texts in ES/EN, steaks and prices, menu, wine pairings, doneness steps, WhatsApp number) lives at the top of `ascua/main.js`.
- `/pedidos/` — QR table ordering demo (Casa Lola): `demo.html` shows the customer phone and the restaurant hub side by side; `hub.html` and `order.html` work on their own. Runs fully in the browser (no backend), data stays in each visitor's browser.
- `/tomoshibi/` — sushi omakase demo (fictional restaurant). Content (texts in ES/EN, menu, price, WhatsApp number) lives at the top of `tomoshibi/main.js`.

Photos are hotlinked from Unsplash.

`.nojekyll` keeps GitHub Pages from hiding folders that start with an underscore (used by `/pedidos/`).
