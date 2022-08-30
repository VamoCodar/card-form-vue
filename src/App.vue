<script setup>
import imgUrl from "./assets/images/bg-main-desktop.png";
import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";
import CardNumber from "./components/CardNumber.vue";
import { ref, computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import GLOBAL from "./GLOBAL.js";
import cardsAnimation from "./animation/cardsAnimation.js";
import gradienteAnimation from "./animation/gradienteAnimation";

const numbers = ref(null);
const cardName = ref(null);
const cardMonth = ref("00/00");

watch(numbers, () => console.log(numbers.value));

function handleKeyNumberCard(e) {
  const value = e.target.value;
  const regexp = new RegExp("[0-9]");
  e.target.value = GLOBAL.formatCreditNumber(value).trim();

  if (e.key === "Backspace") return;
  if (!regexp.test(e.key)) e.preventDefault();
}
onMounted(() => {
  cardsAnimation();
  gradienteAnimation();
});
</script>

<template>
  <div class>
    <!-- <HelloWorld msg="Teste MSG" /> -->
    <div class="division">
      <div class="degrade relative h-screen">
        <div class="gradiente-container">
          <img class="gradient" :src="imgUrl" alt="gradiente azul e roxo" />
        </div>

        <div class="card-wrapper">
          <CardFront :numbers="numbers" :cardName="cardName" :cardMonth="cardMonth"></CardFront>
          <CardBack></CardBack>
        </div>
      </div>

      <div class="forms">
        <CardNumber v-model="numbers" @keydown="handleKeyNumberCard"></CardNumber>
      </div>
    </div>
  </div>
</template>

<style>
body {
  --card-height: 22rem;
  --card-width: 40rem;
  --card-height-sm: 19rem;
  --card-width-sm: 36rem;
}
* {
  @apply outline-0;
}

.division {
  @apply grid grid-cols-[1fr_2fr] h-screen overflow-hidden;
}
.card-wrapper {
  @apply absolute z-10 my-auto w-max 2xl:ml-[10.6rem] ml-[4rem] top-0 bottom-0 h-max;
}
.gradiente-container {
  @apply h-full w-full overflow-hidden relative;
  img {
    @apply absolute h-full w-full object-cover top-0 left-0;
  }
}
.forms {
  @apply max-w-[31rem] m-auto w-full relative left-[6.5vw];
}
</style>
