# Obsolete Code Analysis Report

**Date:** February 16, 2026  
**Project:** CyberSecGLM5 (CyberSecTools)  
**Analysis Type:** Full codebase review for obsolete/unused code

---

## Executive Summary

This analysis identified several categories of obsolete or unused code in the codebase:

| Category | Items Found | Severity |
|----------|-------------|----------|
| Unused UI Components | 1 | Low |
| Unused npm Dependencies | 4 | Medium |
| Unused Metadata Files | 4 | Low |
| Redundant API Routes | 3 | Medium |
| Missing Sitemap Entries | 5 | Low |
| Development Docs | 3 | Info |

---

## 1. Unused UI Components

### `components/ui/dialog.tsx` 
- **Status:** NOT USED
- **Details:** This Radix UI dialog component is not imported anywhere in the codebase. The project uses `alert-dialog.tsx` for modal dialogs instead.
- **Recommendation:** Remove this file to reduce bundle size.
- **Safe to delete:** Yes

---

## 2. Unused npm Dependencies

The following packages are listed in [`package.json`](package.json) but are NOT used in the application code:

### `sonner` (v1.5.0)
- **Status:** NOT USED
- **Details:** A toast notification library that is never imported. The project uses a custom toast system via `@/components/ui/toast` and `@/hooks/use-toast`.
- **Recommendation:** Remove from dependencies.

### `@hookform/resolvers` (v3.9.0)
- **Status:** NOT USED  
- **Details:** Form validation resolvers for react-hook-form. The contact form uses basic React state management, not react-hook-form.
- **Recommendation:** Remove from dependencies.

### `zod` (v3.23.8)
- **Status:** NOT USED
- **Details:** TypeScript schema validation library. Not used anywhere in the application code (only appears in node_modules test files).
- **Recommendation:** Remove from dependencies.

### `react-hook-form` (v7.53.0)
- **Status:** NOT USED
- **Details:** Form library. The contact form at [`app/contact/page.tsx`](app/contact/page.tsx) uses basic React useState for form handling.
- **Recommendation:** Remove from dependencies.

**Note:** These dependencies add unnecessary weight to node_modules and could potentially slow down build times.

---

## 3. Unused Metadata Files

The following metadata files are defined but NOT imported into their corresponding pages:

| File | Corresponding Page | Issue |
|------|-------------------|-------|
| [`app/advisor/metadata.ts`](app/advisor/metadata.ts) | `app/advisor/page.tsx` | Not imported (client component) |
| [`app/assessment/metadata.ts`](app/assessment/metadata.ts) | `app/assessment/page.tsx` | Not imported (client component) |
| [`app/free-security-tools/metadata.ts`](app/free-security-tools/metadata.ts) | `app/free-security-tools/page.tsx` | Not imported (client component) |
| [`app/security-tips/metadata.ts`](app/security-tips/metadata.ts) | `app/security-tips/page.tsx` | Not imported (client component) |

**Root Cause:** All these pages use `"use client"` directive, making them client components. In Next.js 14 App Router, `metadata` exports only work in server components.

**Recommendation Options:**
1. **Delete the metadata files** - If SEO metadata is adequately handled by the root layout
2. **Refactor pages** - Split into server component (for metadata) + client component (for interactivity)
3. **Use `generateMetadata`** - Move to a separate server component or layout

---

## 4. Redundant API Routes

### `app/api/robots/route.ts`
- **Status:** REDUNDANT
- **Details:** This API route reads and serves `public/robots.txt`. However, Next.js automatically serves static files from the `public` directory at the corresponding URL path.
- **Redundant because:** `public/robots.txt` already exists and is served automatically at `/robots.txt`
- **Recommendation:** Delete the API route, keep the static file.

### `app/api/sitemap/route.ts`
- **Status:** REDUNDANT
- **Details:** Same issue as robots route. Serves `public/sitemap.xml` which is already statically available.
- **Recommendation:** Delete the API route, keep the static file.

### `app/api/ads/route.ts`
- **Status:** REDUNDANT
- **Details:** Returns ads.txt content programmatically, but `public/ads.txt` already exists.
- **Recommendation:** Delete the API route, keep the static file.

**Note:** These API routes add unnecessary server-side processing for content that could be served statically.

---

## 5. Sitemap Coverage Issues

The [`public/sitemap.xml`](public/sitemap.xml) is missing several pages that exist in the application:

| Missing Page | URL Path | Suggested Priority |
|--------------|----------|-------------------|
| FAQ | `/faq` | 0.6 |
| Accessibility | `/accessibility` | 0.3 |
| Incident Response | `/incident-response` | 0.7 |
| Ransomware Guide | `/ransomware-guide` | 0.7 |
| Security Policy Template | `/security-policy-template` | 0.6 |

**Recommendation:** Update sitemap.xml to include all public pages for better SEO.

---

## 6. Development Documentation Files

The `Docs/` directory contains development documentation:

| File | Purpose | Status |
|------|---------|--------|
| [`Docs/agents.md`](Docs/agents.md) | AI architect ruleset | Development reference |
| [`Docs/frontend_design_skill.md`](Docs/frontend_design_skill.md) | Frontend design guidelines | Development reference |
| [`Docs/implementation_plan.md`](Docs/implementation_plan.md) | Project implementation tracker | Appears incomplete |

**Recommendation:** Review if these are still needed. If not, remove to clean up the repository. Consider adding to `.gitignore` if they're for local development only.

---

## 7. All Components Usage Summary

### Core Components (All Used)
| Component | Location | Usage |
|-----------|----------|-------|
| `SiteHeader` | `components/site-header.tsx` | Used in all pages |
| `SiteFooter` | `components/site-footer.tsx` | Used in layout.tsx |
| `Breadcrumbs` | `components/breadcrumbs.tsx` | Used in 10 pages |
| `ScorePieChart` | `components/score-pie-chart.tsx` | Used in assessment page |
| `ThemeProvider` | `components/theme-provider.tsx` | Used in layout.tsx |

### UI Components (from shadcn/ui)
| Component | Status | Used In |
|-----------|--------|---------|
| `accordion` | Used | assessment, faq, page, ransomware-guide, security-policy-template, security-tips |
| `alert-dialog` | Used | assessment page |
| `badge` | Used | Multiple pages |
| `button` | Used | Everywhere |
| `card` | Used | Multiple pages |
| `checkbox` | Used | incident-response page |
| **`dialog`** | **NOT USED** | - |
| `input` | Used | contact page |
| `label` | Used | assessment, contact, incident-response |
| `progress` | Used | assessment page |
| `radio-group` | Used | assessment page |
| `tabs` | Used | security-policy-template page |
| `textarea` | Used | contact page |
| `toast` | Used | Via toaster |
| `toaster` | Used | In layout |

---

## 8. Data Files Usage

All data files are actively used:

| File | Used By |
|------|---------|
| `data/faq.ts` | `app/page.tsx`, `app/faq/page.tsx` |
| `data/questions.ts` | `app/assessment/page.tsx` |
| `data/security-tools.ts` | `app/free-security-tools/page.tsx` |

---

## 9. Type Definitions Usage

All type definition files are actively used:

| File | Used By |
|------|---------|
| `types/faq.ts` | `data/faq.ts` |
| `types/quiz.ts` | `data/questions.ts`, `app/assessment/page.tsx` |
| `types/tools.ts` | `data/security-tools.ts` |

---

## Action Items Summary

### High Priority
1. Remove unused npm dependencies (`sonner`, `@hookform/resolvers`, `zod`, `react-hook-form`)
2. Delete redundant API routes (`api/robots`, `api/sitemap`, `api/ads`)

### Medium Priority
3. Delete unused `components/ui/dialog.tsx`
4. Decide on metadata files - either delete or refactor pages to use them

### Low Priority
5. Update sitemap.xml with missing pages
6. Review and potentially remove `Docs/` directory

---

## Estimated Impact

| Action | Bundle Size Impact | Maintenance Impact |
|--------|-------------------|-------------------|
| Remove unused dependencies | ~500KB in node_modules | Reduced security scanning |
| Remove redundant API routes | Minimal | Cleaner codebase |
| Remove unused UI component | Minimal | Less confusion |
| Clean up metadata files | Minimal | Less confusion |

---

## Next Steps

1. Review this report with the development team
2. Confirm which items should be removed
3. Switch to Code mode to implement the cleanup
4. Run full test suite after cleanup to ensure no regressions