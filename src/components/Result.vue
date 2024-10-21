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
               <div class="flex flex-col flex-start p-[0] gap-[12px] text-stone-600">
                 <p>10 out of 177 Results</p>
                 <div class="flex flex-row items-center p-2 gap-[7px]   border-2 border-stone-300">
             
                    <div>

                        <img  src="../assets/turkish.png" alt="turkish airlines">
                    </div>
                    <div>
                        <p class=" text-base">
                    Turkish Airlines

                </p>
                    </div>
                    <div></div>
                   
                    </div>
               



               


               

               </div>
                
              
               <!-- <div class="flex flex-col flex-start p-0 gap-[12px]">
                <div class="flex flex-row items-center p-0 gap-[7px]">
                 
                </div>
                

               </div> -->
             
          







            </div>
        </div>
    </section>



</template>


<style scoped>
.banner {

    position: relative;

    height: 300px;


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


    height: 0px;
    width: 100%;
    background: linear-gradient(91.74deg, #0B5BA8 30.91%, #299BD8 100.98%);
    background-size: cover;

}

.line {
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* transform: rotate(90deg); */

}
</style>