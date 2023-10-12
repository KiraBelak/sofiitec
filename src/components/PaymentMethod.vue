<template>
    <div
      class="flex flex-col border border-gray-500 rounded-xl py-3 px-6 shadow-md justify-center items-center content-center"
      :class="bgClass"
    >
      <!-- Icono y texto -->
      <div class="w-12 h-12">
        <slot name="icon"></slot>
      </div>
      <p class="text-xs font-normal">
        <slot name="text"></slot>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bgColor: {
        type: String,
        default: "bg-gray-200",
      },
    },
    computed: {
      bgClass() {
        return this.bgColor;
      },
    },
  };
  </script>
  