---
title: "Tailwind CSS v4: What's New?"
date: "2025-12-15"
description: "A deep dive into the performance improvements and new features of the latest Tailwind CSS release."
author: "Frontend Team"
tags: ["CSS", "Tailwind", "Frontend"]
---

Tailwind CSS v4 is here, and it's a massive leap forward. The new engine is built for speed, dropping Rust for a pure JS/TS implementation that is surprisingly faster in many cases due to smarter caching.

## CSS-First Configuration

Gone is the `tailwind.config.js` for most users. Now you configure themes directly in CSS:

```css
@theme {
  --color-primary: #7c3aed;
  --font-sans: "Outfit", sans-serif;
}
```

This makes the framework feel much more native to the web platform.
