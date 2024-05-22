import { defineStore } from 'pinia'

const versionString =
  import.meta.env.MODE === 'development' ? import.meta.env.VITE_APP_VERSION + '-dev' : import.meta.env.VITE_APP_VERSION

type UserProfile = {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  date_of_birth: Date
  avatar: {name: string, file: File}[]
  about: string
}

export const useStore = defineStore('main', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    isInitialized: false,
    showMenu: false,
    userProfile: null as UserProfile | null,
    userImage: null as string | null,
  }),

  actions: {
    initApp() {
      this.isInitialized = true
      console.log('app initialized!')
    },

    toggleMenu() {
      this.showMenu = !this.showMenu
    },

    async submitUserProfile(userProfile: UserProfile) {
      this.userImage = await this.readFileAsDataURL(userProfile.avatar[0].file)
      this.userProfile = userProfile
    },

    async readFileAsDataURL(file: File) {
      const reader = new FileReader()
      return new Promise(resolve => {
        reader.onload = ev => {
          resolve(ev.target.result)
        }
        reader.readAsDataURL(file)
      })
    },

    goToProfile() {
      this.router.push('/user-profile/')
    },
  },

  getters: {
    isReady: (state) => {
      return !state.isInitialized
    },
    isMenuVisible: (state) => {
      return state.showMenu
    },
  },
})
