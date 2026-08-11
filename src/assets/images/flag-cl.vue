<script setup lang="ts">
export interface flagCLProps {
  width?: number
  height?: number
}

const props = withDefaults(defineProps<flagCLProps>(), {
  width: 24,
  height: 24,
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 512 512">
    <rect y="85.337" style="fill: #d80027" width="512" height="341.326" />
    <rect x="256" y="85.337" style="fill: #f0f0f0" width="256" height="170.663" />
    <rect y="85.337" style="fill: #0052b4" width="256" height="170.663" />
    <polygon
      style="fill: #f0f0f0"
      points="128,109.801 143.108,156.299 192,156.299 152.446,185.038 167.554,231.536 128,202.799   88.446,231.536 103.554,185.038 64,156.299 112.892,156.299 "
    />
  </svg>
</template>
