<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        {{ note.title }}
        <p style="cursor: pointer" @click="handleRemove(index)">&#x2715;</p>
      </div>

      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length > 0"
          :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
import { getNotesFromLs } from '/Volumes/HDD/Programming/tocode.ru/vue3/notesVuex/utils/localStorage.js'
import { setLocalNotes } from '/Volumes/HDD/Programming/tocode.ru/vue3/notesVuex/utils/localStorage.js'
export default {
  components: { TagsList },
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      notes: []
    }
  },
  mounted() {
    const localNotes = getNotesFromLs()
    if (localNotes) {
      this.$store.dispatch('setNotesFromLocalStorage', localNotes)
    }
    this.notes = this.$store.getters.getNotes
  },

  watch: {
    notes: {
      handler(updatedList) {
        setLocalNotes(updatedList)
      },
      deep: true
    }
  },
  methods: {
    // * remove note
    handleRemove(index) {
      this.$store.dispatch('removeNote', index)
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-item {
  width: 50%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.hidden-input {
  width: 50%;
}
</style>
