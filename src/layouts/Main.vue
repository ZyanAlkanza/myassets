<template>
  <div style="font-family: 'Plus Jakarta Sans', sans-serif">
    <q-layout view="lHh Lpr lff">
      <q-header class="q-pt-md bg-white">
        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            color="black"
            icon="menu"
          />
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

            <q-item clickable v-ripple to="/beranda" tag="router-link">
              <q-item-section avatar><q-icon name="o_home" /></q-item-section>
              <q-item-section>Beranda</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/saham" tag="router-link">
              <q-item-section avatar
                ><q-icon name="o_candlestick_chart"
              /></q-item-section>
              <q-item-section>Saham</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/cyrpto" tag="router-link">
              <q-item-section avatar
                ><q-icon name="o_currency_bitcoin"
              /></q-item-section>
              <q-item-section>Cyrpto</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/emas" tag="router-link">
              <q-item-section avatar
                ><q-icon name="o_diamond"
              /></q-item-section>
              <q-item-section>Emas</q-item-section>
            </q-item>
          </q-list>

          <q-space />

          <q-list>
            <q-item
              class="text-black"
              clickable
              v-ripple
              to="/pengaturan"
              tag="router-link"
            >
              <q-item-section avatar
                ><q-icon name="o_settings"
              /></q-item-section>
              <q-item-section>Pengaturan</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/login" tag="router-link">
              <q-item-section avatar>
                <q-icon name="o_logout" color="negative" />
              </q-item-section>
              <q-item-section class="text-negative">Keluar</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-drawer>

      <q-page-container>
        <q-page padding> </q-page>
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
};
</script>
