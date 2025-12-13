<template>
  <div>
    <form class="row">
      <div class="col-12">
        Apakah anda yakin ingin menghapus emiten ini?
      </div>
      <div class="col-12 mt-4 text-right">
        <button class="btn btn-md btn-error mr-1" @click="batal">
          <i class="ri-close-line ri-lg"></i> 
          Batal
        </button>
        <button class="btn btn-md btn-soft btn-primary ml-1" type="submit">
          <i class="ri-delete-bin-2-line ri-lg"></i> 
          Ya, Hapus
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        nama_emiten: '',
        kode_idx: '',
        sektor: '',
      }
    }
  },
  mounted() {
    
  },
  methods: {
    batal() {
      this.$emit('batal');
    }
  },
}
</script>
