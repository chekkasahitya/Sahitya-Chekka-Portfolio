import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        // 1. Password Check
        const password = formData.get("password");
        if (password !== process.env.ADMIN_PASSWORD && password !== "admin123") { // Default fallback
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const summary = formData.get("summary") as string;
        const content = formData.get("content") as string;
        const tags = formData.get("tags") as string;
        const image = formData.get("image") as File | null;

        if (!title || !category || !content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 2. Handle Image Upload
        let imagePath = "";
        if (image) {
            const buffer = Buffer.from(await image.arrayBuffer());
            const imageName = image.name.replace(/[^a-zA-Z0-9.-]/g, ""); // Sanitize
            const uploadDir = path.join(process.cwd(), "public", "images");

            if (!fs.existsSync(uploadDir)) {
                await mkdir(uploadDir, { recursive: true });
            }

            await writeFile(path.join(uploadDir, imageName), buffer);
            imagePath = `/images/${imageName}`;
        }

        // 3. Create Markdown File
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const date = new Date().toISOString().split('T')[0];
        const tagsArray = tags ? tags.split(',').map(t => `'${t.trim()}'`).join(', ') : '';

        const fileContent = `---
title: '${title}'
date: '${date}'
summary: '${summary || ""}'
category: '${category}'
tags: [${tagsArray}]
image: '${imagePath}'
---

${content}
`;

        const postsDir = path.join(process.cwd(), 'posts');
        if (!fs.existsSync(postsDir)) {
            await mkdir(postsDir);
        }

        await writeFile(path.join(postsDir, `${slug}.md`), fileContent);

        return NextResponse.json({ success: true, slug });

    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
