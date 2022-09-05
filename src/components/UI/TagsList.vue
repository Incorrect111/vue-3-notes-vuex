<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="item in items"
      :key="item"
      @click="onClickTag(item, $event)"
      :class="{ isPreview: isPreview }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
props: {
  items: {
    type: Array
  },
  isPreview: {
    type: Boolean,
    required: true
  }
},


  methods: {
    onClickTag(tag, event) {
      event.target.classList.toggle('isActive')
      this.$emit('onItemClick', tag)
    },
    resetTagActiveClass() {
      const tagItems = document.getElementsByClassName('tag-item')

      for (let i = 0; i < tagItems.length; i++) {
        tagItems[i].classList.remove('isActive')
      }
    }
  }
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
