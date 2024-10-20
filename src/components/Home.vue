<template>

    <head>

        <link rel="stylesheet" data-purpose="Layout StyleSheet" title="Web Awesome"
            href="/css/app-wa-3b124ff0e0d7a67cd8c995d0aeb1d15a.css?vsn=d">

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css">

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-duotone-solid.css">

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-thin.css">

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-solid.css">

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-regular.css">

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-light.css">

    </head>



    <header class="w-[100%]">
        <!-- Top Header -->
        <section>

            <div class=" p-10 pt-4 pb-2 flex justify-between ">
                <div>
                    <img src="../assets/Symbols.jpg" alt="Symbols">
                </div>
                <div class="flex gap-4">
                    <a href="#">Explore</a>
                    <a href="#">Search</a>
                    <a href="#">Hotels</a>
                    <a href="#">Offers</a>
                    <div class="gap-2">

                        <img src="../assets/notification-bell.png" alt="notification">
                    </div>
                    <div>

                        <img src="../assets/profile picture.jpg" alt="profile">
                    </div>


                </div>
            </div>

        </section>

        <!-- Search Section -->
        <section>
            <div class="banner-gradient ">
                <div class="banner">

                    <!-- search for flight -->

                    <div
                        class="flex flex-col items-center justify-center ps-20  h-4/5 font-mono font-extrabold text-white">
                        <p class="text-5xl	 text-center   ">

                            Let’s explore & travel the world
                        </p>
                        <p class="text-center">

                            Find the best destinations and the most popular stays!
                        </p>
                        </ <!-- serach form -->
                        <div class="mt-4 w-[70%] ms-16  bg-white rounded-lg text-center jus">

                            <div class="flex flex-row content-center p-5 gap-5 justify-between">
                                <p class="text-black font-white text-xl font-mono text-left">
                                    SEARCH FLIGHTS
                                </p>
                                <div class="text-black ">
                                    <input type="radio" name="return" id="oneway">
                                    <span>

                                        Return
                                    </span>
                                    <input type="radio" name="One-way" id="oneway" checked>
                                    <span>

                                        One-way
                                    </span>
                                </div>




                            </div>
                            <div class="flex flex-row ms-3 text-center">

                                <div class="relative mb-3 pt-2 " data-twe-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] border-2 w-[270px]  border-gray-700 ms-2 px-3 py-[0.32rem]  text-gray-700	    "
                                        readonly value="Singapore (SIN)" />
                                    <label
                                        class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1  text-neutral-500  ">Depature
                                    </label>

                                </div>
                                <div>
                                    <div class="relative mb-3 pt-2" data-twe-input-wrapper-init>
                                        <input type="text"
                                            class="peer block min-h-[auto] border-2 w-[270px] border-gray-700 ms-2 px-3 py-[0.32rem]  text-gray-700	    "
                                            readonly value="Los Angeles (LA)" />
                                        <label
                                            class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1  text-neutral-500  ">Arival
                                        </label>

                                    </div>

                                </div>
                                <div>

                                    <div class="relative mb-3 pt-2 w-full max-w-xs">
                                        <!-- Label for the Date Input -->

                                        <input type="text"
                                            class="peer block min-h-[auto] border-2 w-[270px] border-gray-700 ms-2 px-3 py-[0.32rem]  text-gray-700	    "
                                            readonly value="01/05/2022" />
                                        <label
                                            class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1  text-neutral-500  ">Date
                                        </label>
                                        <!-- Calendar Icon Positioned Inside the Input -->
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i
                                                class="fa-duotone fa-solid fa-calendar-days h-5 w-5 pt-2 text-gray-500"></i>

                                        </div>

                                    </div>

                                </div>
                                <div class="ps-1 pt-1 ">

                                    <button type="button"
                                        class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                                        SEARCH FLIGHTS
                                    </button>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
        <!-- Recent searches -->
        <section class="m-10">
            <!--    upcoming flight section -->
            <div class="flex flex-start mb-2">
                <p class="uppercase text-xl ">RECENT searches</p>

            </div>
            <!-- /* Flight Main Container */ -->
            <div
                class="flex flex-row justify-center items-center p-[20px] gap-[21px] box-border border-2 rounded   border-gray-600	">



                <div class="flex flex-row justify-between items-center p-0 gap-[51px]  text-sky-900">

                    <p class="top-0 left-0 font-black-900 text-xl font-semibold">SIN</p>
                    <!-- Duration -->
                    <div class="m-0">

                        <!-- flight section -->
                        <div
                            class="flex flex-row justify-between items-center w-[250px] p-0 border-2 border-transparent relative">
                            <!-- Circle -->
                            <div>
                                <i class="fa-sharp fa-regular fa-circle"></i>
                            </div>

                            <!-- Dashed Line with Airplane -->
                            <div class="relative w-full h-0 flex items-center justify-center">
                                <!-- Dashed Line -->
                                <div class="absolute w-full border-t-2 border-dashed border-slate-600"></div>
                                <!-- Airplane Icon (centered on the dashed line) -->
                                <i class="fa-sharp fa-solid fa-plane bg-white px-1"></i>
                            </div>

                            <!-- Circle -->
                            <div>
                                <i class="fa-sharp fa-regular fa-circle"></i>
                            </div>

                        </div>

                    </div>

                    <div>
                        <p class="top-0 left-0 font-black-900 text-xl font-semibold">MAX</p>
                    </div>
                           
                     </div>

           </div>




                    <div class="flex flex-row justify-between items-center p-0 gap-[51px]  text-sky-900">

                        <p class="top-0 left-0 font-black-900 text-xl font-semibold">MY</p>
                        <!-- Duration -->
                        <div class="m-0">

                            <!-- flight section -->
                            <div
                                class="flex flex-row justify-between items-center w-[250px] p-0 border-2 border-transparent relative">
                                <!-- Circle -->
                                <div>
                                    <i class="fa-sharp fa-regular fa-circle"></i>
                                </div>

                                <!-- Dashed Line with Airplane -->
                                <div class="relative w-full h-0 flex items-center justify-center">
                                    <!-- Dashed Line -->
                                    <div class="absolute w-full border-t-2 border-dashed border-slate-600"></div>
                                    <!-- Airplane Icon (centered on the dashed line) -->
                                    <i class="fa-sharp fa-solid fa-plane bg-white px-1"></i>
                                </div>

                                <!-- Circle -->
                                <div>
                                    <i class="fa-sharp fa-regular fa-circle"></i>
                                </div>

                            </div>

                        </div>

                        <div>
                            <p class="top-0 left-0 font-black-900 text-xl font-semibold">DUB</p>
                        </div>







                    </div>
<!--                  
                    <p class="capitalize">
                        <span class="text-xl ">
                            Depart On :
                        </span>
                        7 sep 2021
                    </p>




                </div>
                <div>
                    <p class="capitalize">
                        <span class="text-xl ">
                            Depart On :
                        </span>
                         7 sep 2021
                    </p>


                

                 </div> -->
              
                




        </section>
    </header>

</template>

<script>

</script>

<style>
.banner {
    /* Banner  Background */
    /* box-sizing: border-box; */
    position: relative;

    height: 640px;
    /* width: 100%; */
    /* top: 0.4px; */

    background: url('../assets/BanneBackground.png');

}

.banner-gradient {
    /* Banner Gradient */

    /* position: absolute; */
    height: auto;
    width: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
    background: linear-gradient(78.78deg, #114F8B -3.12%, #2A9AD7 103.77%);



}
</style>