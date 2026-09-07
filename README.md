# Randy Olguin — Engineering Portfolio

A responsive, single-page portfolio built for GitHub Pages. It uses only HTML, CSS, and JavaScript, so there is no build step or dependency installation.

## Personalize before publishing

1. Open `script.js` and replace the email, LinkedIn URL, and GitHub URL in the `contact` object.
2. Open `index.html` and update any biography, education, experience, project, and skill details.
3. Optional: add a `resume.pdf` file and link it from the hero navigation.

## Publish with GitHub Pages

1. Create a public repository named `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Your site will appear at `https://YOUR-USERNAME.github.io/` after GitHub finishes deploying it.

For a project site instead, use any repository name and the URL will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Preview locally

Double-click `index.html`, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` — content and page structure
- `styles.css` — responsive visual design and animations
- `script.js` — typed headline, contact links, navigation, and reveal effects

The design is original and inspired by the information architecture—not the source code—of the reference portfolio.
