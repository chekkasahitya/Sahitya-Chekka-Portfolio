# How to Post and Manage Your Blog

## 1. Creating a New Post (Easy Method)
I have created a helper script to make this easy.

1.  Open your terminal in the project folder.
2.  Run: `node new-post.js`
3.  Answer the questions (Title, Category, etc.).
4.  The script will generate a new Markdown file in the `posts/` folder.
5.  Open that file and write your article!

## 2. Creating a New Post (Manual Method)
1.  Create a new file in the `posts/` folder ending in `.md` (e.g., `my-new-analysis.md`).
2.  Paste the following "Frontmatter" at the top:

```yaml
---
title: 'My Awesome Analysis'
date: '2025-06-20'
summary: 'A short description of what this post is about.'
category: 'Data Analyst'
tags: ['SQL', 'Python']
---
```

3.  Write your content below the second `---` using Markdown.

## 3. Adding Images
1.  Place your image file in the `public/images/` folder. (Create the folder if it doesn't exist).
2.  In your markdown file, link to it like this:
    `![Alt Text](/images/my-chart.png)`

## 4. Updates
- To update your **Projects**, edit `data/projects.ts`.
- To update your **About** info, edit `app/about/page.tsx`.
