<template>
  <div>
    <q-form class="row q-col-gutter-sm" @onSubmit="simpan">
      <div class="col-8">
        <q-input
          dense
          outlined
          label="Nama Emiten"
          v-model="form.emiten"
          prefix="PT"
          suffix="Tbk."
          hide-bottom-space
          lazy-rules
          no-error-icon
          :rules="[(val) => !!val || 'Nama emiten tidak boleh kosong']"
        />
      </div>
      <div class="col-4">
        <q-input
          dense
          outlined
          label="Kode IDX"
          v-model="form.kode"
          mask="AAAA"
          hide-bottom-space
          lazy-rules
          no-error-icon
          :rules="[(val) => !!val || 'Kode IDX tidak boleh kosong']"
        />
      </div>
      <div class="col-12">
        <q-select
          dense
          outlined
          label="Sektor"
          v-model="form.sektor"
          use-input
          input-debounce="0"
          @new-value="tambahOpsi"
          :options="SektorOpsi"
          @filter="filter"
          hide-bottom-space
          lazy-rules
          no-error-icon
          :rules="[(val) => !!val || 'Sektor tidak boleh kosong']"
        />
      </div>
      <div class="col-12 q-pt-md text-right">
        <q-btn unelevated no-caps color="primary" type="submit">
          <i class="ri-check-line ri-lg"></i>
          <div class="q-pl-sm">Simpan</div>
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        emiten: null,
        kode: null,
        sektor: null,
      },
    };
  },
  mounted() {},
  methods: {
    async simpan() {},
  },
};
</script>
