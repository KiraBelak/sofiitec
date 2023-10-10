<template>
  <div class="h-screen w-screen px-4 py-8 bg-white">
    <section
      class="flex w-full ml-10 mr-10 pb-8 px-4 justify-between border-b-2"
    >
      <div class="flex w-1/5 justify-around items-center content-center">
        <p class="text-orange-500 text-sm">&lt; atras</p>

        <h2 class="text-black font-semibold text-3xl">Pago de Propinas</h2>
      </div>
      <div
        class="flex flex-col justify-center items-end content-center w-1/6 mr-10"
      >
        <p class="text-xs text-orange-500">Efectivo en Caja</p>
        <div
          class="bg-orange-100 rounded-md font-bold text-3xl px-2 py-px text-bold text-orange-500 w-fit"
        >
          $ 5,500.00
        </div>
      </div>
    </section>

    <!-- seccion de flex con tres columnas -->
    <section class="flex w-full mt-8">
      <!-- columna 1 -->
      <div class="flex flex-col ml-8 w-1/3 mr-4">
        <div class="flex flex-col justify-center items-center content-center">
          <p class="text-xs text-orange-400 text-start mr-28"> Total de Propinas</p>
         <div class="flex">
          <div
            class="bg-orange-100 font-bold text-3xl px-3 py-2 text-bold text-orange-700 rounded-md w-fit"
          >
            $ 1,500.00
          </div>
            <!-- icono de editar -->
            <svg
              class="w-6 h-6 ml-4 text-center align-middle text-black mt-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M15.293 2.293a1 1 0 011.414 0l1 1a1 1 0 010 1.414l-12 12a1 1 0 01-.39.242l-5 1a1 1 0 01-1.242-1.242l1-5a1 1 0 01.242-.39l12-12zM14 5l1.293 1.293-9.586 9.586-1.293-1.293L14 5zm3.707-3.707l-1 1L15 2l1.707-.707 1 1z"
                clip-rule="evenodd"
              ></path>
            </svg>

         </div>

         
        </div>
        <p class="mt-4 text-md w-full text-start ml-32 font-semibold"> ¿Entre cúantos quieres dividir las Propinas?</p>

        <div class="w-full flex text-center items-baseline ml-32 ">
            <!-- input para ingresar el numero -->
            <input
              class="w-16 mt-2 border-2 border-gray-400 rounded-lg ml-8 px-2 py-1"
              type="number"
              placeholder="$"
            />

            <p class="text-orange-600 font-semibold text-end ml-8">$300.00 por Persona </p>
          
        </div>

        <div class="ml-32 flex flex-wrap items-center mt-12">
          <!-- icono de wallet -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">

  <path data-name="opacity" d="M23 18L56.9 4.8c2.2-.8 5 .5 5 2.2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v36a3 3 0 0 0 3 3h15V23a5.2 5.2 0 0 1 3-5z"
  fill="#000000" opacity=".15"></path>
  <circle data-name="layer1" cx="32" cy="36.2" r="4" fill="#fff"></circle>
  <path data-name="stroke" d="M20.2 46H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h54a3 3 0 0 1 3 3m-50 7h21.3M12 26h8"
  fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
  stroke-width="2"></path>
  <path data-name="stroke" d="M62 41a5.4 5.4 0 0 1-3 5L24 59.6c-3 1.3-4-1-4-2.6V23a5.2 5.2 0 0 1 3-5L57 4.8c2.2-.8 5 .5 5 2.2z"
  fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
  stroke-width="2"></path>
  <circle data-name="stroke" cx="32" cy="36.2" r="4" fill="none"
  stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
</svg>

  <p class="ml-2 text-black text-lg font-semibold">Elige el método de pago</p>

          <!-- una cuadricula de dos por dos dejando el ultimo cuadrante vacio -->
          <div class="grid w-full text-black font-bold grid-cols-2 gap-4 mt-4">
            <!-- cuadrante 1 -->
            <div class="flex flex-col border border-gray-500 rounded-xl py-2 px-6 shadow-md text-black shadow-black justify-center items-center content-center">
                <!-- icono de efectivo y abajo un parrafo de efectivo -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>


              <p class="text-xs font-normal">Efectivo</p>


            </div>
            <!-- cuadrante 2 -->
            <div class="flex flex-col border border-gray-400 rounded-xl py-3 px-6 shadow-md text-white bg-orange-600 shadow-gray-600 justify-center items-center content-center">
                <!-- icono de una tarjeta y abajo un parrafo de tarjeta -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>


              <p class="text-xs font-normal">BBVA 1234</p>


            </div>
            <!-- cuadrante 3 -->
            <div class="flex flex-col border border-gray-500 rounded-xl py-3 px-6 shadow-md text-black shadow-black justify-center items-center content-center">
                <!-- icono de una tarjeta y abajo un parrafo de tarjeta -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>


              <p class="text-xs font-normal">Santander 1234</p>


            </div>
            </div>

            <!-- una linea como de progreso donde este en el 75% -->
            <div class="flex flex-col justify-center items-center content-center mt-8">
              <div class="w-96  h-1 bg-gray-300 rounded-full">
                <div
                  class="w-3/4 h-full text-center text-xs text-white bg-orange-600 rounded-full"
                ></div>
              </div>
              <!-- <p class="text-xs text-black font-semibold mt-2">75% de Propinas Pagadas</p> -->
              </div>

        </div>


      </div>
      <!-- columna 2 -->
      <div class="flex flex-col w-1/3 mr-4">
        <div class="flex flex-col justify-center items-center content-center">
            aqui va la tercera columna
         
        </div>
        
      </div>
      <!-- columna 3 -->
      <div class="flex flex-col w-1/3 mr-4">
        <div class="flex flex-col justify-center items-center content-center">
          <div
            class="bg-orange-200 font-bold text-3xl px-2 py-px text-bold text-orange-800 w-fit"
          >
            $ 5,500.00
          </div>
          <p class="text-xs">Efectivo en Caja</p>
        </div>
        <div
          class="flex flex-col justify-center items-center content-center mt-4"
        >
          <div
            class="bg-orange-200 font-bold text-3xl px-2 py-px text-bold text-orange-800 w-fit"
          >
            $ 5,500.00
          </div>
          <p class="text-xs">Efectivo en Caja</p>
        </div>
        <div
          class="flex flex-col justify-center items-center content-center mt-4"
        >
          <div
            class="bg-orange-200 font-bold text-3xl px-2 py-px text-bold text-orange-800 w-fit"
          >
            $ 5,500.00
          </div>
        </div>
      </div>

    </section>



  </div>
</template>

<script>
export default {
  // ...
};
</script>
