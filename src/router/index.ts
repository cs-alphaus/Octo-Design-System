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
    },
    {
      path: '/components',
      children: [
        {
          path: 'avatar',
          name: 'Avatar',
          component: () => import('@/views/components/AvatarPage.vue')
        },
        {
          path: 'breadcrumbs',
          name: 'Breadcrumbs',
          component: () => import('@/views/components/BreadcrumbsPage.vue')
        },
        {
          path: 'button',
          name: 'Button',
          component: () => import('@/views/components/ButtonPage.vue')
        },
        {
          path: 'calendar',
          name: 'Calendar',
          component: () => import('@/views/components/CalendarPage.vue')
        },
        {
          path: 'chip',
          name: 'Chip',
          component: () => import('@/views/components/ChipPage.vue')
        },
        {
          path: 'color-card',
          name: 'ColorCard',
          component: () => import('@/views/components/ColorCardPage.vue')
        },
        {
          path: 'copy-button',
          name: 'CopyButton',
          component: () => import('@/views/components/CopyButtonPage.vue')
        },
        {
          path: 'dialog',
          name: 'Dialog',
          component: () => import('@/views/components/DialogPage.vue')
        },
        {
          path: 'empty-state',
          name: 'EmptyState',
          component: () => import('@/views/components/EmptyStatePage.vue')
        },
        {
          path: 'icon-button',
          name: 'IconButton',
          component: () => import('@/views/components/IconButtonPage.vue')
        },
        {
          path: 'info-card',
          name: 'InfoCard',
          component: () => import('@/views/components/InfoCardPage.vue')
        },
        {
          path: 'label-value',
          name: 'LabelValue',
          component: () => import('@/views/components/LabelValuePage.vue')
        },
        {
          path: 'loading-overlay',
          name: 'LoadingOverlay',
          component: () => import('@/views/components/LoadingOverlayPage.vue')
        },
        {
          path: 'menu',
          name: 'Menu',
          component: () => import('@/views/components/MenuPage.vue')
        },
        {
          path: 'search-input',
          name: 'SearchInput',
          component: () => import('@/views/components/SearchInputPage.vue')
        },
        {
          path: 'title',
          name: 'Title',
          component: () => import('@/views/components/TitlePage.vue')
        }
      ]
    }
  ]
})

export default router