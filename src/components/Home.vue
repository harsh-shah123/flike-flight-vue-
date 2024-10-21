<template>

    <header class="w-[100%]">
        <!-- Top Header -->
        <section>

            <div class=" p-10 pt-4 pb-2 flex justify-between ">
                <div>
                    <img src="../assets/Symbols.jpg" alt="Symbols">
                </div>
                <div class="flex gap-4">
                    <router-link to="/">Home</router-link>
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

                    <div
                        class="flex flex-col items-center justify-center ps-20  h-4/5 font-mono font-extrabold text-white">
                        <p class="text-5xl	 text-center   ">

                            Let’s explore & travel the world
                        </p>
                        <p class="text-center">

                            Find the best destinations and the most popular stays!
                        </p>
                         <!-- serach form -->
                        <div class="mt-4    bg-white rounded-lg text-center jus">

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
            <div class="  ">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col  items-center p-[20px]  gap-[21px] 	">

                        <div class="grid-rows-2	 flex flex-row  items-center p-0 gap-[51px]  text-sky-900 gap-x-20">

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
                                <p class="top-0 left-0 font-black-900 text-xl font-semibold">LAX</p>
                            </div>


                        </div>
                        <div>

                            <p class="capitalize">
                                <span class="text-xl ">
                                    Depart On :
                                </span>
                                7 sep 2021
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col  justify-center items-center p-[20px] gap-[21px] 	">

                        <div
                            class="grid-rows-2	 flex flex-row justify-between items-center p-0 gap-[51px]  text-sky-900">

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
                        <div>

                            <p class="capitalize">
                                <span class="text-xl ">
                                    Depart On :
                                </span>
                                9 Sep 2021
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div>

                <p class="uppercase text-slate-400	">Prepare for your trip</p>

            </div>
            <!-- trip menu -->

            <div class="flex  justify-between items-center p-0 gap-[8px] mt-2">
                <!-- /* Background */ -->
                <div>

                    <div class="back flex items-center justify-center ">

                        <!-- /* Vector */ -->
                        <div class="  left-[25.48%] right-[25.48%] top-[20.88%] bottom-[49.33%]">
                            <i class="fa-solid fa-bed-front  text-neutral-200 fa-2x"></i>


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
                    <p class="text-center text-slate-300 item">Atteactions</p>
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

            <!-- Plan your next trip -->
            <div class="flex flex-col p-0 gap-[24px] flex-start mt-3 ">
                <div class="flex flex-row items-center p-0 justify-between">

                    <div class="flex flex-col items-center p-0 gap-[6px]">
                        <div class=" mt-3 ">
                            <p class="uppercase text-blue-800	">Plan your next trip</p>
                            <p class="text-slate-950	 text-2xl">Most Popular Destinations</p>
                        </div>

                    </div>


                    <div>
                        <p class="text-blue-800 text-xl">View all destinations <i
                                class="fa-sharp fa-regular fa-arrow-right"></i></p>
                    </div>
                </div>
                <!-- /* Cards Container */ -->

                <!-- /* ParisImage */ -->
                <div class="flex flex-row flex-start ms-3 mt-0  left-[0.29px] right-[0.29px] top-0 ">
                    <div class="pe-2">

                        <div class="parisimage">
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

                        <div class="greeceimage ">
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

                        <div class="norwayimage">
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

                    <div class="flex flex-col items-center p-0 gap-[6px]">
                        <div class=" mt-3 ">
                            <p class="uppercase text-xl">Recommended Holidays</p>
                        </div>

                    </div>


                    <div>
                        <p class="text-blue-800 text-xl">View all Holidays <i
                                class="fa-sharp fa-regular fa-arrow-right"></i></p>
                    </div>
                </div>
                <!-- /* Cards Container */ -->

                <!-- /* ParisImage */ -->
                <div class="flex flex-row flex-start ms-3 mt-0  left-[0.29px] right-[0.29px] top-0 ">
                    <div class="pe-2">

                        <div>
                            <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">

                                <img src="../assets/unsplash.png" alt="unsplash" class="">

                            </div>
                        </div>

                        <div class="flex flex-row items-center p-0 justify-between   pb-[8px] ps-[12px] pe-[12px]">

                            <div class="flex flex-col items-center p-0 gap-[6px]">
                                <div class=" mt-3 ">
                                    <p class="">Bali</p>
                                    <p class="">4CDN</p>
                                </div>

                            </div>


                            <div>
                                <p class="text-blue-800 text-xl">$899</p>
                            </div>
                        </div>

                    </div>
                    <div class="pe-2">

                        <div>
                            <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">

                                <img src="../assets/SwitzerlandImage.png" alt="unsplash" class="">

                            </div>
                        </div>

                        <div class="flex flex-row items-center p-0 justify-between   pb-[8px] ps-[12px] pe-[12px]">

                            <div class="flex flex-col items-center p-0 gap-[6px]">
                                <div class=" mt-3 ">
                                    <p class="">Swiss</p>
                                    <p class="">6D5N</p>
                                </div>

                            </div>


                            <div>
                                <p class="text-blue-800 text-xl">$900</p>
                            </div>
                        </div>

                    </div>
                    <div class="pe-2">

                        <div>
                            <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">

                                <img src="../assets/BoracayImage.png" alt="borcay" class="">

                            </div>
                        </div>

                        <div class="flex flex-row items-center p-0 justify-between   pb-[8px] ps-[12px] pe-[12px]">

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
                    <div class="pe-2">

                        <div>
                            <div class="flex flex-row justify-between pt-[8px] pb-[8px] ps-[12px] pe-[12px]">

                                <img src="../assets/Palawanimage.png" alt="unsplash" class="">

                            </div>
                        </div>

                        <div class="flex flex-row items-center p-0 justify-between   pb-[8px] ps-[12px] pe-[12px]">

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
            <!-- Popular Stays -->
            <div class="flex flex-col p-0 gap-[24px] flex-start mt-3 ">
                <div class="flex flex-row items-center p-0 justify-between">

                    <div class="flex flex-col items-center p-0 gap-[6px]">
                        <div class=" mt-3 ">
                            <p class="uppercase text-xl">Recommended Stays </p>
                        </div>

                    </div>


                    <div>
                        <p class="text-blue-800 text-xl">View all stays <i
                                class="fa-sharp fa-regular fa-arrow-right"></i></p>
                    </div>
                </div>
                <div class="flex flex-row justify-between flex-start pt-0 pb-0 ps-[12px] pe-[12px] gap-[10px]">
                    <div class="">

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
                    <div class="">

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
                    <div class="">

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
                    <div class="">

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

<script setup>

</script>

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