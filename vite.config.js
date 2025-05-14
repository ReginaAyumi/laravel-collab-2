// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//         tailwindcss(),
//     ],
// });


import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: '127.0.0.1', // ← Ganti dari default [::1] ke 127.0.0.1
        port: 5173
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/js/pages/Chatbot.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
