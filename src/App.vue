<script setup lang='ts'>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()

useHead({
  title: () => route.meta.title || 'Social Hive',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title,
    },
  ],
})

</script>
<template>
  <div class='h-screen'>
    <AppHeader />
    <div class='container max-w-2xl mx-auto shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 rounded mt-6'>
      <main>
        <router-view v-slot='{ Component }'>
          <transition name='fade' mode='out-in'>
            <component :is='Component' />
          </transition>
        </router-view>
      </main>
    </div>
    <AppFooter />
  </div>
</template>
<style>
.fade-enter-active {
  animation: fade 0.25s;
}

.fade-leave-active {
  animation: fade 0.25s reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 100%;
  }
}
</style>
