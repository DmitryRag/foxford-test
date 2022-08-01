<template>
  <main class='bg-white flex-grow dark:bg-black'>
    <div class='mx-auto pt-14 pb-5'>
      <h1 class='text-3xl font-semibold text-center dark:text-white'>
        Repositories
      </h1>
      <RepositoriesList v-if='getRepositories && getSearchQuery' />
      <NoRepositories v-else />
    </div>
  </main>
</template>

<script>
import RepositoriesList from './RepositoriesList.vue';
import NoRepositories from './NoRepositories.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'Main-block',
  components: {
    RepositoriesList,
    NoRepositories
  },
  computed: {
    ...mapGetters(['getRepositories', 'getSearchQuery']),
  },
};
</script>