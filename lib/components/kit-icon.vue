<template>
  <svg >
    <use v-if="symbolId" :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
<script setup>
// vite-plugin-svg-icons，引入svg的icon
import {computed} from "vue";

const props = defineProps({
  color: {
    type: String,
    default: 'black',
  },
  name: {
    type: String,
    default: null,
  },
})

const symbolId = computed(()=>{
  return "#icon-"+props.name
})
</script>
