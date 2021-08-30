<script>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

import FormInput from '@/components/FormInput.vue'

export default {
  name: "Address",
  components: {
    FormInput
  },
  props: {
    addressData: {
      type: Object,
      // default: () => {},
    }
  },
  emits: ["handAddress"],
  setup(props, { emit }) {
    const twCity = reactive({
      city: [],
    });
    const titleList = reactive(["先生","女士"]);
    const handCallBackFn= (item) =>{
      emit("handAddress",{...item})
    };
    onMounted(() => {
      axios.get("https://vue-lessons-api.herokuapp.com/city/list").then((res) => {
        twCity["city"] = res.data.twzip.city;
      });
    });
    return { titleList, twCity, props ,handCallBackFn };
  }
}
</script>

<template>
  <div>
    <h3 class="h3 mb-8 mt-16">寄送地址</h3>
    <div class="space-y-5">
      <div class="flex space-x-4">
        <div class="w-2/6 relative"> 
          <div class="label">稱謂</div>
          <select class="select" v-model="props.addressData.salutatioin">
            <option disable value="">請選擇稱謂</option>
            <option v-for="item in titleList" :key="item">
              {{item}}
            </option>
          </select>
          <svg  class="pointer-events-none  absolute right-0 top-3 mt-3.5 mr-2 text-gray-500" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9435 18.3508L15.6364 22.9398C15.5611 23.0201 15.4389 23.0201 15.3636 22.9398L11.0565 18.3508C10.9812 18.2705 10.9812 18.1404 11.0565 18.0602C11.0926 18.0216 11.1417 18 11.1928 18H19.8072C19.9137 18 20 18.092 20 18.2055C20 18.26 19.9797 18.3122 19.9435 18.3508Z" fill="#2A2A2A"/>
          </svg>
        </div>
        <div class="w-4/6">
          <FormInput
            label="姓名"
            placeholder="輸入使用者名稱"
            inputKey="name"
            :modalsValue="props.addressData.name"
            @item="handCallBackFn"
          />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="w-1/2">
          <FormInput
            label="電話"
            placeholder="請輸入行動電話"
            inputKey="phone"
            :modalsValue="props.addressData.phone"
            @item="handCallBackFn"
          />
        </div>
        <div class="w-1/2">
          <FormInput
            label="Email"
            placeholder="請輸入電子郵件"
            inputKey="email"
            :modalsValue="props.addressData.email"
            @item="handCallBackFn"
          />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="w-2/6 relative">
          <div class="label">縣市</div>
          <select class="select" v-model="props.addressData.city">
            <option disabled value="">請選擇縣市</option>
            <option v-for="item in twCity.city" :key="item.name">
              {{item.name}}
            </option>
          </select>
          <svg  class="pointer-events-none  absolute right-0 top-3 mt-3.5 mr-2 text-gray-500" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9435 18.3508L15.6364 22.9398C15.5611 23.0201 15.4389 23.0201 15.3636 22.9398L11.0565 18.3508C10.9812 18.2705 10.9812 18.1404 11.0565 18.0602C11.0926 18.0216 11.1417 18 11.1928 18H19.8072C19.9137 18 20 18.092 20 18.2055C20 18.26 19.9797 18.3122 19.9435 18.3508Z" fill="#2A2A2A"/>
          </svg>
        </div>
        <div class="w-4/6">
          <FormInput
            label="地址"
            placeholder="請輸入地址"
            inputKey="address"
            :modalsValue="props.addressData.address"
            @item="handCallBackFn"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style>

</style>