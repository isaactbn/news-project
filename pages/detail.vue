<template>
  <v-container>
    <menu-detail />
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { debounce } from 'debounce'
import MenuDetail from '~/components/page/detail/Detail'

export default {
  layout: 'dashboard',
  components: {
    MenuDetail
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  async mounted () {
  },
  watch: {
  },
  methods: {
    ...mapActions({
    }),
    ...mapMutations({
    }),
  }
}
</script>
