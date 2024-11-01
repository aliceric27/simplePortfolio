const { createApp } = Vue



createApp({
    data() {
        return {
            isDarkMode: true,
            projects: [
                {
                    id: 1,
                    title: "專案一",
                    description: "整合 AI 聊天功能的智慧客服系統",
                    image: `https://picsum.photos/id/237/200/300`,
                    link: "#"
                },
                {
                    id: 2,
                    title: "專案二", 
                    description: "基於區塊鏈技術的去中心化交易平台",
                    image: `https://picsum.photos/id/238/200/300`,
                    link: "#"
                },
                {
                    id: 3,
                    title: "專案三",
                    description: "結合 AR 技術的虛擬試衣間應用",
                    image: `https://picsum.photos/id/239/200/300`,
                    link: "#"
                },
                {
                    id: 4,
                    title: "專案四",
                    description: "即時多人協作的線上白板系統",
                    image: `https://picsum.photos/id/240/200/300`,
                    link: "#"
                },
                {
                    id: 5,
                    title: "專案五",
                    description: "整合多平台的社群媒體數據分析工具",
                    image: `https://picsum.photos/id/241/200/300`,
                    link: "#"
                },
                {
                    id: 6,
                    title: "專案六",
                    description: "具有機器學習功能的智慧健康追蹤系統",
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