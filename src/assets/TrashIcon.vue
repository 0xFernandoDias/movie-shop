<template>
  <div class="tooltip">
    <font-awesome-icon
      icon="fa-solid fa-trash"
      style="color: #0f172a"
      :class="'hover:opacity-80 active:opacity-60'"
    />
    <span class="tooltiptext">Remove</span>
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
