
export default [
  {
    path: '/',
    redirect: '/live2d/pio'
  },
  {
    path: '/live2d/pio',
    meta: {
      title: 'live2d-pio'
    },
    component: () => import('../pages/live2d/pio.vue')
  },
  {
    path: '/text-comparision',
    meta: {
      title: 'text-comparision'
    },
    component: () => import('../pages/text-comparison/index.vue')
  },
]
