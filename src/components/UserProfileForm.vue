<script setup lang='ts'>
import appLogoLarge from '@/assets/social-hive-large.png'

const store = useStore()

function submitApplication(submitData: any) {
  store.submitUserProfile(submitData)
  store.goToProfile()
}

const fileSize = function({ value }) {
  const fileSizeLimit = 1000000 // 1MB
  return value[0]?.file?.size <= fileSizeLimit
}
</script>

<template>
  <div class='flex p-2 justify-between border-gray:50 border-b items-center'><h1 class='text-3xl font-bold ml-4'>Sign in
    to Social
    Hive</h1><img :src='appLogoLarge' alt='Social Hive logo' class='h-16 w-100' /></div>
  <FormKit
    id='user-profile-form'
    v-slot='{ value: formData }'
    type='form'
    form-class='fk-univ-app p-4'
    submit-label='Submit'
    submit-class='btn btn-primary huj'
    incomplete-message='Sorry. The application was not submitted because not all fields are filled out correctly.'
    @submit='submitApplication'
  >
    <div class='grid gap-3 grid-cols-6 w-100'>
      <FormKit
        name='first_name'
        label='First name'
        type='text'
        validation='required:trim|alpha'
        outer-class='col-span-3'
      />
      <FormKit
        name='last_name'
        label='Last name'
        type='text'
        validation='required:trim|alpha'
        outer-class='col-span-3'
      />
    </div>
    <div class='grid gap-3 grid-cols-6 w-100'>

      <FormKit
        name='email'
        type='email'
        label='Email address'
        placeholder='example@example.com'
        validation='required|email'
        outer-class='col-span-3' />

      <FormKit
        name='phone_number'
        type='tel'
        label='Phone number'
        placeholder='xxx-xxx-xxx'
        validation='required|matches:/^[0-9]{9}$/'
        :validation-messages="{
    matches: 'Phone number must have 9 digits.',
  }"
        validation-visibility='dirty'
        outer-class='col-span-3'
      />
    </div>
    <div class='grid gap-3 grid-cols-6 w-100'>
      <FormKit
        name='date_of_birth'
        type='date'
        label='Date of birth'
        help='Enter your birthday.'
        validation='required|date_between:1924-01-01:00:01:00,2024-05-22:23:59:59'
        :validation-messages="{
            date_between: 'Incorrect date of birth.',
          }"
        outer-class='col-span-3'
      />
      <FormKit
        name='avatar'
        type='file'
        label='Avatar'
        accept='.png,.jpeg'
        help='Select Image file only.'
        multiple='false'
        validation='required|fileSize'
        :validation-rules='{ fileSize }'
        outer-class='col-span-3'
        :validation-messages="{fileSize: 'File cannot exceed 1MB.' }"
      />
    </div>
    <FormKit
      name='about'
      type='textarea'
      label='Write something about yourself'
      validation='required|length:20,300'
      validation-label='Your Bio'
      validation-visibility='blur'
      rows='6'
    >
      <template #help='context'>
        <div :class='[context.classes.help]'>
          {{ context.help }} <br />
          <span
          >{{ 300 - (context._value ? context._value.length : 0) }} / 300
            characters remaining.</span
          >
        </div>
      </template>
    </FormKit>
  </FormKit>
</template>
