<template>
  <div
    as="button"
    class="cursor-pointer"
    :onClick="() => $router.push({ path: '/' })"
  >
    <font-awesome-icon
      icon="fa-solid fa-couch"
      class="fa-2xl"
      style="color: #f9fafb"
    />
  </div>
</template>
