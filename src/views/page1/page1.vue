<template>
  <div v-loading="loading">
    <kit-tip>abc</kit-tip>
    <kit-empty @click="modal.visible = true">test<span style="color: red">abc</span></kit-empty>
    <kit-empty>test<span style="color: rebeccapurple">abc</span></kit-empty>
    <kit-modal :modal="modal" :confirm="confirm2">
      <template #title>abc</template>
      tst
    </kit-modal>
  </div>
</template>
<script setup>
  import {ref, onMounted} from 'vue'
  // import {errorMessage} from "../../../lib/service/message";
  import {sleep} from "../../../lib/utils/logic";
  import {useLoading} from "../../../lib/service/loading";

  const loading = ref(false)
  const modal = ref({
    visible: false
  })

  function confirm2(){
    // confirm()
    // errorMessage("阿里", {type:'modal'})
    console.log(13)
  }

  onMounted(useLoading(loading,async ()=>{
    await sleep(2000)
  }))
</script>
