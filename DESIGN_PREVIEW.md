# 🎨 Frontend Design Preview

## Visual Design Overview

This document describes the visual appearance of the AI News Podcast Agent frontend.

---

## 🎨 Overall Look & Feel

**Style**: Clean, minimal, professional AI-lab aesthetic
**Color Scheme**: Neutral blues, grays, and whites
**Vibe**: Enterprise-grade, trustworthy, modern

---

## 📱 Layout Structure

### Header (Top Bar)
```
┌────────────────────────────────────────────────────────────┐
│  [🎙️ Icon]  AI News Podcast Agent              ●  Online │
│              Automated Research & Generation                │
└────────────────────────────────────────────────────────────┘
```

- Sticky header with backdrop blur
- Logo with gradient blue icon
- System status indicator (green dot)
- Clean typography

---

### Hero Section
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│         Autonomous AI News Research                        │
│                                                            │
│    Enter any AI or technology topic. Our multi-agent      │
│    system will research news, analyze market trends...     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- Centered text
- Large, bold heading
- Descriptive subtitle
- Soft gray text

---

### Topic Input Card
```
┌────────────────────────────────────────────────────────────┐
│  Research Topic                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  e.g., AI agents in healthcare...                    │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ☐ Skip podcast generation (faster)                       │
│  ☐ Skip financial analysis                                │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │       [⚡] Generate Podcast                          │ │
│  └──────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

- Glass-morphism card (semi-transparent white)
- Large input field
- Checkboxes for options
- Primary blue button
- Smooth hover effects

---

### Job Status Card (Active)
```
┌────────────────────────────────────────────────────────────┐
│  [●] Processing   AI agents in healthcare      ⏱ 45s     │
│                                                            │
│  Analyzing market trends...                                │
│                                                            │
│                                     [New Research]         │
└────────────────────────────────────────────────────────────┘
```

- Status badge with icon and color
- Topic name
- Progress text
- Execution timer
- Action buttons

---

### Agent Timeline (Left Column)
```
┌─────────────────────────────────┐
│  📋 Agent Pipeline              │
│                                 │
│  ● ─┐  News Research        ✓  │
│     │  Searching AI news...     │
│     │                           │
│  ● ─┤  Financial Analysis   ⟳  │
│     │  Enriching with market... │
│     │                           │
│  ○ ─┤  Report Generation    ○  │
│     │  Creating structured...   │
│     │                           │
│  ○ ─┘  Podcast Generation    ○  │
│        Generating audio...      │
│                                 │
│  Progress: 2 / 4 steps         │
└─────────────────────────────────┘
```

- Visual pipeline with connectors
- Icons for each step
- Status indicators:
  - ✓ Green = Completed
  - ⟳ Blue animated = Active
  - ○ Gray = Pending
  - ✗ Red = Failed
- Progress counter at bottom

---

### Report Viewer (Right Column)
```
┌─────────────────────────────────────────────────┐
│  📄 Research Report          [↓] Download      │
│                                                 │
│  # AI News Report: Healthcare                  │
│                                                 │
│  ## Executive Summary                          │
│  AI agents are rapidly moving beyond...        │
│                                                 │
│  ## Key Insights                               │
│  1. Multi-AI agents enhance...                 │
│  2. Industry experts view...                   │
│                                                 │
│  [Scrollable content...]                       │
│                                                 │
│               Show full report ↓               │
└─────────────────────────────────────────────────┘
```

- Markdown formatted content
- Expandable/collapsible
- Scroll bar for long content
- Download button
- Clean typography with hierarchy

---

### Audio Player (Right Column)
```
┌─────────────────────────────────────────────────┐
│  🎙️ Podcast Audio              [↓] Download   │
│                                                 │
│  ━━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  2:34                                    7:12  │
│                                                 │
│  [▶] [🔊]────                ai-agents.mp3     │
│                                                 │
│  ▂▃▅▇▅▃▂▃▅▇▇▅▃▂▃▅▇▅▃▂▃▅▇▅▃▂ (waveform)       │
└─────────────────────────────────────────────────┘
```

- Custom styled player
- Progress bar with seek
- Play/pause button (large, circular, blue)
- Volume slider
- Time display (current / total)
- Decorative waveform visualization
- Download button

---

### Empty State (Before Job)
```
┌─────────────────────────────────────────────────┐
│                                                 │
│              [⚡ Icon in circle]                │
│                                                 │
│             Ready to Generate                   │
│                                                 │
│  Enter a topic above to start the AI research  │
│  and podcast generation process. Our agent     │
│  system will handle everything automatically.  │
│                                                 │
│  ┌─────────┬─────────┐  ┌─────────┬─────────┐ │
│  │📰 News  │💰 Market│  │📝 Full  │🎙️ Pod- │ │
│  │Research │Analysis │  │Report   │cast     │ │
│  └─────────┴─────────┘  └─────────┴─────────┘ │
└─────────────────────────────────────────────────┘
```

- Centered icon and text
- Feature grid showing capabilities
- Inviting, informative tone
- Clean spacing

---

### Footer
```
┌────────────────────────────────────────────────────────────┐
│  © 2026 AI News Podcast Agent                             │
│  Powered by Google Gemini AI                              │
│                                                            │
│  [API Docs]  [System Health]  [Statistics]               │
└────────────────────────────────────────────────────────────┘
```

- Simple, unobtrusive
- Links to API resources
- Copyright and attribution

---

## 🎨 Color Usage

### Status Colors
- **Pending**: Yellow/Amber (`bg-yellow-100`, `text-yellow-800`)
- **Processing**: Blue (`bg-blue-100`, `text-blue-800`)
- **Completed**: Green (`bg-green-100`, `text-green-800`)
- **Failed**: Red (`bg-red-100`, `text-red-800`)

### UI Elements
- **Primary Actions**: Blue (#0ea5e9)
- **Backgrounds**: Slate 50 (#f8fafc)
- **Cards**: White with blur
- **Text**: Slate 900 (headings), Slate 600 (body)
- **Borders**: Slate 200

---

## 📐 Spacing & Layout

### Desktop (> 1024px)
```
┌──────────────────────────────────────────────┐
│              Header (full width)             │
├──────────────────────────────────────────────┤
│         Topic Input (centered)               │
├───────────────────┬──────────────────────────┤
│  Agent Timeline   │  Report + Audio          │
│  (Left Column)    │  (Right Column)          │
│                   │                          │
│  Fixed width      │  Flexible width          │
│                   │                          │
└───────────────────┴──────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────┐
│    Header    │
├──────────────┤
│ Topic Input  │
├──────────────┤
│   Timeline   │
├──────────────┤
│    Report    │
├──────────────┤
│    Audio     │
└──────────────┘
```
- Stacked vertically
- Full width components
- Touch-friendly spacing

---

## ✨ Animations

### Loading States
- **Spinner**: Rotating circle (processing)
- **Pulse**: Soft breathing effect (waiting)
- **Dots**: Animated ellipsis (loading...)

### Transitions
- **Hover**: 300ms smooth color change
- **Expand/Collapse**: 300ms height transition
- **Progress Bar**: Smooth width animation
- **Status Changes**: Color fade transitions

### Active Elements
- **Timeline Active Step**: Pulsing blue background
- **System Online**: Pulsing green dot
- **Waveform**: Opacity animation during playback

---

## 🎯 Interactive Elements

### Buttons
- **Primary**: Blue background, white text, shadow
- **Secondary**: Gray background, dark text
- **Hover**: Slightly darker, lift effect
- **Disabled**: Gray, reduced opacity, no hover

### Inputs
- **Focus**: Blue ring, border highlight
- **Validation**: Red border on error
- **Placeholder**: Light gray text

### Cards
- **Hover**: Subtle lift with shadow increase
- **Glass Effect**: Semi-transparent with backdrop blur
- **Border**: 1px solid light gray

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (flexible)
- **Desktop**: > 1024px (two columns)
- **Max Width**: 1280px (centered)

---

## 🎨 Typography

### Headings
- **H1**: 2rem (32px), bold
- **H2**: 1.5rem (24px), semibold
- **H3**: 1.25rem (20px), medium

### Body
- **Normal**: 1rem (16px), regular
- **Small**: 0.875rem (14px), regular
- **Tiny**: 0.75rem (12px), medium

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif

---

## ✨ Special Effects

### Glass Morphism
- Semi-transparent white background
- Backdrop blur (8px)
- Subtle border
- Soft shadow

### Shadows
- **Light**: `shadow-sm` (minimal)
- **Medium**: `shadow-lg` (cards)
- **Strong**: `shadow-xl` (elevated elements)

### Gradients
- **Background**: Subtle blue-to-gray gradient
- **Logo**: Blue-to-indigo gradient
- **Accents**: Used sparingly

---

This design creates a **professional, trustworthy, modern** experience that feels like working with an AI system—not just filling out a form.