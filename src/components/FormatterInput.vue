<script setup lang="ts">
import { PropertyName } from "@/assets/characterData";
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

function getBtnIcon(propertyName: PropertyName) {
  switch (propertyName) {
    case PropertyName.DIALOG:
      return "/src/assets/images/dialog.svg";
    case PropertyName.ASTERISK:
      return "/src/assets/images/asterisk.svg";
    case PropertyName.INTERLUDE:
      return "/src/assets/images/pen.svg";
    default:
      return "";
  }
}
</script>

<template>
  <div class="island">
    <div class="fieldgroup">
      <label for="quote" class="title">Citation</label>
      <div class="input textarea-wrapper input--quote">
        <button class="btn--icon">
          <img src="/src/assets/images/copy.svg" alt="Copier" />
        </button>
        <textarea name="quote" id="quote" v-model="quote"></textarea>
      </div>
    </div>

    <div class="fieldgroup">
      <label for="post" class="title">Post RP</label>
      <div class="input templater">
        <div class="templater-buttons">
          <button
            v-for="formatStyle in currentCharacter.formatButtons"
            :key="formatStyle"
            @click="applyTemplateToSelection(formatStyle as PropertyName)"
          >
            <img :src="getBtnIcon(formatStyle as PropertyName)" />
            <div class="tooltip">{{ formatStyle }}</div>
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

<style scoped>
.island {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
