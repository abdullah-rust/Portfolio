// store.js
import { atom } from "jotai";

// ✅ Sirf current page ka state - component render ke liye
export const currentPageAtom = atom("home");

// ✅ Pages array
export const pages = ["home", "about", "skills", "projects", "contact"];
