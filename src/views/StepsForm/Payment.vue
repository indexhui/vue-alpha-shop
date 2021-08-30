<script>
import { reactive } from "vue";
import FormInput from '@/components/FormInput.vue'

export default {
  name: "Payment",
  components: {
    FormInput
  },
  props: {
    paymentData: {
      type: Object,
    },
    handPayKeyup: {
      type: Function,
      default: ()=>{},
    }
  },
  emits: ["handPayment"],
  setup(props, { emit }) {
    const twCity = reactive({
      city: [],
    });
    const handCallBackFn= (item) =>{
      emit("handPayment",{...item})
    };
    return { props ,handCallBackFn };
  }
}
</script>

<template>
  <div>
    <h3 class="h3 mb-8 mt-16">付款資訊</h3>
    <div class="flex flex-wrap space-y-5">
      <div class="w-5/6">
        <FormInput
          label="持卡人姓名"
          placeholder="John Doe"
          inputKey="ccname"
          :modalsValue="props.paymentData.ccname"
          @item="handCallBackFn"
        />
      </div>
      <div class="w-5/6">
        <FormInput
          label="卡號"
          placeholder="1111 2222 3333 4444"
          inputKey="cardnumber"
          :modalsValue="props.paymentData.cardnumber"
          @item="handCallBackFn"
        />
      </div>
      <div class="w-1/2 pr-3">
        <div class="label" for="expdate">到期日</div>
        <input
          class="input"
          type="text"
          name="expdate"
          id="expdate"
          placeholder="MM/YY"
          :value="props.paymentData.expdate"
          @keyup="handPayKeyup"
        >
      </div>
      <div class="w-1/2">
        <div  class="label">CVC / CCV</div>
        <input
          class="input"
          type="text"
          name="cvc"
          id="cvc" 
          placeholder="123"
          :value="props.paymentData.cvc"
          @keyup="handPayKeyup"
        >
      </div>
    </div>
  </div>
</template>


<style>

</style>