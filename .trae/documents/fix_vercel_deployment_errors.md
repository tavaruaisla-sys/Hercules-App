# Plan: Fix TypeScript Path Alias Errors for Vercel Deployment

The build is failing on Vercel because TypeScript cannot resolve the `@/lib/utils.ts` module in several UI components. This is likely due to the `.ts` extension in the import statements, which is discouraged in many environments when using path aliases, or a slight mismatch in how Vercel's environment handles these aliases compared to the local dev environment.

## Root Cause Analysis
1.  **File Existence**: `src/lib/utils.ts` exists.
2.  **Alias Configuration**: `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts` all have the `@/` alias correctly mapped to `./src`.
3.  **Import Syntax**: Components like `accordion.tsx` use `import { cn } from "@/lib/utils.ts";`. Including the `.ts` extension in imports is often the cause of "Cannot find module" errors in TypeScript projects using bundlers, as it expects the module name without the extension.

## Proposed Changes

### 1. Remove `.ts` Extension from Imports
I will scan and update all UI components to remove the `.ts` extension from the `@/lib/utils` import.

### 2. Update `tsconfig.app.json` (Optional but recommended)
Ensure `baseUrl` is set in `compilerOptions` to explicitly support path mapping from the root.

## Implementation Steps

1.  **Update UI Components**:
    -   `src/components/ui/accordion.tsx`
    -   `src/components/ui/calendar.tsx` (Note: User mentioned `alendar.tsx`, need to check actual name)
    -   `src/components/ui/alert-dialog.tsx`
    -   `src/components/ui/alert.tsx`
    -   `src/components/ui/avatar.tsx`
    -   `src/components/ui/badge.tsx`
    -   `src/components/ui/breadcrumb.tsx`
    -   `src/components/ui/button-group.tsx`
    -   `src/components/ui/button.tsx`
    -   `src/components/ui/card.tsx`
    -   `src/components/ui/carousel.tsx`
    -   Any other files using `@/lib/utils.ts`.

2.  **Verify Build**: Run `npm run build` locally to ensure the changes fix the path resolution issues.

## Detailed Plan

### Step 1: Identify all occurrences
Use `grep` to find all files importing `@/lib/utils.ts`.

### Step 2: Bulk Replace
Replace `from "@/lib/utils.ts"` with `from "@/lib/utils"`.

### Step 3: Check for `src/components/ui/alendar.tsx`
Verify if the file is named `calendar.tsx` or `alendar.tsx` and fix if necessary.
