<div align="center">

[![Elgato icons banner](assets/banner.png)](https://www.figma.com/community/file/1383396897451458564)

# Elgato Icons

[![Elgato homepage](https://img.shields.io/badge/Elgato-3431cf?labelColor=grey&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RWxnYXRvPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtMTMuODgxOCA4LjM5NjQuMDI2MS4wMTk2IDkuOTQ5NCA1LjcxNzJjLS40ODg0IDIuNzI5LTEuOTE5NiA1LjIyMjMtNC4wMzg0IDcuMDI1M0ExMS45MjYyIDExLjkyNjIgMCAwIDEgMTIuMDk3IDI0Yy0zLjE5MjUgMC02LjE5MzktMS4yNDc3LTguNDUyNy0zLjUxNDRDMS4zODY4IDE4LjIxODguMTQyNyAxNS4yMDQ0LjE0MjcgMTJjMC0zLjIwNDIgMS4yNDQtNi4yMTg3IDMuNTAxNS04LjQ4NTRDNS45MDE5IDEuMjQ4IDguOTAzMiAwIDEyLjA5NyAwYzIuNDM5NCAwIDQuNzg0Ny43MzMzIDYuNzgzIDIuMTE4NyAxLjk1MjYgMS4zNTQgMy40NDY2IDMuMjM1NyA0LjMyMjcgNS40NDIyLjExMTIuMjgyOS4yMTQ5LjU3MzYuMzA1MS44NjU3bC0yLjEyNTUgMS4yMzU5YTkuNDkyNCA5LjQ5MjQgMCAwIDAtLjI2MTktLjg2OTRjLTEuMzU0LTMuODMwMy00Ljk4MTMtNi40MDQ4LTkuMDIzNy02LjQwNDhDNi44MTcxIDIuMzg4MyAyLjUyMiA2LjcwMDUgMi41MjIgMTJjMCA1LjI5OTUgNC4yOTUgOS42MTE1IDkuNTc0OCA5LjYxMTUgMi4wNTIgMCA0LjAwODQtLjY0NDIgNS42NTk2LTEuODY0NyAxLjYxNzItMS4xOTU1IDIuODAzNi0yLjgzMzcgMy40MzA5LTQuNzM2NGwuMDA2NS0uMDQxOUw5LjU5MDYgOC4zMDQ4djcuMjI1Nmw0LjAwMDQtMi4zMTM4IDIuMDYgMS4xODExLTUuOTk2MiAzLjQ2ODgtMi4xMi0xLjIxMjZWNy4xOTQzbDIuMTE3NC0xLjIyNDUgNC4yMzA5IDIuNDI3OS0uMDAxMy0uMDAxMyIvPjwvc3ZnPg==)](https://elgato.com)
[![Join the Marketplace Makers Discord](https://img.shields.io/badge/Marketplace%20Makers-5662f6?labelColor=grey&logo=discord&logoColor=white)](https://discord.gg/GehBUcu627)
[![Build status](https://img.shields.io/github/actions/workflow/status/elgatosf/icons/build.yml?branch=main&label=Build&logo=GitHub)](https://github.com/elgatosf/icons/actions)

</div>

Discover icons used throughout the Elgato ecosystem, commonly found in Stream Deck, Wave Link, Camera Hub, Capture, and Marketplace. Mix, match, and curate your own icon packs based on our design language.

## Usage

```bash
npm install @elgato/icons
```

### JavaScript Variables

Icons can be imported directly, with each icon representing a string that contains the SVG contents of the icon, for example:

```ts
import { iconLogoElgato } from "@elgato/icons/js/medium";

logoElgato; // SVG string of the Elgato logo in medium (default) size
```

All icons are available in medium, with some also available in small and large.

-   `@elgato/icons/js/small` — optimized for 16 × 16 px.
-   `@elgato/icons/js/medium` — optimized for 24 × 24 px.
-   `@elgato/icons/js/large` — optimized for 32 × 32 px.

Alternatively, icons can be imported dynamically using the `icon` helper function (not recommended), for example:

```ts
import { icon } from "@elgato/icons/js";

icon("logo-elgato"); // SVG string of the Elgato logo
```

It is important to note that when using the `icon` helper function, **all medium-sized icons will be included in the output**, preventing tree-shaking and resulting in a larger output file size (>1 MiB). Where possible, prefer importing icons directly.

### SVG Files

All original SVG files are distributed with this package, and can be found within the `svg/` directory.

```
.
├── svg/
│   ├── 16/
│   ├── 24/
│   |   ├── 0-circle--filled.svg
|   |   ├── 0-circle.svg
|   │   ├── ...
|   │   ├── zoom-out--filled.svg
|   │   └── zoom-out.svg
|   └── 32/
└── ...
```
