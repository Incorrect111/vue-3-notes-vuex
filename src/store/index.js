import {
  createStore
} from 'vuex';

export const store = createStore({
  state: {
    notes: [{
        title: 'Learn vue 3',

      },
      {
        title: 'Finish course',

      }
    ],
    tags: [{
        title: 'work'
      },
      {
        title: 'home'
      },
      {
        title: 'travel'
      }
    ]
  },
  mutations: {
    pushNote(state, note) {
      state.notes.push(note)
    },
    removeNote(state, index){
      state.notes.splice(index,1)
    }
  },
  actions: {
    pushNote(context, note) {
      context.commit('pushNote', note)
    },
    removeNote(context, index) {
      context.commit('removeNote', index)
    }
  },
  getters: {
    getNotes: state => state.notes,
    getTags: state => state.tags
  }
})