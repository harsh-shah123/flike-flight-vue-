<template>




    <header class="w-[100%]">
        <!-- Top Header -->
        <section>

            <div class=" p-10 pt-4 pb-2 flex justify-between ">
                <div>
                    <img src="../assets/Symbols.jpg" alt="Symbols">
                </div>
                <div class="flex gap-4">

                    <router-link to="/">
                        Home
                    </router-link>
                    <router-link to="/Result">Result</router-link>
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
    </header>

    <!-- Search Section -->
    <section>
        <div class="banner-gradient ">
            <div class="banner">

                <!-- search for flight -->

                <div class="flex flex-col justify-center ps-20 pe-20  pt-7 h-3/4 font-mono font-extrabold text-white">
                    <p class="text-5xl  ">

                        Where are you off too?
                    </p>

                    </ <!-- serach form -->
                    <div class="mt-4 bg-white w-fit p-4 pb-3 rounded-lg text-center jus">


                        <div class="flex flex-row ms-3 text-center ">

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
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <i class="fa-duotone fa-solid fa-calendar-days h-5 w-5 pt-2 text-gray-500"></i>

                                    </div>

                                </div>

                            </div>
                            <div class="ps-1 pt-1 ">

                                <button type="button"
                                    class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2 mt-1">
                                    SEARCH FLIGHTS
                                </button>
                            </div>


                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <!-- Search filters -->
    <section>
        <div class="flex flex-row flex-start pt-[50px] pb-[50px] ps-[80px] pe-[80px]">

            <div class="flex flex-col flex-start p-0 gap-[30px] me-12">
                <div class="">
                    <p>10 out of 177 Results</p>
                </div>
                <div>
                    <p class="pb-2">Stops</p>
                    <div>

                        <input type="checkbox" name="stop1" id=""> 1 Stop
                    </div>
                    <div>

                        <input type="checkbox" name="stop2" id=""> 2 Stop
                    </div>

                </div>
                <div class="">
                    <p class="pb-2">Booking Options</p>
                    <div>

                        <input type="checkbox" name="stop1" id=""> Book On Flickle Flats
                    </div>
                    <div>

                        <input type="checkbox" name="stop2" id=""> Official Website
                    </div>
                </div>
                <div class="">
                    <p class="pb-2">Flight Experience</p>
                    <div>

                        <input type="checkbox" name="stop1" id=""> No overnight flights
                    </div>
                    <div>

                        <input type="checkbox" name="stop2" id=""> No long stop-overs
                    </div>
                </div>
                <div class="">
                    <p class="pb-2">AirLines</p>
                    <div>

                        <input type="checkbox" name="stop1" id=""> Singapore Airlines
                    </div>
                    <div>
                        <input type="checkbox" name="stop2" id=""> Qatar Airlines
                    </div>
                </div>
            </div>







            <!-- Result Secation -->
            <div class="flex flex-row flex-start p-0 gap-[24px]">
                <div class="flex flex-col flex-start p-[0] gap-[12px] text-stone-600  box-border    ">
                    <p>10 out of 177 Results</p>
                    <div    
                        class="flex flex-row items-center p-2 h-[100px] box-border  border-2 border-stone-300 rounded  ">

                        <div class="gap-[0px] grid grid-cols-1 pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class="grid grid-cols-1 pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col  flex-start p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">11.35 PM</p>
                            </div>
                            <div>

                                SIN
                            </div>


                        </div>
                        <div class="grid grid-cols-1 pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                            <div>
                                <!-- flight section -->
                                <div
                                    class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                    <!-- Circle -->
                                    <div>
                                        <i class="fa-sharp fa-regular fa-circle"></i>
                                    </div>

                                    <!-- Dashed Line with Airplane -->
                                    <div class="relative w-full h-0 flex items-center justify-center">
                                        <!-- Dashed Line -->
                                        <div class="absolute w-full border-t-2 border-dashed border-blue-600 "></div>
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

                                33H 10M, 1-stop
                            </div>


                        </div>
                        <div class="flex flex-col flex-end pe-2 p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">4.45 PM</p>
                            </div>
                            <div>

                                LAX
                            </div>


                        </div>
                        <div class="line h-[122%] overflow-hidden  ">

                        </div>
                        <div class="font-semibold text-2xl text-amber-400	">
                            <p class="ps-2">s$ 723</p>
                        </div>
                    </div>
                    <div    
                        class="h-[100px] flex flex-row items-center p-2  box-border  border-2 border-stone-300 rounded  ">

                        <div class="gap-[0px] grid grid-cols-1 pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class="grid grid-cols-1 pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col  flex-start p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">11.35 PM</p>
                            </div>
                            <div>

                                SIN
                            </div>


                        </div>
                        <div class="grid grid-cols-1 pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                            <div>
                                <!-- flight section -->
                                <div
                                    class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                    <!-- Circle -->
                                    <div>
                                        <i class="fa-sharp fa-regular fa-circle"></i>
                                    </div>

                                    <!-- Dashed Line with Airplane -->
                                    <div class="relative w-full h-0 flex items-center justify-center">
                                        <!-- Dashed Line -->
                                        <div class="absolute w-full border-t-2 border-dashed border-blue-600 "></div>
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

                                33H 10M, 1-stop
                            </div>


                        </div>
                        <div class="flex flex-col flex-end pe-2 p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">4.45 PM</p>
                            </div>
                            <div>

                                LAX
                            </div>


                        </div>
                        <div class="line h-[122%] overflow-hidden  ">

                        </div>
                        <div class="font-semibold text-2xl text-amber-400	">
                            <p class="ps-2">s$ 723</p>
                        </div>
                    </div>
                    <div    
                        class=" h-[100px] flex flex-row items-center p-2  box-border  border-2 border-stone-300 rounded  ">

                        <div class="gap-[0px] grid grid-cols-1 pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class="grid grid-cols-1 pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col  flex-start p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">11.35 PM</p>
                            </div>
                            <div>

                                SIN
                            </div>


                        </div>
                        <div class="grid grid-cols-1 pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                            <div>
                                <!-- flight section -->
                                <div
                                    class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                    <!-- Circle -->
                                    <div>
                                        <i class="fa-sharp fa-regular fa-circle"></i>
                                    </div>

                                    <!-- Dashed Line with Airplane -->
                                    <div class="relative w-full h-0 flex items-center justify-center">
                                        <!-- Dashed Line -->
                                        <div class="absolute w-full border-t-2 border-dashed border-blue-600 "></div>
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

                                33H 10M, 1-stop
                            </div>


                        </div>
                        <div class="flex flex-col flex-end pe-2 p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">4.45 PM</p>
                            </div>
                            <div>

                                LAX
                            </div>


                        </div>
                        <div class="line h-[122%] overflow-hidden  ">

                        </div>
                        <div class="font-semibold text-2xl text-amber-400	">
                            <p class="ps-2">s$ 723</p>
                        </div>
                    </div>
                    <div    
                        class="h-[100px] flex flex-row items-center p-2  box-border  border-2 border-stone-300 rounded  ">

                        <div class="gap-[0px] grid grid-cols-1 pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class="grid grid-cols-1 pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col  flex-start p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">11.35 PM</p>
                            </div>
                            <div>

                                SIN
                            </div>


                        </div>
                        <div class="grid grid-cols-1 pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                            <div>
                                <!-- flight section -->
                                <div
                                    class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                    <!-- Circle -->
                                    <div>
                                        <i class="fa-sharp fa-regular fa-circle"></i>
                                    </div>

                                    <!-- Dashed Line with Airplane -->
                                    <div class="relative w-full h-0 flex items-center justify-center">
                                        <!-- Dashed Line -->
                                        <div class="absolute w-full border-t-2 border-dashed border-blue-600 "></div>
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

                                33H 10M, 1-stop
                            </div>


                        </div>
                        <div class="flex flex-col flex-end pe-2 p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">4.45 PM</p>
                            </div>
                            <div>

                                LAX
                            </div>


                        </div>
                        <div class="line h-[122%] overflow-hidden  ">

                        </div>
                        <div class="font-semibold text-2xl text-amber-400	">
                            <p class="ps-2">s$ 723</p>
                        </div>
                    </div>
                    <div    
                        class="h-[100px] flex flex-row items-center p-2  box-border  border-2 border-stone-300 rounded  ">

                        <div class="gap-[0px] grid grid-cols-1 pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class="grid grid-cols-1 pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col  flex-start p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">11.35 PM</p>
                            </div>
                            <div>

                                SIN
                            </div>


                        </div>
                        <div class="grid grid-cols-1 pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                            <div>
                                <!-- flight section -->
                                <div
                                    class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                    <!-- Circle -->
                                    <div>
                                        <i class="fa-sharp fa-regular fa-circle"></i>
                                    </div>

                                    <!-- Dashed Line with Airplane -->
                                    <div class="relative w-full h-0 flex items-center justify-center">
                                        <!-- Dashed Line -->
                                        <div class="absolute w-full border-t-2 border-dashed border-blue-600 "></div>
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

                                33H 10M, 1-stop
                            </div>


                        </div>
                        <div class="flex flex-col flex-end pe-2 p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">4.45 PM</p>
                            </div>
                            <div>

                                LAX
                            </div>


                        </div>
                        <div class="line h-[122%] overflow-hidden  ">

                        </div>
                        <div class="font-semibold text-2xl text-amber-400	">
                            <p class="ps-2">s$ 723</p>
                        </div>
                    </div>
                    <div    
                        class="h-[100px] flex flex-row items-center p-2  box-border  border-2 border-stone-300 rounded  ">

                        <div class="gap-[0px] grid grid-cols-1 pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class="grid grid-cols-1 pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col  flex-start p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">11.35 PM</p>
                            </div>
                            <div>

                                SIN
                            </div>


                        </div>
                        <div class="grid grid-cols-1 pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                            <div>
                                <!-- flight section -->
                                <div
                                    class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                    <!-- Circle -->
                                    <div>
                                        <i class="fa-sharp fa-regular fa-circle"></i>
                                    </div>

                                    <!-- Dashed Line with Airplane -->
                                    <div class="relative w-full h-0 flex items-center justify-center">
                                        <!-- Dashed Line -->
                                        <div class="absolute w-full border-t-2 border-dashed border-blue-600 "></div>
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

                                33H 10M, 1-stop
                            </div>


                        </div>
                        <div class="flex flex-col flex-end pe-2 p-0 mt-0 gap-[10px] ps-2">
                            <div>

                                <p class="text-blue-900">4.45 PM</p>
                            </div>
                            <div>

                                LAX
                            </div>


                        </div>
                        <div class="line h-[122%] overflow-hidden  ">

                        </div>
                        <div class="font-semibold text-2xl text-amber-400	">
                            <p class="ps-2">s$ 723</p>
                        </div>
                    </div>
                  


                    <div class="rounded bg-sky-900 w-[fit-content] p-3">
                        <button type="button" class="text-white ">Show more Result</button>
                    </div>
                    
                </div>
                <div class=" gap-[12px] ">
                    <p class="text-blue-900 uppercase">recently booked</p>
                    
                    <div class="flex flex-col flex-start p-[10px] gap-[10px] w-[100%]">
                        <div class="flex flex-row justify-between items-center p-0 gap-[6px]">
                           <div>
                            <img src="https://api.asm.skype.com/v1/objects/0-jhb-d1-a02ae0052d7c5ca42ce5b98d7cd939bd/views/imgpsh_fullsize_anim" alt="icon">
                           </div>
                           <div class="text-xl">
                            $1128
                           </div>
                           
                        </div>
                        <div class="flex flex-row items-center justify-between p-[8px] gap-[7px]  ">
                        <div class="flex flex-col flex-start p-0 gap-[2px]">
                            <div>
                                <p class="text-blue-900">SIN</p>

                            </div>
                            <div>

                                <p>Singapore</p>
                            </div>
                        </div>
                        <div class="">
                            <i class="ps-4 text-blue-900  fa-solid fa-plane pe-4"></i>
                        </div>
                        <div class="flex flex-col items-end p-0 gap-[2px]">
                            <div>
                                <p class="text-blue-900">LAX</p>

                            </div>
                            <div class="flex items-end">

                                <p>Los Angeles</p>
                            </div>
                        </div>
                    


                        </div>
                        <div class="flex flex-row items-center justify-between text-stone-300 p-0 gap-[20px]">
                            <i class=" fa-solid fa-couch "></i>
                            <p class="">Economy</p>

                            <i class=" fa-solid fa-user"></i>
                            <p class="">2 Adults</p>

                        </div>    
                        <div class="line"></div>
                    </div>
                    <div class="flex flex-col flex-start p-[10px] gap-[10px] w-[100%]">
                        <div class="flex flex-row justify-between items-center p-0 gap-[6px]">
                           <div>
                            <img src="https://api.asm.skype.com/v1/objects/0-jhb-d1-a02ae0052d7c5ca42ce5b98d7cd939bd/views/imgpsh_fullsize_anim" alt="icon">
                           </div>
                           <div class="text-xl">
                            $1128
                           </div>
                           
                        </div>
                        <div class="flex flex-row items-center justify-between p-[8px] gap-[7px]  ">
                        <div class="flex flex-col flex-start p-0 gap-[2px]">
                            <div>
                                <p class="text-blue-900">SIN</p>

                            </div>
                            <div>

                                <p>Singapore</p>
                            </div>
                        </div>
                        <div class="">
                            <i class="ps-4 text-blue-900  fa-solid fa-plane pe-4"></i>
                        </div>
                        <div class="flex flex-col items-end p-0 gap-[2px]">
                            <div>
                                <p class="text-blue-900">LAX</p>

                            </div>
                            <div class="flex items-end">

                                <p>Los Angeles</p>
                            </div>
                        </div>
                    


                        </div>
                        <div class="flex flex-row items-center justify-between text-stone-300 p-0 gap-[20px]">
                            <i class=" fa-solid fa-couch "></i>
                            <p class="">Economy</p>

                            <i class=" fa-solid fa-user"></i>
                            <p class="">2 Adults</p>

                        </div>    
                        <div class="line"></div>
                    </div>
                    <div class="flex flex-col flex-start p-[10px] gap-[10px] w-[100%]">
                        <div class="flex flex-row justify-between items-center p-0 gap-[6px]">
                           <div>
                            <img src="https://api.asm.skype.com/v1/objects/0-jhb-d1-a02ae0052d7c5ca42ce5b98d7cd939bd/views/imgpsh_fullsize_anim" alt="icon">
                           </div>
                           <div class="text-xl">
                            $1128
                           </div>
                           
                        </div>
                        <div class="flex flex-row items-center justify-between p-[8px] gap-[7px]  ">
                        <div class="flex flex-col flex-start p-0 gap-[2px]">
                            <div>
                                <p class="text-blue-900">SIN</p>

                            </div>
                            <div>

                                <p>Singapore</p>
                            </div>
                        </div>
                        <div class="">
                            <i class="ps-4 text-blue-900  fa-solid fa-plane pe-4"></i>
                        </div>
                        <div class="flex flex-col items-end p-0 gap-[2px]">
                            <div>
                                <p class="text-blue-900">LAX</p>

                            </div>
                            <div class="flex items-end">

                                <p>Los Angeles</p>
                            </div>
                        </div>
                    


                        </div>
                        <div class="flex flex-row items-center justify-between text-stone-300 p-0 gap-[20px]">
                            <i class=" fa-solid fa-couch "></i>
                            <p class="">Economy</p>

                            <i class=" fa-solid fa-user"></i>
                            <p class="">2 Adults</p>

                        </div>    
                        <div class="line"></div>
                    </div>  
                    <div class="bg-sky-200 rounded p-1 text-center">
                        <button type="button" class="text-white text-xl">
                            show more <i class="fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div>

        
    </section>
    <footer>
        <div class="footersection">
            <div class="flex flex-col items-center p-[20px] gap-[30px]">
                <div class="flex flex-col items-center p-0 gap-[7px]">
                    <div class="text-blue-900 font-semibold">
                        <P>

                            SUBSCRIBE TO OUR NEWSLETTER
                        </P>
                    </div>
                    <div>
                        <p class="text-4xl">Get weekly updates</p>

                    </div>



                </div>
                <div class="box-border flex flex-col flex-start gap-[17px] bg-whiteb pt-[28px] pb-[28px]
                ps-[30px] pe-[30px] ">
                    <div class="flex flex-col flex-start p-0 gap-[6px]">
                        <p>Fill in your details to join the party!</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Your name " class="p-3 border-2 w-[300px]">
                    </div>
                    <div>

                        <input type="text" placeholder="Email Address" class="p-3  border-2    w-[300px]">
                    </div>
                    <div>
                        <button type="button"
                            class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                            SUBMIT
                        </button>
                    </div>
                    <div>

                    </div>


                </div>

            </div>

        </div>
        <div class="flex flex-row flex-start color2">
            <div class="flex flex-col flex-start p-0 gap-[14px] ps-5">
                <div>

                    <img src="../assets/Symbols.jpg" alt="logo">
                </div>
                <div>
                    <p class="text-white">Fickle Flight is your one-stop travel portal. We offer hassle free flight and
                        hotel bookings. We also have all your flight needs in you online shop.</p>
                </div>
                <div class="text-white ">
                    <i class="pe-4 fa-brands fa-facebook pe-1"></i>
                    <i class="pe-4 fa-brands fa-square-instagram pe-1"></i>
                    <i class=" fa-brands fa-twitter pe-1"></i>

                </div>

            </div>


            <div class=" line pb-5">
            </div>
            <div class=" p-0 text-white m-0 gap-[5px] ">
                <div>
                    <p class="mb-2">Company</p>
                    <p>About Us</p>
                    <p>News</p>
                    <p>Careers</p>
                    <p>How we work</p>

                </div>


            </div>
            <div class=" p-0 text-white m-0 gap-[5px]">
                <div>
                    <p class="mb-2">Support</p>
                    <p>Account</p>
                    <p>Support Center</p>
                    <p>FAQ</p>
                    <p>Accessibility</p>

                </div>


            </div>
            <div class=" p-0 text-white m-0 pe-4">
                <div>
                    <p class="mb-2">More</p>
                    <p>Covid Advisory</p>
                    <p>Airpline Fess</p>
                    <p>Tips</p>
                    <p>Qaurantine</p>

                </div>


            </div>







        </div>



    </footer>


</template>


<style scoped>
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

.back {
    /* position: absolute; */
    width: 65.39px;
    height: 65.39px;
    left: 0px;
    top: 0px;

    background: #F9668D;
    border-radius: 16px;

}

.back1 {
    width: 65.39px;
    height: 65.39px;
    left: 0px;
    top: 0px;

    background: #FF9B53;

    border-radius: 16px;
}

.back2 {
    /* Background */

    width: 65.39px;
    height: 65.39px;
    left: 0px;
    top: 0px;

    background: #36DA76;
    border-radius: 16px;



}

.back3 {
    /* Background */

    width: 65.39px;
    height: 65.39px;
    left: 2.31px;
    top: 0px;

    background: #FDBF00;
    border-radius: 16px;

}

.back4 {
    /* Background */

    width: 70px;
    height: 65.39px;
    left: 0px;
    top: 0px;

    background: #4DABFF;
    border-radius: 16px;

}

.back5 {
    /* Background */

    width: 65.39px;
    height: 65.39px;
    left: 0px;
    top: 0px;

    background: #79CA00;
    border-radius: 16px;

}

.parisimage {
    /* position: absolute; */
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    background: url('../assets/ParisImage.png'), #C4C4C4;

    width: 288px;
    height: 182px;
    gap: 0px;
    opacity: 0px;

    border-radius: 10px;

}

.greeceimage {
    /* GreeceImage */

    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    width: 288px;
    height: 182px;
    gap: 0px;
    opacity: 0px;
    border-radius: 10px;


    background: url('../assets/GreeceImage.png'), #C4C4C4;

}

.norwayimage {
    /*  */

    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    width: 288px;
    height: 182px;
    gap: 0px;
    opacity: 0px;
    border-radius: 10px;


    background: url('../assets/NorwayImage.png'), #C4C4C4;

}

.tuscayimage {

    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    width: 288px;
    height: 182px;
    gap: 0px;
    opacity: 0px;
    border-radius: 10px;


    background: url('../assets/TuscanyImage.png'), #C4C4C4;

}

.footersection {
    /* Subscribe section background */



    height: 466px;
    width: auto;
    background: url('../assets/Subscribe.png');
    background-size: cover;

}

.color2 {
    /* Auto layout */

    padding-top: 20px;
    gap: 20px;
    padding-right: 0;


    height: 250px;
    width: 100%;
    background: linear-gradient(91.74deg, #0B5BA8 30.91%, #299BD8 100.98%);
    background-size: cover;

}

.line {
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* transform: rotate(90deg); */

}
</style>

    <!-- turkish valu  -->

<div
                            class="p-2 w-auto border-2 border-stone-300 rounded  md:flex flex-row justify-center items-center">

                            <div class="pe-2">

                                <svg width="35" height="36" viewBox="0 0 35 36" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.384 2.0842C8.7755 2.0842 1.73053 9.2875 1.73053 18.2577C1.73053 27.2272 8.77613 34.4299 17.384 34.4299C25.9911 34.4299 33.036 27.2273 33.036 18.2577C33.036 9.28747 25.9903 2.0842 17.384 2.0842ZM0.176758 18.2577C0.176758 8.52447 7.8415 0.564697 17.384 0.564697C26.9244 0.564697 34.5898 8.5245 34.5898 18.2577C34.5898 27.9903 26.9251 35.9494 17.384 35.9494C7.84229 35.9494 0.176758 27.9904 0.176758 18.2577Z"
                                        fill="#CF4037" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.3444 14.545C21.5874 9.29753 17.164 6.70646 14.4009 5.15432C11.8366 3.71468 9.5407 3.06049 9.48531 3.22924C12.4018 5.57447 14.2745 9.22808 14.2745 13.3331C14.2745 20.0646 9.23534 25.5836 2.8335 26.0989L3.23828 26.7239C11.4339 25.4475 33.3664 21.3758 33.3664 21.3758L33.4246 20.8973L20.1181 20.4417C21.5867 18.8896 22.5922 16.2547 22.3444 14.545Z"
                                        fill="#CF4037" />
                                </svg>

                            </div>



                            <div class=" pe-2">
                                Turkish Airlines
                            </div>



                            <div class=" flex flex-col gap-[10px] ps-2 ">
                                <p class="text-lg font-bold text-blue-900">11.35 PM</p>
                                SIN
                            </div>
                            <div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
                                <div>
                                    <!-- flight section -->
                                    <div
                                        class="flex flex-row justify-between text-blue-900 items-center w-[150px] p-0 border-2 border-transparent relative">
                                        <!-- Circle -->
                                        <div>
                                            <svg width="15" height="15" viewBox="0 0 11 11" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5.15234" cy="5.91455" r="4" fill="white" stroke="#1262AE"
                                                    stroke-width="2" />
                                            </svg>
                                        </div>
                                        <div class="relative w-full h-0 flex items-center justify-center">
                                            <!-- Dashed Line -->
                                            <div class="absolute w-full border-t-2 border-dashed border-slate-600">
                                            </div>
                                            <!-- Airplane Icon (centered on the dashed line) -->
                                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.12327 19.75H7.75783C7.62063 19.75 7.48564 19.7185 7.36518 19.6585C7.24473 19.5984 7.14267 19.5118 7.06833 19.4064C6.99399 19.301 6.94974 19.1803 6.93964 19.0552C6.92953 18.9302 6.95389 18.8048 7.01048 18.6906L10.3169 12.0227L5.35216 11.9219L3.54149 13.9267C3.19629 14.3233 2.92084 14.5 2.21812 14.5H1.29893C1.1534 14.5043 1.00888 14.4764 0.877622 14.4188C0.746365 14.3612 0.632239 14.2755 0.544916 14.1691C0.422837 14.0186 0.30281 13.7636 0.419759 13.3998L1.4364 10.0717C1.44409 10.0469 1.45333 10.022 1.46359 9.99766C1.4641 9.99534 1.4641 9.99295 1.46359 9.99063C1.45299 9.96627 1.44392 9.94139 1.4364 9.91609L0.418733 6.56687C0.308452 6.21016 0.428992 5.96078 0.550045 5.81406C0.631333 5.71549 0.736795 5.63573 0.857953 5.58118C0.979111 5.52664 1.11258 5.49883 1.24764 5.5H2.21812C2.74285 5.5 3.2522 5.71516 3.55175 6.0625L5.32497 8.03359L10.3169 7.96609L7.01151 1.30984C6.95484 1.19568 6.93038 1.07036 6.94038 0.945327C6.95038 0.820298 6.99452 0.699555 7.06875 0.594135C7.14299 0.488715 7.24495 0.401982 7.36533 0.341864C7.48571 0.281747 7.62065 0.250163 7.75783 0.25H9.13815C9.33072 0.253536 9.51994 0.29667 9.69177 0.376197C9.86359 0.455724 10.0136 0.569602 10.1307 0.709375L16.545 7.83438L19.5082 7.76312C19.7252 7.75234 20.3263 7.74859 20.4653 7.74859C23.2998 7.75 24.9925 8.59094 24.9925 10C24.9925 10.4434 24.7986 11.2656 23.5014 11.7887C22.7356 12.0981 21.7138 12.2547 20.4643 12.2547C20.3268 12.2547 19.7272 12.2509 19.5072 12.2402L16.5444 12.168L10.1143 19.293C9.9971 19.4321 9.84721 19.5454 9.67568 19.6246C9.50416 19.7037 9.31537 19.7465 9.12327 19.75Z"
                                                    fill="#1262AE" />
                                            </svg>
                                        </div>
                                        <!-- Circle -->
                                        <div>
                                            <svg width="15" height="15" viewBox="0 0 11 11" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5.15234" cy="5.91455" r="4" fill="white" stroke="#1262AE"
                                                    stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    33H 10M, 1-stop
                                </div>


                            </div>
                            <div class="flex flex-col items-end pe-2 p-0 mt-0 gap-[10px] ps-2">

                                <p class="text-lg font-bold text-blue-900">4.45 PM</p>
                                LAX

                            </div>
                            <div class="line h-[122%] overflow-hidden  ">

                            </div>
                            <div class="font-semibold text-2xl text-amber-400	">
                                <p class="ps-2">s$ 723</p>
                            </div>

                        </div>