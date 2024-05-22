<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineProps } from 'vue'

defineProps({
  fieldLabel: String,
  field: String,
  icon: String,
  textStyles: String,
})

</script>

<template>
  <div class='flex flex-col mt-4 border-b border-gray-300 overflow-hidden text-ellipsis'>
    <div class='text-sm text-gray-800'>
      <font-awesome-icon class='text-xs mr-2' :icon="['fas', icon]" />
      <span>{{ fieldLabel }}</span></div>
    <div>
      <div>
        <span :class='textStyles'>{{ field }}</span>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>