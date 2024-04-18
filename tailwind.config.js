/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                orange: '#FFA500',
             primary: '#4763E4',
            success: '#166534',
            error: '#DC2626',
        },
    },
}
,
plugins: [],
}

