import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'beranda',
    component: () => import('@/views/Beranda.vue')
  },
  {
    path: '/daftar_saham',
    name: 'daftar_saham',
  },
  {
    path: '/transaksi_saham',
    name: 'transaksi_saham',
  },
  {
    path: '/daftar_crypto',
    name: 'daftar_crypto',
  },
  {
    path: '/transaksi_saham',
    name: 'transaksi_saham',
  },
  {
    path: '/pengaturan',
    name: 'pengaturan',
    component: () => import('@/views/Pengaturan.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
