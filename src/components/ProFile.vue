<template>
  <div id="profile" class="ml-80 bg-gray-200">
    <div class="flex flex-col">
      <div class="flex flex-col w-full">
        <div class="flex px-8 py-5">
          <h3 class="text-cyan-400 px-3">Home</h3>
          <p>/</p>
          <h3 class="text-cyan-400 px-3">Crafted pages</h3>
          <p>/</p>
          <h3 class="px-3">My Profile</h3>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col items-start ml-6 px-6 py-3">
            <h1>Welcome back, Allie!</h1>
            <i class="opacity-70"
              >You have 12 new messages and 7 new notifications.</i
            >
          </div>
          <div class="flex mr-8">
            <div
              v-for="(increase, index) in increases"
              :key="index"
              class="flex flex-col p-3"
            >
              <h1>
                {{ increase.count }}k
                <i class="text-cyan-400">^{{ increase.increa }}%</i>
              </h1>
              <p class="opacity-75">{{ increase.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex bg-white mx-10 rounded-lg shadow-lg py-10">
        <div class="flex">
          <div class="flex w-52 h-52 ml-10 shadow-lg rounded-xl object-cover">
            <img
              class="w-full rounded-xl object-cover"
              :src="informations.avatar"
              alt="avatar"
            />
          </div>
          <div class="flex flex-col items-start w-2/5 ml-10">
            <h1 class="text-2xl py-1 px-3 font-thin">Allie Grater</h1>
            <h6 class="text-base font-semibold py-1 px-3">
              alliegrater@luno.com
            </h6>
            <h6 class="text-left opacity-70 py-2 px-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h6>
            <div class="flex"></div>
          </div>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    <ProfileOverview />
  </div>
</template>

<script>
import ProfileOverview from "./ProfileOverview.vue";
export default {
  components: {
    ProfileOverview,
  },
  props: {},
  data() {
    return {
      increases: [
        {
          name: "INCOME",
          count: 8.18,
          increa: 1.3,
        },
        {
          name: "EXPENSE",
          count: 1.11,
          increa: 4.1,
        },
        {
          name: "REVENUE",
          count: 3.66,
          increa: 7.5,
        },
      ],
      informations: {
        avatar:
          "https://www.redwolf.in/image/catalog/stickers/jerry-loves-cheese-sticker-india.png",
        Name: "Allie Grater",
        Gmail: "alliegrater@luno.com",
        infor:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    };
  },
  methods: {},
};
</script>
