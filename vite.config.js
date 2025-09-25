import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'; // Impor plugin

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(),VitePWA({
		// Konfigurasi PWA, termasuk fitur critical CSS
		strategies: 'generateSW', // Atau 'injectManifest'
		registerType: 'autoUpdate',
		includeAssets: ['favicon.ico', 'apple-icon-144x144.png'],
		manifest: {
			name: 'Car Rental',
			short_name: 'Car Rental',
			theme_color: '#ffffff',
			icons: [
				// Konfigurasi ikon
			]
		},
		injectRegister: 'auto',
		// Bagian ini yang mengurus critical CSS
		critical: true
	})
],
	server: {
		fs: {
			// biar dev server bisa akses file route
			allow: ['.']
		},
		historyApiFallback: true, // ini penting supaya reload route dinamis tidak 404
		
	}
});
