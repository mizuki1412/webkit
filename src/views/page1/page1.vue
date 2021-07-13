<template>
  <div>
    <a-spin />
    page1 {{loading}}
    <kit-empty>
      不存在
    </kit-empty>
    <a-avatar size="large">
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <div style="height: 880px"></div>
  </div>
</template>
<script setup>
  import {ref, onMounted, defineComponent} from 'vue'
  import {UserOutlined} from "@ant-design/icons-vue";

  defineComponent({
    UserOutlined
  })

  const loading = ref(false)

  onMounted(()=>{
    console.log('mounted page1')
  })
</script>
