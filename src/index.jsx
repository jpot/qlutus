import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { unregister } from './serviceWorker';

createRoot(document.getElementById('root')).render(<App />);

// Keep the existing cleanup for installations with a legacy service worker.
unregister();
