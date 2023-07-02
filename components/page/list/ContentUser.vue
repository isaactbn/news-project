<template>
  <v-container>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="news.articles"
      item-key="id"
      class="elevation-1"
      style="color: #373737; cursor: pointer;"
      hide-default-footer
      disable-sort
      @click:row="handleClickDetail(headers.id)"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:header.author >
        Author
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:header.source.name >
        Source
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:header.title >
        Title
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.publishedAt="{ item }">
        {{ formatDate(item.publishedAt) }}
      </template>
      <template v-slot:header.description >
        Description
      </template>
      <!-- eslint-disable-next-line -->
      <!-- <template v-slot:header.urlToImage >
          Image
      </template> -->
    </v-data-table>
    <pagination
      :data-pagination="pagination"
      :handle-pagination="handlePagination"
      :handle-item-per-page="handleItemPerPage"
    />
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { dateSpaceMonthString, datetimeString } from '~/utils/formater'
import Pagination from '~/components/global/Pagination'

export default {
  components: {
    Pagination
  },
  props: {
    news: {
      required: true,
      type: Object
    },
    pagination: {
      required: true,
      type: Object
    },
    handlePagination: {
      required: true,
      type: Function
    },
    handleItemPerPage: {
      required: true,
      type: Function
    },
    sortBy: {
      required: true,
      type: String
    },
    sort: {
      required: true,
      type: String
    },
    handleClickDetail: {
      required: true,
      type: Function
    },
  },
  data () {
    return {
      selected: [],
      headers: [
        { text: 'Author', align: 'start', class: 'text--disabled', value: 'author', width: '120px' },
        { text: 'Source', value: 'source.name', class: 'text--disabled', width: '180px' },
        { text: 'Title', value: 'title', class: 'text--disabled', width: '300px' },
        { text: 'Published At', value: 'publishedAt', class: 'text--disabled', width: '150px' },
        { text: 'Description', value: 'description', class: 'text--disabled', width: '300px' },
        // { text: 'Image', value: 'urlToImage', class: 'text--disabled', width: '150px' },
      ]
    }
  },
  methods: {
    ...mapMutations({
    }),
    formatDate (date) {
      return dateSpaceMonthString(date)
    },
    formatDateTime (date) {
      return datetimeString(date)
    },
    deleteItem (item) {
      this.setModalDelete({ isShow: true, data: item })
    },
    handleIcon (param) {
      return this.sortBy === param && this.sort.toLowerCase() === 'desc' ? 'mdi-arrow-down' : 'mdi-arrow-up'
    }
  }
}
</script>

<style scoped>
.action-btn {
  cursor: pointer;
  font-size: 14px;
  color: #367de9;
  font-weight: 500;
}
</style>
