<script setup lang="ts">
import { characterData } from "@/assets/characterData";
const emit = defineEmits(["changeCurrentCharacter"]);
</script>

<template>
  <aside class="character-selection">
    <button
      v-for="character in characterData"
      :key="character.name"
      @click="emit('changeCurrentCharacter', characterData.indexOf(character))"
      :style="{ background: `url('/src/assets/images/icon-${character.name}.jpg')` }"
      class="character-btn"
    >
      <span class="character-name">{{ character.name }}</span>
    </button>
  </aside>
</template>
