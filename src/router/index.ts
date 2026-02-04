import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/foundations/introduction'
    },
    {
      path: '/foundations',
      children: [
        {
          path: 'introduction',
          name: 'Introduction',
          component: () => import('@/views/foundations/Introduction.vue')
        },
        {
          path: 'colors',
          name: 'Colors',
          component: () => import('@/views/foundations/Colors.vue')
        },
        {
          path: 'typography',
          name: 'Typography',
          component: () => import('@/views/foundations/Typography.vue')
        },
        {
          path: 'spacing',
          name: 'Spacing',
          component: () => import('@/views/foundations/Spacing.vue')
        }
      ]
    }
  ]
})

export default router