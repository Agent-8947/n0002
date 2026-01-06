# DNA Matrix Builder Project

This project was exported from DNA Matrix Builder.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: Using GitHub

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## 📁 Project Structure

```
dna-matrix-project/
├── components/          # React components
│   ├── Canvas.tsx
│   ├── Sidebar.tsx
│   ├── DataPanel.tsx
│   └── ...
├── utils/              # Utility functions
├── store.ts            # Zustand state management
├── App.tsx             # Main application
├── index.tsx           # Entry point
├── index.css           # Global styles
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies
```

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Tailwind CSS** - Styling

## 📝 License

MIT
