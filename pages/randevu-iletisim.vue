<script setup lang="ts">
import { Icon } from "@iconify/vue";

const contactForm = ref({
  firstName: null,
  lastName: "",
  email: "",
  phone: "",
  message: "",
});
</script>
<template>
  <div class="bg-white">
    <main>
      <div
        class="bg-gradient-to-t from-color1 via-[#ffffff] to-color1 sm:pt-16 lg:pt-8 lg:pb-14"
      >
        <!-- COMPONENT CODE -->
        <div class="lg:mx-48 px-4 mb-24 lg:px-20">
          <h1
            class="text-8 text-center lg:text-left tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text block"
          >
            Randevu & Iletisim
          </h1>
          <div
            class="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-lg shadow-2xl"
          >
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl">Send us a message</h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="input input-primary input-bordered"
                type="text"
                v-model="contactForm.name"
                placeholder="İsim*"
              />
              <input
                class="input input-primary input-bordered"
                type="text"
                v-model="contactForm.lastName"
                placeholder="Soyisim*"
              />
              <input
                class="input input-primary input-bordered"
                type="email"
                v-model="contactForm.email"
                placeholder="Email*"
              />
              <input
                class="input input-primary input-bordered"
                type="number"
                v-model="contactForm.phone"
                placeholder="Telefon*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Mesaj*"
                v-model="contactForm.message"
                class="w-full h-32 input input-primary input-bordered"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/2">
              <button
                class="btn border-none focus:border-0 uppercase text-sm font-bold tracking-wide bg-color1 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Gönder
              </button>
            </div>
          </div>

          <div
            class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-color1 rounded-lg"
          >
            <div class="flex flex-col text-white">
              <h1 class="font-bold text-6 my-4">Şişli Terapi Enstitüsü</h1>
              <p class="text-gray-400">
                Randevu almak için bizimle mail üzerinden ya da telefon
                numaralarımız üzerinden iletişime geçerek psikolog desteği
                talebinde bulunabilir veya merak ettiğiniz soruları
                sorabilirsiniz. Mesaj bırakırken size doğru bir şekilde
                ulaşabilmemiz için telefon numaranızı ve mail adresinizi kontrol
                etmeyi unutmayın lütfen
              </p>

              <div class="flex my-4 w-full">
                <div class="flex flex-col">
                  <i class="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <h2 class="text-6">Şişli Ofis</h2>
                  <p class="text-gray-400">
                    Balmumcu Mah. Barbaros Bulvarı No:78 Eser Apt. K:1 D:6
                    (Gayrettepe) Beşiktaş- İstanbul
                  </p>
                </div>
              </div>

              <div class="flex my-4 w-full">
                <div class="flex flex-col">
                  <i class="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <h2 class="text-6">Telefon</h2>
                  <p class="text-gray-400">
                    Tel: <a href="tel:+0212 347 00 20">0212 347 00 20</a>
                  </p>
                  <p class="text-gray-400">
                    Tel: <a href="tel:+0552 347 00 20">0552 347 00 20</a>
                  </p>
                </div>
              </div>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/sisliterapienstitusu/"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <Icon
                    icon="akar-icons:facebook-fill"
                    class="fill-current h-8 w-8"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sisliterapi/"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full inline-block mx-1 text-center"
                >
                  <Icon
                    icon="ant-design:instagram-filled"
                    class="fill-current h-10 w-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- COMPONENT CODE -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
<style>
@import "@/assets/css/skeleton.css";
</style>
