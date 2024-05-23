<script setup lang='ts'>
import appLogoLarge from '@/assets/social-hive-large.png'
import notFound from '@/assets/not-found.png'
import ProfileField from '@/components/ProfileField.vue'

const store = useStore()
const userProfile = computed(() => store.userProfile)
const userImage = computed(() => store.userImage)

const userProfileData = computed(() => {
  return {
    name: {
      value: `${userProfile.value.first_name} ${userProfile.value.last_name}`,
      icon: 'user',
      label: 'name',
      textStyles: 'text-xl font-bold',
    },
    birthday: { value: userProfile.value.date_of_birth, icon: 'cake-candles', label: 'birthday' },
    email: { value: userProfile.value.email, icon: 'envelope', label: 'email' },
    phone: { value: userProfile.value.phone_number, icon: 'phone', label: 'phone' },
    about: { value: userProfile.value.about, icon: 'user-pen', label: 'about me' },
  }
})

</script>

<template>
  <div class='mx-auto md:px-6 prose-indigo sm:rounded-md'>
    <div v-if='userProfile' class='p-4'>
      <div class='flex p-2 justify-between border-gray:50 border-b items-center'>
        <div class='flex'>
          <h1 class='text-3xl font-bold mx-4'>
            User Profile </h1>
          <router-link to='/user-information-form/' class='m-auto flex justify-center'>
            <button class='bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded'>
              edit profile
            </button>
          </router-link>
        </div>

        <img :src='appLogoLarge'
             alt='Social Hive logo'
             class='h-16 w-100' />
      </div>

      <div class='md:grid md:grid-cols-2'>
        <div class='user-image-wrapper flex items-center m-auto justify-center'>
          <div class='user-image' :style="{ backgroundImage: `url(${userImage})`, backgroundPosition: 'center' }">
          </div>
        </div>

        <div class='flex justify-between flex-col my-2 px-4 mb-4 md:px-0'>
          <ProfileField v-for='(field, index) in userProfileData' :key='index' :field='field.value'
                        :field-label='field.label' :icon='field.icon' :text-styles='field.textStyles' />
        </div>
      </div>
    </div>


    <div v-else class='p-4'>
      <div class='flex p-2 justify-between border-gray:50 border-b items-center'>
        <h1 class='text-3xl font-bold ml-4'>
          Welcome to Social Hive</h1>
        <img :src='appLogoLarge' alt='Social Hive logo' class='h-16 w-100' />
      </div>

      <img :src='notFound' alt='Social Hive logo' />
      <div class='flex items-center justify-center my-4'>
        <h2 class='text-bold'> User not found, please add new user</h2>
        <router-link to='/user-information-form/' class='btn primary ml-4'>
          <button class='bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded'>
            Add User
          </button>
        </router-link>
      </div>

    </div>
  </div>
</template>
<style scoped lang='scss'>

.user {
  &-profile-inner {
    display: grid;
    margin-top: 0.8em;
  }

  &-image {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid rgb(110, 143, 216);
    transition: linear 0.25s;
    background-repeat: no-repeat;
    background-size: cover;

    &-wrapper {
      @media (max-width: 768px) {
        margin: 1em auto;
      }
      margin-top: 4em;
    }
  }

  &-image img {
    width: 100%;
    height: auto;
  }

  &-image:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(37, 99, 235);
    -webkit-transition: ease-out 0.2s;
  }
}
</style>
