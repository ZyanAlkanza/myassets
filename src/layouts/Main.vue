<template>
  <div style="font-family: 'Plus Jakarta Sans', sans-serif">
    <q-layout view="lHh Lpr lff">
      <q-header class="q-pt-md bg-white">
        <q-toolbar :class="drawer ? 'q-pl-none' : ''">
          <q-btn
            :style="drawer ? 'margin-left: -15px' : ''"
            flat
            @click="drawer = !drawer"
            dense
            class="bg-grey-3"
            color="black"
          >
            <i v-if="drawer" class="ri-arrow-left-s-line ri-xl"></i>
            <i v-else class="ri-arrow-right-s-line ri-xl"></i>
          </q-btn>
          <span class="text-h6 text-black q-px-md">{{ $route.name }}</span>
        </q-toolbar>
      </q-header>

      <q-drawer
        class="q-py-sm q-pl-sm"
        show-if-above
        :width="250"
        v-model="drawer"
        side="left"
      >
        <div
          class="column fit bg-grey-3 q-py-sm text-white"
          style="border-radius: 8px"
        >
          <q-list class="text-black">
            <q-item class="row justify-center q-mb-md">
              <q-img
                src="../../public/logo.svg"
                fit="contain"
                style="width: 35px; filter: brightness(0)"
              />
              <span class="q-px-sm" style="font-size: 24px">MyAssets</span>
            </q-item>

            <q-item
              :class="$route.name === 'Beranda' ? 'text-primary' : 'text-black'"
              clickable
              v-ripple
              to="/beranda"
              tag="router-link"
            >
              <q-item-section avatar>
                <i class="ri-home-line ri-xl"></i>
              </q-item-section>
              <q-item-section>Beranda</q-item-section>
            </q-item>

            <q-item
              :class="$route.name === 'Saham' ? 'text-primary' : 'text-black'"
              clickable
              v-ripple
              to="/saham"
              tag="router-link"
            >
              <q-item-section avatar>
                <i class="ri-stock-line ri-xl"></i>
              </q-item-section>
              <q-item-section>Saham</q-item-section>
            </q-item>

            <q-item
              :class="$route.name === 'Crypto' ? 'text-primary' : 'text-black'"
              clickable
              v-ripple
              to="/cyrpto"
              tag="router-link"
            >
              <q-item-section avatar>
                <i class="ri-btc-line ri-xl"></i>
              </q-item-section>
              <q-item-section>Cyrpto</q-item-section>
            </q-item>

            <q-item
              :class="$route.name === 'Emas' ? 'text-primary' : 'text-black'"
              clickable
              v-ripple
              to="/emas"
              tag="router-link"
            >
              <q-item-section avatar>
                <i class="ri-copper-diamond-line ri-xl"></i>
              </q-item-section>
              <q-item-section>Emas</q-item-section>
            </q-item>
          </q-list>

          <q-space />

          <q-list>
            <q-item
              :class="
                $route.name === 'Pengaturan' ? 'text-primary' : 'text-black'
              "
              clickable
              v-ripple
              to="/pengaturan"
              tag="router-link"
            >
              <q-item-section avatar>
                <i class="ri-settings-line ri-xl"></i>
              </q-item-section>
              <q-item-section>Pengaturan</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="keluar" tag="router-link">
              <q-item-section avatar>
                <i class="ri-login-box-line ri-xl text-red"></i>
              </q-item-section>
              <q-item-section class="text-red">Keluar</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-drawer>

      <q-page-container>
        <q-page>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    keluar() {
      this.$q.dialog({
        title: 'Keluar',
        message: 'Apakah anda yakin ingin keluar?',
        ok: {
          flat: true,
          label: 'Ya',
          color: 'red'
        },
        cancel: {
          flat: true,
          label: 'Batal',
          color: 'primary'
        }
      }).onOk(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  },
};
</script>
