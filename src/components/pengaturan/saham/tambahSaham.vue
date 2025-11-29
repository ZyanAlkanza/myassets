<template>
  <div>
    <form class="flex flex-wrap">
      <div class="w-full pb-2">
        <label class="input validator w-full">
          <i class="ri-building-2-line ri-lg"></i>
          <input required v-model="form.nama_emiten" type="text" class="grow w-full" placeholder="Nama Emiten" />
        </label>
        <small class="pl-1 text-xs text-red-500 validator-hint hidden">Wajib diisi</small>
      </div>
      <div class="w-1/3 pr-1">
        <label class="input validator w-full">
          <i class="ri-hashtag ri-lg"></i>
          <input required v-model="form.kode_idx" type="text" class="grow w-full" placeholder="Kode IDX" @input="form.kode_idx = form.kode_idx.toUpperCase()"/>
        </label>
        <small class="pl-1 text-xs text-red-500 validator-hint hidden">Wajib diisi</small>
      </div>
      <div class="w-2/3 pl-1">
        <label class="input validator w-full">
          <i class="ri-flag-line ri-lg"></i>
          <input required v-model="form.sektor" type="text" class="grow w-full" placeholder="Sektor" />
        </label>
        <small class="pl-1 text-xs text-red-500 validator-hint hidden">Wajib diisi</small>
      </div>
      <div class="w-full mt-4 text-right">
        <button class="btn btn-md bg-primary" type="submit">
          <i class="ri-save-line ri-lg"></i> 
          Simpan
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
}
</script>
