<script setup>
import { isValid, getCreditCardNameByNumber } from "creditcard.js";
import { defineEmits } from "vue";

const emit = defineEmits(["cardBandeira"]);

const validCard = ({ value }) => isValid(value);

const getNameOfCard = (value, input) => {
  if (value < 19) return;
  const name = getCreditCardNameByNumber(value);
  emit("cardBandeira", name);
};
</script>

<template>
  <FormKit
    type="text"
    label="Numero do cartâo"
    validation="validCard"
    validation-visibility="live"
    :validation-rules="{ validCard }"
    :validation-messages="{
      validCard: 'Cartão Invalido.',
    }"
    maxlength="19"
    placeholder="e.g. 1234 5678 9123 0000"
    outer-class="$reset field"
    label-class="$reset  uppercase text-sm tracking-[0.1rem] mb-2 inline-block "
    input-class="$reset input-class border border-gray-800/10 h-[3.5rem] w-full p-4 rounded-lg mb-2"
    wrapper-class="$reset wrapper"
    inner-class="$reset inner"
    :help-class="{
      'add-this-class': true,
      'dont-add-this': false,
    }"
    @input="getNameOfCard"
  />
</template>

<style></style>
