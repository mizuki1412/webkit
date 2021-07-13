<template>
  <div>
    <a-spin />
    page3 {{loading}}
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
    console.log('mounted page3')
  })
</script>
