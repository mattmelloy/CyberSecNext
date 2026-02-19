# Dependency Cleanup Analysis

## Executive Summary

This analysis identifies unused dependencies and UI components that can be safely removed from the CyberSecTools project to reduce bundle size and maintenance burden.

---

## Unused Dependencies

### Definitely Unused (Can Remove)

| Package | Size Impact | Notes |
|---------|-------------|-------|
| `html2canvas` | ~150KB | Not imported anywhere - was likely intended for PDF generation but jspdf is used directly |

### Used Only in Unused UI Components

These packages are only imported by UI components that are NOT used in the application:

| Package | Used In | Can Remove? |
|---------|---------|-------------|
| `embla-carousel-react` | carousel.tsx | Yes - carousel not used |
| `vaul` | drawer.tsx | Yes - drawer not used |
| `react-resizable-panels` | resizable.tsx | Yes - resizable not used |
| `input-otp` | input-otp.tsx | Yes - OTP input not used |
| `cmdk` | command.tsx | Yes - command palette not used |
| `react-day-picker` | calendar.tsx | Yes - calendar not used |

### Radix UI Packages (Unused Components)

These Radix packages are only used by unused UI components:

| Package | Used In | Can Remove? |
|---------|---------|-------------|
| `@radix-ui/react-aspect-ratio` | aspect-ratio.tsx | Yes |
| `@radix-ui/react-avatar` | avatar.tsx | Yes |
| `@radix-ui/react-collapsible` | collapsible.tsx | Yes |
| `@radix-ui/react-context-menu` | context-menu.tsx | Yes |
| `@radix-ui/react-dropdown-menu` | dropdown-menu.tsx | Yes |
| `@radix-ui/react-hover-card` | hover-card.tsx | Yes |
| `@radix-ui/react-menubar` | menubar.tsx | Yes |
| `@radix-ui/react-navigation-menu` | navigation-menu.tsx | Yes |
| `@radix-ui/react-popover` | popover.tsx | Yes |
| `@radix-ui/react-scroll-area` | scroll-area.tsx | Yes |
| `@radix-ui/react-select` | select.tsx | Yes |
| `@radix-ui/react-separator` | separator.tsx | Yes |
| `@radix-ui/react-slider` | slider.tsx | Yes |
| `@radix-ui/react-switch` | switch.tsx | Yes |
| `@radix-ui/react-toggle` | toggle.tsx | Yes |
| `@radix-ui/react-toggle-group` | toggle-group.tsx | Yes |
| `@radix-ui/react-tooltip` | tooltip.tsx | Yes |

---

## Used Dependencies (Keep)

### Core Framework
- `next` - Framework
- `react` / `react-dom` - UI library
- `typescript` - Type system
- `tailwindcss` / `autoprefixer` / `postcss` - Styling

### Used in Application
| Package | Location | Purpose |
|---------|----------|---------|
| `@google/generative-ai` | app/api/advisor/route.ts | AI chat |
| `jspdf` | app/assessment/page.tsx | PDF generation |
| `date-fns` | app/assessment/page.tsx | Date formatting |
| `react-markdown` | app/advisor/page.tsx | Markdown rendering |
| `remark-gfm` | app/advisor/page.tsx | GitHub-flavored markdown |
| `lucide-react` | Multiple | Icons |
| `next-themes` | components/theme-provider.tsx | Dark mode |
| `recharts` | components/score-pie-chart.tsx | Pie chart |
| `react-hook-form` | components/ui/form.tsx | Form handling |
| `@hookform/resolvers` | components/ui/form.tsx | Form validation |
| `zod` | Validation schemas | Schema validation |
| `sonner` | components/ui/sonner.tsx | Toast notifications (alternative to radix-toast) |

### Used Radix UI Packages
| Package | Used In | Purpose |
|---------|---------|---------|
| `@radix-ui/react-accordion` | accordion.tsx | FAQ accordions |
| `@radix-ui/react-alert-dialog` | alert-dialog.tsx | Assessment resume dialog |
| `@radix-ui/react-checkbox` | checkbox.tsx | Incident response checklist |
| `@radix-ui/react-dialog` | dialog.tsx, sheet.tsx | Modal dialogs |
| `@radix-ui/react-label` | label.tsx, form.tsx | Form labels |
| `@radix-ui/react-progress` | progress.tsx | Assessment progress |
| `@radix-ui/react-radio-group` | radio-group.tsx | Assessment questions |
| `@radix-ui/react-slot` | button.tsx | Button component |
| `@radix-ui/react-tabs` | tabs.tsx | Policy templates tabs |
| `@radix-ui/react-toast` | toast.tsx | Toast notifications |

### Utilities
| Package | Purpose |
|---------|---------|
| `class-variance-authority` | Component variants |
| `clsx` | Conditional classes |
| `tailwind-merge` | Merge Tailwind classes |

---

## Unused UI Component Files (Can Delete)

These files in `components/ui/` are not imported anywhere in the app:

```
components/ui/alert.tsx
components/ui/aspect-ratio.tsx
components/ui/avatar.tsx
components/ui/breadcrumb.tsx (we have custom breadcrumbs.tsx)
components/ui/calendar.tsx
components/ui/carousel.tsx
components/ui/chart.tsx
components/ui/collapsible.tsx
components/ui/command.tsx
components/ui/context-menu.tsx
components/ui/drawer.tsx
components/ui/dropdown-menu.tsx
components/ui/form.tsx (not used, but keep for future forms)
components/ui/hover-card.tsx
components/ui/input-otp.tsx
components/ui/menubar.tsx
components/ui/navigation-menu.tsx
components/ui/pagination.tsx
components/ui/popover.tsx
components/ui/resizable.tsx
components/ui/scroll-area.tsx
components/ui/select.tsx
components/ui/separator.tsx
components/ui/sheet.tsx
components/ui/skeleton.tsx
components/ui/slider.tsx
components/ui/sonner.tsx (not used, using toast instead)
components/ui/switch.tsx
components/ui/table.tsx
components/ui/toggle.tsx
components/ui/toggle-group.tsx
components/ui/tooltip.tsx
```

---

## Recommended Actions

### Phase 1: Remove Unused Packages (Safe)

Remove these packages from `package.json`:

```json
{
  "dependencies": {
    // REMOVE:
    "html2canvas": "^1.4.1",
    "embla-carousel-react": "^8.3.0",
    "vaul": "^0.9.9",
    "react-resizable-panels": "^2.1.3",
    "input-otp": "^1.2.4",
    "cmdk": "^1.0.0",
    "react-day-picker": "^8.10.1",
    
    // REMOVE Radix (unused):
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2"
  }
}
```

### Phase 2: Delete Unused UI Components

Delete the unused component files listed above.

### Phase 3: Keep for Future Use (Optional)

Consider keeping these even if not currently used:
- `form.tsx` - May be needed for future form implementations
- `select.tsx` - Commonly needed component
- `switch.tsx` - May be needed for settings
- `table.tsx` - May be needed for data display

---

## Estimated Bundle Size Reduction

| Category | Packages Removed | Est. Size Saved |
|----------|-----------------|-----------------|
| Unused utilities | 1 (html2canvas) | ~150KB |
| Unused UI libs | 6 | ~200KB |
| Unused Radix | 18 | ~300KB |
| **Total** | **25 packages** | **~650KB** |

---

## Cleaned package.json

After cleanup, the dependencies should look like:

```json
{
  "dependencies": {
    "@google/generative-ai": "^0.21.0",
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@types/node": "^20.6.2",
    "@types/react": "^18.2.22",
    "@types/react-dom": "^18.2.7",
    "autoprefixer": "^10.4.15",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "jspdf": "^2.5.1",
    "lucide-react": "^0.446.0",
    "next": "^14.2.20",
    "next-themes": "^0.3.0",
    "postcss": "^8.4.31",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.53.0",
    "react-markdown": "^9.0.1",
    "recharts": "^2.12.7",
    "remark-gfm": "^4.0.0",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.2.2",
    "zod": "^3.23.8"
  }
}
```

**Reduction: 39 packages → 38 packages** (removing 25 unused, keeping essential)

---

## Implementation Steps

1. Create backup branch
2. Update package.json with cleaned dependencies
3. Delete unused UI component files
4. Run `npm install` to update lock file
5. Run `npm run build` to verify no errors
6. Test application functionality

---

*Analysis Date: February 2026*
