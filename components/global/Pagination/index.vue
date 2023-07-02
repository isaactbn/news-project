<template>
  <div class="box-pagination">
    <span class="mr-4">
      Rows per page:
    </span>
    <v-col cols="12" sm="1" class="mr-4">
      <v-select
        :items="['5', '10', '25', '50']"
        :placeholder="pagination.limit && pagination.limit.toString()"
        @change="handleItemPerPage($event)"
      />
    </v-col>
    <span class="mr-4">
      {{ dataTo }}-{{ dataFrom }} of {{ pagination.totalData }}
    </span>
    <button
      type="button"
      aria-label="Previous page"
      :class="`v-pagination__navigation ${pagination.page === 1 || dataTo > dataFrom ? 'v-pagination__navigation--disabled' : ''}`"
      :disabled="pagination.page === 1 || dataTo > dataFrom"
      @click="handlePagination('prev')"
    >
      <span
        aria-hidden="true"
        class="v-icon notranslate theme--light"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        class="v-icon__svg"
      >
        <path
          d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
        /></svg></span>
    </button>
    <button
      type="button"
      aria-label="Next page"
      :class="`v-pagination__navigation ${pagination.totalPage === pagination.page || dataTo > dataFrom ? 'v-pagination__navigation--disabled' : ''}`"
      :disabled="pagination.totalPage === pagination.page || dataTo > dataFrom"
      @click="handlePagination('next')"
    >
      <span aria-hidden="true" class="v-icon notranslate theme--light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          class="v-icon__svg"
        >
          <path
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          /></svg></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    dataPagination: {
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
    }
  },
  data () {
    return {
      pagination: {
        totalPage: null,
        totalData: null,
        page: null,
        limit: null
      }
    }
  },
  computed: {
    dataTo () {
      return ((this.pagination.page * this.pagination.limit) - this.pagination.limit) + 1
    },
    dataFrom () {
      return this.pagination.page * this.pagination.limit > this.pagination.totalData ? this.pagination.totalData : this.pagination.page * this.pagination.limit
    }
  },
  watch: {
    dataPagination () {
      this.pagination.totalPage = this.dataPagination && Math.ceil(this.dataPagination.total / this.dataPagination.limit)
      this.pagination.page = this.dataPagination && this.dataPagination.page
      this.pagination.limit = this.dataPagination && this.dataPagination.limit
      this.pagination.totalData = this.dataPagination && this.dataPagination.total
    }
  }
}
</script>

<style scoped>
.box-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.box-pagination span {
  font-size: .9rem;
}
.box-pagination button {
  border-radius: 20px;
}
.v-pagination__navigation {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 32px;
  width: 32px;
  margin: 0.3rem 10px;
}
.v-pagination__navigation--disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>
