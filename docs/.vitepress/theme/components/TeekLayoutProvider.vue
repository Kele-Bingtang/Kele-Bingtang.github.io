<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { clockIcon, teekConfigContext } from "vitepress-theme-teek";
import { watch, nextTick, provide } from "vue";
import { useData } from "vitepress";
import { useRuntime } from "../hooks/useRuntime";
import { useRibbon } from "../hooks/useRibbon";
import ContributeChart from "./ContributeChart.vue";
import GlobalGreet from "./GlobalGreet.vue";

const { frontmatter } = useData();

// 页脚运行时间
const { start: startRuntime, stop: stopRuntime } = useRuntime("2021-10-19", {
  prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>小破站已运行 `,
});

watch(
  frontmatter,
  async newVal => {
    await nextTick();
    if (newVal.layout === "home") startRuntime();
    else stopRuntime();
  },
  { immediate: true }
);

// 彩带背景
const { start: startRibbon, stop: stopRibbon } = useRibbon({ immediate: false });

provide(teekConfigContext, {
  themeEnhance: {
    layoutSwitch: {
      switchModeDone: mode => {
        if (mode === "original") startRibbon();
        else stopRibbon();
      },
    },
  },
});
</script>

<template>
  <GlobalGreet />

  <Teek.Layout>
    <template #teek-archives-top-before>
      <ContributeChart />
    </template>
  </Teek.Layout>
</template>
