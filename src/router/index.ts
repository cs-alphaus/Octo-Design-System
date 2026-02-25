import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/components/chips',
      name: 'Chips',
      component: () => import('@/views/components/Chips.vue')
    },
    {
      path: '/components/dialog',
      name: 'Dialog',
      component: () => import('@/views/components/Dialog.vue')
    }
  ]
})

export default router