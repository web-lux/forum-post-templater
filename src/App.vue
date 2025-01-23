<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { characterData } from "@/assets/characterData.ts";

const currentCharacter = ref(characterData[0]);
const postInputElement = useTemplateRef("post-input");
const output = ref("Lorem");

const previousPostState = ref();
const post = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere lacus vel tristique bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Vestibulum tellus ante, lobortis nec eros vitae, fermentum lacinia magna.",
);
const quote = ref("");

type possibleProperty =
  | "color"
  | "style"
  | "wrapper"
  | "quote"
  | "dialog"
  | "interlude"
  | "asterisk";

function replaceByFormatted(replacement: string, targetProperty: possibleProperty) {
  return currentCharacter.value[targetProperty].replace("{{SLOT}}", replacement);
}

function applyDialog() {
  if (!postInputElement.value) return;

  const { selectionStart, selectionEnd, value } = postInputElement.value;
  const before = value.substring(0, selectionStart);
  const after = value.substring(selectionEnd);

  previousPostState.value = post.value;

  if (selectionStart !== selectionEnd) {
    const selection = value.substring(selectionStart, selectionEnd);
    const formattedSelection = replaceByFormatted(selection, "dialog");
    post.value = `${before}${formattedSelection}${after}`;
  } else {
    post.value = `${before}${replaceByFormatted("", "dialog")}${after}`;
  }

  postInputElement.value.focus();
}

function handleReturn(e: KeyboardEvent) {
  if (e.key === "z") {
    post.value = previousPostState.value;
  }
}
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
        <textarea name="quote" id="quote" v-model="quote"></textarea>
      </div>

      <div class="templater">
        <label for="post">Post RP</label>
        <div class="templater-input">
          <div class="templater-buttons">
            <button @click="applyDialog">Dialogue</button>
            <button>Astérisque</button>
            <button>Interlude</button>
          </div>
          <textarea
            name="post"
            id="post"
            v-model="post"
            placeholder="Lorem ispum..."
            ref="post-input"
            @keyup.ctrl="handleReturn"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="output">
      <label for="result">Output</label>
      <textarea name="result" id="result" class="result" readonly v-model="output"></textarea>
    </div>
  </main>
</template>

<style scoped></style>
