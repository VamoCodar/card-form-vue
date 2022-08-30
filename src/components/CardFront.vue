<script setup>
import { ref, computed } from "@vue/reactivity";
import { defineProps } from "vue";
import GLOBAL from "../GLOBAL.js";
import bgCard from "../assets/images/bg-card-front.png";

const props = defineProps(["numbers", "cardName", "cardMonth"]);
const numberEl = ref(null);
const numbersSpaces = computed(() => GLOBAL.formatCreditNumber(props.numbers));
</script>

<template>
  <div class="card-front">
    <img :src="bgCard" alt class="imagem" />

    <div class="circle-wrapper">
      <div class="circle1"></div>
      <div class="circle-outline"></div>
    </div>

    <div class="numbers" ref="numberEl">
      {{ numbersSpaces ? numbersSpaces : "0000 0000 0000 0000" }}
    </div>

    <div class="wrapper">
      <div class="name">{{ cardName ? cardName : "Jane Appleseed" }}</div>
      <div class="date drop-shadow-xl">{{ cardMonth }}</div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: all 0.4s ease;
}
.card-front {
  box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.13) 0px 30px 60px -30px;

  @apply 2xl:w-[var(--card-width)] 2xl:h-[var(--card-height)] w-[var(--card-width-sm)] h-[var(--card-height-sm)] relative p-11 select-none flex flex-col rounded-xl overflow-hidden transition-none;
}

.imagem {
  @apply object-cover w-full h-full absolute top-0 left-0 z-10 select-none;
}

.circle1 {
  @apply bg-white rounded-full 2xl:w-16 2xl:h-16 w-14 h-14;
}

.circle-outline {
  @apply bg-transparent border border-white rounded-full 2xl:w-7 2xl:h-7 w-6 h-6 ml-6;
}

.numbers {
  @apply relative z-20 mt-auto font-sans text-white 2xl:text-[2.5rem] text-[2.15rem] tracking-[0.3rem];
}

.wrapper {
  @apply relative z-20 flex justify-between text-white/90 2xl:mt-8 mt-5 tracking-[0.15rem] text-xl uppercase;
}

.circle-wrapper {
  @apply z-20 relative inline-flex items-center;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
</style>
