<template>
  <div class="q-pt-sm">
    <q-form class="row q-col-gutter-sm" @submit="simpanData">
      <div class="col-md-4">
        <q-input
          dense
          outlined
          label="Tgl Transaksi"
        >

        </q-input>
      </div>
      <div class="col-md-8">
        <q-select
          dense
          outlined
          label="Emiten"
        >
        </q-select>
      </div>
      <div class="col-md-3">
        <q-input
          dense
          outlined
          label="Lembar"
          suffix="Lembar"
          mask="#####"
        >

        </q-input>
      </div>
      <div class="col-md-3">
        <q-input
          dense
          outlined
          label="Harga Jual"
          prefix="Rp."
          mask="#####"
        >

        </q-input>
      </div>
      <div class="col-md-3">
        <q-input
          dense
          outlined
          label="Biaya Jual"
          prefix="Rp."
          mask="#####"
        >

        </q-input>
      </div>
      <div class="col-md-3">
        <q-input
          dense
          outlined
          label="Total Harga Jual"
          prefix="Rp."
          mask="##########"
        >

        </q-input>
      </div>
      <div class="col-md-12 text-right q-mt-sm">
        <q-btn
          no-caps
          unelevated
          color="primary"
        >
          <i class="ri-save-line ri-lg"></i>
          <div class="q-pl-sm">Simpan Transaksi</div>
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        jenis_transaksi: true,
      }
    }
  },
  methods: {
    simpanData() {

    }
  },
}
</script>