import Link from "next/link";
import { Briefcase, GraduationCap, Code, MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 text-foreground">Sahitya Chekka</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 text-sm">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Austin, TX (Open to Relocation)</span>

                    <a href="mailto:chekkasahitya04@gmail.com" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Mail className="w-4 h-4 mr-1" /> chekkasahitya04@gmail.com</a>
                    
                    <a href="tel:+15129475871" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Phone className="w-4 h-4 mr-1" /> +1 512-947-5871</a>
                    
                    <a href="https://www.linkedin.com/in/sahitya-chekka/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin className="w-4 h-4 mr-1" /> LinkedIn</a>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-blue-600 pl-6">
                    Analytics and Business Intelligence Professional with 4+ years of experience in data analytics, business intelligence, and process improvement. Skilled in requirements gathering, stakeholder management, SQL, Python, Power BI, Tableau, and KPI development. Experienced in transforming complex data into actionable insights, optimizing business processes, and developing reporting solutions. Adept at supporting strategic decision making across finance, operations, AI evaluation, and sales domains.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {/* Main Content: Experience (2/3 width) */}
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground border-b border-border pb-2">
                            <Briefcase className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                            Professional Experience
                        </h2>

                        <div className="space-y-10">
                            {/* Turing Enterprises */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-2 border-background"></div>
                                <h3 className="font-bold text-lg text-foreground">Turing Enterprises</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">AI Analyst</span>
                                    <span className="text-sm text-muted-foreground">Mar 2026 – Present</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-muted-foreground space-y-2 text-sm leading-relaxed">
                                    <li>Defined and applied structured evaluation criteria to assess outputs against business requirements, data quality standards, and accuracy benchmarks across complex workflows.</li>
                                    <li>Developed As-Is and To-Be process flows to streamline AI evaluation workflows and improve operational efficiency.</li>
                                    <li>Leveraged SQL and Python to perform data extraction, transformation, and analysis on datasets exceeding 1M+ records.</li>
                                    <li>Supported User Acceptance Testing (UAT) by validating requirements, test scenarios, and expected outcomes.</li>
                                    <li>Defined acceptance criteria, user stories, and business requirements for AI-driven solutions and analytics initiatives.</li>
                                </ul>
                            </div>

                            {/* Deloitte Touche Tohmatsu */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-background"></div>
                                <h3 className="font-bold text-lg text-foreground">Deloitte Touche Tohmatsu</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">Associate Analyst</span>
                                    <span className="text-sm text-muted-foreground">Jun 2022 - Dec 2023</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-muted-foreground space-y-2 text-sm leading-relaxed">
                                    <li>Applied statistical analysis and anomaly detection techniques to identify unusual payment transactions, expense outliers, and data inconsistencies across financial systems.</li>
                                    <li>Streamlined financial and operational reporting through Excel VBA automation, reducing manual effort and improving reporting efficiency by 32%.</li>
                                    <li>Validated ETL pipelines and financial data transformations, reducing reporting discrepancies by 25%.</li>
                                    <li>Performed exploratory data analysis (EDA) on transaction and expense data to identify business risks, operational inefficiencies, and process improvement opportunities.</li>
                                    <li>Collaborated with Finance, Procurement, and Operations stakeholders to document business requirements and support process enhancements for vendor payment and expense management workflows.</li>
                                </ul>
                            </div>

                            {/* RV Global Solutions */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-background"></div>
                                <h3 className="font-bold text-lg text-foreground">RV Global Solutions</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">Analyst</span>
                                    <span className="text-sm text-muted-foreground">Feb 2021 – May 2022</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-muted-foreground space-y-2 text-sm leading-relaxed">
                                    <li>Developed predictive models and performed customer segmentation analysis using Power BI, Excel, and statistical techniques to identify high-value prospects and optimize lead generation strategies.</li>
                                    <li>Built interactive Power BI dashboards using SQL sourced data to visualize sales performance, lead funnels, customer cohorts, and conversion metrics, contributing to a 20% increase in qualified leads.</li>
                                    <li>Designed and maintained data models to forecast demand, sales trends, and inventory requirements, improving planning accuracy and operational efficiency.</li>
                                    <li>Extracted, cleaned, transformed, and analyzed large datasets using SQL, Excel Power Query, Python, and Power BI to support business intelligence initiatives and executive reporting.</li>
                                    <li>Conducted campaign performance analysis and A/B testing to evaluate lead-generation effectiveness, providing recommendations that improved conversion and engagement rates.</li>
                                </ul>
                            </div>

                            {/* Metamorphosis Edu */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-background"></div>
                                <h3 className="font-bold text-lg text-foreground">Metamorphosis Edu</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">Management Analyst</span>
                                    <span className="text-sm text-muted-foreground">Jul 2019 – Feb 2021</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-muted-foreground space-y-2 text-sm leading-relaxed">
                                    <li>Collected, cleaned, and analyzed participant, attendance, and survey data using Excel and Python to identify engagement trends and support data-driven program improvements.</li>
                                    <li>Developed interactive dashboards and reports to monitor program participation, mentor allocation, attendance metrics, and performance indicators across multiple school locations.</li>
                                    <li>Automated data consolidation and reporting processes using Excel functions and Python scripts, reducing manual effort and improving reporting accuracy.</li>
                                    <li>Performed trend and gap analysis to identify areas for program enhancement, resource optimization, and mentor utilization.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Education & Skills (1/3 width) */}
                <div className="space-y-12">
                    {/* Education */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground border-b border-border pb-2">
                            <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                            Education
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-card p-4 rounded-xl border border-border">
                                <h3 className="font-bold text-foreground">Master’s in Business Analytics</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">University of North Texas</p>
                                <p className="text-muted-foreground text-xs mt-1">Jan 2024 - Dec 2025</p>
                                <p className="text-muted-foreground text-xs mt-2 font-semibold">GPA: 3.81/4.0</p>
                            </div>
                            <div className="bg-card p-4 rounded-xl border border-border">
                                <h3 className="font-bold text-foreground">Bachelor of Business Administration</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">St. Mary’s Degree College</p>
                                <p className="text-muted-foreground text-xs mt-1">Jun 2018 - May 2021</p>
                                <p className="text-muted-foreground text-xs mt-2 font-semibold">GPA: 9.14/10</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground border-b border-border pb-2">
                            <Code className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                            Skills & Tools
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Languages/Database</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "SQL"].map(skill => (
                                        <span key={skill} className="bg-card border border-border px-2 py-1 rounded-md text-xs font-medium text-muted-foreground">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Visualization & Reporting</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Tableau", "Power BI", "Excel", "Matplotlib", "Google Data Studio", "Streamlit"].map(skill => (
                                        <span key={skill} className="bg-card border border-border px-2 py-1 rounded-md text-xs font-medium text-muted-foreground">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Business Tools & Tech</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["SAP", "QuickBooks", "ServiceNow", "Salesforce CRM workflows"].map(skill => (
                                        <span key={skill} className="bg-card border border-border px-2 py-1 rounded-md text-xs font-medium text-muted-foreground">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Project & Management</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Asana", "JIRA", "Git", "Scrum", "Agile", "Microsoft Office", "SharePoint"].map(skill => (
                                        <span key={skill} className="bg-card border border-border px-2 py-1 rounded-md text-xs font-medium text-muted-foreground">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Business Analysis</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Requirements Gathering", "BRD/FRD Creation", "User Stories", "UAT", "Gap Analysis", "Process Mapping", "Stakeholder Management", "KPI Definition", "As-Is/To-Be Analysis", "Workflow Documentation"].map(skill => (
                                        <span key={skill} className="bg-card border border-border px-2 py-1 rounded-md text-xs font-medium text-muted-foreground">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <ContactForm />
            </div>
        </div>
    );
}
