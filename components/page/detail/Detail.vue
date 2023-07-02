<template>
  <v-card class="card-wrapper mt-6">
    <v-container style="padding: 24px; border-radius: 8px;">
      <v-row>
        <v-col cols="12" sm="6" style="font-size:18px;color:#7D7D7D">
          <h1>Detail Produk</h1>
        </v-col>
      </v-row>
      <div class="pt-3 date-label">
        24 Okt 2022
      </div>
      <div class="pt-8">
        <img
          src="https://freebeacon.com/wp-content/uploads/2022/06/justice-thomas-attends-forum-his-30-year-supreme-court-legac-e1655997208846.jpg"
          alt=""
          loading="lazy"
        >
      </div>
      <div class="pt-5 desc">
        <p>
          The Supreme Court on Thursday struck down race-based affirmative action in college admissions. The Court, in a 6-3 decision, ruled that the admissions programs at Harvard and the University of North … [+3364 chars].
        </p>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
    ...mapActions({
    }),
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
