<template>
  <v-snackbar
    v-model="show"
    :multi-line="true"
    :top="true"
    :color="color"
  >
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click.native="show = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: '',
      color: ''
    }
  },
  created () {
    this.$store.watch(
      state => state.alertPopup,
      () => {
        this.message = this.$store.state.alertPopup.message
        this.show = this.$store.state.alertPopup.isShow
        const type = this.$store.state.alertPopup.type
        if (type === 'success') {
          this.color = 'green accent-4'
        } else if (type === 'error') {
          this.color = 'red accent-4'
        } else {
          this.color = 'yellow accent-4'
        }
      }
    )
  }
}
</script>
