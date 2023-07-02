<template>
  <div>
    <v-alert color="green lighten-5">
      <v-row align="center" style="margin:-18px !important;padding:-15px !important;">
        <v-col class="grow">
          <a style="color:#33691E;">{{ message }}</a>
        </v-col>
        <v-col class="shrink">
          <v-icon style="margin-right:5px !important;" @click="setShowAlertLabelSuccess(false)">
            mdi-close
          </v-icon>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      required: true,
      type: String
    },
    setShowAlertLabelSuccess: {
      required: true,
      type: Function
    }
  }
}
</script>
