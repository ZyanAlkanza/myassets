<template>
  <div style="font-family: 'Plus Jakarta Sans', sans-serif">
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <!-- Navbar -->
      <div class="drawer-content">
        <nav class="navbar w-full">
          <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <i class="ri-menu-line ri-lg"></i>
          </label>
          <span class="font-semibold" style="text-transform: capitalize;">{{ this.$route.name }}</span>
        </nav>

        <!-- Content -->
        <div class="px-4">
          <router-view />
        </div>
      </div>

      <div class="drawer-side is-drawer-close:overflow-visible">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-15 is-drawer-open:w-60">
          <ul class="menu w-full grow text-center">
            <div class="flex flex-row py-4 mb-2 justify-center">
              <img src="/public/logo.svg" alt="logo" class="w-8">
              <span class="ml-2 text-xl is-drawer-close:hidden">My Assets</span>
            </div>
            
            <li>
              <button :class="$route.name == 'beranda' ? 'menu-active' : ''" class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Beranda" @click="$router.push('/')">
                <i class="ri-home-line ri-lg"></i>
                <span class="is-drawer-close:hidden">Beranda</span>
              </button>
            </li>

            <li class="is-drawer-open:hidden">
              <button class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right w-full text-left" data-tip="Saham">
                <i class="ri-stock-line ri-lg"></i>
                <span class="is-drawer-close:hidden ml-2">Saham</span>
              </button>
            </li>

            <li class="is-drawer-close:hidden">
              <details>
                <summary class="px-0 py-0 pr-4 no-arrow">
                  <button class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right w-full text-left" data-tip="Saham">
                    <i class="ri-stock-line ri-lg"></i>
                    <span class="is-drawer-close:hidden ml-2">Saham</span>
                  </button>
                </summary>

                <ul class="is-drawer-close:hidden">
                  <li>
                    <button :class="$route.name == 'daftar_saham' ? 'menu-active' : ''" class="p-3" @click="$router.push('/daftar_saham')">
                      <i class="ri-list-check ri-lg"></i>
                      <span class="ml-2">Daftar Saham</span>
                    </button>
                  </li>

                  <li>
                    <button :class="$route.name == 'transaksi_saham' ? 'menu-active' : ''" class="p-3" @click="$router.push('transaksi_saham')">
                      <i class="ri-exchange-funds-fill ri-lg"></i>
                      <span class="ml-2">Transaksi Saham</span>
                    </button>
                  </li>
                </ul>
              </details>
            </li>

            <li class="is-drawer-open:hidden">
              <button class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right w-full text-left" data-tip="Crypto">
                <i class="ri-btc-line ri-lg"></i>
                <span class="is-drawer-close:hidden ml-2">Crypto</span>
              </button>
            </li>

            <li class="is-drawer-close:hidden">
              <details>
                <summary class="px-0 py-0 pr-4 no-arrow">
                  <button class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right w-full text-left" data-tip="Crypto">
                    <i class="ri-btc-line ri-lg"></i>
                    <span class="is-drawer-close:hidden ml-2">Crypto</span>
                  </button>
                </summary>

                <ul class="is-drawer-close:hidden">
                  <li>
                    <button :class="$route.name == 'daftar_crypto' ? 'menu-active' : ''" class="p-3" @click="$router.push('/daftar_crypto')">
                      <i class="ri-list-check ri-lg"></i>
                      <span class="ml-2">Daftar Crypto</span>
                    </button>
                  </li>

                  <li>
                    <button :class="$route.name == 'transaksi_crypto' ? 'menu-active' : ''" class="p-3" @click="$router.push('transaksi_crypto')">
                      <i class="ri-exchange-funds-fill ri-lg"></i>
                      <span class="ml-2">Transaksi Crypto</span>
                    </button>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <button :class="$route.name == 'emas' ? 'menu-active' : ''" class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Emas" @click="$router.push('/emas')">
                <i class="ri-copper-diamond-line ri-lg"></i>
                <span class="is-drawer-close:hidden">Emas</span>
              </button>
            </li>

            <li>
              <button :class="$route.name == 'aset_lainnya' ? 'menu-active' : ''" class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Aset Lainnya" @click="$router.push('/aset_lainnya')">
                <i class="ri-funds-box-line ri-lg"></i>
                <span class="is-drawer-close:hidden">Aset Lainnya</span>
              </button>
            </li>

          </ul>

          <ul class="menu w-full mb-8">
            <li>
              <button :class="$route.name == 'pengaturan' ? 'menu-active' : ''" class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Pengaturan" @click="$router.push('/pengaturan')">
                <i class="ri-settings-line ri-lg"></i>
                <span class="is-drawer-close:hidden">Pengaturan</span>
              </button>
            </li>

            <li class="text-red-500">
              <button :class="$route.name == 'keluar' ? 'menu-active' : ''" class="p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Keluar" @click="$router.push('/keluar')">
                <i class="ri-logout-box-line ri-lg"></i>
                <span class="is-drawer-close:hidden">Keluar</span>
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
/* Hilangkan icon panah bawaan <details> */
details > summary::-webkit-details-marker {
  display: none;
}

details > summary {
  list-style: none;
}
</style>
