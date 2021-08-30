<script>
import { computed } from "vue";
import { useRoute,useRouter } from 'vue-router';
export default {
  setup(){
    const route = useRoute();
    const currentStep = computed(
     () => route.matched[1].components.default.name
    )
    return {currentStep};
  }
}
</script>

<template>

  <div class="h-5 flex font-semibold">
    <div class="flex-auto flex items-center pr-2">
      <div class="w-6 h-6 rounded-full border-gray-800	border bg-gray-800">
        <span 
          v-show="currentStep === 'Address'"
          class="text-white"
        >
          1
        </span>
        <span v-show="currentStep !== 'Address'" class="steps-item-icon-number">
          <img class="w-6 h-6" src="../assets/icon_checked.svg" alt="checked">
        </span>
      </div>
      <div class="mx-2 mr-3">
        <router-link to="/checkout/address"> 寄送地址 </router-link>
      </div>
      <div class=" flex-auto h-1 bg-gray-700 rounded-full"></div>
    </div>

    <!-- 運送方式 -->
    <div
      class="flex-auto flex items-center pr-2 mx-2"
      :class="[currentStep === 'Address'? 'text-gray-400':'text-gray-800']"
    >
      <div 
        class="w-6  h-6  rounded-full border box-content"
        :class="[currentStep === 'Address'? 'border-gray-400':'border-gray-800']"
      >
        <span 
          v-show="currentStep !== 'Payment'"
        >
          2
        </span>
        <span v-show="currentStep === 'Payment'" class="steps-item-icon-number">
          <img
            class="w-6 h-6"
            src="../assets/icon_checked.svg" 
            alt="checked"
          >
        </span>
      </div>
      <div class="mx-2">
        <router-link to="/checkout/delivery"> 運送方式 </router-link>
      </div>
      <div
        class=" flex-auto	 h-1 rounded-full"
        :class="[currentStep === 'Address'? 'bg-gray-300':'bg-gray-700']"
      ></div>
    </div>

    <!-- 付款資訊 -->
    <div
      class="flex-initial	 flex items-center pr-2"
      :class="[currentStep === 'Payment'? 'text-gray-800':'text-gray-400']"
    >
      <div 
        class="w-6  h-6  rounded-full border"
        :class="[currentStep === 'Payment'? 'border-gray-800':'border-gray-400']"
      >
        <span 
        >
          3
        </span>
        <!-- <span v-show="currentStep === 'Payment'" class="steps-item-icon-number">
          <img src="../assets/icon_checked.svg" alt="checked">
        </span> -->
      </div>
      <div class="px-1">
        <router-link to="/checkout/payment"> 付款資訊 </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>