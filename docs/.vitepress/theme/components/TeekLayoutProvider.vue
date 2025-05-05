<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { clockIcon } from "vitepress-theme-teek";
import { watch, nextTick } from "vue";
import { useRuntime } from "../hooks/useRuntime";
import { useData } from "vitepress";

const { frontmatter } = useData();

// 页脚运行时间
const { start, stop } = useRuntime("2021-10-19", {
  prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>小破站已运行 `,
});

watch(
  frontmatter,
  async (newVal) => {
    await nextTick();
    if (newVal.layout === "home") start();
    else stop();
  },
  { immediate: true }
);
</script>

<template>
  <Teek.Layout></Teek.Layout>
</template>
