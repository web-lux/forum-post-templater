<script setup lang="ts">
import type { PropertyName } from "@/assets/characterData";
import { ref, useTemplateRef } from "vue";

const props = defineProps(["currentCharacter", "replaceByFormatted"]);
const post = defineModel<string>("post");
const quote = defineModel<string>("quote");
const emit = defineEmits(["updatePost"]);
const postInputElement = useTemplateRef("post-input");
const previousPostState = ref();

function cancelLastAction(e: KeyboardEvent) {
  if (e.key === "z" && previousPostState.value) {
    emit("updatePost", previousPostState.value);
  }
}

function applyTemplateToSelection(propertyName: PropertyName) {
  if (!postInputElement.value) return;

  const { selectionStart, selectionEnd, value } = postInputElement.value;
  const before = value.substring(0, selectionStart);
  const after = value.substring(selectionEnd);

  previousPostState.value = post.value;

  if (selectionStart !== selectionEnd) {
    const selection = value.substring(selectionStart, selectionEnd);
    const formattedSelection = props.replaceByFormatted(selection, propertyName);
    emit("updatePost", `${before}${formattedSelection}${after}`);
  } else {
    emit("updatePost", `${before}${props.replaceByFormatted("", propertyName)}${after}`);
  }
}
</script>

<template>
  <div class="input">
    <div class="quote-field">
      <label for="quote">Citation</label>
      <textarea name="quote" id="quote" v-model="quote"></textarea>
    </div>

    <div class="templater">
      <label for="post">Post RP</label>
      <div class="templater-input">
        <div class="templater-buttons">
          <button
            v-for="formatStyle in currentCharacter.formatButtons"
            :key="formatStyle"
            @click="applyTemplateToSelection(formatStyle as PropertyName)"
          >
            {{ formatStyle }}
          </button>
        </div>
        <textarea
          name="post"
          id="post"
          v-model="post"
          placeholder="Lorem ispum..."
          ref="post-input"
          @keyup.ctrl="cancelLastAction"
        ></textarea>
      </div>
    </div>
  </div>
</template>
