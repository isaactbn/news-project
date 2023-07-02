<template>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card class="box-actions">
      <v-card-title class="text-h5 title-card-actions">
        Hapus Artikel
      </v-card-title>
      <v-card-text class="text-card-actions">
        Anda yakin ingin menghapus data ini?
      </v-card-text>
      <v-card-actions class="card-actions">
        <v-btn color="#6BC5C1" style="color: #FFF;" class="mr-2" :disabled="isLoadingDelete" @click="handleIsOpen(false)">
          Tidak
        </v-btn>
        <v-btn color="primary" outlined :disabled="isLoadingDelete" @click="deleteItemConfirm">
          Ya
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogDelete: {
      required: true,
      type: Boolean
    },
    isLoadingDelete: {
      required: true,
      type: Boolean
    },
    handleIsOpen: {
      required: true,
      type: Function
    },
    deleteItemConfirm: {
      required: true,
      type: Function
    }
  }
}
</script>

<style scoped>
  .box-actions {
    padding: 30px 20px;
    text-align: center;
    border-radius: 10px;
  }
  .title-card-actions {
    color:#6BC5C1;
    display: block;
  }
  .text-card-actions {
    display: block;
    color: #373737;
  }
  .title-card-actions {
    display: block;
    color: #373737;
  }
  .card-actions {
    display: flex;
    justify-content: center;
  }
  .card-actions .v-btn {
    width: 142px;
  }

</style>
