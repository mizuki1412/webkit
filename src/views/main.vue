<template>
  <div class="flex h-screen">
    <a-layout-sider
        class="h-screen overflow-scroll"
        v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="h-14 w-full flex justify-center items-center text-gray-100">
        demo
      </div>
      <a-menu @click="routeTo" theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <template v-for="(item,index) of storePageMenu" :key="index">
          <a-menu-item :key="item.name" v-if="item.children.length===0">
            <template #icon v-if="item.icon">
              <icon-font :type="item.icon"></icon-font>
            </template>
            <span>{{item.menuTitle}}</span>
          </a-menu-item>
          <a-sub-menu :key="item.name" v-else>
            <template #icon v-if="item.icon">
              <icon-font :type="item.icon"></icon-font>
            </template>
            <template #title>{{item.menuTitle}}</template>
            <a-menu-item v-for="(item2,i) of item.children" :key="item2.name">
              <template #icon v-if="item2.icon">
                <icon-font :type="item2.icon"></icon-font>
              </template>
              <span>{{item2.menuTitle}}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-affix :offset-top="0">
        <div class="h-14 bg-white shadow flex justify-between items-center w-full">
          <div>
            <icon-font
                type="icon-home"
                class="ml-2 text-lg"
                v-if="collapsed"
                @click="() => (collapsed = !collapsed)"/>
            <icon-font
                type="icon-home"
                class="ml-2 text-lg"
                v-else
                @click="() => (collapsed = !collapsed)" />
          </div>
          <div class="pr-4">
            <a-avatar size="large">

            </a-avatar>
          </div>
        </div>
      </a-affix>
      <a-layout-content class="p-3 h-full overflow-scroll">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import {storePageMenu} from "../../lib/router";
import {useRouter} from "vue-router";
const selectedKeys = ref([])
const collapsed = ref(false)
const router = useRouter()

function routeTo(r){
  router.push({name: r.key})
}

onMounted(()=>{
  // 默认选中
  selectedKeys.value = []
  selectedKeys.value.push(router.currentRoute.value.name)
})

</script>
