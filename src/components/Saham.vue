<template>
  <div class="q-px-lg">
    <div class="row q-py-sm justify-between">
      <div class="flex items-center text-h6">Transaksi Saham</div>
      <div>
        <q-btn
          unelevated
          no-caps
          color="primary"
          @click="tambahTransaksi"
        >
          <i class="ri-add-large-line ri-lg"></i>
          <div class="q-pl-sm">Tambah Transaksi</div>
        </q-btn>
      </div>
    </div>
    <div class="q-mt-md">
      <q-table
        flat
        :rows="data"
        :columns="columns"
        separator="none"
      >
        <template v-slot:no-data>
          <div class="full-width row flex-center q-py-sm" style="font-size: 14px;">
            <i class="ri-error-warning-line ri-lg q-px-sm"></i>
            <div>Tidak ada data</div>
          </div>
        </template>

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-badge class="q-pb-xs q-px-sm" color="positive">Beli</q-badge>
          </q-td>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="tambahTransaksiDialog">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Tambah Data Transaksi</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <TambahTransaksiSaham />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import TambahTransaksiSaham from './Saham/TambahTransaksiSaham.vue';

export default {
  components: {
    TambahTransaksiSaham
  },
  data() {
    return {
      loading: false,
      tambahTransaksiDialog: false,
      data: [
        {
          no: 1,
          tgl_transaksi: '18 Jan 2025',
          emiten: 'Sido Muncul Tbk',
          kode: 'SIDO',
          lembar: '400',
          harga_beli: '400',
          harga_jual: '-',
          biaya_beli: '100',
          biaya_jual: '-',
          total_harga_beli: '200.000',
          total_harga_jual: '-',
          status: 'Beli',
          profit: '-'
        }
      ],
      columns: [
        {
          name: 'no',
          field: 'no',
          label: 'No',
          align: 'center'
        },
        {
          name: 'tgl_transaksi',
          field: 'tgl_transaksi',
          label: 'Tgl Transaksi',
          align: 'center'
        },
        {
          name: 'emiten',
          field: 'emiten',
          label: 'Emiten',
          align: 'left'
        },
        {
          name: 'kode',
          field: 'kode',
          label: 'Kode',
          align: 'center'
        },
        {
          name: 'lembar',
          field: 'lembar',
          label: 'Lembar',
          align: 'right'
        },
        {
          name: 'harga_beli',
          field: 'harga_beli',
          label: 'Harga Beli',
          align: 'right'
        },
        {
          name: 'harga_jual',
          field: 'harga_jual',
          label: 'Harga Jual',
          align: 'right'
        },
        {
          name: 'biaya_beli',
          field: 'biaya_beli',
          label: 'Biaya Beli',
          align: 'right'
        },
        {
          name: 'biaya_jual',
          field: 'biaya_jual',
          label: 'Biaya Jual',
          align: 'right'
        },
        {
          name: 'total_harga_beli',
          field: 'total_harga_beli',
          label: 'Total Harga Beli',
          align: 'right'
        },
        {
          name: 'total_harga_jual',
          field: 'total_harga_jual',
          label: 'Total Harga Jual',
          align: 'right'
        },
        {
          name: 'status',
          field: 'status',
          label: 'Status',
          align: 'center'
        },
        {
          name: 'profit',
          field: 'profit',
          label: 'Profit',
          align: 'right'
        },
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    tambahTransaksi() {
      this.tambahTransaksiDialog = true;
    }
  },
}
</script>
