<template>
  <div
    class="navbar__left transition ease-in-out dark:bg-black"
    :class="{ hidden: showNavLeft }"
  >
    <div class="navbar__left--listtask__and__resouces">
      <div class="navbar__left--title px-2 py-3">
        <h1 class="text-2xl">LUNO Admin</h1>
        <div class="">
          <i
            class="cursor-pointer text-3xl hover:text-cyan-700"
            @mousemove="showCloseNav = true"
            ><svg
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </i>
          <div
            class="cursor-pointer absolute top-12 right-0 text-3xl bg-white py-2 px-3 shadow rounded-lg"
            :class="{ hidden: showCloseNav == false }"
          >
            <div class="text-lg border-b border-solid py-2 px-3">
              Quick Actions
            </div>
            <div class="flex flex-col items-start border-b border-solid">
              <h2
                class="text-base py-1 px-3 hover:text-cyan-400"
                v-for="(action, index) in actions"
                :key="index"
              >
                {{ action.name }}
              </h2>
            </div>
            <div class="text-base flex flex-col items-start px-3 py-1">
              <h2>Invoice List</h2>
              <h2>Create Invoice</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="navbar__left--selectProjects flex justify-center items-center"
        @mousemove="showCloseNav = false"
      >
        <select class="py-3 px-4 rounded-2xl" name="Projects">
          <option
            v-for="project in projects"
            :key="project.id"
            :value="project.name"
          >
            {{ project.name }}
          </option>
        </select>
        <i class="ml-2"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </i>
      </div>
      <div
        class="navbar__left--listtasks dark:bg-white"
        @mousemove="showCloseNav = false"
      >
        <div class="flex flex-col items-start ml-5 pb-2">
          <h1>MAIN</h1>
          <p>Unique dashboard designs</p>
        </div>
        <div
          class="navbar__left--tasks"
          v-for="option in options"
          :key="option.id"
          @click="option.isActive = !option.isActive"
        >
          <div
            class="navbar__left--task__title hover:bg-slate-400 rounded-md cursor-pointer"
          >
            <div class="navbar__left--tasks__task">
              <i class="p-1" v-html="option.icon"></i>
              <h4 class="ml-1">{{ option.name }}</h4>
            </div>
            <i
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </i>
          </div>
          <div
            class="navbar__left--listtask flex flex-col items-start"
            v-if="option.isActive"
          >
            <div
              class="navbar__left--listtask__taskop ml-5 hover:text-cyan-600"
              v-for="(task, index) in option.listtask"
              :key="index"
            >
              {{ task.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="navbar__left--recources dark:bg-white flex items-center mx-5 my-6 rounded-3xl border-dashed border border-sky-400"
      >
        <div class="navbar__left--listrecource ml-3 py-3">
          <div class="flex flex-col items-start ml-2 pb-1">
            <h1>RESOURCES</h1>
            <p>you need to know about LUNO</p>
          </div>
          <div
            class="navbar__left--listrecource__recource flex items-center border-t border-dashed w-56 py-1 px-2 hover:bg-slate-400 cursor-pointer rounded-md"
            v-for="recource in resources"
            :key="recource.id"
          >
            <i class="p-1" v-html="recource.icon"></i>
            <h3 class="ml-2">{{ recource.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="links__tosomething w-full flex justify-center mb-2">
      <div
        class="flex items-center w-64 justify-around rounded-2xl border-dashed border border-cyan-300"
      >
        <a
          class="p-2 hover:text-cyan-400"
          v-for="(link, index) in links"
          :key="index"
          :href="link.src"
          ><i v-html="link.icon"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showNavLeft: Boolean,
  },
  data() {
    return {
      isHidden: false,
      showCloseNav: false,
      actions: [
        { name: "Landing Pages" },
        { name: "Inventory" },
        { name: "eCommerce" },
        { name: "HRMS" },
      ],
      projects: [
        {
          id: 1,
          name: "Luno university",
        },
        {
          id: 2,
          name: "Book manager",
        },
        {
          id: 3,
          name: "Luno sass app",
        },
      ],
      options: [
        {
          id: 1,
          name: "My Dashboard",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
          `,
          isActive: false,
          listtask: [
            {
              name: "My profile",
            },
            {
              name: "Bookmarks",
            },
            {
              name: "Timeline",
            },
            {
              name: "Image Gallery",
            },
            {
              name: "Pricing",
            },
          ],
        },
        {
          id: 2,
          name: "Unique Dashboard",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>
`,
        },
        {
          id: 3,
          name: "Applications",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
</svg>
`,
        },
        {
          id: 4,
          name: "Crafted Pages",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
`,
        },
        {
          id: 5,
          name: "Account",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
`,
          isActive: false,
          listtask: [
            {
              name: "My profile",
            },
            {
              name: "Bookmarks",
            },
            {
              name: "Timeline",
            },
            {
              name: "Image Gallery",
            },
            {
              name: "Pricing",
            },
          ],
        },
      ],
      resources: [
        {
          id: 1,
          name: "Layouts",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
`,
        },
        {
          id: 2,
          name: "Modal Popups",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`,
        },
        {
          id: 3,
          name: "Widget's",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
</svg>
`,
        },
        {
          id: 4,
          name: "Documentation",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
</svg>
`,
        },
        {
          id: 5,
          name: "Changelog",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
`,
        },
      ],
      links: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
`,
          src: "https://www.youtube.com/",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`,
          src: "https://www.youtube.com/",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
`,
          src: "https://www.youtube.com/",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
`,
          src: "https://www.youtube.com/",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px; /* Chiều rộng thanh cuộn */
}

::-webkit-scrollbar-thumb {
  background-color: #73bff2; /* Màu nút kéo */
  border-radius: 10px; /* Góc bo tròn của nút kéo */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #84c2eb; /* Màu nút kéo khi di chuột qua */
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu đường chạy */
}

.navbar__left {
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #dedbe142;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.navbar__left.hidden {
  display: none;
}
.navbar__left--title {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.navbar__left--tasks {
  display: flex;
  flex-direction: column;
  min-width: 260px;
}
.navbar__left--task__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  height: 47px;
  border-top: 1px dashed #9e9e9e7e;
}
.navbar__left--tasks__task {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__left--listtasks {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px dashed #82828288;
  border-radius: 20px;
  padding: 15px 0;
  margin: 30px 20px;
}
.navbar__left--listtask__taskop {
  padding: 10px 20px;
}
.navbar__left--listtask__taskop:hover {
  cursor: pointer;
}
</style>
