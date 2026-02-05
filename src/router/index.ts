import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/foundations/introduction'
    },
    {
      path: '/foundations/introduction',
      name: 'Introduction',
      component: () => import('@/views/foundations/Introduction.vue')
    },
    {
      path: '/foundations/colors',
      name: 'Colors',
      component: () => import('@/views/foundations/Colors.vue')
    },
    {
      path: '/foundations/typography',
      name: 'Typography',
      component: () => import('@/views/foundations/Typography.vue')
    },
    {
      path: '/foundations/spacing',
      name: 'Spacing',
      component: () => import('@/views/foundations/Spacing.vue')
    },
    {
      path: '/components/custom-list-item',
      name: 'CustomListItem',
      component: () => import('@/views/components/CustomListItemPage.vue')
    }
  ]
})

export default router