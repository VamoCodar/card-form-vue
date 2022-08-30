<template>
  <FormKit
    type="text"
    label="Numero do cartâo"
    validation="required|email"
    validation-visibility="live"
    outer-class="$reset field"
    label-class="$reset only-my-class uppercase text-sm tracking-[0.1rem] mb-2 inline-block "
    input-class="$reset input-class border border-gray-800/10 h-[3.5rem] w-full p-4 rounded-lg mb-2"
    placeholder="e.g Jane Appleseed"
    wrapper-class="$reset wrapper"
    inner-class="$reset inner"
    :help-class="{
      'add-this-class': true,
      'dont-add-this': false,
    }"
    maxlength="19"
  />
</template>

<script setup>
// import { computed, defineProps, defineEmits } from "vue";
// const emit = defineEmits(["input"]);
// const props = defineProps(["value"]);

// const inputVal = computed({
//   get() {
//     return this.value;
//   },
//   set(val) {
//     emit("input", val);
//   },
// });
</script>

<style></style>
