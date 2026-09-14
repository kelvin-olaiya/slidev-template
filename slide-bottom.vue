<template>
  <div v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'intro'" class="slide-page-number">
    {{ $nav.currentPage }} / {{ $nav.total }}
  </div>
</template>

<style scoped>
.slide-page-number {
  position: absolute;
  left: 24px;
  bottom: 18px;
  font-size: 0.75rem;
  color: var(--brand-gray);
  opacity: 0.7;
  z-index: 10;
}
</style>
