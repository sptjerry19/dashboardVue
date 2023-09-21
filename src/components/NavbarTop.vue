<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <section>
    <div
      class="navbar__top bg-gray-200 dark:bg-black"
      :class="{ isCloseNavLeft: isHidden || posX < 1225 }"
    >
      <div class="navbar__top--logo">
        <i
          class="py-2 px-3 cursor-pointer hover:text-cyan-400"
          @click="closeNavLeft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
        </i>
        <img
          class="w-28 bg-gray-200 text-gray-200"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tom_and_Jerry_logo.svg/1280px-Tom_and_Jerry_logo.svg.png"
          alt="logo"
        />
      </div>
      <div class="navbar__top--search">
        <input type="text" placeholder="input your message" />
      </div>
      <div class="navbar__top--options">
        <p class="notification px-3 hover:text-cyan-500 cursor-pointer">
          Notification
        </p>
        <i
          class="zoomScreen p-3 hover:bg-cyan-300 cursor-pointer text-2xl rounded-md"
          @click="openFullscreen"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </i>
        <i
          class="language relative p-3 hover:bg-cyan-300 cursor-pointer text-2xl rounded-md"
          @click="openModalLanguage"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
            />
          </svg>
          <div
            class="modal_language absolute top-12 right-0 w-40 border-dashed border-2 border-gray-400 rounded-md"
            :class="{ hidden: isActivelang == false }"
          >
            <div
              v-for="(language, index) in languages"
              :key="index"
              class="flex items-center px-3 py-1 bg-purple-200 hover:bg-slate-600 rounded-md"
            >
              <i class="w-1/5"><img :src="language.image" alt="anh" /></i>
              <p class="ml-2 text-base">{{ language.name }}</p>
            </div>
          </div>
        </i>
        <i
          class="squares p-3 relative hover:bg-cyan-300 cursor-pointer text-2xl rounded-md"
          @click="openModelSquares"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
          <div
            class="modal__dashboard absolute top-12 right-0 w-60 border-dashed border-2 border-gray-400 rounded-md bg-white p-2 shadow-2xl dark:bg-black"
            :class="{ hidden: isActiveSquares == false }"
          >
            <div class="flex flex-wrap w-64">
              <button
                v-for="(square, index) in squares"
                :key="index"
                class="w-28 hover:bg-slate-300 rounded-lg px-3 py-1 border border-dashed dark:bg-gray-600 dark:hover:bg-cyan-300"
              >
                <font-awesome-icon :icon="['fas', square.icon]" />
                <h2 class="text-base">{{ square.name }}</h2>
                <p class="text-sm">{{ square.over }}</p>
              </button>
            </div>
          </div>
        </i>
        <i
          class="night p-3 hover:bg-cyan-300 cursor-pointer text-2xl rounded-md"
          @click="toggleDark()"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </i>
        <i class="w-8 relative cursor-pointer hover:w-9" @click="openSettingAvt"
          ><img
            class="w-full"
            src="https://seeklogo.com/images/J/jerry-logo-CC2BD85246-seeklogo.com.png"
            alt="avatar"
          />
          <div
            class="modal__settingsAvt absolute top-14 right-0 w-60 bg-white z-50 shadow-md rounded-xl dark:bg-black"
            :class="{ hidden: isActiveAva == false }"
          >
            <div
              class="flex justify-center py-4 border-b border-solid border-gray-500 items-center"
            >
              <img class="w-9 h-9 rounded-md" :src="setAvatars.image" alt="" />
              <div class="flex flex-col">
                <h1 class="ml-2">{{ setAvatars.name }}</h1>
                <p class="ml-2 text-sm">{{ setAvatars.gmail }}</p>
              </div>
            </div>
            <div
              v-for="seting in setAvatars.listSeting"
              :key="seting.id"
              class="flex flex-col"
            >
              <div class="flex items-center py-2 px-4 hover:bg-slate-300">
                <font-awesome-icon :icon="['fas', seting.icon]" />
                <h2 class="ml-2">{{ seting.nameset }}</h2>
              </div>
            </div>
            <div
              class="flex bg-teal-500 items-center justify-center rounded-b-xl h-10"
            >
              <h1 class="text-white">SIGN OUT</h1>
            </div>
          </div>
        </i>
        <i
          class="setting p-3 hover:bg-cyan-300 cursor-pointer text-2xl rounded-md"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    showNavLeft: Boolean,
    count: Number,
  },
  data() {
    return {
      isHidden: false,
      isActivelang: false,
      isActiveSquares: false,
      isActiveSetting: false,
      isActiveAva: false,
      messages: [],
      posX: window.innerWidth, // Khởi tạo giá trị posX bằng chiều rộng ban đầu của cửa sổ
      languages: [
        {
          image: "https://kenh14cdn.com/2017/2-1503128133740.png",
          name: "UK English",
        },
        {
          image:
            "https://hangkhongmy.vn/wp-content/uploads/2018/08/bi-an-trong-la-co-nuoc-my-1.png",
          name: "US English",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.WiiE2MA4RS46HmLgfsbXdwAAAA?pid=ImgDet&rs=1",
          name: "Germany",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.b8apmr7MEf5KEcBEDBipIAHaFP?pid=ImgDet&rs=1",
          name: "Hindi",
        },
        {
          image: "https://www.welt-flaggen.de/data/flags/w1600/ae.png",
          name: "Saudi Arabia",
        },
      ],
      squares: [
        {
          icon: "dashboard",
          name: "Dashboard",
          over: "view all",
        },
        {
          icon: "inbox",
          name: "inbox",
          over: "view all",
        },
        {
          icon: "book",
          name: "Book",
          over: "view all",
        },
        {
          icon: "comment",
          name: "Comment",
          over: "view all",
        },
      ],
      setAvatars: {
        image:
          "https://i.pinimg.com/originals/26/ee/73/26ee73636f3429e3df522ae219c064fd.png",
        name: "Allie Grater",
        gmail: "alliegrater@gamil.com",
        listSeting: [
          {
            id: 1,
            icon: "user",
            nameset: "My Profiles",
          },
          {
            id: 2,
            icon: "book",
            nameset: "Settings",
          },
          {
            id: 3,
            icon: "bell",
            nameset: "Billing",
          },
          {
            id: 4,
            icon: "comment",
            nameset: "Manage Team",
          },
          {
            id: 5,
            icon: "inbox",
            nameset: "My Events",
          },
          {
            id: 6,
            icon: "gauge",
            nameset: "Support Ticket",
          },
        ],
      },
    };
  },
  mounted() {
    // Thêm sự kiện resize để cập nhật giá trị posX khi cửa sổ thay đổi kích thước
    window.addEventListener("resize", this.updateWindowWidth);
  },
  methods: {
    closeNavLeft() {
      this.isHidden = !this.isHidden;
      this.$emit("closeNavLeft", this.isHidden);
    },
    updateWindowWidth() {
      this.posX = window.innerWidth; // Cập nhật giá trị posX khi cửa sổ thay đổi kích thước
      this.$emit("resizeWindow", this.posX);
    },
    openModalLanguage() {
      this.isActivelang = !this.isActivelang;
    },
    openModelSquares() {
      this.isActiveSquares = !this.isActiveSquares;
    },
    openFullscreen() {
      const elem = document.documentElement;
      const zoomFullSc = document.querySelector(".zoomScreen");
      const iszoomFullSc = document.querySelector(
        ".zoomScreen.isZoomFullScreen"
      );
      if (iszoomFullSc && document.exitFullscreen) {
        document.exitFullscreen();
        zoomFullSc.classList.remove("isZoomFullScreen");
      } else if (elem.requestFullscreen) {
        elem.requestFullscreen();
        zoomFullSc.classList.add("isZoomFullScreen");
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    },
    openSettingAvt() {
      this.isActiveAva = !this.isActiveAva;
    },
  },
};
</script>

<style scoped>
.navbar__top {
  position: fixed;
  top: 0px;
  left: 310px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__top.isCloseNavLeft {
  left: 0;
}
.navbar__top--logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.navbar__top--search {
  width: 40%;
}
.navbar__top--search input {
  width: 100%;
  padding: 7px 15px;
  margin: 0 10px;
  border-radius: 50px;
}
.navbar__top--options {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
