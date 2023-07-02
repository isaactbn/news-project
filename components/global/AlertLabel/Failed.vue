<template>
  <div>
    <v-alert color="red lighten-5">
      <v-row align="center" style="margin:-18px !important;padding:-15px !important;">
        <v-col class="grow">
          <a style="color:#B71C1C;">{{ message }}</a>
        </v-col>
        <v-col class="shrink">
          <v-icon style="margin-right:5px !important;" @click="setShowAlertLabelFailed(false)">
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
    setShowAlertLabelFailed: {
      required: true,
      type: Function
    }
  }
}
</script>
