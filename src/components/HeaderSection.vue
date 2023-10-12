<template>
    <section class="flex w-full ml-10 mr-10 pb-8 px-4 mb-10 justify-between border-b-2 border-gray-400">
      <div class="flex w-1/5 justify-around items-center content-center">
        <p class="text-orange-500 text-sm">&lt; atras</p>
        <h2 class="text-black font-semibold text-3xl">Pago de Propinas</h2>
      </div>
      <div class="flex flex-col justify-center items-end content-center w-1/6 mr-10">
        <p class="text-xs text-orange-500">Efectivo en Caja</p>
        
        <view-number :value="5500.00" />

      </div>
    </section>
  </template>
  
  <script>
  import ViewNumber from './ViewNumber.vue';

  export default {
    components: {
      ViewNumber
    },
    // ...
  };
  </script>
  