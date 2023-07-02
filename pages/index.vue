<template>
  <v-container>
    <header-user
      title="News"
      :news="news"
      :search-data="searchData"
      :filter-data="filterData"
      :filter-date="filterDate"
      :clear-date="clearDate"
    />
    <content-user
      :news="news"
      :pagination="pagination"
      :handle-pagination="handlePagination"
      :handle-item-per-page="handleItemPerPage"
      :sort="sort"
      :sort-by="sort_by"
      :handle-click-detail="handleClickDetail"
    />
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { debounce } from 'debounce'
import HeaderUser from '~/components/page/list/HeaderUser'
import ContentUser from '~/components/page/list/ContentUser'

export default {
  layout: 'dashboard',
  components: {
    HeaderUser,
    ContentUser
  },
  data () {
    return {
      sort: '',
      sort_by: '',
      pagination: {
        total: null,
        page: 1,
        limit: 10
      }
    }
  },
  computed: {
    ...mapGetters({
      news: 'list/news',
      metaFilter: 'list/meta_filter'
    })
  },
  async mounted () {
    await this.getNews({ pageSize: this.pagination.limit, page: this.pagination.page })
  },
  watch: {
    news () {
      this.pagination = {
        total: this.news.totalResults,
        page: this.pagination.page,
        limit: this.pagination.limit
      }
    }
  },
  methods: {
    ...mapActions({
      getNews: 'list/getNews',
    }),
    ...mapMutations({
      setMutationMetaFilter: 'list/SET_META_FILTER',
      setDataDetail: 'detail/SET_DATA_DETAIL'
    }),
    searchData: debounce(function (q) {
      this.getNews({ ...this.metaFilter, q })
    }, 1500),
    async filterData (data, ...params) {
      const [type, valid] = params
      await this.setMutationMetaFilter({ ...this.metaFilter, language: data })

      await this.getNews({ ...this.metaFilter })
    },
    async filterDate (data, ...params) {
      const [type, valid] = params
      await this.setMutationMetaFilter({ ...this.metaFilter, from: data[0], to: data[1] })

      await this.getNews({ ...this.metaFilter })
    },
    handlePagination (type) {
      switch (type) {
      case 'next':
        this.pagination.page = this.pagination.page + 1
        this.getNews({ ...this.metaFilter, pageSize: this.pagination.limit, page: this.pagination.page })
        break
      case 'prev':
      this.pagination.page = this.pagination.page - 1
        this.getNews({ ...this.metaFilter, pageSize: this.pagination.limit, page: this.pagination.page })
        break
      default:
        break
      }
    },
    handleItemPerPage (limit) {
      this.getNews({ ...this.metaFilter, pageSize: limit, page: 1 })
    },
    clearDate (type) {
      if (type === 'clear-date' && this.metaFilter?.start_date && this.metaFilter?.end_date) {
        this.getNews({ ...this.metaFilter, start_date: undefined, end_date: undefined })
      }
    },
    handleClickDetail (item, row) {
      this.setDataDetail(item)
      this.$router.push('/detail')
    }
  }
}
</script>
