"use client";

import { cn } from "@/lib/utils";
import React from "react";

// Sourced generic SVG paths for tech logos
const skillsData = [
    {
        name: "Python",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                <path d="M12.0004 2.25C6.38289 2.25 4.875 4.63189 4.875 7.6875V11.25H12.0004V12.75H2.625V18.1875C2.625 21.0664 4.54219 21.75 12.0004 21.75C19.4586 21.75 21.375 21.0664 21.375 18.1875V15.1875H14.25V13.6875H21.375V7.6875C21.375 4.63189 17.6179 2.25 12.0004 2.25ZM8.625 5.625C9.45341 5.625 10.125 6.29659 10.125 7.125C10.125 7.95341 9.45341 8.625 8.625 8.625C7.79659 8.625 7.125 7.95341 7.125 7.125C7.125 6.29659 7.79659 5.625 8.625 5.625ZM15.375 15.375C16.2034 15.375 16.875 16.0466 16.875 16.875C16.875 17.7034 16.2034 18.375 15.375 18.375C14.5466 18.375 13.875 17.7034 13.875 16.875C13.875 16.0466 14.5466 15.375 15.375 15.375Z" fill="#3776AB" />
            </svg>
        ),
    },
    {
        name: "SQL",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                <path d="M12 2C6.48 2 2 4.24 2 7C2 9.76 6.48 12 12 12C17.52 12 22 9.76 22 7C22 4.24 17.52 2 12 2ZM12 10.5C7.31 10.5 3.5 8.84 3.5 7C3.5 5.16 7.31 3.5 12 3.5C16.69 3.5 20.5 5.16 20.5 7C20.5 8.84 16.69 10.5 12 10.5Z" fill="#CC292B" />
                <path d="M2 9V12C2 14.76 6.48 17 12 17C17.52 17 22 14.76 22 12V9C21.05 10.42 16.92 11.5 12 11.5C7.08 11.5 2.95 10.42 2 9Z" fill="#CC292B" />
                <path d="M2 14V17C2 19.76 6.48 22 12 22C17.52 22 22 19.76 22 17V14C21.05 15.42 16.92 16.5 12 16.5C7.08 16.5 2.95 15.42 2 14Z" fill="#CC292B" />
            </svg>
        ),
    },
    {
        name: "Tableau",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                <path d="M12 6.5C10.62 6.5 9.5 5.38 9.5 4C9.5 2.62 10.62 1.5 12 1.5C13.38 1.5 14.5 2.62 14.5 4C14.5 5.38 13.38 6.5 12 6.5ZM4 14.5C2.62 14.5 1.5 13.38 1.5 12C1.5 10.62 2.62 9.5 4 9.5C5.38 9.5 6.5 10.62 6.5 12C6.5 13.38 5.38 14.5 4 14.5ZM20 14.5C18.62 14.5 17.5 13.38 17.5 12C17.5 10.62 18.62 9.5 20 9.5C21.38 9.5 22.5 10.62 22.5 12C22.5 13.38 21.38 14.5 20 14.5ZM12 22.5C10.62 22.5 9.5 21.38 9.5 20C9.5 18.62 10.62 17.5 12 17.5C13.38 17.5 14.5 18.62 14.5 20C14.5 21.38 13.38 22.5 12 22.5ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5Z" fill="#E97627" />
            </svg>
        ),
    },
    {
        name: "Power BI",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                <rect x="14" y="2" width="6" height="20" fill="#F2C811" />
                <rect x="4" y="12" width="6" height="10" fill="#E6A815" />
                <rect x="9" y="7" width="6" height="15" fill="#D38C15" />
            </svg>
        ),
    },
    {
        name: "Excel",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                <path d="M14 2H5C3.89 2 3 2.9 3 4V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V9L14 2ZM14.12 17H12.27L10.36 13.25L8.45 17H6.6L9.43 12L6.72 7H8.57L10.36 10.75L12.15 7H14L11.28 12L14.12 17Z" fill="#1D6F42" />
            </svg>
        ),
    },
    {
        name: "Snowflake",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                <path d="M12 2L14 6H10L12 2Z" fill="#29B5E8" />
                <path d="M22 6L18 8V4L22 6Z" fill="#29B5E8" />
                <path d="M22 18L18 16V20L22 18Z" fill="#29B5E8" />
                <path d="M12 22L10 18H14L12 22Z" fill="#29B5E8" />
                <path d="M2 18L6 16V20L2 18Z" fill="#29B5E8" />
                <path d="M2 6L6 8V4L2 6Z" fill="#29B5E8" />
                <circle cx="12" cy="12" r="4" fill="#29B5E8" />
            </svg>
        ),
    },
    {
        name: "Machine Learning",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 mb-2 border-2 border-primary rounded-md p-1">
                <rect x="4" y="4" width="16" height="16" stroke="#0ea5e9" strokeWidth="2" fill="none" rx="2" />
                <circle cx="8" cy="8" r="2" fill="#0ea5e9" />
                <circle cx="16" cy="16" r="2" fill="#0ea5e9" />
                <line x1="10" y1="10" x2="14" y2="14" stroke="#0ea5e9" strokeWidth="2" />
            </svg>
        )
    }
];

export function SkillsMarquee() {
    return (
        <div id="skills" className="w-full bg-background py-16 scroll-mt-48 overflow-hidden relative flex flex-col items-center">
            {/* Title with lines */}
            <div className="w-full max-w-4xl mx-auto flex items-center justify-center mb-12 px-4">
                <div className="flex-grow h-px bg-border max-w-[200px]" />
                <div className="mx-4 bg-white dark:bg-[#333333] border border-border text-foreground px-6 py-2 rounded-md font-medium tracking-wide shadow-sm">
                    Skills
                </div>
                <div className="flex-grow h-px bg-border max-w-[200px]" />
            </div>

            <div className="w-full relative py-4">
                <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6">
                    {/* Render two sets of skills to ensure smooth infinite looping */}
                    {[...skillsData, ...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col items-center justify-center p-6 rounded-lg",
                                "bg-white dark:bg-[#2d2f33] border border-border text-foreground shadow-sm",
                                "min-w-[140px] aspect-square transition-all hover:scale-105 hover:shadow-md"
                            )}
                        >
                            {skill.icon}
                            <span className="font-medium text-sm md:text-base mt-2">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
