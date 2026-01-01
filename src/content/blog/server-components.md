---
title: "Server Components vs Client Components"
date: "2025-12-10"
description: "Understanding the React Server Components paradigm to build faster, more efficient web applications."
author: "React Team"
tags: ["React", "Next.js", "Performance"]
---

The shift to Server Components has changed how we think about building React apps. It's no longer just about `useEffect` vs `useLayoutEffect`.

## The Rule of Thumb

- **Fetch data** on the Server.
- **Add interactivity** on the Client.

By moving non-interactive parts of your app to the server, you drastically reduce the JS bundle size sent to the user.
