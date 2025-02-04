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
    >
      {{ character.name }}
    </button>
  </aside>
</template>

<style scoped>
.character-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fff;
  width: min-content;
  padding: 16px;
  border-radius: 90px;
  border: solid #e2e8f0 1px;
}

button {
  height: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: solid 4px #e2e8f0;
}
</style>
