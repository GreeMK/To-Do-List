# CHANGELOG

This document summarizes the refactor performed on the existing code. No new features were added; the goal was to make the existing implementation cleaner and follow basic best practices.

## What Was Wrong

- **Poor naming & inconsistent language**: variables and functions mixed Spanish/English, short or ambiguous names (`nameTask`, `descriptionn`, `taskArray`, etc.).
- **Global scope pollution**: data structures were mutable globals without explanation.
- **Repetition & manual loops**: category duplication check used a for‑loop and string comparisons manually.
- **DOM queries executed at top level**: elements were grabbed before DOM ready and scattered across file.
- **No structure around initialization**: event listeners attached individually at bottom.
- **Fragmented rendering logic**: `renderList`, `addPopUp`, and state management were interleaved.
- **Missing semicolons and inconsistent formatting** making the code harder to read.
- **Unused or unnecessary code**: e.g. `icons.classList.add()` with no arguments, redundant comments.

## What Changed / Improved

1. **Renamed variables & functions** to descriptive English terms (e.g. `tasks`, `categories`, `handleAddTask`, `renderTasks`).
2. **Added strict mode** (`"use strict"`) to both JS files.
3. **Constants for collections**: `categories` and `tasks` declared with `const` and reused everywhere; no `let` globals remained.
4. **Normalization & validation**: `addCategory` trims and lowercases input, uses `includes()` instead of manual loop.
5. **Encapsulation of DOM logic**: all element queries executed inside a `DOMContentLoaded` listener; event handlers defined locally.
6. **Modular rendering functions**: `renderTasks`, `createModal`, `toggleComplete`, and `removeTask` provide clear separation of concerns.
7. **Simplified filter logic** into `applyFilters` with early returns.
8. **Removed stray or empty code** (e.g. the empty classList call, unused parameters) and cleaned comments to be concise.
9. **Maintained original structure** of HTML/CSS unchanged; only JS files were altered.
10. **General formatting**: consistent indentation, spacing, and semicolons added for readability.

## What Was Maintained

- **Functionality**: task creation, deletion, completion toggle, modal display, category management, and filtering remain unchanged.
- **Event names and HTML structure**: no new attributes or script types were added.
- **Category and task lists**: still stored in memory and manipulated by the same functions logically, just with clearer names.

## Why These Decisions

The goal was to make the code easier to understand and maintain without altering behavior. Better naming reduces mental overhead, encapsulating DOM queries prevents timing bugs, and avoiding unnecessary globals improves reliability. The change log above documents the specific improvements, ensuring the code is now in a good state for any future enhancements.

---

*End of CHANGE.md*