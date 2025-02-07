<script setup lang="ts">
import { PropertyName } from "@/assets/characterData";
import { ref } from "vue";

const props = defineProps(["currentCharacter", "post", "quote", "replaceByFormatted"]);

const output = ref("");

function generateOutput() {
  if (!props.quote || !props.post) return;
  const formattedQuote = props.replaceByFormatted(props.quote, PropertyName.QUOTE);
  const html = props.replaceByFormatted(`${formattedQuote}\n${props.post}`, PropertyName.WRAPPER);
  output.value = `${html}${props.currentCharacter[PropertyName.STYLE]}`;
}
</script>

<template>
  <div class="island output">
    <button @click="generateOutput" class="btn--text">Générer le RP</button>
    <label for="result" class="title">Output</label>
    <div class="input textarea-wrapper">
      <button class="btn--icon">
        <img src="/src/assets/images/copy.svg" alt="Copier" />
      </button>
      <textarea readonly name="result" id="result" v-model="output"></textarea>
    </div>
  </div>
</template>

<style scoped>
.output {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}
</style>
