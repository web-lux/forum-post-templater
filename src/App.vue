<script setup lang="ts">
import { computed, ref } from "vue";

const post = ref("");
const output = computed(() => {
  return post;
});
</script>

<template>
  <aside class="character-selection">
    <button>Bérénice</button>
    <button>Solomon</button>
  </aside>

  <main>
    <div class="input">
      <div class="quote-field">
        <label for="quote">Citation</label>
        <textarea name="quote" id="quote"></textarea>
      </div>

      <div class="templater">
        <label for="post">Post RP</label>
        <div class="templater-input">
          <div class="templater-buttons">
            <button>Dialog</button>
            <button>Asterisk</button>
            <button>Intermission</button>
          </div>
          <textarea name="post" id="post" v-model="post" placeholder="Lorem ispum..."></textarea>
        </div>
      </div>
    </div>

    <div class="output">
      <label for="result">Output</label>
      <textarea name="result" id="result" class="result" v-model="output.value" readonly></textarea>
    </div>
  </main>
</template>

<style scoped></style>
