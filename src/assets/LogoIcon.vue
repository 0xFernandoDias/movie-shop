<template>
  <div
    as="button"
    class="cursor-pointer"
    :onclick="() => $router.push({ path: '/' })"
  >
    <font-awesome-icon
      icon="fa-solid fa-couch"
      :class="'fa-2xl hover:opacity-80'"
      style="color: #f9fafb"
    />
  </div>
</template>
