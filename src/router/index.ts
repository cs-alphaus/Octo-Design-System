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
      path: '/components/advance-list-item',
      name: 'AdvanceListItem',
      component: () => import('@/views/components/AdvanceListItemPage.vue')
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
    },
    {
      path: '/components/alerts',
      name: 'Alerts',
      component: () => import('@/views/components/Alerts.vue')
    },
    {
      path: '/components/banners',
      name: 'Banners',
      component: () => import('@/views/components/Banners.vue')
    },
    {
      path: '/components/cards',
      name: 'Cards',
      component: () => import('@/views/components/Cards.vue')
    },
    {
      path: '/components/card-patterns',
      name: 'CardPatterns',
      component: () => import('@/views/components/CardPatterns.vue')
    },
    {
      path: '/components/card-templates',
      name: 'CardTemplates',
      component: () => import('@/views/components/CardTemplates.vue')
    },
    {
      path: '/components/tables',
      name: 'Tables',
      component: () => import('@/views/components/Tables.vue')
    },
    // Audit Pages (Temporary)
    {
      path: '/audit/colors',
      name: 'ColorAudit',
      component: () => import('@/views/ColorAudit.vue')
    },
    {
      path: '/audit/typography',
      name: 'TypographyAudit',
      component: () => import('@/views/TypographyAudit.vue')
    }
  ]
})

export default router