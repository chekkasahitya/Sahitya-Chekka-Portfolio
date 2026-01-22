"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Lock, Save } from "lucide-react";

export default function AdminPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        category: "Business Analyst",
        summary: "",
        tags: "",
        content: "",
    });
    const [image, setImage] = useState<File | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") { // Simple client-side check for UI toggle
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const data = new FormData();
            data.append("password", password);
            data.append("title", formData.title);
            data.append("category", formData.category);
            data.append("summary", formData.summary);
            data.append("tags", formData.tags);
            data.append("content", formData.content);
            if (image) {
                data.append("image", image);
            }

            const res = await fetch("/api/posts", {
                method: "POST",
                body: data,
            });

            if (res.ok) {
                const result = await res.json();
                setMessage(`Success! Post created at /blog/${result.slug}`);
                // Reset form
                setFormData({ title: "", category: "Business Analyst", summary: "", tags: "", content: "" });
                setImage(null);
            } else {
                const err = await res.json();
                setMessage(`Error: ${err.error}`);
            }
        } catch (error) {
            setMessage("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <form onSubmit={handleLogin} className="p-8 border rounded-xl shadow-lg bg-background max-w-sm w-full text-center">
                    <Lock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full p-3 border rounded-lg mb-4 bg-muted/20"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">
                        Access Dashboard
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8 flex items-center">
                <Upload className="mr-3 w-8 h-8 text-blue-600" />
                Create New Post
            </h1>

            {message && (
                <div className={`p-4 rounded-lg mb-6 ${message.includes("Success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        required
                        className="w-full p-3 border rounded-lg bg-background"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        className="w-full p-3 border rounded-lg bg-background"
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                    >
                        <option>Business Analyst</option>
                        <option>Data Analyst</option>
                        <option>Data Scientist</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Upload Image (Optional)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => setImage(e.target.files?.[0] || null)}
                        className="w-full p-2 border rounded-lg bg-background"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Summary</label>
                    <textarea
                        required
                        className="w-full p-3 border rounded-lg bg-background"
                        rows={2}
                        value={formData.summary}
                        onChange={e => setFormData({ ...formData, summary: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
                    <textarea
                        required
                        className="w-full p-3 border rounded-lg bg-background font-mono text-sm"
                        rows={10}
                        value={formData.content}
                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                    <input
                        className="w-full p-3 border rounded-lg bg-background"
                        placeholder="SQL, Python, Visualization"
                        value={formData.tags}
                        onChange={e => setFormData({ ...formData, tags: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white p-4 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50 flex items-center justify-center"
                >
                    {loading ? "Saving..." : <><Save className="w-5 h-5 mr-2" /> Publish Post</>}
                </button>
            </form>
        </div>
    );
}
