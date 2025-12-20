<template>
  <div>
    <div class="row q-px-sm">
      <div class="col-2" style="height: 90dvh">
        <q-list class="rounded-borders">
          <q-item
            clickable
            v-ripple
            :active="link === 'akun'"
            @click="link = 'akun'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <i class="ri-user-3-line ri-lg"></i>
            </q-item-section>

            <q-item-section>Akun</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'saham'"
            @click="link = 'saham'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <i class="ri-stock-line ri-xl"></i>
            </q-item-section>

            <q-item-section>Saham</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'crypto'"
            @click="link = 'crypto'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <i class="ri-btc-line ri-xl"></i>
            </q-item-section>

            <q-item-section>Crypto</q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="col-10">
        <q-tab-panels
          v-model="link"
          animated
          swipeable
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
        >
          <q-tab-panel name="akun" class="q-pa-sm">
            <div class="text-h6">Akun</div>
          </q-tab-panel>

          <q-tab-panel name="saham" class="q-pa-sm">
            <div class="text-h6">Saham</div>
            <Saham />
          </q-tab-panel>

          <q-tab-panel name="crypto" class="q-pa-sm">
            <div class="text-h6">Crypto</div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import Saham from "./Pengaturan/Saham/Saham.vue";

export default {
  components: {
    Saham,
  },
  data() {
    return {
      link: "akun",
    };
  },
  mounted() {},
  methods: {},
};
</script>
