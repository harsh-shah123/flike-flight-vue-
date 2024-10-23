<template>
<header>
        <!-- Top Header -->
        <section>
            <div class="p-10 pt-4 pb-2 flex flex-col md:flex-row justify-between items-center">
                <div class="flex justify-center w-full md:w-auto">
                    <img src="../assets/Symbols.jpg" alt="Symbols" class="max-w-full h-auto">
                </div>
                <div class="flex flex-col md:flex-row md:gap-4 items-center w-full md:w-auto mt-4 md:mt-0">
                    <router-link to="/" class="text-sm lg:text-base">Home</router-link>
                    <router-link to="/Result" class="text-sm lg:text-base">Result</router-link>
                    <a href="#" class="text-sm lg:text-base">Hotels</a>
                    <a href="#" class="text-sm lg:text-base">Offers</a>
                    <div class="flex items-center gap-2">
                        <img src="../assets/notification-bell.png" alt="notification" class="max-w-full h-auto">
                    </div>
                    <div>
                        <img src="../assets/profile picture.jpg" alt="profile" class="rounded-full max-w-full h-auto">
                    </div>
                </div>
            </div>
        </section>
    </header>






    <!-- Search Section -->
    <section>
    <div class="banner-gradient">
        <div class="banner">
            <!-- Search for flight -->
            <div class="flex flex-col justify-center px-5 lg:px-20 pt-7 h-3/4 font-mono font-extrabold text-white">
                <p class="text-3xl lg:text-5xl">
                    Where are you off to?
                </p>

                <!-- Search form -->
                <div class="mt-4 bg-white w-full lg:w-fit p-4 pb-3 rounded-lg text-center">
                    <div class="flex flex-col lg:flex-row items-center lg:justify-center text-center">
                        <div class="relative mb-3 pt-2 lg:ms-3" data-twe-input-wrapper-init>
                            <input type="text"
                                class="peer block min-h-[auto] border-2 w-full lg:w-[270px] border-gray-700 px-3 py-[0.32rem] text-gray-700"
                                readonly value="Singapore (SIN)" />
                            <label
                                class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] truncate bg-white px-1 text-neutral-500">
                                Departure
                            </label>
                        </div>

                        <div class="relative mb-3 pt-2 lg:ms-3" data-twe-input-wrapper-init>
                            <input type="text"
                                class="peer block min-h-[auto] border-2 w-full lg:w-[270px] border-gray-700 px-3 py-[0.32rem] text-gray-700"
                                readonly value="Los Angeles (LA)" />
                            <label
                                class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] truncate bg-white px-1 text-neutral-500">
                                Arrival
                            </label>
                        </div>

                        <div class="relative mb-3 pt-2 lg:ms-3 w-full lg:w-auto">
                            <input type="text"
                                class="peer block min-h-[auto] border-2 w-full lg:w-[270px] border-gray-700 px-3 py-[0.32rem] text-gray-700"
                                readonly value="01/05/2022" />
                            <label
                                class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] truncate bg-white px-1 text-neutral-500">
                                Date
                            </label>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i class="fa-solid fa-calendar-days h-5 w-5 pt-1 text-gray-500"></i>
                            </div>
                        </div>

                        <div class="ps-1 pt-1 lg:ms-3">
                            <button type="button"
                                class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 mt-1">
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
        <div class="md:flex flex-row flex-start pt-[50px] pb-[50px] ps-[80px] pe-[80px]">
          
            <div class="sm: flex flex-col  p-0 gap-[20px] me-12 md:text-left sm:text-center ">
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
            <div class='pt-2'>

            <div class="md:flex flex-row flex-start p-0 gap-[24px] sm:flex-col">
                <div class="sm:flex flex-col  gap-[12px] text-stone-600  box-border ">
                    <p class="pb-2">10 out of 177 Results</p>
                    <div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content ">

                        <div class="pe-2">

                            <img src="../assets/turkish.png" alt="turkish airlines">
                        </div>
                        <div class=" pe-2">
                            <p class="ps-0  text-base">
                                Turkish Airlines

                            </p>
                        </div>
                        <div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
                           

                                <p class="text-blue-900">11.35 PM</p>
                            

                                SIN
                            


                        </div>
                        <div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
                    <div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content ">

<div class="pe-2">

    <img src="../assets/turkish.png" alt="turkish airlines">
</div>
<div class=" pe-2">
    <p class="ps-0  text-base">
        Turkish Airlines

    </p>
</div>
<div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
   

        <p class="text-blue-900">11.35 PM</p>
    

        SIN
    


</div>
<div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
<div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content">

<div class="pe-2">

    <img src="../assets/turkish.png" alt="turkish airlines">
</div>
<div class=" pe-2">
    <p class="ps-0  text-base">
        Turkish Airlines

    </p>
</div>
<div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
   

        <p class="text-blue-900">11.35 PM</p>
    

        SIN
    


</div>
<div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
<div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content">

<div class="pe-2">

    <img src="../assets/turkish.png" alt="turkish airlines">
</div>
<div class=" pe-2">
    <p class="ps-0  text-base">
        Turkish Airlines

    </p>
</div>
<div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
   

        <p class="text-blue-900">11.35 PM</p>
    

        SIN
    


</div>
<div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
<div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content">

<div class="pe-2">

    <img src="../assets/turkish.png" alt="turkish airlines">
</div>
<div class=" pe-2">
    <p class="ps-0  text-base">
        Turkish Airlines

    </p>
</div>
<div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
   

        <p class="text-blue-900">11.35 PM</p>
    

        SIN
    


</div>
<div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
</div><div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content">

<div class="pe-2">

    <img src="../assets/turkish.png" alt="turkish airlines">
</div>
<div class=" pe-2">
    <p class="ps-0  text-base">
        Turkish Airlines

    </p>
</div>
<div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
   

        <p class="text-blue-900">11.35 PM</p>
    

        SIN
    


</div>
<div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
</div><div class=" items-center p-2 h-auto border-2 border-stone-300 rounded sm:flex flex-row md:flex flex-row items-center sm:box-content">

<div class="pe-2">

    <img src="../assets/turkish.png" alt="turkish airlines">
</div>
<div class=" pe-2">
    <p class="ps-0  text-base">
        Turkish Airlines

    </p>
</div>
<div class=" flex flex-col p-0 mt-0 gap-[10px] ps-2">
   

        <p class="text-blue-900">11.35 PM</p>
    

        SIN
    


</div>
<div class=" pe-2 flex flex-col  p-0 mt-0 gap-[10px] ps-2">
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
                  

                        <div class="pt-2">

                            <div class="rounded bg-sky-900 w-[fit-content] p-3 ">
                                <button type="button" class="text-white ">Show more Result</button>
                            </div>
                        </div>
                    
                </div>
                
            </div>
            </div>
            <div class='ps-3 pt-2 w-fit'>
                <div class=" gap-[12px] ">
                    <p class="text-blue-900 uppercase">recently booked</p>
                    
                    <div class="flex flex-col flex-start p-[10px] gap-[10px] w-[100%] ">
                        <div class="flex flex-row justify-between items-center p-0 gap-[6px]">
                           <div>
                            <img src="../assets/turkish.png" alt="icon">
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
                        <div class="flex flex-row items-center justify-between text-stone-400 p-0 gap-[20px]">
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
                            <img src="../assets/turkish.png" alt="icon">
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
                        <div class="flex flex-row items-center justify-between text-stone-400 p-0 gap-[20px]">
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
                            <img src="../assets/turkish.png" alt="icon">
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
                        <div class="flex flex-row items-center justify-between text-stone-400 p-0 gap-[20px]">
                            <i class=" fa-solid fa-couch "></i>
                            <p class="">Economy</p>

                            <i class=" fa-solid fa-user"></i>
                            <p class="">2 Adults</p>

                        </div>    
                        <div class="line"></div>
                    </div>  
                    <div class="bg-sky-300 rounded p-1 text-center">
                        <button type="button" class="text-white text-xl">
                            show more <i class="fa-solid fa-angle-down "></i>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>

            
       

        
    </section>
    <footer>
    <div class="footersection">
        <div class="flex flex-col items-center p-5 md:p-10 gap-5 md:gap-8">
            <div class="flex flex-col items-center gap-2">
                <div class="text-blue-900 font-semibold">
                    <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                </div>
                <div>
                    <p class="text-2xl md:text-4xl text-center">Get weekly updates</p>
                </div>
            </div>
            <div class="box-border flex flex-col items-start gap-4 bg-white pt-7 pb-7 px-5">
                <p>Fill in your details to join the party!</p>
                <input type="text" placeholder="Your name" class="p-3 border-2 w-full max-w-xs">
                <input type="text" placeholder="Email Address" class="p-3 border-2 w-full max-w-xs">
                <button type="button"
                    class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded text-sm px-5 py-2.5">
                    SUBMIT
                </button>
            </div>
        </div>
    </div>

    <div class="flex flex-col md:flex-row flex-start color2 p-5">
        <div class="flex flex-col items-start gap-4">
            <img src="../assets/Symbols.jpg" alt="logo" class="w-auto h-auto">
            <p class="text-white text-sm md:text-base">Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We also have all your flight needs in your online shop.</p>
            <div class="text-white flex space-x-4">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>

        <div class="line"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3  text-white gap-4">
            <!-- Company Section -->
            <div class="flex flex-col">
                <p class="mb-2 font-semibold">Company</p>
                <p>About Us</p>
                <p>News</p>
                <p>Careers</p>
                <p>How we work</p>
            </div>

            <!-- Support Section -->
            <div class="flex flex-col">
                <p class="mb-2 font-semibold">Support</p>
                <p>Account</p>
                <p>Support Center</p>
                <p>FAQ</p>
                <p>Accessibility</p>
            </div>

            <!-- More Section -->
            <div class="flex flex-col">
                <p class="mb-2 font-semibold">More</p>
                <p>Covid Advisory</p>
                <p>Airline Fees</p>
                <p>Tips</p>
                <p>Quarantine</p>
            </div>
        </div>
    </div>
</footer>





</template>


<style scoped>

*{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.banner {
    /* Banner  Background */
    /* box-sizing: border-box; */
    position: relative;

    height: 450px;
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












.footersection {
    /* Subscribe section background */
    background: url('../assets/Subscribe.png') center center / cover no-repeat; /* Ensures full background coverage */
    background-position: center;
    padding: 20px; /* Ensures padding around the content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.color2 {
    /* Gradient section */
    padding-top: 20px;
    gap: 20px;
    padding-right: 0;
    background: linear-gradient(91.74deg, #0B5BA8 30.91%, #299BD8 100.98%);
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
}

.line {
    border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>