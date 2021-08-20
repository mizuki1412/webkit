<template>
  <a-spin :spinning="loading">
<!--    <a-spin :spinning="loading"/>-->
    page1 {{loading}}
    <kit-empty @click="modal.visible = true">
      不存在
    </kit-empty>
    <a-avatar size="large">
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <div style="height: 880px">
      <a-button @click="confirm2">here</a-button>
    </div>
    <kit-modal :modal="modal" :confirm="confirm2">
      <template #title>abc</template>
      <div>content</div>
    </kit-modal>
  </a-spin>
</template>
<script setup>
  import {ref, onMounted, defineComponent} from 'vue'
  import {UserOutlined} from "@ant-design/icons-vue";
  import {confirm} from "../../../lib/service/confirm";
  import {errorMessage} from "../../../lib/service/message";
  // const vDrag = {
  //   mounted(el) {
  //     console.log(el)
  //   }
  // }

  const loading = ref(false)
  const modal = ref({
    visible: false
  })

  function confirm2(){
    // confirm()
    errorMessage("阿里", {type:'modal'})
    console.log(13)
  }

  onMounted(()=>{
    console.log('mounted page1')
  })
</script>
