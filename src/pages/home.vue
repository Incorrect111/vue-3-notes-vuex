<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
// import { setNotes } from '/Volumes/HDD/Programming/tocode.ru/vue3/notesVuex/utils'

export default {
  components: { Form, List },
  data() {
    return {
      notes: [],
      tags: []
    }
  },

  mounted() {
    this.notes = this.$store.getters.getNotes
  },

  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * Get / Set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    // * submit note
    handleSubmit(note) {
      this.$store.dispatch('pushNote', note)
    },

    // * remove note
    handleRemove(index) {
      this.$store.dispatch('removeNote', index)
    }
  }
}
</script>
