export const layout = {
  namespaced: true,
  state: () => ({
    mini: true
  }),
  actions: {
    toggleDrawer({commit, dispatch}) {
      return new Promise((resolve, reject) => {
        commit('sidebar_toggle')
      })
    }
  },
  mutations: {
    sidebar_toggle(state, value) {
      state.mini = !state.mini
    }
  }
}