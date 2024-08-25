<script setup>
import logo from "../assets/icons/icon.png";
</script>

<template>
  <section class="flex justify-center">
    <nav
      class="w-[1240px] flex justify-around items-center px-2 py-3 border-2 border-1 border-bg_6 rounded-2xl bg-black fixed mt-2"
    >
      <div class="flex gap-2">
        <img :src="logo" alt="quiz-icon" />
        <h1 class="text-white text-2xl">Quizzverse</h1>
      </div>
      <ul class="flex flex-row gap-16">
        <a href="/" class="text-black_6">Home</a>
        <a href="/about" class="text-black_6">About</a>
        <a href="/Features" class="text-black_6">Features</a>
      </ul>
      <button class="px-6 py-2 rounded-xl bg-customGradient">Join Quiz</button>
    </nav>
  </section>
</template>
