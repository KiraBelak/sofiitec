<template>
  <div class="h-screen w-screen px-4 py-8 pr-24 bg-white">
    <!-- seccion de header -->
    <HeaderSection />

    <!-- seccion de flex con tres columnas -->
    <section class="flex w-full mt-8">
      <!-- columna 1 -->
      <div class="flex flex-col ml-8 w-1/3 mr-4">
        <div class="flex flex-col justify-center items-center content-center">
          <p class="text-xs text-orange-400 text-start mr-28">
            Total de Propinas
          </p>
          <div class="flex">
           

            <view-number :value="1500.00" />
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
        <p class="mt-4 text-md w-full text-start ml-32 font-semibold">
          ¿Entre cúantos quieres dividir las Propinas?
        </p>

        <div class="w-full flex text-center items-baseline ml-32">
          <!-- input para ingresar el numero -->
          <input
            class="w-16 mt-2 border-2 border-gray-400 rounded-lg ml-8 px-2 py-1"
            type="number"
            placeholder="$"
          />

          <p class="text-orange-600 font-semibold text-end ml-8">
            $300.00 por Persona
          </p>
        </div>

        <div class="ml-32 flex flex-wrap items-center mt-12">
          <!-- icono de wallet -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            aria-describedby="desc"
            role="img"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              data-name="opacity"
              d="M23 18L56.9 4.8c2.2-.8 5 .5 5 2.2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v36a3 3 0 0 0 3 3h15V23a5.2 5.2 0 0 1 3-5z"
              fill="#000000"
              opacity=".15"
            ></path>
            <circle
              data-name="layer1"
              cx="32"
              cy="36.2"
              r="4"
              fill="#fff"
            ></circle>
            <path
              data-name="stroke"
              d="M20.2 46H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h54a3 3 0 0 1 3 3m-50 7h21.3M12 26h8"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              data-name="stroke"
              d="M62 41a5.4 5.4 0 0 1-3 5L24 59.6c-3 1.3-4-1-4-2.6V23a5.2 5.2 0 0 1 3-5L57 4.8c2.2-.8 5 .5 5 2.2z"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <circle
              data-name="stroke"
              cx="32"
              cy="36.2"
              r="4"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
          </svg>

          <p class="ml-2 text-black text-lg font-semibold">
            Elige el método de pago
          </p>

          <!-- una cuadricula de dos por dos dejando el ultimo cuadrante vacio -->
          <!-- <div class="grid w-full text-black font-bold grid-cols-2 gap-4 mt-4"> -->
             <!-- sección de cuadrantes -->
  <div class="grid w-full text-black font-bold grid-cols-2 gap-4 mt-4">
    <PaymentMethod :bgColor="cuadrante1BgColor">
      <!-- Contenido del cuadrante 1 -->
      <template v-slot:icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <!-- Icono del cuadrante 1 -->

  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />


        </svg>
      </template>
      <template v-slot:text>
        Efectivo
      </template>
    </PaymentMethod>

    <PaymentMethod :bgColor="cuadrante2BgColor">
      <!-- Contenido del cuadrante 2 -->
      <template v-slot:icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <!-- Icono del cuadrante 2 -->

          <path class="text-white" stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />


        </svg>
      </template>
      <template v-slot:text>
        BBVA 1234
      </template>
    </PaymentMethod>

    <PaymentMethod :bgColor="cuadrante3BgColor">
      <!-- Contenido del cuadrante 3 -->
      <template v-slot:icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <!-- Icono del cuadrante 3 -->
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />

        </svg>
      </template>
      <template v-slot:text>
        Santander 1234
      </template>
    </PaymentMethod>
  </div>
           

          <!-- una linea como de progreso donde este en el 75% -->
          <div
            class="flex flex-col justify-center items-center content-center mt-8"
          >
            <div class="w-96 h-1 bg-gray-300 rounded-full">
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
        <div
          class="flex flex-col justify-center items-center h-full content-center"
        >
          <!-- calculadora de puros numeros y enter -->
          <div
            class="flex flex-col bg-rose-200 border border-orange-600 rounded-3xl h-full w-10/12 box-border px-8 items-center py-4"
          >
            <div
              class="flex text-2xl items-center font-semibold justify-between border-b-2 pb-3 border-gray-800 w-full"
            >
              $
              <p class="ml-10 font-bold">$1,200.00</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                />
              </svg>
            </div>

            <!-- los numeros del 1 al 9 en hileras de tres -->
            <div class="flex flex-col w-3/4 mt-4">
              <div class="flex justify-between mt-4 w-full">
                <div class="flex flex-col mx-2 w-1/3">
                  <btn-number>
                    1
                  </btn-number>
                  <btn-number>
                    4
                  </btn-number>
                  <btn-number>
                    7
                  </btn-number>
                  <btn-number>

                    00
                  </btn-number>
                </div>
                <div class="flex flex-col mx-1 w-1/3">
                  <btn-number>
                    2
                  </btn-number>
                  <btn-number>
                    5
                  </btn-number>
                  <btn-number>

                    8
                  </btn-number>
                  <btn-number>

                    0
                  </btn-number>
                </div>
                <div class="flex flex-col mx-2 w-1/3">
                  <btn-number>
                    3
                  </btn-number>
                  <btn-number>
                    6
                  </btn-number>
                  <btn-number>
                    9
                  </btn-number>
                  <button
                    class="w-full h-12 bg-orange-600 text-center rounded-md text-2xl border flex justify-center items-center border-gray-500 font-bold mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 text-white h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              class="mt-16 w-full text-center bg-white rounded-full py-2 border-orange-600 border text-orange-600 text-xl font-bold"
            >
              Cantidad Restante $1,200.00
            </div>
          </div>
        </div>
      </div>
      <!-- columna 3 -->
      <div class="flex ml-16 flex-col w-1/6 mr-4">
        <p class="text-xl font-bold">Pagos</p>

        <div
          class="flex w-full justify-between border-gray-500 rounded-lg shadow-md shadow-black mt-4 px-5 py-3 border"
        >
          <div class="flex align-baseline items-center font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>

            <p class="text-md ml-2 font-bold">Efectivo</p>
          </div>

          <p class="text-md font-bold items-center flex">
            $300 <button class="text-orange-600 ml-1">X</button>
          </p>
        </div>
      </div>
    </section>

    <section
      class="w-full ml-10 mt-16 flex justify-between content-center items-center"
    >
      <div class="w-1/2">
        <div class="flex text-orange-600 w-full justify-around">
          <p class="text-xl w-48 text-left font-bold">Total Pagado</p>
          <p class="text-xl w-4 font-bold">$1,500.00</p>
        </div>

        <div class="flex text-black w-full justify-around mt-4">
          <p class="text-xl w-48 text-left font-bold">Restante por pagar</p>
          <p class="text-xl w-4 font-bold">$1,500.00</p>
        </div>
      </div>

      <button
        class="w-1/3 mr-16 bg-orange-700 text-white font-bold text-lg py-4 rounded-lg mt-4"
      >
        Pagar $300.00 en Propinas
      </button>
    </section>
  </div>
</template>

<script>

import HeaderSection from "./components/HeaderSection.vue";
import ViewNumber from "./components/ViewNumber.vue";
import PaymentMethod from "./components/PaymentMethod.vue";
import BtnNumber from "./components/BtnNumber.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    ViewNumber,
    PaymentMethod,
    BtnNumber,
  },
  data() {
    return {
      cuadrante1BgColor: "bg-gray-200",
      cuadrante2BgColor: "bg-orange-600",
      cuadrante3BgColor: "bg-gray-200",
      // Otras propiedades de datos...
    };
  },
};
</script>
