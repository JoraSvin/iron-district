import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative assets keep the production build usable when opened directly from disk.
export default defineConfig({ base: './', plugins: [react()] });

