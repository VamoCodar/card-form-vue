<script setup>
import { onMounted } from "@vue/runtime-core";
import loaderCardAnimation from "../animation/loaderCardAnimation";
onMounted(() => {
  loaderCardAnimation();
});
</script>

<template>
  <div class="card-back">
    <div class="faixa-preta h-16 w-full mt-7 bg-[#2f2f2f]"></div>
    <div class="faixa-cinza">000</div>

    <div class="linhas w-full">
      <div class="row max-w-[40%] w-full">
        <span style="--size: 65%"></span>
        <span style="--size: 15%"></span>
        <span style="--size: 15%"></span>
        <span style="--size: 7%"></span>
      </div>
      <div class="row max-w-[32%] w-full">
        <span style="--size: 20%"></span>
        <span style="--size: 40%"></span>
        <span style="--size: 30%"></span>
        <span style="--size: 10%"></span>
      </div>
      <div class="row max-w-[40%] w-full">
        <span style="--size: 5%"></span>
        <span style="--size: 15%"></span>
        <span style="--size: 15%"></span>
        <span style="--size: 70%"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-back {
  box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.13) 0px 30px 60px -30px;
  background: linear-gradient(172.73deg, #ffffff -51.18%, #d2d3d9 130.64%);

  @apply 2xl:w-[var(--card-width)] 2xl:h-[var(--card-height)] w-[var(--card-width-sm)] h-[var(--card-height-sm)]  relative select-none flex flex-col rounded-xl mt-12 -right-36 overflow-hidden;
}
.faixa-cinza {
  @apply h-14 rounded-lg flex justify-end items-center mx-14 bg-[#adb5bf] p-5 text-white/80 tracking-[0.2rem] text-lg mt-10;
}
.linhas {
  @apply gap-[0.63rem] flex flex-col items-center mx-auto mt-11;
  .row {
    @apply inline-flex gap-2 mx-auto  relative z-20 items-center;
    span {
      flex: 1 1 var(--size);
      @apply bg-[#aab1b7] rounded-lg h-[5px] block;
    }
  }
}
</style>
