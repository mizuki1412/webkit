<template>
  <el-tooltip :effect="effect" placement="top-start">
    <i class="el-icon-warning" :style="{color: color}" />
    <template #content>
      <slot/>
    </template>
  </el-tooltip>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: '#5a5a5a',
  },
  effect: {
    type: String,
    default: 'dark',
  }
})
</script>
