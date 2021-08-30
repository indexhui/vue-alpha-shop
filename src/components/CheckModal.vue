<script>
export default {
  props: {
    modalActive: {
      type: Boolean,
      default: false,
    },
    handOpenModal: {
      type: Function,
    },
    address: {
      type: Object,
    },
    delivery: {
      type: Object,
    },
    payment: {
      type: Object,
    },
    totalprice:{
      type: Number,
    },
    currentStep: {
      type: String,
    },

  },
  // emits: ["handOpenModel"],
  setup(props) {
    return { props };
  }
}
</script>

<template>
  <div
    class="
      w-screen
      h-screen 
      fixed
      flex
      justify-center
      items-center
      inset-0
      bg-black 
      bg-opacity-70
    "
    v-show="modalActive"
    @click="handOpenModal"
  >
    <div class="bg-white w-96 text-left p-8 space-y-2 rounded-md">
      <div>
        <div>名 稱: {{address.name}}</div>
        <div>電 話: {{address.phone}}</div>
        <div>信 箱: {{address.email}}</div>
        <div>縣 市: {{address.city}}</div>
        <div>地 址: {{address.address}}</div>
      </div>
      <div v-show="currentStep !== 'Address'">
        <div>運費: {{delivery.shippingFee}} </div>
        <div>持卡人姓名: {{payment.ccname}} </div>
        <div>卡 號: {{payment.cardnumber}} </div>
        <div>到期日: {{payment.expdate}} </div>
        <div>cvc: {{payment.cvc}} </div>
        <div>總價: {{totalprice}} </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>