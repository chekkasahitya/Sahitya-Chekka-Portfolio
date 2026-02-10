---
title: 'Lying with Statistics: How to Avoid Misleading Analysis'
date: '2026-02-10'
summary: 'Data never lies, but charts often do. From Simpson''s Paradox to p-hacking, learn how to spot (and avoid) clear but misleading analysis.'
category: 'Data Analyst'
tags: ['Statistics', 'Data Literacy', 'Critical Thinking', 'Analysis']
---

> "There are three kinds of lies: lies, damned lies, and statistics." — Mark Twain (attributed)

As Data Analysts, we are the gatekeepers of truth. But it's terrifyingly easy to accidentally tell a lie with technically correct data.

You don't need to falsify numbers to mislead. You just need to choose the wrong context, the wrong scale, or the wrong aggregation.

## 1. Simpson's Paradox: The Aggregation Trap

Imagine a university is sued for gender bias. The data shows that 45% of male applicants were admitted, but only 35% of female applicants. Clear evidence of bias, right?

Not necessarily.

When you look at individual departments:
*   Engineering accepted 50% of women and 40% of men. (Women favored)
*   Humanities accepted 30% of women and 20% of men. (Women favored)

Wait, how can women be favored in *every* department but disadvantaged overall?

**Answer:** Women applied heavily to Humanities (which has a lower overall acceptance rate), while men applied heavily to Engineering (which has a higher rate).

**The Lesson:** Always check if the trend holds when you break the data down by subgroups. Aggregation can hide the truth.

## 2. Spurious Correlations

Did you know that the number of people who drowned in swimming pools correlates 99% with the number of films Nicolas Cage appeared in that year?

If you put that on a line chart, it looks like irrefutable proof. But obviously, one doesn't cause the other.

**The Lesson:** Correlation is not Causation. Just because two lines move together doesn't mean they are related.

## 3. The Axis of Evil (Truncated Y-Axis)

If you want to make a 1% growth look like a massive boom, just start your Y-axis at 98 instead of 0. A bar at 99 will look twice as big as a bar at 98.

This is a favorite trick of cable news and misleading marketing.

**The Lesson:** Always look at the scale. If the axis doesn't start at zero, ask yourself: "What story are they trying to push?"

## Be the Skeptic

Your job isn't to just "pull the numbers." Your job is to **interrogate** them.

*   Is the data complete?
*   Is the sample biased?
*   Does the visual representation distort the magnitude?

If you don't catch these lies, your stakeholders will make decisions based on illusions. And that's on you.
