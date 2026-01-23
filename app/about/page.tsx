import Link from "next/link";
import { Briefcase, GraduationCap, Code, MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Sahitya Chekka</h1>
                <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6 text-sm">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Denton, Texas</span>

                    <a href="mailto:Chekkasahitya@gmail.com" className="flex items-center hover:text-blue-600 transition-colors"><Mail className="w-4 h-4 mr-1" /> Chekkasahitya@gmail.com</a>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-6">
                    A data professional passionate about turning raw data into actionable business insights.
                    With a strong foundation in statistics and computer science, I specialize in building end-to-end data pipelines,
                    creating interactive dashboards, and driving business decisions through analytics.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {/* Main Content: Experience (2/3 width) */}
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 border-b pb-2">
                            <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                            Professional Experience
                        </h2>

                        <div className="space-y-10">
                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
                                <h3 className="font-bold text-lg text-slate-900">Deloitte Touche Tohmatsu</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 font-medium">Associate Analyst</span>
                                    <span className="text-sm text-slate-500">Jun 2022 - Dec 2023</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-slate-600 space-y-2 text-sm leading-relaxed">
                                    <li>Designed and maintained interactive sales performance dashboards using <strong>Tableau</strong> and <strong>Excel</strong>, enabling leadership to make real-time data-driven decisions.</li>
                                    <li>Automated reporting pipelines with <strong>Excel macros</strong> and <strong>VBA</strong>, increasing reporting efficiency by <strong>32%</strong> and accuracy by <strong>14%</strong>.</li>
                                    <li>Collaborated with cross-functional teams to define data KPIs, build business intelligence workflows, and integrate metrics into operational dashboards.</li>
                                    <li>Executed <strong>SQL queries</strong> and data wrangling tasks to extract/transform data from <strong>SAP</strong> and <strong>ServiceNow</strong>.</li>
                                    <li>Performed root cause and outlier analysis using statistical methods, delivering insights in stakeholder-ready formats.</li>
                                    <li>Partnered with data engineers to validate ETL processes, ensuring data accuracy across reporting layers.</li>
                                </ul>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                                <h3 className="font-bold text-lg text-slate-900">RV Global Solutions</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 font-medium">Analyst</span>
                                    <span className="text-sm text-slate-500">Feb 2021 – May 2022</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-slate-600 space-y-2 text-sm leading-relaxed">
                                    <li>Developed predictive models and customer segmentation analyses using <strong>Power BI</strong> and Excel-based regression tools.</li>
                                    <li>Created dynamic Power BI dashboards integrating SQL-sourced data, resulting in a <strong>20% lift</strong> in qualified leads.</li>
                                    <li>Built and deployed data models to forecast product demand and inventory flow, improving supply chain accuracy.</li>
                                    <li>Performed data cleaning and EDA using <strong>Excel Power Query</strong> and <strong>Python (Pandas, NumPy)</strong>.</li>
                                    <li>Utilized DAX functions and advanced Power BI features (bookmarks, drillthrough) for intuitive user experiences.</li>
                                    <li>Produced A/B test reports to recommend data-driven optimizations for campaigns.</li>
                                </ul>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                                <h3 className="font-bold text-lg text-slate-900">I Cake You</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 font-medium">Founder and Business Owner</span>
                                    <span className="text-sm text-slate-500">Nov 2019 – Feb 2021</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-slate-600 space-y-2 text-sm leading-relaxed">
                                    <li>Developed an internal sales dashboard using <strong>Excel</strong> and <strong>Google Data Studio</strong> to monitor KPIs.</li>
                                    <li>Used <strong>Google Analytics</strong> data to refine ad targeting, increasing sales by <strong>30%</strong> within 6 months.</li>
                                    <li>Built a simple <strong>SQLite-based CRM</strong> incorporating customer preferences for retention analysis.</li>
                                    <li>Applied time-series analysis to understand seasonal demand fluctuations.</li>
                                </ul>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                                <h3 className="font-bold text-lg text-slate-900">Metamorphosis Edu</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-600 font-medium">Management Intern</span>
                                    <span className="text-sm text-slate-500">Jul 2019 – Oct 2019</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 mt-2 text-slate-600 space-y-2 text-sm leading-relaxed">
                                    <li>Collected and analyzed participant data using Excel and basic Python scripts.</li>
                                    <li>Built interactive dashboards to track program engagement and mentor allocation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Education & Skills (1/3 width) */}
                <div className="space-y-12">
                    {/* Education */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 border-b pb-2">
                            <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                            Education
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900">Master’s in Business Analytics</h3>
                                <p className="text-blue-600 font-medium text-sm">University of North Texas</p>
                                <p className="text-slate-500 text-xs mt-1">Jan 2024 - Dec 2025</p>
                                <p className="text-slate-600 text-xs mt-2 font-semibold">GPA: 3.81/4.0</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900">Bachelor of Business Administration</h3>
                                <p className="text-blue-600 font-medium text-sm">St. Mary’s Degree College</p>
                                <p className="text-slate-500 text-xs mt-1">Jun 2018 - May 2021</p>
                                <p className="text-slate-600 text-xs mt-2 font-semibold">GPA: 9.14/10</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 border-b pb-2">
                            <Code className="w-6 h-6 mr-2 text-blue-600" />
                            Skills & Tools
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Languages & Databases</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "SQL", "PostgreSQL", "MySQL", "SQL Server", "R", "SPSS"].map(skill => (
                                        <span key={skill} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-xs font-medium text-slate-600">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Visualization & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Tableau", "Power BI", "Excel", "Pandas", "NumPy", "Matplotlib", "Databricks", "Snowflake", "Hadoop"].map(skill => (
                                        <span key={skill} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-xs font-medium text-slate-600">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Business & Design</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["SAP", "ServiceNow", "JIRA", "Git", "Agile", "Scrum", "CRM"].map(skill => (
                                        <span key={skill} className="bg-white border border-slate-200 px-2 py-1 rounded-md text-xs font-medium text-slate-600">
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
