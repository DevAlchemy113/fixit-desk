# FixIt Desk

A small practice website for learning Git, GitHub, Linux, Bash, and debugging. It starts in a working state. The issue records are fictional examples, not workplace instructions.

## Files

- `dist/index.html` — page structure and text
- `dist/styles.css` — layout and responsive styles
- `dist/script.js` — issue data, search, and category filters

## Run locally

In Ubuntu, open a terminal in this folder and run:

```bash
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000` in your browser. Press `Ctrl+C` in the terminal to stop the server. No packages need to be installed.

## Practice path

Work through these one at a time with a coach. Keep the default branch working; make each change on a separate branch.

1. Inspect the files and start the site from the terminal.
2. Change the text on one card; inspect the diff, commit, and push.
3. Add an issue in a branch and open a GitHub pull request.
4. Introduce a search bug in a practice branch, reproduce it, inspect the JavaScript, and fix it.
5. Change a CSS rule so the mobile layout breaks, then diagnose and repair it.
6. Practice a merge conflict in the issue data and resolve it.
7. Write a Bash script to check required files, start the local server, or run a simple health check.

The coach should give only one challenge at a time, let you attempt it first, and avoid revealing a solution immediately.

## Publishing

This starter is static. Once it is on your own GitHub repository, you can enable GitHub Pages with the `dist` folder by configuring a Pages workflow or placing the site at the repository root. Do not assume that the private preview URL is a GitHub repository.
