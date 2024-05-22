<script>
import AppHeader from '../AppHeader.vue'
import AppFooter from '../AppFooter.vue'
export default {
  name: 'DefaultLayout',
  components: { AppFooter, AppHeader },
}
</script>

<template>
  <div class='bg-secondary-dark'>
    <AppHeader/>
    <router-view v-slot='{ Component }'>
      <transition name='fade' mode="out-in">
        <component :is='Component' />
      </transition>
    </router-view>
    <AppFooter/>
  </div>
</template>

<style scoped>
.fade-enter-active {
  animation: fade 0.25s;
}

.fade-leave-active {
  animation: fade 0.25s reverse;
}

@keyframes fade {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}
</style>