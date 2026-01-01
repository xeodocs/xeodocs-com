---
title: "Local-First Software Development"
date: "2025-11-20"
description: "Why moving state to the client and syncing in the background is the future of robust applications."
author: "Fabian"
tags: ["Architecture", "Local-First"]
---

Apps should work offline. It sounds simple, but for the last decade, we've been building cloud-dependent software that breaks the moment you enter an elevator.

## CRDTs and Hydration

Conflict-free Replicated Data Types (CRDTs) are the magic sauce behind collaborative, local-first apps. They allow multiple users to edit data simultaneously without conflicts.
