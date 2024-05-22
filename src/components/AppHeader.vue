<script setup lang='ts'>
import imageLogo from '@/assets/social-hive.png'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const store = useStore()
const showMenu = computed(() => store.isMenuVisible)

function toggleNavbar() {
  store.toggleMenu()
}

</script>

<template>
  <nav class='relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 border border-b border-gray:50'>
    <div class='container px-4 mx-auto flex flex-wrap items-center justify-between'>
      <div class='w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start'>
        <img :src='imageLogo' alt='Social Hive logo' />
        <button
          class='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
          type='button' @click='toggleNavbar'>
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>

      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class='lg:flex lg:flex-grow items-center'>
        <ul class='flex flex-col lg:flex-row list-none ml-auto'>
          <li class='nav-item'>
            <router-link to='/user-profile'
                         :active-class="'text-blue-600'"
                         class='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75'
            >
             <span
               class='ml-2'>User Profile</span>
            </router-link>
          </li>
          <li class='nav-item'>
            <router-link to='/user-information-form'
                         :active-class="'text-blue-600'"
                         class='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75'>
              <span class='ml-2'>Sign In</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
