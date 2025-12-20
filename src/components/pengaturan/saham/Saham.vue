<template>
  <div>
    <div class="row">
      <div class="col-12 flex justify-end">
        <q-btn unelevated no-caps color="primary" @click="tambahSaham">
          <i class="ri-add-large-line ri-lg"></i>
          <div class="q-pl-sm">Tambah Saham</div>
        </q-btn>
      </div>
      <div class="col-12 q-py-md">
        <q-table
          flat
          bordered
          dense
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body-cell-tindakan="props">
            <q-td :props="props">
              <q-btn
                unelevated
                no-caps
                dense
                outline
                class="q-mx-xs"
                color="primary"
                @click="editSaham"
              >
                <i class="ri-pencil-line ri-lg"></i>
                <q-tooltip class="bg-primary">Edit Data</q-tooltip>
              </q-btn>
              <q-btn
                unelevated
                no-caps
                dense
                outline
                class="q-mx-xs"
                color="red"
                @click="hapusSaham"
              >
                <i class="ri-delete-bin-7-line ri-lg"></i>
                <q-tooltip class="bg-red">Hapus Data</q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>

    <q-dialog v-model="tambahSahamDialog">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Tambah Data Saham</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <TambahSaham />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="editSahamDialog">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Edit Data Saham</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <EditSaham />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import TambahSaham from "./TambahSaham.vue";
import EditSaham from "./EditSaham.vue";

export default {
  components: {
    TambahSaham,
    EditSaham,
  },
  data() {
    return {
      loading: false,
      tambahSahamDialog: false,
      editSahamDialog: false,
      rows: [
        {
          no: 1,
          emiten: "Sido Muncul TBK",
          kode: "SIDO",
          sektor: "Makanan",
        },
      ],
      columns: [
        {
          name: "no",
          field: "no",
          label: "No",
          align: "center",
        },
        {
          name: "emiten",
          field: "emiten",
          label: "Emiten",
          align: "center",
        },
        {
          name: "kode",
          field: "kode",
          label: "Kode IDX",
          align: "center",
        },
        {
          name: "sektor",
          field: "sektor",
          label: "Sektor",
          align: "center",
        },
        {
          name: "tindakan",
          field: "tindakan",
          label: "",
          align: "center",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    tambahSaham() {
      this.tambahSahamDialog = true;
    },
    editSaham() {
      this.editSahamDialog = true;
    },
    hapusSaham() {
      this.$q
        .dialog({
          title: "Hapus Saham",
          message: "Apakah anda yakin ingin menghapus saham ini?",
          ok: {
            flat: true,
            label: "Hapus",
            color: "red",
          },
          cancel: {
            flat: true,
            label: "Batal",
            color: "primary",
          },
          persistent: true,
        })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
  },
};
</script>
