# Hamza Seffari Portfolio

This is the portfolio website for **Hamza Seffari**.

- Live site: https://hamzaseffari.netlify.app/
- Files:
  - `index.html`
  - `style.css`
  - `script.js`
  - `profile.jpg`

## Run locally
Open `index.html` in a browser, or use a local server if you prefer.

## Deployment
This is a static HTML/CSS/JS site. To connect it with GitHub and Netlify:

1. Install Git on your machine.
2. Initialize a repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
3. Create a GitHub repository and add it as a remote:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. In Netlify, connect the site to the GitHub repo and enable automatic deploys.

## Notes
- If you want the site to update online automatically when you edit files locally, you must push changes to GitHub.
- Currently Git is not installed in the environment available here, so repository setup must be done locally.

## Netlify configuration (link to Git)

Follow these steps to connect the repository to Netlify and deploy as the `azmahefr` user on the `hh` team, deploying from the `main` branch and site name `hamza-portfolio`:

1. Install Git on your Windows machine: https://git-scm.com/download/win
2. Configure your Git identity (run once):
```powershell
git config --global user.name "Hamza Seffari"
git config --global user.email "you@example.com"
```
3. Initialize, commit and push your repo (replace with your GitHub repo URL):
```powershell
cd "C:\Users\azmah\OneDrive\Desktop\hamza port"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/hamza-portfolio.git
git push -u origin main
```
4. In Netlify dashboard:
   - Click "Add new site" → "Import an existing project" → choose GitHub.
   - When connecting, select the **hh** team and authorize GitHub if prompted.
   - Select the `hamza-portfolio` repository.
   - Branch to deploy: `main`.
   - Build command: leave empty (no build step for static site).
   - Publish directory: `.` (root). If Netlify requires a folder, set to the folder containing `index.html`.
   - Site name: set to `hamza-portfolio` (or change if already taken; Netlify will suggest alternatives).
5. After connecting, Netlify will perform the first deploy from `main`. Subsequent pushes to `main` will trigger automatic deploys.

### Environment variables
If you need environment variables for build-time (e.g., API keys), add them in the Netlify UI under Site settings → Build & deploy → Environment.

### Note about private files
The repository currently ignores `*.pdf` to avoid publishing personal documents. If you want to publish specific certificates, move them into a `public-certs/` folder and remove that pattern from `.gitignore` or add an explicit allow rule.
