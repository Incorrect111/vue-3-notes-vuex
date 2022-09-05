<template>
  <div class="md-body">
    <h1>Все пользователи:</h1>
    <ul>
    <li v-for="user in getAllUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? "This is admin": 'Default user' }}</p>
    </li>
  </ul>
  </div>
</template>
<script>

export default {
  computed: {
    getAllUsers() {
      return this.$store.getters.getAllUsers
    }
  }
}
</script>
