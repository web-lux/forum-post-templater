<script setup lang="ts">
import { characterData } from "@/assets/characterData.ts";
const emit = defineEmits(["changeCurrentCharacter"]);
</script>

<template>
  <aside class="character-selection">
    <button
      v-for="character in characterData"
      :key="character.name"
      @click="emit('changeCurrentCharacter', characterData.indexOf(character))"
    >
      {{ character.name }}
    </button>
  </aside>
</template>

<style scoped></style>
