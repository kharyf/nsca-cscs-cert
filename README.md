# CSCS Practice Exam

A local, single-page practice exam for the NSCA Certified Strength and Conditioning Specialist (CSCS) certification. Built as original content matched to the official CSCS Detailed Content Outline (DCO), effective July 1, 2025.

## Features

- **660 original practice questions across three full-length exams** — Exam 1 (95 Scientific Foundations + 125 Practical/Applied, standard difficulty), Exam 2 (95 + 125, expert-level difficulty), and Exam 3 (95 + 125, hardest — see below), each in the same 3-option single-best-answer format matching the real CSCS exam style
- **Exam selector**: choose Exam 1 (standard), Exam 2 (advanced — heavily Application/Analysis items with tightly-clustered, closely related answer options that only strong domain knowledge can reliably distinguish), or Exam 3 (expert — pushes the same levers further: an even higher share of Analysis-level items, more multi-step scenarios that combine two DCO subareas per question, "least accurate / the exception" framing, and calculation items (Karvonen/HRR, volume-load/tonnage). Exam 3 also adds dedicated coverage for DCO areas Exam 1/2 never gave their own topic — e.g. individual/biological differences (age, training age, sex), the PICOT research framework, and evidence-based vs. fad body-composition approaches — in place of some of the most-repeated topics from Exam 1/2
- **Three practice modes per exam**: Full Exam (both sections back-to-back), Scientific Foundations only, or Practical/Applied only
- **Live per-section countdown timer** that auto-submits when time runs out
- **Independent pass/fail per section** at a 67.5% passing line, matching how the real exam gates both sections separately
- **Itemized results**: score by DCO domain (e.g., Exercise Sciences, Program Design) and by cognitive level (Recall / Application / Analysis)
- **Review mode**: revisit every question after submitting, with the correct answer highlighted and an explanation shown
- **Retake** any time, no data leaves your machine

## Running it

No build step — this is plain HTML/CSS/JS with the question bank embedded as static data files.

**Option 1: Just open it**
Double-click `index.html`. It runs entirely client-side with no server required.

**Option 2: Dev server with live-reload**
```bash
npm install
npm run dev
```
Serves the app at `http://localhost:3000` and opens it in your browser; edits to any file auto-refresh the page.

## Project structure

```
index.html      Screens: welcome, quiz, results, about
index.css        Design system and styling (dark theme)
app.js           Quiz engine: timers, exams, sections, scoring, results rendering
data/
  scientific-foundations-questions.js     95 questions (Exam 1 — Exercise Sciences, Sport Psychology, Nutrition)
  practical-applied-questions.js          125 questions (Exam 1 — Program Design, Exercise Technique,
                                            Program Implementation, Organization and Administration)
  scientific-foundations-2-questions.js   95 questions (Exam 2, advanced — same domains as Exam 1)
  practical-applied-2-questions.js        125 questions (Exam 2, advanced — same domains as Exam 1)
  scientific-foundations-3-questions.js   95 questions (Exam 3, expert — same domains, hardest difficulty)
  practical-applied-3-questions.js        125 questions (Exam 3, expert — same domains, hardest difficulty)
certified-strength-and-conditioning-specialist-job-task-analysis-summary-2025.pdf
                 Source CSCS Detailed Content Outline the question bank is built from
```

Each question object carries `domain`, `topic`, and `cognitiveLevel` fields, which is what drives the itemized results breakdown — same schema across all six data files, see any file in `data/` for the fields.

## Disclaimer

This is an independent study tool, not affiliated with, endorsed by, or produced by the National Strength and Conditioning Association (NSCA). "CSCS" and "NSCA" are marks of their respective owner. All questions are original practice content, not real exam items, and the 67.5% passing threshold is a study benchmark chosen for this tool, not an official published NSCA cut score. Completing this practice exam does not guarantee success on the real CSCS examination.
