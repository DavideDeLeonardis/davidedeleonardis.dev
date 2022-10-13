import { useTranslation } from 'react-i18next';

const useProjects = () => {
   const { t } = useTranslation();

   return [
      {
         // deliveboo
         id: 480318106,
         name: 'Deliveboo',
         image: require('../images/projects/deliveboo.png'),
         video: null,
         description: t('projects.deliveboo.short_d'),
         long_description: t('projects.deliveboo.long_d'),
         topics: [
            'Laravel',
            'MySQL',
            'Vuejs',
            'Authentication',
            'Braintree',
            'SCSS',
         ],
         languages: ['PHP', 'Vue'],
         url: 'https://lit-atoll-37130.herokuapp.com',
         github_url: 'https://github.com/DavideDeLeonardis/deliveboo',
         isFeatured: true,
         isMain: true,
         isArchived: false,
         hasDetails: false,
      },
      {
         // react-TS-select-component
         id: 34117123,
         name: 'Custom Select Component',
         image: require('../images/projects/select-component.png'),
         video: null,
         description: t('projects.custom_select_component.short_d'),
         long_description: t('projects.custom_select_component.long_d'),
         topics: ['React', 'TypeScript', 'Accessibility', 'SCSS'],
         languages: ['React', 'TypeScript'],
         url: 'https://react-ts-custom-select.web.app',
         github_url:
            'https://github.com/DavideDeLeonardis/react-TS-select-component',
         isFeatured: false,
         isMain: true,
         isArchived: false,
         hasDetails: false,
      },
      {
         // laravel-boolpress
         id: 464647959,
         name: 'Laravel Boolpress',
         image: require('../images/projects/boolpress.png'),
         video: require('../images/projects/boolpress-video.mov'),
         description: t('projects.laravel_boolpress.short_d'),
         long_description: t('projects.laravel_boolpress.long_d'),
         topics: [
            'Laravel',
            'Blade',
            'MySQL',
            'Vuejs',
            'Authentication',
            'SCSS',
         ],
         languages: ['PHP', 'Vue'],
         url: 'https://limitless-basin-36680.herokuapp.com',
         github_url: 'https://github.com/DavideDeLeonardis/laravel-boolpress',
         isFeatured: false,
         isMain: true,
         isArchived: false,
         hasDetails: false,
      },
      {
         // react-amazon
         id: 497369439,
         name: 'React Amazon',
         image: require('../images/projects/react-amazon.png'),
         description: t('projects.react_amazon.short_d'),
         long_description: null,
         topics: ['React', 'React context', 'SCSS', 'Firebase database'],
         languages: ['React'],
         url: 'https://react--clone-d9242.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/amazon-react',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // react-auth-test
         id: 507615722,
         name: 'React Auth',
         image: require('../images/projects/react-auth-test.png'),
         description: t('projects.react_auth_test.short_d'),
         long_description: null,
         topics: ['React', 'React context', 'SCSS', 'Firebase auth'],
         languages: ['React'],
         url: null,
         github_url: 'https://github.com/DavideDeLeonardis/react-auth',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // vue-netflix
         id: 449656740,
         name: 'Vue Netflix',
         image: require('../images/projects/vue-netflix.png'),
         description: t('projects.vue_netflix.short_d'),
         long_description: t('projects.vue_netflix.long_d'),
         topics: ['Vuejs', 'SCSS', 'API'],
         languages: ['Vue'],
         url: 'https://vue-boolflix.web.app',
         github_url: 'https://github.com/DavideDeLeonardis/vue-netflix',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // portfolio V-1.0
         id: 521026706,
         name: 'Portfolio V1',
         image: require('../images/projects/portfolio-v1.0.png'),
         description: t('projects.portfolio_v1.short_d'),
         long_description: null,
         topics: ['React', 'Custom hooks', 'SCSS', 'Portfolio'],
         languages: ['React'],
         url: null,
         github_url:
            'https://github.com/DavideDeLeonardis/davidedeleonardis.dev-V1.0',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: true,
      },
      {
         // avada-consultant
         id: 451409349,
         name: 'Avada Consultant',
         image: require('../images/projects/vue-proj-vuejs.png'),
         description: t('projects.avada_consultant.short_d'),
         long_description: null,
         topics: ['Vue.js', 'SCSS'],
         languages: ['Vue'],
         url: 'https://proj-vuejs.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/avada-consultant',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // vue-instagram
         id: 507411259,
         name: 'Vue Instagram',
         image: require('../images/projects/vue-instagram.png'),
         description: t('projects.vue_instagram.short_d'),
         long_description: null,
         topics: ['Vue.js', 'SCSS'],
         languages: ['Vue'],
         url: 'https://vue-boolgram.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/vue-instagram',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // vue-boolzapp
         id: 440119535,
         name: 'Vue Boolzapp',
         image: require('../images/projects/vue-boolzapp.png'),
         description: t('projects.vue_boolzapp.short_d'),
         long_description: null,
         topics: ['HTML', 'CSS', 'Vue.js'],
         languages: ['Vue'],
         url: 'https://vue-boolzapp.firebaseapp.com',
         github_url: 'https://github.com/DavideDeLeonardis/boolzapp-vue',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // laravel-comics
         id: 458602990,
         name: 'Laravel Comics',
         image: require('../images/projects/laravel-comics.png'),
         description: t('projects.laravel_comics.short_d'),
         long_description: null,
         topics: ['Laravel', 'Blade'],
         languages: ['Laravel'],
         url: 'https://ancient-spire-31420.herokuapp.com/',
         github_url: 'https://github.com/DavideDeLeonardis/laravel-comics',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
      {
         // minefield-game
         id: 434247273,
         name: 'JS Minefield game',
         image: require('../images/projects/minefield-game.png'),
         description: t('projects.minefield_game.short_d'),
         long_description: null,
         topics: ['HTML', 'CSS', 'JavaScript'],
         languages: ['JavaScript'],
         url: 'https://minefield-game-4f94b.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/minefield-game',
         isFeatured: false,
         isMain: false,
         isArchived: false,
         hasDetails: false,
      },
   ];
};

export default useProjects;
