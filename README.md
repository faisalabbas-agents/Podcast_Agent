# AI News Podcast Agent - Frontend

Professional React-based frontend for the AI News Podcast Agent system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Prerequisites

- Node.js 18+ and npm
- Backend API running on `http://localhost:8000`

## 🏗️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **React Markdown** - Markdown rendering

## 🎨 Features

### ✨ Professional UI/UX
- Clean, minimal design
- AI-lab aesthetic
- Fully responsive (mobile + desktop)
- Smooth animations & transitions

### 🤖 Agentic Experience
- Real-time agent progress tracking
- Step-by-step pipeline visualization
- Live status updates
- Intelligent loading states

### 📊 Complete Integration
- Full API integration with backend
- Job creation and monitoring
- Report viewing with Markdown rendering
- Custom audio player with controls
- File download capabilities

### 🎯 Core Components

#### Header
- Branding and navigation
- System status indicator

#### TopicInput
- Topic entry with validation
- Configuration options
- Submit with loading states

#### AgentTimeline
- Visual pipeline progress
- Step-by-step status
- Active step highlighting
- Completion tracking

#### ReportViewer
- Markdown rendering
- Expandable/collapsible
- Download functionality
- Error handling

#### AudioPlayer
- Custom-styled player
- Play/pause controls
- Progress seeking
- Volume control
- Download button

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── podcastApi.js       # API client
│   ├── components/
│   │   ├── Header.jsx          # App header
│   │   ├── TopicInput.jsx      # Topic form
│   │   ├── AgentTimeline.jsx   # Progress tracking
│   │   ├── ReportViewer.jsx    # Markdown viewer
│   │   ├── AudioPlayer.jsx     # Audio controls
│   │   └── StatusBadge.jsx     # Status indicator
│   ├── pages/
│   │   └── Dashboard.jsx       # Main page
│   ├── hooks/
│   │   └── usePodcastAgent.js  # Agent state management
│   ├── utils/
│   │   └── formatters.js       # Utility functions
│   ├── styles/
│   │   └── index.css          # Global styles
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🔌 API Endpoints Used

- `POST /api/v1/jobs/create` - Create research job
- `GET /api/v1/jobs/{job_id}` - Get job status
- `GET /api/v1/reports/{filename}` - Download report
- `GET /api/v1/podcasts/{filename}` - Stream/download podcast
- `GET /api/v1/health` - Health check
- `GET /api/v1/stats` - API statistics

## ⚙️ Configuration

### Vite Proxy
The dev server proxies `/api` requests to `http://localhost:8000`.

To change the backend URL, edit `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://your-backend-url:8000',
        changeOrigin: true,
      }
    }
  }
})
```

### Tailwind Theme
Customize colors and styling in `tailwind.config.js`.

## 🎯 Usage Workflow

1. **Enter Topic**: User enters an AI/tech topic
2. **Submit**: Create job via API
3. **Monitor**: Real-time progress tracking
4. **View Results**:
   - Read generated report
   - Listen to podcast
   - Download files

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Slate**: Gray tones
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Glass morphism cards
- Soft shadows
- Smooth transitions
- Consistent spacing

## 🔧 Development

### Hot Module Replacement
Changes are reflected instantly during development.

### Component Development
Each component is self-contained with:
- Props validation
- Error handling
- Loading states
- Responsive design

### State Management
Uses React hooks for state:
- `usePodcastAgent` - Main agent logic
- Local state in components

## 📦 Building

```bash
# Production build
npm run build

# Output in dist/ folder
# Deploy dist/ to your hosting service
```

## 🚀 Deployment

### Static Hosting
Deploy the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
Set backend URL in production:
- Update vite.config.js target
- Or use environment-specific configs

## 🐛 Troubleshooting

### Backend Connection Issues
- Ensure backend is running on port 8000
- Check proxy configuration in vite.config.js
- Verify CORS settings on backend

### Build Errors
- Clear node_modules and reinstall
- Check Node.js version (18+)
- Verify all dependencies are installed

### Styling Issues
- Ensure Tailwind is processing correctly
- Check postcss.config.js
- Verify imports in index.css

## 📝 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- Check API documentation at `/api/v1/docs`
- Review backend logs
- Inspect browser console for errors

---

**Built with ❤️ using React + Vite + Tailwind CSS**