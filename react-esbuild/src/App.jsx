import { createRoot } from 'react-dom/client'
import * as React from 'react'

import { Greet } from './Greet'

const liveReload = true;

const App = () => <div className="flex p-4 text-red justify-center"><Greet /></div>

if (liveReload) {
    new EventSource('/esbuild').addEventListener('change', () => location.reload())
}

// Render your React component instead
const root = createRoot(document.getElementById('app-root'));
root.render(<App />);