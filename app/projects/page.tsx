"use client";

import { projects, Project } from "@/data/projects";
import { Github, ExternalLink, FolderGit2, X, ChevronLeft, ChevronRight, GalleryHorizontal, Maximize2 } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (!selectedProject?.galleryImages) return;
        setCurrentImageIndex((prev) =>
            prev === selectedProject.galleryImages!.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        if (!selectedProject?.galleryImages) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProject.galleryImages!.length - 1 : prev - 1
        );
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Portfolio Projects</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Showcasing skills in SQL, Python, Tableau, and Machine Learning.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                        <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                            {/* Placeholder for project image if not present */}
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="text-slate-400 flex flex-col items-center">
                                    <FolderGit2 className="w-12 h-12 opacity-50 mb-2" />
                                    <span className="text-sm font-medium">Project Preview</span>
                                </div>
                            )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                                {project.galleryImages && project.galleryImages.length > 0 ? (
                                    <button
                                        onClick={() => openGallery(project)}
                                        className="flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                                    >
                                        <GalleryHorizontal className="w-4 h-4 mr-2" /> Explore
                                    </button>
                                ) : project.githubUrl ? (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                                        <Github className="w-4 h-4 mr-2" /> Code
                                    </a>
                                ) : null}

                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery Modal */}
            {selectedProject && selectedProject.galleryImages && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={closeGallery}>
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedProject.galleryImages[currentImageIndex]}
                            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain"
                        />

                        <button
                            onClick={closeGallery}
                            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {selectedProject.galleryImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {selectedProject.galleryImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
