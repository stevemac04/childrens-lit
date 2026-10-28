# Looking Closely

Interactive site for three Chinese / Taiwanese American picture books and a reflection. Built for GitHub Pages.

## Books

1. *Eyes That Speak to the Stars* — Joanna Ho, illus. Dung Ho  
2. *The Ugly Vegetables* — Grace Lin  
3. *I Dream of Popo* — Livia Blackburne, illus. Julia Kuo  

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## Add your images

Place files here (matching these names):

```
assets/covers/eyes-that-speak.jpg
assets/covers/ugly-vegetables.jpg
assets/covers/i-dream-of-popo.jpg
assets/spreads/eyes-1.jpg … eyes-3.jpg
assets/spreads/veggies-1.jpg … veggies-3.jpg
assets/spreads/popo-1.jpg … popo-3.jpg
```

Until images are added, color placeholders show automatically.

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `looking-closely` or `USERNAME.github.io`).
2. Push this project:

```bash
git add .
git commit -m "Initial Looking Closely site"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / root**.
4. Site URL will be `https://YOUR_USERNAME.github.io/YOUR_REPO/`  
   (or `https://YOUR_USERNAME.github.io/` if the repo is named `YOUR_USERNAME.github.io`).

If the site is in a project repo (not `username.github.io`), you may need to set a base path — ask and we can adjust links.
