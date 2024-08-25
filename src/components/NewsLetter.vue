<script setup>
import Carousel from "./Carousel.vue";
</script>

<template>
  <section class="bg-bg_2 p-16 rounded-4xl max-w-[1240px] w-full">
    <header class="flex flex-col justify-center items-center mb-4">
      <h3 class="bg-customGradient text-transparent bg-clip-text text-2.5xl">
        Join Our Newsletters
      </h3>
      <p class="text-white text-xl mb-4">
        <span class="text-txt_white2">+50k User, a</span> Hot-Subscription
        feature for users
      </p>
      <span class="bg-bg_6 px-4 py-2 rounded-2xl text-white"
        >🔥 <span class="text-primary_4">#1 Health</span> community</span
      >
    </header>
    <Carousel />
    <form class="flex justify-center items-center gap-4">
      <input
        class="text-white bg-black px-4 py-3 rounded-full border-2 border-bg_4 focus:border-primary1 outline-none flex-1 max-w-[318px]"
        placeholder="Enter your email"
        type="email"
      />
      <button class="text-white text-base bg-primary1 px-4 py-3 rounded-full">
        Submit
      </button>
    </form>
  </section>
</template>
