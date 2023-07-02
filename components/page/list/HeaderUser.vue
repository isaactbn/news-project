<template>
  <div class="title">
    <v-row>
      <v-col cols="12" sm="2" class="d-flex align-center">
        {{ title }}
        <span style="color:#b1b1b1">({{ userLength }})</span>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row no-gutters class="justify-end">
          <v-col cols="12" sm="8">
            <v-select
              :items="dataLanguage"
              item-value="value"
              item-text="name"
              label="Filter Language"
              clearable
              @click:clear="filterData(undefined, 'language')"
              @change="filterData($event, 'language')"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4">
        <v-row no-gutters class="justify-end">
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              class="mr-5"
              single-line
              clearable
              @click:clear="filterData(undefined, 'q')"
              @keyup="searchData(search)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pr-2">
      <v-col cols="12" sm="12">
        <filter-date :filter-data="filterDate" :clear-date="clearDate" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FilterDate from '~/components/global/FilterDate'

export default {
  components: {
    FilterDate
  },
  props: {
    title: {
      required: true,
      type: String
    },
    news: {
      required: true,
      type: Object
    },
    searchData: {
      required: true,
      type: Function
    },
    filterData: {
      required: true,
      type: Function
    },
    filterDate: {
      required: true,
      type: Function
    },
    clearDate: {
      required: true,
      type: Function
    },
  },
  data () {
    return {
      search: '',
      userLength: null,
      userData: [],
      dataLanguage: [
        {
          name: 'English',
          value: 'en'
        },
        {
          name: 'Mandarin',
          value: 'zh'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      metaFilter: 'list/meta_filter'
    })
  },
  watch: {
    news () {
      this.userLength = this.news.articles.length
      this.userData = this.news.articles
    },
    search (val) {
      this.setMutationMetaFilter({ ...this.metaFilter, q: val })
    }
  },
  methods: {
    ...mapMutations({
      setMutationMetaFilter: 'list/SET_META_FILTER'
    })
  }
}
</script>
