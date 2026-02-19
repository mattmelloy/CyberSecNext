# Footer Logo and Favicon Update Plan

## Overview
Update the CyberSecTools footer logo to be larger with proper padding, and redesign the favicon to be more distinctive with a shield + checkmark design in brand colors.

## Current State Analysis

### Footer Logo ([`components/site-footer.tsx`](components/site-footer.tsx:11-15))
- **Icon Size**: `h-5 w-5` (20x20px) - too small
- **Position**: Flush left within grid column, no padding
- **Layout**: 4-column grid with `container mx-auto px-4`

### Favicon ([`public/favicon.svg`](public/favicon.svg:1-3))
- **Design**: Simple shield outline only
- **Color**: `stroke="currentColor"` - inherits color, appears black/white
- **Style**: Minimal, lacks visual impact

### Brand Colors ([`app/globals.css`](app/globals.css:13))
- **Primary**: `hsl(190 60% 22%)` - Dark teal (#1D6B7A approx)
- **Primary (dark mode)**: `hsl(190 55% 62%)` - Lighter teal
- **Accent**: `hsl(28 88% 60%)` - Orange (#E8944A approx)

---

## Implementation Plan

### Task 1: Update Footer Logo

**File**: [`components/site-footer.tsx`](components/site-footer.tsx)

**Changes**:
1. Increase icon size from `h-5 w-5` to `h-8 w-8` (32x32px)
2. Add left padding to the logo container div
3. Optionally increase text size for better visual balance

**Current Code** (lines 11-15):
```tsx
<div>
  <div className="flex items-center gap-2">
    <ShieldCheck className="h-5 w-5 text-primary" />
    <span className="font-semibold">CyberSecTools</span>
  </div>
  <p className="text-sm text-muted-foreground mt-3">
    Free cyber security guidance and assessments designed for Australian
    small businesses.
  </p>
</div>
```

**Proposed Code**:
```tsx
<div className="pl-2">
  <div className="flex items-center gap-2">
    <ShieldCheck className="h-8 w-8 text-primary" />
    <span className="font-semibold text-lg">CyberSecTools</span>
  </div>
  <p className="text-sm text-muted-foreground mt-3">
    Free cyber security guidance and assessments designed for Australian
    small businesses.
  </p>
</div>
```

---

### Task 2: Redesign Favicon

**File**: [`public/favicon.svg`](public/favicon.svg)

**Design Requirements**:
- Shield shape with checkmark inside
- Solid fill using brand teal color
- High contrast for visibility in browser tabs
- Works well at small sizes (16x16, 32x32)

**Proposed SVG Design**:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <!-- Shield background -->
  <path d="M16 2L4 7v8c0 7.7 5.1 14.9 12 17 6.9-2.1 12-9.3 12-17V7L16 2z" fill="#1D6B7A"/>
  <!-- Checkmark -->
  <path d="M12 16l3 3 6-6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

**Color Values**:
- Shield fill: `#1D6B7A` (brand primary teal)
- Checkmark: `#FFFFFF` (white for contrast)

**Alternative with rounded shield** (more modern look):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <!-- Rounded shield background -->
  <path d="M16 2L4 7v8c0 7.7 5.1 14.9 12 17 6.9-2.1 12-9.3 12-17V7L16 2z" fill="#1D6B7A" rx="2"/>
  <!-- Checkmark with better proportions -->
  <path d="M10 16l4 4 8-8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Visual Comparison

### Footer Logo
| Aspect | Before | After |
|--------|--------|-------|
| Icon Size | 20x20px | 32x32px |
| Left Padding | None | 8px (pl-2) |
| Text Size | Default | Larger (text-lg) |

### Favicon
| Aspect | Before | After |
|--------|--------|-------|
| Design | Shield outline only | Shield + checkmark |
| Fill | None (stroke only) | Solid teal fill |
| Color | CurrentColor (black) | Brand teal (#1D6B7A) |
| Visibility | Low | High contrast |

---

## Files to Modify

1. [`components/site-footer.tsx`](components/site-footer.tsx) - Footer logo styling
2. [`public/favicon.svg`](public/favicon.svg) - Favicon design

---

## Testing Checklist

- [ ] Verify footer logo looks balanced on desktop
- [ ] Verify footer logo looks balanced on mobile
- [ ] Check favicon visibility in browser tab (light mode)
- [ ] Check favicon visibility in browser tab (dark mode)
- [ ] Verify favicon in bookmarks
- [ ] Test across different browsers (Chrome, Firefox, Safari)
