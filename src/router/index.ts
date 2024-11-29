import { createRouter, createWebHistory } from 'vue-router';
import ThemeEditor from '../views/ThemeEditor.vue';
import SavedThemes from '../views/SavedThemes.vue';
import Documentation from '../views/Documentation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'editor',
      component: ThemeEditor,
    },
    {
      path: '/saved',
      name: 'saved',
      component: SavedThemes,
    },
    {
      path: '/docs',
      name: 'documentation',
      component: Documentation,
    },
  ],
});

export default router;