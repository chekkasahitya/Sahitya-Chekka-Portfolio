"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className={cn(
                    "p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                    className
                )}
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 text-slate-500" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
                "p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                className
            )}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Moon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            ) : (
                <Sun className="h-5 w-5 text-slate-500" />
            )}
        </button>
    );
}
