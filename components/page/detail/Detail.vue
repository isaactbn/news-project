<template>
  <v-card class="card-wrapper mt-6">
    <v-container style="padding: 24px; border-radius: 8px;">
      <v-row>
        <v-col cols="12" sm="6" style="font-size:18px;color:#7D7D7D">
          <h1>{{dataDetail.title}}</h1>
        </v-col>
      </v-row>
      <div class="pt-3 date-label">
        {{ formatDate(dataDetail.publishedAt) }}
      </div>
      <div class="pt-8">
        <img
          :src="dataDetail.urlToImage"
          alt=""
          loading="lazy"
        >
      </div>
      <div class="pt-5 desc">
        <p>
          {{ dataDetail.content }}
        </p>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { dateSpaceMonthString } from '~/utils/formater'

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      dataDetail: 'detail/data_detail'
    })
  },
  mounted () {
    if (!this.dataDetail.title) {
      this.$router.push('/')
    }
  },
  watch: {
  },
  methods: {
    ...mapActions({
    }),
    formatDate (date) {
      return dateSpaceMonthString(date)
    },
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 600;
  color: #666666;
}
.date-label {
  color: #1D1D1B;
  font-size: 20px;
  font-weight: 500;
}
img {
  height: 400px;
  width: 100%;
  border-radius: 8px;
}
.desc {
  color: #747474;
  font-size: 16px;
  font-weight: 400;
}
</style>
