<template>
  <div
    class='flex mx-auto mt-1 justify-center gap-7 text-3xl font-extrabold'
    v-show='getTotalCount > 12 * getPage'
    @click='moreData'
  >
    <button class='px-6 py-1 bg-fuchsia-200 border-2 border-red-500 rounded-lg'>
      more
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  name: 'Btn-more',
  methods: {
    ...mapMutations(['setPage']),
    ...mapActions(['fetchData']),
    moreData() {
      this.setPage(++this.getPage);
      this.fetchData(this.getSearchQuery);
    },
  },
  computed: {
    ...mapGetters(['getTotalCount', 'getSearchQuery', 'getPage']),
  },
};
</script>