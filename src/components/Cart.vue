<script>
import { computed } from "vue";

export default {
  props: {
    cart: {
      type: Array,
    },
    shippingFee: {
      type: Number,
    },
    totalprice: {
      type: Number,
    },
    handAmount: {
      type: Function,
      default: ()=>{},
    },
    handDecrease: {
      type: Function,
      default: ()=>{},     
    },
    handIncrease: {
      type: Function,
      default: ()=>{},     
    }
  },
  setup(props) {

    return { props };
  }
}

</script>

<template>
  <div class="cart-container p-7 border rounded ">
    <div class="h4 mb-10">購物車</div>
    <div class=" divide-y divide-gray-300 space-y-8">
      <div class="space-y-8">
        <div 
          class="flex justify-between"
          v-for="item in cart"
          :key="item.id"
        >
          <img
            class="thumbail w-24 h-24 mr-4 rounded-xl"
            :src="require(`../assets/${item.image}.png`)"     
            alt=""
          >
          <div class="flex flex-col flex-1"> 
            <div class="text-left font-body text-base	">{{item.name}}</div>
            <div class="flex mt-1.5">
              <button
                class="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white"
                :name="item.id"
                @click="handDecrease"
              >−</button>
              <input 
                class="text-center appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 rounded mx-2 "
                :id="item.id"
                type="number"
                min="1" 
                max="20"
                :value="item.number"
                @input="handAmount"
              >
              <!-- <div v-show="item.number === 20"> 超過購買上限 </div> -->
              <button
                class="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white"
                :name="item.id"
                @click="handIncrease">
                +
              </button>
            </div>
          </div>
          <div>{{item.price}}</div>
        </div>
      </div>
      <div class="pt-4 flex justify-between">
        <div class="font-body">運費</div>
        <div class="font-body font-semibold">${{shippingFee}} </div>
      </div>
      <div class="pt-4 flex justify-between">
        <div class="font-body">總費</div>
        <div class="font-body font-semibold">{{totalprice}}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
