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
  <div class="output">
    <button @click="generateOutput">Générer le RP</button>
    <label for="result">Output</label>
    <textarea readonly name="result" id="result" class="result" v-model="output"></textarea>
  </div>
</template>
