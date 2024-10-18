<template>


    <header>
        <!-- Top Header -->
        <section>

            <div class=" p-10 pt-5 pb-2 flex justify-between ">
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
            <div class="banner-gradient">
                <div class="banner">

                    <!-- search for flight -->

                    <div class="flex flex-col  justify-center ps-20  h-4/5 font-mono font-extrabold text-white">
                        <p class="text-5xl	text-center">

                            Let’s explore & travel the world
                        </p>
                        <p class="text-center">

                            Find the best destinations and the most popular stays!
                        </p>

                        <!-- serach form -->
                        <div class="mt-4 ms-2 me-10  bg-white rounded-lg">

                            <div class="flex flex-row content-center p-5 gap-5 justify-between">
                                <p class="text-black font-white text-xl font-mono text-left">
                                    SEARCH FLIGHTS
                                </p>
                                <div class="text-black ">
                                    <input type="radio" name="return" id="oneway" >
                                    <span>

                                        Return
                                    </span>
                                    <input type="radio" name="One-way" id="oneway" checked>
                                    <span>

                                        One-way
                                    </span>
                                </div>




                            </div>
                            <div class="flex flex-row ms-3">

                                <div class="relative mb-3 pt-2 " data-twe-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] border-2 w-[270px]  border-gray-700 ms-2 px-3 py-[0.32rem]  text-gray-700	    "
                                        readonly value="Singapore (SIN)" />
                                    <label
                                        class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1  text-neutral-500  ">Depature
                                    </label>

                                </div>
                                <div >
                                    <div class="relative mb-3 pt-2" data-twe-input-wrapper-init>
                                        <input type="text"
                                            class="peer block min-h-[auto] border-2 w-[270px] border-gray-700 ms-2 px-3 py-[0.32rem]  text-gray-700	    "
                                            readonly value="Los Angeles (LA)" />
                                        <label
                                            class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1  text-neutral-500  ">Arival
                                        </label>

                                    </div>

                                </div>
                                <div >
                                    <div class="relative mb-3 pt-2" data-twe-input-wrapper-init>
                                        <input type="text"
                                            class="peer block min-h-[auto] border-2 w-[270px] border-gray-700 ms-2 px-3 py-[0.32rem]  text-gray-700	    "
                                            readonly value="01/05/2022" />
                                        <label
                                            class="pointer-events-none absolute left-3 top-[-0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate bg-white px-1  text-neutral-500  ">Date
                                        </label>

                                    </div>

                                </div>
                            </div>

                        </div>
                     
                    </div>

                </div>

            </div>
        </section>
    </header>

</template>

<script>

</script>

<style>
.banner {
    /* Banner  Background */
    /* box-sizing: border-box; */
    position: absolute;
    /* height: 100%; */
    height: 640px;
    width: 100%;
    box-sizing: content-box;
    /* top: 0.4px; */

    background: url('../assets/BanneBackground.png');

}

.banner-gradient {
    /* Banner Gradient */

    /* position: absolute; */
    height: 640px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: linear-gradient(78.78deg, #114F8B -3.12%, #2A9AD7 103.77%);



}
</style>