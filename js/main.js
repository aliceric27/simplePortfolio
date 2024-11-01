const { createApp } = Vue



createApp({
    data() {
        return {
            isDarkMode: true,
            projects: [
                {
                    id: 1,
                    title: "專案一",
                    description: "使用 Vue.js 開發的網頁應用",
                    image: `https://picsum.photos/id/237/200/300`,
                    link: "#"
                },
                {
                    id: 2,
                    title: "專案二",
                    description: "響應式電商網站設計",
                    image: `https://picsum.photos/id/238/200/300`,
                    link: "#"
                },
                {
                    id: 3,
                    title: "專案三",
                    description: "社群媒體儀表板",
                    image: `https://picsum.photos/id/239/200/300`,
                    link: "#"
                },
                {
                    id: 4,
                    title: "專案四",
                    description: "使用 Vue.js 開發的網頁應用",
                    image: `https://picsum.photos/id/240/200/300`,
                    link: "#"
                },
                {
                    id: 5,
                    title: "專案五",
                    description: "響應式電商網站設計",
                    image: `https://picsum.photos/id/241/200/300`,
                    link: "#"
                },
                {
                    id: 6,
                    title: "案六",
                    description: "社群媒體儀表板",
                    image: `https://picsum.photos/id/242/200/300`,
                    link: "#"
                }
            ]
        }
    },
    mounted() {
        document.body.classList.add('dark-mode');
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark-mode');
        }
    }
}).mount('#app')