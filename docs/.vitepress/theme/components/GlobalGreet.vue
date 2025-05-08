<script setup lang="ts" name="GlobalGreet">
import { TkMessage } from "vitepress-theme-teek";
import { ref, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

const hasGreet = ref(false);
const duration = 4000;

const greet = () => {
  if (hasGreet.value) return;

  hasGreet.value = true;
  setTimeout(() => {
    hasGreet.value = false;
  }, duration);

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const timeStr = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
  const message = getGreetingMessage(hours, timeStr);

  TkMessage.info({ message, duration, plain: true, offset: 80 });
};

const getGreetingMessage = (hours: number, timeStr: string) => {
  if (hours >= 6 && hours < 10) {
    return `早上好呀~~，现在是 ${timeStr}，吃早餐了吗？😊🤭`;
  }

  if (hours >= 10 && hours < 12) {
    return `上午好呀~~，现在是 ${timeStr}，该准备吃饭啦🥗🍖~~`;
  }

  if (hours >= 12 && hours <= 16) {
    return `下午好呀~~，现在是 ${timeStr}，繁忙的下午也要适当休息哦🥤🏀~~`;
  }

  if (hours >= 16 && hours <= 19) {
    return `到黄昏了~~，现在是 ${timeStr}，该准备吃饭啦🥗🍖~~`;
  }

  if (hours >= 19 && hours < 24) {
    return `晚上好呀~~，现在是 ${timeStr}，该准备洗漱睡觉啦🥱😪~~`;
  }

  if (hours >= 0 && hours < 6) {
    return `别再熬夜了~~，现在是 ${timeStr}，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏`;
  }

  return `你好呀！现在是 ${timeStr}。`;
};

watch(route, greet, { immediate: true });
</script>

<template></template>
