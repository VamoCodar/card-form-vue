<script setup></script>

<template>
  <FormKit
    type="text"
    label="Nome no cartão"
    validation="required"
    validation-visibility="submit"
    :validation-messages="{
      required: 'Nome Obrigátorio',
    }"
    maxlength="30"
    placeholder="e.g Jane Appleseed"
    outer-class="$reset field"
    label-class="$reset  uppercase text-sm tracking-[0.1rem] mb-2 inline-block "
    input-class="$reset input-class border border-gray-800/10 h-[3.5rem] w-full p-4 rounded-lg mb-2"
    wrapper-class="$reset wrapper"
    inner-class="$reset inner"
    :help-class="{
      'add-this-class': true,
      'dont-add-this': false,
    }"
  />
</template>

<style></style>
