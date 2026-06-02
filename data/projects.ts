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
        id: "transformation-metrics-dashboard",
        title: "Transformation Metrics Dashboard",
        description: "Built a centralized reporting system in Power BI and Excel to track KPIs, milestones, and ROI, with automated data inputs and validations to ensure quality and deliver executive-ready insights on transformation progress.",
        tags: ["PowerBI", "Excel", "SQL"],
        image: "/images/sales-profit-dashboard.png"
    },
    {
        id: "county-financials-system",
        title: "County Financials System",
        description: "Delivered an end to end financial management platform serving multiple counties, automating budgeting, grants management, and invoicing. Led the migration of financial data from legacy systems with full data integrity, consolidating disparate records into a single source of truth, and configured role based access controls to secure sensitive data and tailor module visibility by user and county. Built customized Power BI dashboards and a self-service report builder that gave stakeholders county-specific reporting on demand.",
        tags: ["Python", "SQL", "Power BI"],
        image: "/images/wisdom-index.jpg"
    },
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
    {
        id: "sales-profit-dashboard",
        title: "Sales & Profit Dashboard (Excel)",
        description: "A comprehensive Excel dashboard analyzing sales performance and profitability. Features interactive data visualization for product lines, regional sales, and customer insights efficiently.",
        tags: ["Excel", "Data Analysis", "Dashboard", "Business Intelligence"],
        demoUrl: "https://1drv.ms/x/c/8A435294D397A7DD/IQBj4fwzVkPSR45uz9jd_kYEATM1KpStTlMNWHFcKtH5aBg?e=cK3i0u",
        image: "/images/sales-profit-dashboard.png"
    },
    {
        id: "recipe-genie",
        title: "Recipe Genie",
        description: "An AI-powered recipe generator that helps users find meals based on available ingredients. Features a responsive UI and intelligent search capabilities.",
        tags: ["AI", "React", "API Integration"],
        githubUrl: "https://github.com/chekkasahitya/Recipe-Genie",
        demoUrl: "https://recipe-genie-zqak.onrender.com/",
        image: "/images/dish_genie.png"
    },
];
