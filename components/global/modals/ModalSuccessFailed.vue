<template>
  <v-dialog
    v-model="dataModal.isOpen"
    width="500"
  >
    <v-card>
      <!-- <v-card-text class="message">
        {{ dataModal?.message }}
      </v-card-text> -->
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="#00b1b1"
          text
          @click="handleIsOpen(false, '')"
        >
          Tutup
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    handleIsOpen: {
      required: true,
      type: Function
    },
    dataModal: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
  .message {
    padding: 30px 40px !important;
    font-size: 1.3rem !important;
    font-weight: 500;
  }
</style>
