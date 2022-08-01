<template>
  <div class='max-w-7xl flex flex-wrap gap-7 justify-center mx-auto my-7 px-4'>
    <div
      class='flex flex-col w-96 p-4 bg-fuchsia-200 rounded-lg'
      v-for='repo in getRepositories'
      :key='repo.id'
    >
      <a
        class='text-2xl text-center mb-2 font-bold'
        :href='repo.html_url'
        target='_blank'
        >{{repo.name}}</a
      >
      <a
        :href='repo.owner.html_url'
        target='_blank'
        ><span class='font-semibold'>Author:</span> {{repo.owner.login}}</a
      >
      <p><span class='font-semibold'>Description:</span> {{repo.description}}</p>
      <p><span class='font-semibold'>Language:</span> {{repo.language}}</p>
      <p class='text-end text-red-500'>{{repo.stargazers_count}} &#9733;</p>
    </div>
    <BtnMore/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import BtnMore from './BtnMore.vue';

export default {
  name: 'RepositoriesList',
  components: {
    BtnMore,
},
  computed: {
    ...mapGetters(['getRepositories']),
  },
};
</script>