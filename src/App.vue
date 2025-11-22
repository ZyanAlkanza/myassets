<template>
  <div class="flex" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    <!-- <div class="p-3">
      <ul class="menu bg-base-200 rounded-box w-56 h-full">
        <li>
          <div class="flex justify-center mb-6">
            <img src="/public/logo.svg" alt="logo" style="width: 40px;">
            <span style="font-size: 20px; font-weight: 500;">My Assets</span>
          </div>
        </li>
        <li>
          <router-link to="/" class="p-3" :class="$route.name == 'beranda' ? 'menu-active' : '' ">
            <i class="ri-home-line ri-lg"></i>
            Beranda
          </router-link>
        </li>
        <li>
          <details>
            <summary>
              <i class="ri-stock-line ri-lg"></i>
              Saham
            </summary>
            <ul>
              <li>
                <router-link to="/daftar-saham" class="p-3" :class="$route.name == 'daftar_saham' ? 'menu-active' : '' ">
                  <i class="ri-list-check ri-lg"></i>
                  Daftar Saham
                </router-link>
              </li>
              <li>
                <router-link to="/transaksi-saham" class="p-3" :class="$route.name == 'transaksi_saham' ? 'menu-active' : '' ">
                  <i class="ri-exchange-funds-fill ri-lg"></i>
                  Transaksi Saham
                </router-link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <router-link to="/pengaturan" class="p-3" :class="$route.name == 'pengaturan' ? 'menu-active' : '' ">
            <i class="ri-settings-line ri-lg"></i>
            Pengaturan
          </router-link>
        </li>
        <li class="text-red-500">
          <router-link to="/keluar" class="p-3" :class="$route.name == 'keluar' ? 'menu-active' : '' ">
            <i class="ri-logout-box-line ri-lg"></i>
            Keluar
          </router-link>
        </li>
      </ul>
    </div> -->

    <div class="w-full">
      <drawer />
    </div>
    <!-- <div class="p-3">
      <router-view />
    </div> -->
  </div>
</template>

<script>
import drawer from './components/utilities/drawer.vue';

export default {
  components: {
    drawer
  },
  data() {
    return {
      
    }
  },
  mounted() {
  },
}
</script>
