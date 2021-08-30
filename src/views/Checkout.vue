<script>
import { ref, reactive, computed, watchEffect} from "vue";
import { useRoute,useRouter } from 'vue-router';

// @ is an alias to /src
import CheckModal from '@/components/CheckModal.vue'
import Cart from '@/components/Cart.vue'
import Steps from '@/components/Steps.vue'
import Controller from '@/components/Controller.vue'

export default {
  name: 'Checkout',
  components: {
    CheckModal,
    Steps,
    Cart,
    Controller,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    //取得現在的path
    const currentStep = computed(
     () => route.matched[1].components.default.name
    )

    const modalActive =ref(false);

    const addressData = reactive({
      formName: "addressData",
      data: {
        salutatioin: "",
        name: "",
        phone: "",
        email: "", 
        city: "",
        address: "",
      } 
    });

    const deliveryData = reactive({
      formName: "deliveryData",
      data: {
        shippingFee: 0,
      }
    });

    const paymentData = reactive({
      formName: "paymentData",
      data: {
        ccname: "",
        cardnumber: "",
        expdate: "",
        cvc: "",
        totalPrice:"",
      }
    });

    const cart = reactive( [
        {
          id: '001',
          name: '破壞補丁修身牛仔褲',
          price: 3999,
          number: 1,
          image:'demo01',
        },
        {
          id: '002',
          name: '刷色直筒牛仔褲',
          price: 1299,
          number: 2,
          image:'demo02',
        },
      ]
    )

    const cartData = reactive ({
      name: "cartData",
      data: [
        {
          id: '001',
          name: '破壞補丁修身牛仔褲',
          price: 3999,
          number: 1,
          image:'demo01',
        },
        {
          id: '002',
          name: '刷色直筒牛仔褲',
          price: 1299,
          number: 2,
          image:'demo02',
        },
      ]
    })
    
    console.log([...cartData.data][0])
    console.log([...cart][0])

    const totalprice = computed(()=>{
      const arr = [...cartData.data];
      let  { shippingFee } = deliveryData.data
      const reducer = ( acc, curr ) => acc.price*acc.number+curr.price*curr.number;
      return arr.reduce(reducer) + shippingFee
    });


    const handOpenModal = () => {
      modalActive.value = !modalActive.value;
      // if(isChecked.value){
      //   console.log({...formData});
      // }
    };

    //處理各階端表單 input資料 hand
    const handAddress = (item) => {
      addressData.data[item.key] = item.value;
    };
    
    const handClickDelivery = (value) => {
      deliveryData.data.shippingFee = value;
    };

    const handPayment = (item) => {
      paymentData.data[item.key] = item.value;
    };
    
    const handPayKeyup = (event) => {
      const {name ,value} = event.target
      paymentData.data[name] = value;
    };

    const handAmount = (event) => {
      const {id ,value} = event.target;
      cart.forEach((item) => {
        if (item.id === id) {
          item.number = value;
        }
      })
    };

    const handDecrease = (event) => {
      const {name} = event.target;
      console.log(name)
      cart.forEach((item) => {
        if (item.id === name) {
          if(item.number > 1) {
            item.number = item.number-1;
          }
          console.log(item)
        }
      })
    }

    const handIncrease = (event) => {
      const {name} = event.target;
      console.log(name)
      cart.forEach((item) => {
        if (item.id === name) {
          if(item.number < 20) {
            item.number = item.number+1;
          }
          console.log(item)
        }
      })
    }

   //處理 下一步
    const handNext = () =>{
        console.log(currentStep.value)
      if (currentStep.value === 'Address') {
          if (
            !addressData.data.salutatioin ||
            !addressData.data.name ||
            !addressData.data.phone ||
            !addressData.data.email ||
            !addressData.data.city ||
            !addressData.data.address
          ) {
            console.log('有未填的項目')
            handOpenModal()
          } else {
            console.log('都有填')
           router.push({ path: `/checkout/delivery` });
          }
      }
    };

    const init = () => {
      const addressLocal = JSON.parse(localStorage.getItem("addressData")) || { salutatioin: "",city: ""};
      const deliveryLocal = JSON.parse(localStorage.getItem("deliveryData")) || { shippingFee: 0};
      const paymentLocal = JSON.parse(localStorage.getItem("paymentData")) || {};
      // const cartLocal = JSON.parse(localStorage.getItem("cartData")) || [];
      addressData.data = addressLocal;
      paymentData.data = paymentLocal;
      deliveryData.data = deliveryLocal;
      // cartData.data = cartLocal;
    };

    const handSavsLocal = (data) => {
      localStorage.setItem(data.formName,JSON.stringify(data.data));
    }

    // 一開始
    init();

    // 資料如果有變動
    watchEffect(() => {
      handSavsLocal(addressData);
      handSavsLocal(deliveryData);
      handSavsLocal(paymentData);
      localStorage.setItem(cartData,JSON.stringify(cartData.data))
    });

    return { 
      addressData,
      deliveryData,
      paymentData,
      cart,
      totalprice,
      currentStep,
      handOpenModal,
      handAddress,
      handClickDelivery,
      handPayment,
      handPayKeyup,
      handAmount,
      handDecrease,
      handIncrease,
      handNext,
      modalActive,
    };
  }
}
</script>


<template>
  <div class=" flex justify-center items-center	flex-col mb-20">
    <h2 class="md:w-full lg:w-1040 mb-12 p-2 h2">結帳</h2>
    <div class="lg:w-1040 md:w-full grid md:grid-cols-4  grid-rows-6 gap-4 ">

      <!-- 分布表單 -->
      <div class="col-span-2  row-span-5 p-2">
        <Steps />
        <router-view  
          :addressData="addressData.data"
          :deliveryData="deliveryData.data"
          :paymentData="paymentData.data"
          @handAddress ="handAddress"
          @handPayment ="handPayment"
          :handClickDelivery="handClickDelivery"
          :handPayKeyup="handPayKeyup"
        ></router-view>
      </div>

      <!-- 購物車 -->
      <div class="col-span-2 md:row-span-6">
        <Cart
          :cart="cart"
          :shippingFee="deliveryData.data.shippingFee"
          :totalprice="totalprice"
          :handAmount="handAmount"
          :handDecrease="handDecrease"
          :handIncrease="handIncrease"
        />
      </div>

      <!-- 控制 bar -->
      <div class="col-span-2 row-span-1">
        <Controller
          :address="addressData.data"
          :handOpenModal="handOpenModal"
        />
        <!-- <button @click="handOpenModal"> Check </button> -->
      </div>
    </div>

  </div>
  <CheckModal
    :currentStep ="currentStep"
    :modalActive="modalActive"
    :address="addressData.data"
    :delivery="deliveryData.data"
    :payment="paymentData.data"
    :totalprice="totalprice"
    :handOpenModal="handOpenModal" 
  />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

.h2 {
  @apply text-4xl text-left font-bold font-body;
}

.h3 {
  @apply text-2xl text-left font-semibold font-body;
}

.h4 {
  @apply text-xl text-left font-semibold font-body;
}

.label {
  @apply text-left text-gray-400 font-bold mb-1 font-body;
}

.select {
  @apply appearance-none pl-3 h-10 w-full text-sm border rounded border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer font-body;
}

.input {
  @apply appearance-none pl-3 h-10 w-full text-sm border rounded border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer font-body;
}
</style>