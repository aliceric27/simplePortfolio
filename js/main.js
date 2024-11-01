const { createApp } = Vue

createApp({
    data() {
        return {
            isDarkMode: false,
            projects: [
                {
                    id: 1,
                    title: "專案一",
                    description: "使用 Vue.js 開發的網頁應用",
                    image: "https://picsum.photos/300/200?random=1",
                    link: "#"
                },
                {
                    id: 2,
                    title: "專案二",
                    description: "響應式電商網站設計",
                    image: "https://picsum.photos/300/200?random=2",
                    link: "#"
                },
                {
                    id: 3,
                    title: "專案三",
                    description: "社群媒體儀表板",
                    image: "https://picsum.photos/300/200?random=3",
                    link: "#"
                },
                {
                    id: 4,
                    title: "專案四",
                    description: "使用 Vue.js 開發的網頁應用",
                    image: "https://picsum.photos/300/200?random=1",
                    link: "#"
                },
                {
                    id: 5,
                    title: "專案五",
                    description: "響應式電商網站設計",
                    image: "https://picsum.photos/300/200?random=2",
                    link: "#"
                },
                {
                    id: 6,
                    title: "���案六",
                    description: "社群媒體儀表板",
                    image: "https://picsum.photos/300/200?random=3",
                    link: "#"
                }
            ]
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark-mode');
        }
    }
}).mount('#app')