<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/System/Header'
import Footer from '@/components/System/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
