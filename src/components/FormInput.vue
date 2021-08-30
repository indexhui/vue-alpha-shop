<script>
export default {
  name: 'FormInput',
  props: {
    label: {
      type: String,
      default: 'label',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modalsValue:  {
      type: String,
      default: '',
    },
    inputKey: String,
  },
  emits: ["item"],
  setup(props, { emit }) {
    const updateValue = (event) => {
      emit("item",{ key: props.inputKey , value: event.target.value})
    }
    return {props ,updateValue,};
  }

}
</script>

<template>
  <div class="label">{{label}}</div>
    <input
        class="input"
        type="text"
        :placeholder="placeholder"
        :value="modalsValue"
        @input="updateValue"
  />
</template>


<style>

</style>