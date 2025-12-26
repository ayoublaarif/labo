<template>
  <NuxtPage />
</template>

<style>
@import '~/assets/css/tokens.css';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: var(--fox-font-family-main), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--fox-background-base);
  color: var(--fox-text-midlight);
}
</style>

