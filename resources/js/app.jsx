import './bootstrap';
import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp, InertiaApp} from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {InertiaProgress} from '@inertiajs/progress'
import {render} from "react-dom";


InertiaProgress.init({
    color: '#ED8936',
    showSpinner: true
});


createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        createRoot(el)
            .render(<App {...props} />)
    },
 })
