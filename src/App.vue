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
import masterBandeira from "./assets/images/bandeiras/mastercard.png";
import visaBandeira from "./assets/images/bandeiras/visa.png";
import CardName from "./components/CardName.vue";
import CardDate from "./components/CardDate.vue";
import containerAnimation from "./animation/containerAnimation";

const numbers = ref(null);
const cardName = ref(null);
const cardMonth = ref({ mes: "", ano: "" });
const cardBandeira = ref("");

watch(numbers, () => console.log(numbers.value));

function handleKeyNumberCard(e) {
  const value = e.target.value;
  const regexp = new RegExp("[0-9]");
  e.target.value = GLOBAL.formatCreditNumber(value).trim();
  if (e.key === "Backspace" || e.key === "Tab" || e.ctrlKey) return;
  if (!regexp.test(e.key)) e.preventDefault();
}

function handleCardBandeira(bandeira) {
  const cartoes = [
    ["Mastercard", masterBandeira],
    ["Visa", visaBandeira],
  ];

  const cartao = cartoes.filter(([name]) => name === bandeira);

  if (cartao.length) {
    const [_, bandeira] = cartao[0];
    cardBandeira.value = bandeira;
  } else {
    cardBandeira.value = null;
  }

  console.log(cartao);
}

onMounted(() => {
  containerAnimation().add(cardsAnimation, "-=0.15").add(gradienteAnimation, "<-1");
});
function changeMes(v) {
  cardMonth.value.mes = v;
}
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
          <CardFront
            :numbers="numbers"
            :cardName="cardName"
            :cardMonth="cardMonth"
            :cardBandeira="cardBandeira"
          ></CardFront>
          <CardBack></CardBack>
        </div>
      </div>

      <div class="forms flex flex-col gap-6">
        <!--  <FormKit type="form"> -->
        <CardName v-model="cardName"></CardName>
        <CardNumber
          v-model="numbers"
          @keydown="handleKeyNumberCard"
          @cardBandeira="handleCardBandeira"
        ></CardNumber>
        <CardDate @mes="changeMes"></CardDate>
        <!--     </FormKit> -->
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
