<script setup lang="ts">
import { characterData } from "@/assets/characterData";
const emit = defineEmits(["changeCurrentCharacter"]);
const props = defineProps(["currentCharacter"]);
</script>

<template>
  <aside class="character-selection">
    <button
      v-for="character in characterData"
      :key="character.name"
      @click="emit('changeCurrentCharacter', characterData.indexOf(character))"
      :style="{ background: `url('/icon-${character.name}.jpg')` }"
      class="character-btn"
      :class="{
        'character-btn--active': props.currentCharacter.name === character.name ? true : false,
      }"
    >
      <span class="character-name">{{ character.name }}</span>
    </button>
  </aside>
</template>
