# Raydizzle's Handmade Shop

A static GitHub Pages website for listing handmade items such as bracelets, paintings, and crafts.

## How to edit items

Open `script.js` and edit the `items` array near the top of the file.

Example:

```js
{
  name: "Blue Wave Bracelet",
  category: "Bracelets",
  price: "$6",
  description: "A handmade bracelet with blue and white colors.",
  status: "Available",
  image: "assets/images/blue-wave-bracelet.jpg",
  emoji: "🌊"
}
```

## How to add photos

1. Put image files inside `assets/images/`.
2. In `script.js`, set the item image path, for example:

```js
image: "assets/images/bracelet1.jpg"
```

If `image` is left blank, the site shows a fun emoji placeholder instead.

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder.
3. Go to repository **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, select the `main` branch and root folder.
6. Save, then wait for GitHub to publish the site.

## Important

Before publishing, edit the contact email in `index.html` by replacing:

```html
your-email@example.com
```

with the email address you want customers to use.
