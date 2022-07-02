<script setup>
defineProps({
  location: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="tooltip">
    <font-awesome-icon
      icon="fa-solid fa-cart-shopping"
      :class="
        location !== 'menuBox' && 'fa-2xl hover:opacity-80 active:opacity-60'
      "
      class="hover:opacity-80 active:opacity-60"
      :style="
        location === 'menuBox' ? { color: '#10b981' } : { color: '#f9fafb' }
      "
    />
    <span class="tooltiptext" v-if="location === 'menuBox'">Add to cart</span>
  </div>
</template>

<style>
.tooltip .tooltiptext {
  top: -5px;
  right: 105%;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
