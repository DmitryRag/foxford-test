import { createStore } from 'vuex';
import { Octokit } from '@octokit/core';

export default createStore({
  state: {
    repositories: [],
    totalCount: 0,
    searchQuery: '',
    page: 1,
  },
  getters: {
    getRepositories: (state) => state.repositories,
    getTotalCount: (state) => state.totalCount,
    getSearchQuery: (state) => state.searchQuery,
    getPage: (state) => state.page,
  },
  mutations: {
    setRepositories(state, payload) {
      state.repositories = payload.items;
      state.totalCount = payload.total_count;
    },
    setMoreRepositories(state, payload) {
      state.repositories.push(...payload.items);
      state.totalCount = payload.total_count;
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    setPage(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    async fetchData({ commit, state }, q) {
      let result = {};
      if (q) {
        const octokit = new Octokit({
          auth: `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`,
        });
        const response = await octokit.request('GET /search/repositories', {
          q: q,
          per_page: 12,
          page: state.page,
        });
        result = response.data;
      }
      if (state.page > 1) {
        commit('setMoreRepositories', result);
      } else {
        commit('setRepositories', result);
      }
    },
  },
});
