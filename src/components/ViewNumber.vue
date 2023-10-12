<template>
    <div class="bg-rose-200 rounded-md font-bold text-3xl px-3 py-2 text-bold text-orange-500 w-44 text-center">
        $ {{ formattedValue }}
        </div>

</template>

<script>

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedValue() {
      // Formatear la parte entera y decimal del valor
      const parts = this.value.toFixed(2).split(".");
      const formattedIntPart = parts[0].toLocaleString();
      return `${formattedIntPart}.${parts[1]}`;
    },
  },
};

</script>