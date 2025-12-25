<template>
  <div>
    <q-tabs
      dense
      no-caps
      v-model="tab"
    >
      <q-tab name="beli" label="Beli" />
      <q-tab name="jual" label="Jual" />
      <q-tab name="IPO" label="IPO" />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-tab-panel name="beli" class="q-pa-sm">
        <Beli/>
      </q-tab-panel>

      <q-tab-panel name="jual" class="q-pa-sm">
        <Jual/>
      </q-tab-panel>

      <q-tab-panel name="IPO" class="q-pa-sm">
        <IPO/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Beli from './TambahTransaksiSaham/Beli.vue';
import Jual from './TambahTransaksiSaham/Jual.vue';
import IPO from './TambahTransaksiSaham/IPO.vue';

export default {
  components: {
    Beli,
    Jual,
    IPO
  },
  data() {
    return {
      tab: 'beli',
    }
  },
  methods: {
  },
}
</script>