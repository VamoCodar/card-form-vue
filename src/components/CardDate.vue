<script setup>
import { getNode } from "@formkit/core";
import { defineEmits, ref } from "vue";
const emit = defineEmits(["mes", "ano"]);

function handleMes(value) {
  if (String(value).length > 2) {
    const node = getNode("input-mes");
    node.input(String(value).slice(0, 2), false);
  } else emit("mes", value);
}
const mesValido = ({ value }) => value <= 12;
</script>

<template>
  <FormKit type="group">
    <div class="flex items-start gap-3">
      <div>
        <label>mes</label>
        <FormKit
          id="input-mes"
          outer-class="$reset field"
          label-class="$reset  uppercase text-sm tracking-[0.1rem] mb-2 inline-block "
          input-class="$reset input-class border border-gray-800/10 h-[3.5rem] w-full p-4 rounded-lg mb-2 "
          wrapper-class="$reset wrapper"
          inner-class="$reset inner"
          :help-class="{
            'add-this-class': true,
            'dont-add-this': false,
          }"
          type="number"
          max="12"
          maxlength="2"
          placeholder="MM"
          validation="required|mesValido"
          validation-visibility="submit"
          :validation-messages="{
            required: 'Mês Obrigátorio',
            mesValido: 'Insira um mês valido',
          }"
          :validation-rules="{ mesValido }"
          @input="handleMes"
          :value="null"
        />
      </div>
      <div>
        <label>ano</label>
        <FormKit
          outer-class="$reset field"
          label-class="$reset  uppercase text-sm tracking-[0.1rem] mb-2 inline-block "
          input-class="$reset input-class border border-gray-800/10 h-[3.5rem] w-full p-4 rounded-lg mb-2"
          wrapper-class="$reset wrapper"
          inner-class="$reset inner"
          :help-class="{
            'add-this-class': true,
            'dont-add-this': false,
          }"
          placeholder="AA"
        />
      </div>
    </div>
  </FormKit>
</template>

<style></style>
