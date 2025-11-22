<template>
  <div>
    <div class="flex flex-row justify-between items-center">
      <div class="py-4 font-medium">Saham</div>
      <button class="btn btn-sm bg-primary">
        <i class="ri-add-line ri-lg"></i>
        Tambah
      </button>
    </div>
    <div class="overflow-x-auto rounded-box border border-base-content/5">
      <table class="table table-xs">
        <thead>
          <tr>
            <th class="text-center">No</th>
            <th class="text-left">Nama Emiten</th>
            <th class="text-center">Kode IDX</th>
            <th class="text-left">Sektor</th>
            <th class="text-center">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-center">1</th>
            <td>Sido Muncul TBK</td>
            <td class="text-center">SIDO</td>
            <td>Farmasi & Kesehatan</td>
            <td class="text-center">
              <button class="btn btn-sm btn-soft btn-primary mr-1 tooltip tooltip-left" data-tip="Edit Data">
                <i class="ri-edit-line ri-lg"></i>
              </button>
              <button class="btn btn-sm btn-soft btn-error ml-1 tooltip tooltip-left" data-tip="Hapus Data">
                <i class="ri-delete-bin-2-line ri-lg"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>