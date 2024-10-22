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
                <!-- search for flight -->
                <div
                    class="flex flex-col items-center justify-center h-4/5 p-5 md:p-10   font-mono font-extrabold text-white">
                    <p class="md:text-5xl text-center sm:text-center sm:text-sm sm:flex items-center ">
                        Let’s explore & travel the world
                    </p>
                    <p class="text-center">
                        Find the best destinations and the most popular stays!
                    </p>
                    <!-- search form -->
                    <div class="mt-4 bg-white rounded-lg text-center">
                        <div class="flex flex-row content-center p-5 gap-5 justify-between flex-wrap">
                            <p class="text-black font-white text-xl font-mono text-left">
                                SEARCH FLIGHTS
                            </p>
                            <div class="text-black">
                                <input type="radio" name="return" id="return">
                                <span>Return</span>
                                <input type="radio" name="return" id="oneway" checked>
                                <span>One-way</span>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row ms-3 text-center gap-5">
                            <div class="relative mb-3 pt-2 w-full max-w-xs">
                                <input type="text"
                                    class="peer block min-h-[auto] border-2 border-gray-700 ms-2 px-3 py-[0.32rem] text-gray-700 w-full"
                                    readonly value="Singapore (SIN)" />
                                <label
                                    class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1 text-neutral-500">Departure
                                </label>
                            </div>
                            <div class="relative mb-3 pt-2 w-full max-w-xs">
                                <input type="text"
                                    class="peer block min-h-[auto] border-2 border-gray-700 ms-2 px-3 py-[0.32rem] text-gray-700 w-full"
                                    readonly value="Los Angeles (LA)" />
                                <label
                                    class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1 text-neutral-500">Arrival
                                </label>
                            </div>
                            <div class="relative mb-3 pt-2 w-full max-w-xs">
                                <input type="text"
                                    class="peer block min-h-[auto] border-2 border-gray-700 ms-2 px-3 py-[0.32rem] text-gray-700 w-full"
                                    readonly value="01/05/2022" />
                                <label
                                    class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1 text-neutral-500">Date
                                </label>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <i class="fa-duotone fa-solid fa-calendar-days h-5 w-5 pt-1 text-gray-500"></i>
                                </div>
                            </div>
                            <div class="ps-1 pt-1">
                                <button type="button"
                                    class="text-white w-[150px] flex h-3/4 items-center justify-center bg-[#FF9119] rounded  text-center  me-2 mb-2">
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
        <div class="md:flex flex-start mb-2 sm:text-sm  ">
            <p class="uppercase md:text-xl text-center ">RECENT searches</p>
        </div>

        <!-- Flight Main Container -->
        <div class=" ">
            <div class="flex flex-col md:flex-row justify-between">
                <div
                    class="  flex flex-col items-center  gap-[21px] md:flex justify-center w-full ">
                    <div class="flex flex-row items-center  gap-[51px] text-sky-900">
                        <p class=" font-black-900 md:text-xl font-semibold sm:text-sm ">SIN</p>

                        <!-- Duration -->
                        <div class="m-0">
                            <!-- Flight Section -->
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
                            <p class="top-0 left-0 font-black-900 md:text-xl font-semibold sm:text-sm">LAX</p>
                        </div>
                    </div>
                    <div>
                        <p class="capitalize">
                            <span class="md:text-xl sm:text-sm">Depart On :</span>
                            9 Sep 2021
                        </p>
                    </div>
                </div>
                <div class="flex flex-col justify-center md:w-full items-center p-[20px] gap-[21px]">
                    <div class=" grid-rows-2 flex flex-row justify-between items-center p-0 gap-[51px] text-sky-900">
                        <p class="top-0 left-0 font-black-900 md:text-xl font-semibold sm:text-sm">MY</p>

                        <!-- Duration -->
                        <div class="m-0">
                            <!-- Flight Section -->
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
                            <p class="top-0 left-0 font-black-900 md:text-xl font-semibold sm:text-sm">DUB</p>
                        </div>
                    </div>
                    <div>
                        <p class="capitalize">
                            <span class="md:text-xl sm:text-sm" >Depart On :</span>
                            9 Sep 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- prepare your trip -->
        <div class="">

            <p
                class="sm:text-sm text-center  md:text-xl  sm:p-0 sm:m-0 uppercase text-slate-400 sm:text-left md:text-left lg:text-left ">
                Prepare for your trip</p>


            <!-- trip menu -->

            <div class="flex  sm:flex flex-col md:flex-row justify-between items-center p-0 gap-[8px] mt-2">
                <!-- /* Background */ -->
                <div>

                    <div class="back flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">
                            <i class="fa-solid fa-bed-front  text-white fa-2x"></i>


                        </div>



                    </div>
                    <p class="text-center text-slate-300">Hotels</p>
                </div>
                <div>

                    <div class="back1 flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">

                        </div>


                        <i class="fa-solid fa-ticket-airline fa-2x text-neutral-200"></i>
                    </div>
                    <p class="text-center text-slate-300 item">Attions</p>
                </div>
                <div>

                    <div class="back2 flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">

                        </div>
                        <i class="fa-solid fa-utensils fa-2x text-neutral-200"></i>

                    </div>
                    <p class="text-center text-slate-300">Eats</p>
                </div>
                <div>

                    <div class="back3 flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">

                        </div>
                        <i class="fa-sharp fa-solid fa-bus-simple fa-2x text-neutral-200"></i>
                    </div>
                    <p class="text-slate-300 text-center">Commute</p>
                </div>
                <div>

                    <div class="back4 flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">

                        </div>
                        <i class="fa-solid fa-taxi fa-2x text-neutral-200"></i>
                    </div>
                    <p class="text-slate-300 text-center">Taxi</p>
                </div>
                <div>

                    <div class="back5 flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">

                        </div>
                        <i class="fa-solid fa-clapperboard-play fa-2x text-neutral-200"></i>
                    </div>
                    <p class="text-slate-300 text-center">Movies</p>
                </div>

            </div>
        </div>
        <!-- aaiya mukvu bathu j  -->
        <!-- Plan your next trip -->
        <div class="flex flex-col p-0 gap-[24px] flex-start mt-3 ">
            <div class="flex flex-row items-center p-0 justify-between sm:w-[100%] sm:justify-between">

                <div class="flex flex-col items-center  p-0 gap-[6px] md:flex justify-between">
                    <div class=" mt-3 ">
                        <p class="uppercase text-blue-800 md:text-xl sm:text-sm">Plan your next trip</p>
                        <p class="text-slate-950 sm:text-sm	 md:text-2xl">Most Popular Destinations</p>
                    </div>

                </div>


                <div class="md:text-xl sm:text-sm   md:text-right">
                    <p class="text-blue-800  ">View all destinations <i class="fa-sharp fa-regular fa-arrow-right"></i>
                    </p>
                </div>
            </div>
            <!-- /* Cards Container */ -->

            <!-- /* ParisImage */ -->
            <div class=" ms-3 mt-0  left-[0.29px] right-[0.29px] top-0  md:flex flex-row ">
                <div class="pe-2">

                    <div class="parisimage sm: mb-2 ">
                        <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">
                            <div class="text-xl text-white">Paris</div>
                            <div class=" text-right text-xl text-white">
                                <p>

                                    FROM
                                </p>
                                <p class="text-2xl">$699</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="pe-2">

                    <div class="greeceimage sm: mb-2">
                        <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">
                            <div class="text-xl text-white">Greece</div>
                            <div class=" text-right text-xl text-white">
                                <p>

                                    FROM
                                </p>
                                <p class="text-2xl">$895</p>
                            </div>


                        </div>
                    </div>

                </div>
                <div class="pe-2">

                    <div class="norwayimage sm: mb-2">
                        <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">
                            <div class="text-xl text-white">Norway</div>
                            <div class=" text-right text-xl text-white">
                                <p>

                                    FROM
                                </p>
                                <p class="text-2xl">$895</p>
                            </div>


                        </div>
                    </div>

                </div>
                <div class="pe-2">

                    <div class="tuscayimage">
                        <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">
                            <div class="text-xl text-white">Tuscay</div>
                            <div class=" text-right text-xl text-white">
                                <p>

                                    FROM
                                </p>
                                <p class="text-2xl">$1245</p>
                            </div>


                        </div>
                    </div>

                </div>



            </div>

        </div>
        <!--    Recommanded Holidays -->
        <div class="flex flex-col p-0 gap-[24px] flex-start mt-3 ">
            <div class="flex flex-row items-center p-0 justify-between">

                <div class="md:flex flex-col items-center p-0 gap-[6px]">
                    <div class=" mt-3 ">
                        <p class="uppercase md:text-xl sm:text-sm">Recommended Holidays</p>
                    </div>

                </div>


                <div>
                    <p class="text-blue-800 md:text-xl sm:text-sm pt-2">View all Holidays <i
                            class="fa-sharp fa-regular fa-arrow-right"></i></p>
                </div>
            </div>
            <!-- /* Cards Container */ -->

            <!-- /* ParisImage */ -->
            <div class="md:flex flex-row flex-start ms-3 mt-0  left-[0.29px] right-[0.29px] top-0 ">
                <div class="pe-2 ">
                    <div class="   w-fit" >
                        <img src="../assets/unsplash.png" alt="unsplash">
                        <div class="flex flex-row items-center  justify-between pb-[8px] ">   
                              <div class=" mt-3 ">
                                    <p class="">Bali</p>
                                    <p >4CDN</p>
                                </div>
                            <div>
                                <p class="text-blue-800 text-2xl" >$899</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pe-2">
                        <div class="w-fit">
                            <img src="../assets/SwitzerlandImage.png" alt="unsplash" >
                       
                        <div class="flex flex-row items-center  justify-between   pb-[8px] ">
                        <div class="flex flex-col items-center p-0 gap-[6px]">
                            <div class=" mt-3 ">
                                <p class="">Swiss</p>
                                <p class="">6D5N</p>
                            </div>
                        </div>
                        <div>
                            <p class="text-blue-800 text-2xl">$900</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="pe-2">
                   <div class="w-fit">
                            <img src="../assets/BoracayImage.png" alt="borcay" class="">           
                        
                        <div class="flex flex-row items-center p-0 justify-between  pb-[8px]">
                            <div class="flex flex-col items-center p-0 gap-[6px]">
                                <div class=" mt-3 ">
                                    <p class="">Borcay</p>
                                    <p class="">5D4N</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-blue-800 text-xl">$699</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pe-2">
                  <div class="w-fit">
                            <img :src="Palawanimage" alt="unsplash" class="">
                            <div class="flex flex-row items-center p-0 justify-between   pb-[8px] ">
                                
                                <div class="flex flex-col items-center p-0 gap-[6px]">
                                    <div class=" mt-3 ">
                                        <p class="">Palawan</p>
                                        <p class="">4CDN</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p class="text-blue-800 text-xl">$789</p>
                                </div>
                            </div>
                            
                        </div>
                </div>



            </div>

        </div>
        <!-- Popular Stays -->
        <div class="flex flex-col p-0 gap-[24px] flex-start mt-3 ">
            <div class="flex flex-row items-center p-0 justify-between">

                <div class="flex flex-col items-center p-0 gap-[6px]">
                    <div class=" mt-3 ">
                        <p class="uppercase md:text-xl sm:text-sm">Recommended Stays </p>
                    </div>

                </div>


                <div>
                    <p class="text-blue-800 md:text-xl sm:text-sm">View all stays <i class="fa-sharp fa-regular fa-arrow-right"></i>
                    </p>
                </div>
            </div>
            <div class="md:flex flex-row justify-between   ps-[12px] pe-[12px] gap-[10px] ">
                <div class="w-fit pb-2">

                    <img src="../assets/MatterhornImage.png" alt="matterhorn">
                    <div class="flex flex-row flex-start p-0 gap-[11px] justify-between mt-2">
                        <!-- /* Stay Details */ -->
                        <div class="flex flex-col flex-start p-0 gap-[6px] ">
                            <p>Entire Bungalow</p>
                            <p class="text-xl font-semibond">Matterhorn Suites</p>
                            <p>$575/night</p>
                        </div>
                        <div class="text-right ">
                            <i class="fa-brands fa-youtube fa-2x text-blue-900"></i>
                        </div>




                    </div>
                    <div class="mt-2">
                        <i class="fa-sharp fa-solid fa-star text-amber-400 fa-2x"></i>
                        <span class="font-bold text-xl ps-2 pe-2">4.9</span>
                        <span class="text-blue-900	">(60 reviwes)</span>
                    </div>
                    <div
                        class="mt-3 box-border flex flex-col items-center p-0 border-radius-[4px] border-2 p-2 border-blue-900 rounded">

                        <div>MORE DETAILS</div>
                    </div>
                </div>
                <div class="w-fit pb-2">

                    <img src="../assets/DiscoveryImage.png" alt="matterhorn">
                    <div class="flex flex-row flex-start p-0 gap-[11px] justify-between mt-2">
                        <!-- /* Stay Details */ -->
                        <div class="flex flex-col flex-start p-0 gap-[6px] ">
                            <p>2-Story beachfront suite</p>
                            <p class="text-xl font-semibond">Discvoery Shores</p>
                            <p>$360/night</p>
                        </div>
                        <div class="text-right ">
                            <i class="fa-brands fa-youtube fa-2x text-blue-900"></i>

                        </div>



                    </div>
                    <div class="mt-2">
                        <i class="fa-sharp fa-solid fa-star text-amber-400 fa-2x"></i>
                        <span class="font-bold text-xl ps-2 pe-2">4.8</span>
                        <span class="text-blue-900	">(116 reviwes)</span>
                    </div>
                    <div
                        class="mt-3 box-border flex flex-col items-center p-0 border-radius-[4px] border-2 p-2 border-blue-900 rounded">

                        <div>MORE DETAILS</div>
                    </div>
                </div>
                <div class="w-fit pb-2">

                    <img src="../assets/ArcticHut.png" alt="matterhorn">
                    <div class="flex flex-row flex-start p-0 gap-[11px] justify-between mt-2">
                        <!-- /* Stay Details */ -->
                        <div class="flex flex-col flex-start p-0 gap-[6px] ">
                            <p>Single Dilux Hut</p>
                            <p class="text-xl font-semibond">Arctic Hut</p>
                            <p>$420/night</p>
                        </div>
                        <div class="text-right ">
                            <i class="fa-brands fa-youtube fa-2x text-blue-900"></i>

                        </div>



                    </div>
                    <div class="mt-2">
                        <i class="fa-sharp fa-solid fa-star text-amber-400 fa-2x"></i>
                        <span class="font-bold text-xl ps-2 pe-2">4.7</span>
                        <span class="text-blue-900	">(78 reviwes)</span>
                    </div>
                    <div
                        class="mt-3 box-border flex flex-col items-center p-0 border-radius-[4px] border-2 p-2 border-blue-900 rounded ">

                        <div>MORE DETAILS</div>
                    </div>
                </div>
                <div class="w-fit pb-2">

                    <img src="../assets/Lake.png" alt="matterhorn">
                    <div class="flex flex-row flex-start p-0 gap-[11px] justify-between mt-2">
                        <!-- /* Stay Details */ -->
                        <div class="flex flex-col flex-start p-0 gap-[6px] ">
                            <p> Dilux King room</p>
                            <p class="text-xl font-semibond">Lake Louise Inn</p>
                            <p>$244/night</p>
                        </div>
                        <div class="text-right ">
                            <i class="fa-brands fa-youtube fa-2x text-blue-900"></i>

                        </div>



                    </div>
                    <div class="mt-2">
                        <i class="fa-sharp fa-solid fa-star text-amber-400 fa-2x"></i>
                        <span class="font-bold text-xl ps-2 pe-2">4.6</span>
                        <span class="text-blue-900	">(63 reviwes)</span>
                    </div>
                    <div
                        class="mt-3 box-border flex flex-col items-center p-0 border-radius-[4px] border-2 p-2 border-blue-900 rounded">

                        <div>MORE DETAILS</div>
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
                <p class="text-white text-sm md:text-base">Fickle Flight is your one-stop travel portal. We offer
                    hassle-free flight and hotel bookings. We also have all your flight needs in your online shop.</p>
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

<script setup>
import Palawanimage from "../assets/Palawanimage.png"
</script>

<style scoped>
.banner {
    /* Banner Background */
    position: relative;
    height: 640px;
    /* Maintain your original height */
    background: url('../assets/BanneBackground.png') no-repeat center center;
    /* Center and prevent repetition */
    background-size: cover;
    /* Ensure the image covers the entire area */
}

.banner-gradient {
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
    /* width: 100%; */
    /* min-height: 466px; */
    /* Ensures minimum height */
    background: url('../assets/Subscribe.png') center center / cover no-repeat;
    /* Ensures full background coverage */
    background-position: center;
    padding: 20px;
    /* Ensures padding around the content */
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
    /* transform: rotate(90deg); */

}
</style>