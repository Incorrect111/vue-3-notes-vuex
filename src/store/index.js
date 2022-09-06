import {
  createStore
} from 'vuex';


export const store = createStore({
  state: {
    notes: [{
        title: 'Learn vue 3',
        tags: [{
          title: 'work',
        }, ]
      },
      {
        title: 'Finish course',
        tags: [{
          title: 'home',
        }, ]
      }
    ],
  },
  mutations: {
    pushNote(state, note) {
      state.notes.push({
        title: note.title,
        tags: note.tags
      })
    },
    setNotesFromLocalStorage(state, notes) {
      state.notes = notes
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    },

  },
  actions: {
    setNotesFromLocalStorage(context, notes) {
      context.commit('setNotesFromLocalStorage', notes)
    },
    pushNote(context, note) {
      context.commit('pushNote', note)
    },
    removeNote(context, index) {
      context.commit('removeNote', index)
    },
  },
  getters: {
    getNotes: state => state.notes,
    getTags: state => state.tags
  }
})