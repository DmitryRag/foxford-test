<template>
  <header class='flex-col py-8 px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-around sm:flex-row items-center'> <!-- // -->
    <a class='text-4xl font-semibold transition duration-150 ease-in-out' href='/'>
      Foxford
    </a>
    <form v-on:submit.prevent class='mr-auto ml-auto sm:ml-12 my-4'>
      <input
        v-model='searchData'
        @input='searchInput'
        class='text-xl py-2 px-4 rounded-lg w-full focus:outline-none focus:ring  focus:ring-blue-900 focus:border-transparent  text-black'
        type='search'
        placeholder='Search repositories'
      />
    </form>
    <button @click='toggleTheme' class='w-12 h-12'>
        <img src='../assets/icons/theme.png' alt='switch theme'/>
      </button>
  </header>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Header-block',
  data() {
    return {
      searchData: '',
      darkTheme: false,
    };
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['setRepositories', 'setSearchQuery', 'setPage']),
    searchInput() {
      this.setPage(1);
      this.setSearchQuery(this.searchData);
      this.fetchData(this.searchData);
    },
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      if (this.darkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    computed: {
    ...mapGetters(['getRepositories']),
    },
  }
}
</script>