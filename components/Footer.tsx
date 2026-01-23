import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-muted/20 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Data Career Blog. All rights reserved.
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="https://github.com/chekkasahitya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sahitya-chekka/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}
