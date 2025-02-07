<script setup lang="ts">
import { computed, ref } from "vue";
import { characterData, PropertyName } from "@/assets/characterData";
import Ouput from "@/components/Ouput.vue";
import FormatterInput from "@/components/FormatterInput.vue";
import CharacterSelection from "@/components/CharacterSelection.vue";

const currentCharacterIndex = ref(0);
const currentCharacter = computed(() => characterData[currentCharacterIndex.value]);
const post = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere lacus vel tristique bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Vestibulum tellus ante, lobortis nec eros vitae, fermentum lacinia magna.",
);
const quote = ref("lorem ipsum dolor sit amet");

function replaceByFormatted(replacement: string, targetProperty: PropertyName) {
  if (!currentCharacter.value[targetProperty]) return;
  return currentCharacter.value[targetProperty].replace("{{SLOT}}", replacement);
}

function handleCharacterChange(index: number) {
  if (currentCharacterIndex.value === index) return;
  currentCharacterIndex.value = index;
}
</script>

<template>
  <CharacterSelection @change-current-character="handleCharacterChange"></CharacterSelection>

  <main>
    <FormatterInput
      :current-character
      :replace-by-formatted
      v-model:post="post"
      v-model:quote="quote"
      @update-post="(text) => (post = text)"
    ></FormatterInput>

    <Ouput :current-character :post :quote :replaceByFormatted></Ouput>
  </main>
</template>
