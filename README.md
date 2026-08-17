# Cafe By Pass & Restaurant

A responsive, single-page website for **Cafe By Pass & Restaurant** in
Gorakhpur. It presents the restaurant's story, menu, celebration options,
contact information, location, and table-booking details.

## Features

- Responsive layout for desktop and mobile devices
- Signature dishes and a searchable, category-filtered full menu
- Table requests sent directly through WhatsApp
- Google Maps location embed and directions link
- Click-to-call and WhatsApp contact links
- Scroll animations and mobile navigation
- Local food, occasion, and branding images

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts and Google Maps embeds

No package manager, framework, build step, or API key is required.

## Run locally

1. Clone or download this repository.
2. Open the website directory:

   ```powershell
   cd cafe-website
   ```

3. Open `Index.html` in a browser.

For a local development server, you can also run:

```powershell
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project structure

```text
cafe-website/
|-- Index.html          # Page content and layout
|-- style.css           # Responsive design and animations
|-- script.js           # Menu, booking, and navigation behavior
|-- fix_images.py       # Image-processing utility
`-- image/
    |-- logo cafe.png
    |-- occasions/      # Celebration images
    `-- signature/      # Featured dish images
```

## Customization

- Edit restaurant content, hours, address, and page sections in `Index.html`.
- Edit menu items, prices, and the WhatsApp number in `script.js`.
- Update colors, typography, spacing, and responsive styles in `style.css`.
- Replace images in the `image` directory while preserving their paths, or
  update the corresponding paths in the HTML and JavaScript files.

## Reservation flow

The booking form validates the customer's 10-digit phone number and creates a
pre-filled WhatsApp message containing the selected date, time, guest count,
occasion, and any special request. The restaurant confirms the request directly
with the customer through WhatsApp.

## Business details

**Cafe By Pass & Restaurant**  
Jungle Sikri, Suba Bazar Bypass, Khorabar, Gorakhpur  
Open daily: 10:30 AM-10:00 PM  
Phone: [+91 62307 11180](tel:+916230711180)
