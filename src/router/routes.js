const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
  {
    path: "/",
    component: () => import("layouts/Main.vue"),
    children: [
      {
        path: "beranda",
        name: "Beranda",
        component: () => import("components/Beranda.vue"),
      },
      {
        path: "pengaturan",
        name: "Pengaturan",
        component: () => import("components/Pengaturan.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
