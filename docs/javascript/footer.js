const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#003060] md:py-20 py-10 p-5">

        <div class="md:max-w-[80%] w-full mx-auto">

            <div class="flex md:flex-row flex-col sm:items-center md:gap-24 gap-7 justify-between">
                <div class="" data-aos="fade-up">
                    <a href="/index.html">
                        <img src="/docs/assets/images/favicon.png" class="md:h-[70px] h-[40px]" alt="">
                    </a>
                    <p class="text-[#F3F3F5] md:w-[347px] mt-4">Helping companies organize, analyze, and extract value from massive data sets.
                    </p>
                </div>

                <ul data-aos="fade-up" data-aos-delay="100" class="flex sm:items-center text-[#EAECF0] md:gap-10 gap-5 sm:flex-row flex-wrap flex-col">
                    <li><a href="/index.html#about" class="transition-all duration-500 hover:opacity-60">Home</a></li>
<li><a href="#vision" class="text-xl transition-all duration-500 hover:opacity-60">About</a></li>
<li><a href="/services.html" class="text-xl transition-all duration-500 hover:opacity-60">Services</a></li>
<li><a href="/contact.html" class="text-xl transition-all duration-500 hover:opacity-60">Partners</a></li>
<li><a href="/contact.html" class="text-xl transition-all duration-500 hover:opacity-60">Contact</a></li>

                </ul>
            </div>
            <div class="w-full h-[1px] my-10 bg-[#C6C8D0]"></div>
            <div class="flex items-center justify-between gap-5 md:flex-row flex-col">
                <p class="text-[#F3F3F5]">© 2025 DIALOMICRON. All rights reserved.</p>
                <div class="flex items-center gap-6">
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-instagram"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-facebook"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-linkedin"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

    </footer>
`