<div align="center">

[![Elgato icons banner](https://raw.githubusercontent.com/elgatosf/icons/refs/heads/main/assets/banner.png)](https://docs.elgato.com/resources/icons)

# Elgato Icons

[![Elgato homepage](https://img.shields.io/badge/Elgato-3431cf?labelColor=grey&logo=elgato)](https://elgato.com)
[![Join the Marketplace Makers Discord](https://img.shields.io/badge/Marketplace%20Makers-5662f6?labelColor=grey&logo=discord&logoColor=white)](https://discord.gg/GehBUcu627)
[![Build status](https://img.shields.io/github/actions/workflow/status/elgatosf/icons/build.yml?branch=main&label=Build&logo=GitHub)](https://github.com/elgatosf/icons/actions)

</div>

Discover icons used throughout the Elgato ecosystem, commonly found in Stream Deck, Wave Link, Camera Hub, Capture, and Marketplace. Mix, match, and curate your own icon packs based on our design language.

<div align="center">

[Browse icons](https://docs.elgato.com/icons)

</div>

## Usage

```bash
npm install @elgato/icons
```

### JavaScript Variables

Icons can be imported as SVG strings from `@elgato/icons/{s,m,l}`, for example:

```ts
import { iconLogoElgato } from "@elgato/icons/l";

iconLogoElgato; // SVG string of the Elgato logo, large (l) size.
```

Icons are available in up to three sizes, small (s), medium (m), and large (l).

-   `@elgato/icons/s` — optimized for 16 × 16 px.
-   `@elgato/icons/m` — optimized for 20 × 20 px.
-   `@elgato/icons/l` — optimized for 24 × 24 px.

### React Components

Icons can be imported as React components from `@elgato/icons/react`, for example

```tsx
import { IconLogoElgato } from "@elgato/icons/react";

export default function MyComponent() {
    return (
        <div className="icon-wrapper">
            <IconLogoElgato size="m" />
        </div>
    );
};
```

Icons are available in up to three sizes, small (s), medium (m), and large (l), and the preferred size can be specified using the `size` property. If the preferred size does not exist, the default size will be used.

### SVG Files

All original SVG files are distributed with this package, and can be found within the `svg/` directory.

```
.
├── svg/
|   └── l/
│   ├── m/
│   ├── s/
|   │   ├── ...
|   │   ├── warning.svg
|   │   ├── window--filled.svg
|   │   └── window.svg
└── ...
```

### Font

An icon font is distributed in the `font/` directory, in TTF, WOFF, and WOFF2 formats, with a ready-to-use CSS stylesheet.

```
.
├── font/
│   ├── elgato-icons.css
│   ├── elgato-icons.ttf
│   ├── elgato-icons.woff
│   ├── elgato-icons.woff2
│   └── info.json
└── ...
```

Import the stylesheet from the package and use icon class names directly:

```ts
import "@elgato/icons/font";
```

Or reference it directly in HTML via a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@elgato/icons/font/elgato-icons.css" />

<i class="elgato-icons-accessories-l"></i>
<i class="elgato-icons-camera-l"></i>
<i class="elgato-icons-settings-l"></i>
```

Class names follow the patterns `elgato-icons-{icon-name}-{size}` for regular icons and `elgato-icons-{icon-name}--filled-{size}` for filled variants, where `{size}` is one of `l`, `m`, or `s`. A full mapping of icon names (including filled variants) to unicode code points can be found in `font/info.json`.
