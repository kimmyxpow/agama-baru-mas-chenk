import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
} satisfies Config
