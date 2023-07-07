// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,

    app: {
        head: {
            title: 'Zaincash',
            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/lara-light-indigo/theme.css'
                }
            ]
        }
    },
    build: {
        transpile: ['primevue']
    },
    script: [
        {
            strategy: 'lazyOnload',
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-93461466-1'
        },
        {
            id: 'ga-analytics',
            strategy: 'lazyOnload',
            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-93461466-1');
          `
        }
    ],
    css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss','@/assets/css/_styles.scss'],
   
   
    //// _tyles.scss 
    styleResources: {
        scss: [
          '@/assets/css/_styles.scss',
        ]
      },


    runtimeConfig: {
        apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
        public: {
           baseURL: 'http://localhost:8084', // Exposed to the frontend as well.
        }
      }
});
