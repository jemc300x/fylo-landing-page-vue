<template>
  <div :style="`background-color: var(${color})`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      color: String
    }
  }
</script>