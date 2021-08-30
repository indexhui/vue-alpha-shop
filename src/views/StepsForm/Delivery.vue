<script>
export default {
  name: "Delivery",
  props: {
    deliveryData:{
      type: Object,
    },
    handClickDelivery: {
      type: Function,
      default: ()=>{},
    }
  },
  setup(props) {
    return {props };
  }
}
</script>

<template>
  <div>
    <h3 class="h3 mb-8 mt-16">運送方式</h3>
    <div class="space-y-6">
      <div class="flex border border-gray-400	rounded">
        <input
          class="hidden"
          id="common"
          name="shipping"
          type="radio"
          value="0"
          checkedd
          :checked="props.deliveryData.shippingFee === 0"
          @click="handClickDelivery(0)"
        >
        <label class="flex items-center w-full px-2 py-2" for="common">
          <div 
            class="circle-icon w-5 h-5 border-gray-700 rounded-full mx-3"
           :class="[ deliveryData.shippingFee === 0 ? 'border-8	':'border']"
          >
          </div>
          <div class="flex flex-1 justify-between">
            <div class="shipping-type">
              <p class="text-left">標準運送</p>
              <p class="text-left">約3~7個工作天</p>
            </div>
            <div class="shipping-fee">
            免費
            </div>
          </div>
        </label>
      </div>
      <div class="flex border border-gray-400	rounded">
        <input
          class="hidden"
          id="dhl"
          name="shipping"
          type="radio"
          value="500"
          :checked="props.deliveryData.shippingFee === 500"
          @click="handClickDelivery(500)"
        >
        <label class="flex items-center w-full px-2 py-2" for="dhl">
          <div class="circle-icon w-5 h-5 border-gray-700 rounded-full mx-3"
           :class="[ deliveryData.shippingFee === 500 ? 'border-8	':'border']"></div>
          <div class="flex flex-1 justify-between">
            <div class="shipping-type">
              <p class="text-left">DHL運送</p>
              <p class="text-left">約3~7個工作天</p>
            </div>
            <div class="shipping-fee">
            500
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>


<style>

</style>