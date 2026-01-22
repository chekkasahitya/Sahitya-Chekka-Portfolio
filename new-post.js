const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const postsDir = path.join(__dirname, 'posts');

if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir);
}

console.log("Create a New Blog Post");
console.log("----------------------");

rl.question('Title: ', (title) => {
    rl.question('Date (YYYY-MM-DD): ', (date) => {
        rl.question('Summary: ', (summary) => {
            rl.question('Category (Business Analyst / Data Analyst / Data Scientist): ', (category) => {
                rl.question('Tags (comma separated): ', (tags) => {

                    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    const filePath = path.join(postsDir, `${slug}.md`);

                    const fileContent = `---
title: '${title}'
date: '${date || new Date().toISOString().split('T')[0]}'
summary: '${summary}'
category: '${category}'
tags: [${tags.split(',').map(t => `'${t.trim()}'`).join(', ')}]
---

## Introduction

Write your content here...
`;

                    fs.writeFileSync(filePath, fileContent);
                    console.log(`\nSuccess! Post created at: posts/${slug}.md`);
                    console.log(`Don't forget to run 'npm run dev' to see your new post.`);
                    rl.close();
                });
            });
        });
    });
});
