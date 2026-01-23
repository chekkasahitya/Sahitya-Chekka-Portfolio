"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const FORMSPREE_ID = "xeealzgd";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                // Optional: Clear form here if needed, but we are showing success screen
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in duration-500">
                <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800 underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 transform translate-x-2 translate-y-2 rounded-3xl -z-10"></div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h2>
                    <p className="text-slate-600">
                        Have a project in mind or want to discuss data opportunities?
                        Fill out the form below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-600/25 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-4">
                        Powered by Formspree
                    </p>
                </form>
            </div>
        </div>
    );
}
