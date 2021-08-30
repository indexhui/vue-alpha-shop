<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  props: {
    address: {
      type: Object,
    },
    handOpenModal: {
      type: Function,
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const currentStep = computed(
      () => route.matched[1].components.default.name
    );

    const handNext = () => {
      switch (currentStep.value) {
        case "Address":
          if (
            !props.address.salutatioin ||
            !props.address.name ||
            !props.address.phone ||
            !props.address.email ||
            !props.address.city ||
            !props.address.address
          ) {
            console.log("有未填的項目");
            props.handOpenModal();
          } else {
            console.log("都有填");
            router.push({ path: `/checkout/delivery` });
          }
          break;
        case "Delivery":
          router.push({ path: `/checkout/payment` });
          break;
        case "Payment":
          props.handOpenModal();
          break;
      }
    };

    const handBack = () => {
      switch (currentStep.value) {
        case "Delivery":
          router.push({ path: `/checkout/address` });
          break;
        case "Payment":
          router.push({ path: `/checkout/delivery` });
          break;
      }
    };

    return { props, currentStep, handNext, handBack };
  },
};
</script>

<template>
  <div class="flex px-2 py-2 justify-between">
    <div>
      <button
        class="rounded-md flex items-center"
        v-show="currentStep !== 'Address'"
        @click="handBack"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.85981 8.11673C7.6729 7.96109 7.36985 7.96109 7.18293 8.11673L2.14019 12.3158L2.084 12.3719C1.95329 12.53 1.97541 12.7488 2.14834 12.8861L7.19108 16.8899L7.25866 16.9347C7.44823 17.0386 7.70562 17.0181 7.86777 16.8765L7.92156 16.8202C8.04631 16.6624 8.02172 16.448 7.85166 16.313L3.67891 13H22.0238L22.1094 12.9919C22.3315 12.9496 22.5 12.7455 22.5 12.5C22.5 12.2239 22.2868 12 22.0238 12H3.87229L7.85981 8.68037L7.91519 8.62517C8.04442 8.46984 8.02596 8.25508 7.85981 8.11673Z"
            fill="black"
          />
        </svg>
        上一步
      </button>
    </div>
    <div>
      <button
        class="px-8 py-2 bg-red-300 rounded-md text-white flex items-center"
        v-show="currentStep !== 'Payment'"
        @click="handNext"
      >
        下一步
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.6402 8.11673C16.8271 7.96109 17.1302 7.96109 17.3171 8.11673L22.3598 12.3158L22.416 12.3719C22.5467 12.53 22.5246 12.7488 22.3517 12.8861L17.3089 16.8899L17.2413 16.9347C17.0518 17.0386 16.7944 17.0181 16.6322 16.8765L16.5784 16.8202C16.4537 16.6624 16.4783 16.448 16.6483 16.313L20.8211 13H2.47619L2.39059 12.9919C2.16845 12.9496 2 12.7455 2 12.5C2 12.2239 2.2132 12 2.47619 12H20.6277L16.6402 8.68037L16.5848 8.62517C16.4556 8.46984 16.474 8.25508 16.6402 8.11673Z"
            fill="white"
          />
        </svg>
      </button>
      <button @click="handNext" v-show="currentStep === 'Payment'">
        確認下單
      </button>
    </div>
  </div>
</template>

<style></style>
