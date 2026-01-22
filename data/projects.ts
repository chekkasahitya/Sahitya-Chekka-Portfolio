export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
    galleryImages?: string[];
}

export const projects: Project[] = [
    {
        id: "luma-wellness-companion",
        title: "LUMA",
        description: "Our hackathon prototype didn’t just get an upgrade — it evolved. We rebuilt LUMA into a gentle, intelligent emotional wellness companion designed for real everyday moments. Features Live Mood Detection, Mindful Chat (Text+Voice), and local privacy.",
        tags: ["AI", "Emotional Intelligence", "Privacy-First", "Web App"],
        githubUrl: "https://github.com/Kusuma19072001/LUMA-2.0",
        demoUrl: "https://lnkd.in/evsfsCA3",
        image: "/images/luma-project.jpg"
    },
    {
        id: "wisdom-index-financial",
        title: "WISDOM INDEX",
        description: "A comprehensive financial analytics solution designed to evaluate financial health, readiness, and long-term sustainability. Features a Financial Summary Dashboard, Readiness Overview, and Advisor Insights to convert complex data into actionable insights.",
        tags: ["Financial Analytics", "Dashboard Design", "Data Modeling"],
        // githubUrl removed to prefer "Explore"
        image: "/images/wisdom-index.jpg",
        galleryImages: [
            "/images/wisdom-1.jpg",
            "/images/wisdom-2.jpg",
            "/images/wisdom-3.jpg"
        ]
    },
    {
        id: "fake-news-detection",
        title: "Fake News Detection System",
        description: "Developed a machine learning-based system using advanced NLP techniques to classify news articles as real or fake. Features a Kaggle dataset, DistilRoBERTa model, and a user-friendly Flask/Streamlit web app.",
        tags: ["NLP", "Machine Learning", "Python", "Transformers"],
        githubUrl: "https://github.com/chekkasahitya/fake_news_detection",
        demoUrl: "https://drive.google.com/file/d/1dq-pLWMwAqdeMr2LOl3rwHbQBMUkB1NG/view?pli=1",
        image: "/images/fake-news-detection.jpg"
    },
];
