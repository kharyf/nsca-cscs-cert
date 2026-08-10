# Exam 3 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a third, hardest-yet practice exam (95 Scientific Foundations + 125 Practical/Applied questions) to the CSCS Practice Exam app, covering DCO areas Exam 1/2 never gave a dedicated topic to, and wire it into the app as `exam3`.

**Architecture:** Two new static data files (`data/scientific-foundations-3-questions.js`, `data/practical-applied-3-questions.js`) with the exact same schema as the existing four data files, generated as seven independent per-domain content chunks (parallelizable — no shared state), then assembled, validated by script, and wired into `app.js` / `index.html` / `README.md`.

**Tech Stack:** Plain JS data files (`const X = [...]`), no build step, Node.js only for the one-off validation script.

## Global Constraints

- Question object schema (verbatim, matches all four existing `data/*.js` files):
  ```json
  {
    "id": "SF3-EX-001",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Recall",
    "text": "...",
    "options": [
      {"letter": "A", "text": "..."},
      {"letter": "B", "text": "..."},
      {"letter": "C", "text": "..."}
    ],
    "correctAnswer": "B",
    "explanation": "..."
  }
  ```
- Exactly 3 options per question, lettered A/B/C, `cognitiveLevel` is one of `Recall`/`Application`/`Analysis`.
- `section` is `"scientific-foundations"` for SF-domain files, `"practical-applied"` for PA-domain files.
- `domain` must be exactly one of: `Exercise Sciences`, `Sport Psychology`, `Nutrition` (SF) or `Program Design`, `Exercise Technique`, `Program Implementation`, `Organization and Administration` (PA) — these strings are read directly by `app.js` for the results breakdown, so they must match exactly (case-sensitive).
- Source of truth for content accuracy: `certified-strength-and-conditioning-specialist-job-task-analysis-summary-2025.pdf` (the CSCS DCO) in the repo root.
- Difficulty calibration: read the matching domain's questions in `data/scientific-foundations-2-questions.js` / `data/practical-applied-2-questions.js` (Exam 2) first — Exam 3 must be noticeably harder than those: more multi-step scenario stems that combine two DCO subareas, more "which is *least* accurate / the one exception" framing, and even more tightly-clustered, plausible distractors. Never invent a fact not supportable by the DCO or well-established CSCS-level exercise science/programming knowledge.
- Every explanation must state why the correct answer is right AND briefly why each of the other two options is wrong (matching the existing files' style, e.g. `data/scientific-foundations-questions.js:25`).
- No two questions may share an `id`. No two questions in the same chunk may be near-duplicates of each other or of an existing Exam 1/2/3 question on the same narrow fact.
- Each content task's output is a **raw JSON array** (not a `const X = [...]` statement) written to the exact scratch path given in that task, so it can be assembled and validated programmatically before being embedded in the final `const` files.

---

## Content Tasks (independent — safe to run in parallel)

Each task below is self-contained: exact topic list with exact per-topic question counts, exact cognitive-level totals, exact correct-answer-letter totals, and exact id range. The counts in each table **must sum exactly** to the stated total and must be hit exactly — this is a deterministic authoring constraint, not a suggestion.

### Task 1: Scientific Foundations — Exercise Sciences (57 questions)

**Files:**
- Create: `scratch/sf3-ex.json` (raw JSON array, 57 objects)

**Domain:** `Exercise Sciences` | **Section:** `scientific-foundations` | **ID range:** `SF3-EX-001` .. `SF3-EX-057`

**Topics (kept, trimmed from Exam 1/2's list — write genuinely new questions, don't reuse Exam 1/2 stems):**
| Topic | Count |
|---|---|
| Muscle Physiology | 5 |
| Neuromuscular Physiology | 5 |
| Biomechanics | 6 |
| Bone & Connective Tissue | 4 |
| Bioenergetics | 5 |
| Cardiopulmonary | 5 |
| Neuroendocrine | 4 |
| Physiological Adaptations | 5 |
| Integrated Physiology | 4 |
| Research & Statistics | 4 |

**New topics (gap coverage — DCO areas Exam 1/2 never gave a dedicated topic; see DCO PDF page 2-3, section 1):**
| Topic | Count | DCO anchor |
|---|---|---|
| Individual & Biological Differences | 4 | The "individual differences among various types of athletes (biological age, training age, biological sex)" subtask repeated across DCO 1.A.3, 1.B.3, 1.C.4, 1.D.3, 1.E.3, 1.F.3, 1.G.3 — never its own topic in Exam 1/2. Write items that hinge specifically on how a training/physiological response *differs* by biological age, training age, or biological sex. |
| Research Design & PICOT | 3 | DCO 1.J.2: the PICOT framework (Population, Intervention, Comparison, Outcome, Time) for research questions, plus 1.J.1/1.J.3 research design and reliability/validity. At least 1 question must require correctly identifying/applying a PICOT component. |
| Force-Velocity & Force-Time Relationships | 3 | DCO 1.C.2's named kinetic concepts (force-velocity curve, force-time curve, impulse, rate of force development, isometric/isotonic/isokinetic) — deeper than the general Biomechanics topic above. |

**Cognitive level totals (must sum to 57):** Recall 3, Application 19, Analysis 35.
**Correct-answer letter totals (must sum to 57):** A 19, B 19, C 19.

- [ ] Write all 57 questions to `scratch/sf3-ex.json` per the tables above.
- [ ] Self-check before finishing: count objects (57), count per topic, per cognitiveLevel, per correctAnswer — every count must match the tables exactly. Fix any mismatch before writing the file.

---

### Task 2: Scientific Foundations — Sport Psychology (24 questions)

**Files:**
- Create: `scratch/sf3-sp.json` (raw JSON array, 24 objects)

**Domain:** `Sport Psychology` | **Section:** `scientific-foundations` | **ID range:** `SF3-SP-001` .. `SF3-SP-024`

**Topics (kept, trimmed):**
| Topic | Count |
|---|---|
| Mental Skills | 4 |
| Motivational Theories | 2 |
| Psychophysiological Alignment | 2 |
| Coach-Athlete Relationship | 1 |
| Team Dynamics and Cohesion | 1 |
| Leadership Styles | 1 |
| Athlete Identity and Referral | 1 |
| Career Transition | 1 |
| Psychological Impact of Injury | 1 |
| Mental Health Signs and Symptoms | 1 |
| Mental Health Referral | 1 |
| Eating Disorders | 2 |
| Overtraining and Referral | 1 |

**New topics (see DCO PDF page 4, section 2):**
| Topic | Count | DCO anchor |
|---|---|---|
| Goal-Setting & Self-Determination Nuance | 2 | DCO 2.A.1 motivational theories — go deeper than the general Motivational Theories topic: specifically self-determination theory's autonomy/competence/relatedness, goal-orientation (mastery vs. performance), and achievement-motivation edge cases. |
| Referral Thresholds Across Domains | 3 | DCO 2.B (1-3) all say "...and know when to refer." Write scenario items that test the *precise line* between "monitor/support in-role" and "refer out" across injury psychological impact, general mental health signs, and eating disorders — the distractors should be adjacent points on that same continuum, not obviously wrong. |

**Cognitive level totals (must sum to 24):** Recall 1, Application 8, Analysis 15.
**Correct-answer letter totals (must sum to 24):** A 8, B 8, C 8.

- [ ] Write all 24 questions to `scratch/sf3-sp.json` per the tables above.
- [ ] Self-check counts (total, per topic, per cognitiveLevel, per correctAnswer) before finishing.

---

### Task 3: Scientific Foundations — Nutrition (14 questions)

**Files:**
- Create: `scratch/sf3-nu.json` (raw JSON array, 14 objects)

**Domain:** `Nutrition` | **Section:** `scientific-foundations` | **ID range:** `SF3-NU-001` .. `SF3-NU-014`

**Topics (kept, trimmed):**
| Topic | Count |
|---|---|
| Macronutrients | 1 |
| Protein Needs | 1 |
| Carbohydrate Needs | 1 |
| Hydration | 1 |
| Energy Balance | 1 |
| Body Composition | 1 |
| Supplement Regulation | 1 |
| Supplement Safety | 1 |
| Third-Party Testing | 1 |
| Alcohol & Drugs | 1 |
| Nutrition Scope of Practice & Referral | 1 |

**New topics (see DCO PDF page 4, section 3):**
| Topic | Count | DCO anchor |
|---|---|---|
| Evidence-Based vs. Fad Approaches | 2 | DCO 3.A.4 explicitly names "Plate approach vs fad diets." Write items requiring the reader to distinguish a genuinely evidence-based body-composition approach from a superficially plausible but unsupported one. |
| Macronutrient Timing for Performance | 1 | DCO 3.A.2's "macronutrient timing and quality" — peri-workout timing specifically, distinct from the general Macronutrients topic above. |

**Cognitive level totals (must sum to 14):** Recall 1, Application 4, Analysis 9.
**Correct-answer letter totals (must sum to 14):** A 5, B 5, C 4.

- [ ] Write all 14 questions to `scratch/sf3-nu.json` per the tables above.
- [ ] Self-check counts before finishing.

---

### Task 4: Practical/Applied — Program Design (50 questions)

**Files:**
- Create: `scratch/pa3-pd.json` (raw JSON array, 50 objects)

**Domain:** `Program Design` | **Section:** `practical-applied` | **ID range:** `PA3-PD-001` .. `PA3-PD-050`

**Topics (kept, trimmed):**
| Topic | Count |
|---|---|
| Needs Analysis | 5 |
| Training Methods | 5 |
| Exercise Selection | 4 |
| Exercise Order | 4 |
| Load Assignment | 4 |
| Training Volume | 3 |
| Work:Rest & Recovery | 4 |
| Progression | 3 |
| Periodization | 4 |
| Return to Play | 3 |

**New topics (see DCO PDF page 5-6, section 1):**
| Topic | Count | DCO anchor |
|---|---|---|
| Volume-Load & Tonnage Calculations | 4 | DCO 1.F defines training volume as "sets x reps." Write items that force the reader to distinguish volume (sets x reps) from volume-load/tonnage (sets x reps x load) and from 1RM-based intensity — a classic definitional trap, including at least 2 items requiring an actual numeric calculation. |
| Karvonen/HRR Load Prescription | 3 | DCO 1.E.2 names the Karvonen method for metabolic (internal) load. At least 2 items must require calculating a heart-rate-reserve target using the Karvonen formula (HRR = HRmax - HRrest; Target HR = (HRR x %intensity) + HRrest) from given numbers. |
| Interdisciplinary Return-to-Play Collaboration | 2 | DCO 1.J: designing programs during injury/reconditioning/return-to-play "in collaboration with the interdisciplinary team" — go beyond the general Return to Play topic above to test scope-of-collaboration judgment (what the CSCS decides vs. defers to the medical team). |
| Stakeholder Communication of Program Rationale | 2 | DCO 1.K: communicating program goals, design, and expected outcomes to stakeholders — scenario items about *how/what* to communicate to an athlete, coach, or parent, not just program-design mechanics. |

**Cognitive level totals (must sum to 50):** Recall 2, Application 17, Analysis 31.
**Correct-answer letter totals (must sum to 50):** A 17, B 17, C 16.

- [ ] Write all 50 questions to `scratch/pa3-pd.json` per the tables above.
- [ ] Self-check counts before finishing.

---

### Task 5: Practical/Applied — Exercise Technique (32 questions)

**Files:**
- Create: `scratch/pa3-et.json` (raw JSON array, 32 objects)

**Domain:** `Exercise Technique` | **Section:** `practical-applied` | **ID range:** `PA3-ET-001` .. `PA3-ET-032`

**Topics (kept, trimmed):**
| Topic | Count |
|---|---|
| Free Weight Technique | 5 |
| Machine Technique | 2 |
| Alternative Equipment | 3 |
| Olympic Lift Derivatives | 4 |
| Movement Preparation | 2 |
| Speed & Agility | 3 |
| Plyometrics | 3 |
| Energy System Development | 2 |
| Restoration Techniques | 2 |

**New topics (see DCO PDF page 6-7, section 2):**
| Topic | Count | DCO anchor |
|---|---|---|
| Safety Protocols for Alternative/Olympic Equipment | 3 | DCO 2.B.3.b/2.B.4.b: equipment-specific safety/setup protocol (sleds, flywheels, sandbags, Olympic-lift derivatives) — go deeper than the general technique topics above, focused specifically on *what could go wrong* and how to prevent it for less-common equipment. |
| Cueing & Modification Based on Arousal/Competency | 3 | The DCO's recurring "assess, cue, and modify based on arousal, focus, competency, and safety" subtask (2.A.2, 2.B.1.c, 2.B.2.c, etc.) — write scenario items about choosing the right cue or modification for a specific athlete state, not just naming correct technique. |

**Cognitive level totals (must sum to 32):** Recall 1, Application 11, Analysis 20.
**Correct-answer letter totals (must sum to 32):** A 11, B 11, C 10.

- [ ] Write all 32 questions to `scratch/pa3-et.json` per the tables above.
- [ ] Self-check counts before finishing.

---

### Task 6: Practical/Applied — Program Implementation (25 questions)

**Files:**
- Create: `scratch/pa3-pi.json` (raw JSON array, 25 objects)

**Domain:** `Program Implementation` | **Section:** `practical-applied` | **ID range:** `PA3-PI-001` .. `PA3-PI-025`

**Topics (kept, trimmed):**
| Topic | Count |
|---|---|
| Coaching Sessions | 2 |
| Coaching Debrief | 2 |
| Feedback & Observation | 2 |
| Motor Learning | 3 |
| Testing Protocols | 4 |
| Monitoring & Readiness | 2 |
| Data Interpretation | 2 |
| Test Validity | 3 |

**New topics (see DCO PDF page 7-8, section 3):**
| Topic | Count | DCO anchor |
|---|---|---|
| Session Preparation & Role Definition | 3 | DCO 3.A.1 (new in the 2025 DCO): "prepare for sessions, define roles and responsibilities, set expectations" — this whole task is new to the DCO and under-tested; write items specifically about pre-session planning and role/expectation-setting, distinct from in-session coaching (Coaching Sessions topic above). |
| Communicating Results While Maintaining Privacy | 2 | DCO 3.C.3: "synthesize, communicate, and discuss results with stakeholders while maintaining information privacy" — scenario items where the correct answer requires balancing transparency with an athlete's data privacy. |

**Cognitive level totals (must sum to 25):** Recall 1, Application 9, Analysis 15.
**Correct-answer letter totals (must sum to 25):** A 8, B 8, C 9.

- [ ] Write all 25 questions to `scratch/pa3-pi.json` per the tables above.
- [ ] Self-check counts before finishing.

---

### Task 7: Practical/Applied — Organization and Administration (18 questions)

**Files:**
- Create: `scratch/pa3-oa.json` (raw JSON array, 18 objects)

**Domain:** `Organization and Administration` | **Section:** `practical-applied` | **ID range:** `PA3-OA-001` .. `PA3-OA-018`

**Topics (kept, trimmed):**
| Topic | Count |
|---|---|
| Scope of Practice | 3 |
| Facility Safety | 2 |
| Liability & Risk | 3 |
| Overtraining & Heat Illness | 4 |
| Emergency Procedures | 2 |

**New topics (see DCO PDF page 8, section 4):**
| Topic | Count | DCO anchor |
|---|---|---|
| NSCA Codes & Interprofessional Collaboration | 2 | DCO 4.A: working within scope "following the NSCA Codes, Policies, and Procedures, collaborat[ing] with allied health professionals" — go beyond the general Scope of Practice topic to test specific ethical/collaboration judgment calls (e.g., a physician's order conflicting with a coach's request). |
| Facility Policy & Scheduling Judgment | 2 | DCO 4.B: facility/equipment maintenance, staff responsibilities, scheduling — administrative judgment scenarios distinct from the physical Facility Safety topic above. |

**Cognitive level totals (must sum to 18):** Recall 1, Application 5, Analysis 12.
**Correct-answer letter totals (must sum to 18):** A 6, B 6, C 6.

- [ ] Write all 18 questions to `scratch/pa3-oa.json` per the tables above.
- [ ] Self-check counts before finishing.

---

## Integration Tasks (sequential — after all 7 content tasks are done)

### Task 8: Validate and assemble the two final data files

**Files:**
- Create: `scratch/validate-and-assemble.js` (throwaway Node script, not committed)
- Create: `data/scientific-foundations-3-questions.js`
- Create: `data/practical-applied-3-questions.js`

**Interfaces:**
- Consumes: the 7 raw JSON arrays from Tasks 1-7 at their exact scratch paths.
- Produces: `SF3_QUESTIONS` (95 objects) and `PA3_QUESTIONS` (125 objects) as `const` exports, same file format as e.g. `data/scientific-foundations-2-questions.js:1-2`.

- [ ] **Step 1: Write the validation/assembly script**

```js
// scratch/validate-and-assemble.js
const fs = require('fs');
const path = require('path');

function load(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const sfChunks = [
  ['scratch/sf3-ex.json', 'Exercise Sciences', 57],
  ['scratch/sf3-sp.json', 'Sport Psychology', 24],
  ['scratch/sf3-nu.json', 'Nutrition', 14],
];
const paChunks = [
  ['scratch/pa3-pd.json', 'Program Design', 50],
  ['scratch/pa3-et.json', 'Exercise Technique', 32],
  ['scratch/pa3-pi.json', 'Program Implementation', 25],
  ['scratch/pa3-oa.json', 'Organization and Administration', 18],
];

function validateChunk(file, expectedDomain, expectedCount) {
  const arr = load(file);
  const errors = [];
  if (arr.length !== expectedCount) errors.push(`${file}: expected ${expectedCount} questions, got ${arr.length}`);
  arr.forEach((q, i) => {
    if (q.domain !== expectedDomain) errors.push(`${file}[${i}] (${q.id}): domain "${q.domain}" !== "${expectedDomain}"`);
    if (!Array.isArray(q.options) || q.options.length !== 3) errors.push(`${file}[${i}] (${q.id}): must have exactly 3 options`);
    const letters = (q.options || []).map(o => o.letter).sort().join('');
    if (letters !== 'ABC') errors.push(`${file}[${i}] (${q.id}): option letters must be A,B,C, got ${letters}`);
    if (!['A', 'B', 'C'].includes(q.correctAnswer)) errors.push(`${file}[${i}] (${q.id}): invalid correctAnswer "${q.correctAnswer}"`);
    if (!['Recall', 'Application', 'Analysis'].includes(q.cognitiveLevel)) errors.push(`${file}[${i}] (${q.id}): invalid cognitiveLevel "${q.cognitiveLevel}"`);
    if (!q.text || !q.explanation || !q.topic || !q.id) errors.push(`${file}[${i}]: missing required field`);
  });
  return { arr, errors };
}

function summarize(label, arr) {
  const byCog = {};
  const byLetter = {};
  const byTopic = {};
  const ids = new Set();
  const dupes = [];
  arr.forEach(q => {
    byCog[q.cognitiveLevel] = (byCog[q.cognitiveLevel] || 0) + 1;
    byLetter[q.correctAnswer] = (byLetter[q.correctAnswer] || 0) + 1;
    byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
    if (ids.has(q.id)) dupes.push(q.id);
    ids.add(q.id);
  });
  console.log(`\n=== ${label} (${arr.length} questions) ===`);
  console.log('cognitiveLevel:', byCog);
  console.log('correctAnswer:', byLetter);
  console.log('topics:', byTopic);
  if (dupes.length) console.log('DUPLICATE IDS:', dupes);
}

let allErrors = [];
const sfArr = [];
sfChunks.forEach(([file, domain, count]) => {
  const { arr, errors } = validateChunk(file, domain, count);
  allErrors = allErrors.concat(errors);
  sfArr.push(...arr);
});
const paArr = [];
paChunks.forEach(([file, domain, count]) => {
  const { arr, errors } = validateChunk(file, domain, count);
  allErrors = allErrors.concat(errors);
  paArr.push(...arr);
});

if (allErrors.length) {
  console.error('VALIDATION ERRORS:');
  allErrors.forEach(e => console.error(' -', e));
  process.exit(1);
}

summarize('Scientific Foundations 3', sfArr);
summarize('Practical/Applied 3', paArr);

if (sfArr.length !== 95) { console.error(`SF total ${sfArr.length} !== 95`); process.exit(1); }
if (paArr.length !== 125) { console.error(`PA total ${paArr.length} !== 125`); process.exit(1); }

const sfOut = `// Auto-generated CSCS practice question bank (Exam 3). Do not hand-edit.\nconst SF3_QUESTIONS = ${JSON.stringify(sfArr, null, 2)};\n`;
const paOut = `// Auto-generated CSCS practice question bank (Exam 3). Do not hand-edit.\nconst PA3_QUESTIONS = ${JSON.stringify(paArr, null, 2)};\n`;

fs.writeFileSync('data/scientific-foundations-3-questions.js', sfOut);
fs.writeFileSync('data/practical-applied-3-questions.js', paOut);
console.log('\nWrote data/scientific-foundations-3-questions.js and data/practical-applied-3-questions.js');
```

- [ ] **Step 2: Run it from the repo root**

Run: `node scratch/validate-and-assemble.js`
Expected: prints the two summaries with per-domain/topic/cognitiveLevel/correctAnswer breakdowns, no `VALIDATION ERRORS`, no `DUPLICATE IDS`, and confirms both files were written. If any count doesn't match the plan's tables, fix the offending chunk file directly (not the script) and re-run.

- [ ] **Step 3: Spot-check content quality**

Read 5-10 questions spread across both new files directly (not just the summary counts) and confirm: explanations address all 3 options, no two questions are near-duplicates, distractors are plausible rather than silly, and at least one Karvonen calculation question and one PICOT question are present and correct.

---

### Task 9: Wire Exam 3 into the app

**Files:**
- Modify: `app.js:11-42` (the `EXAMS` object)
- Modify: `index.html` (exam bank `<select>`, find via the existing `examBankSelect`/`exam2` option)
- Modify: `README.md:3-46`

**Interfaces:**
- Consumes: `SF3_QUESTIONS` and `PA3_QUESTIONS` globals from the two new `data/*.js` files (loaded as `<script>` tags, matching how `SF2_QUESTIONS`/`PA2_QUESTIONS` are already loaded).

- [ ] **Step 1: Add script tags for the new data files**

Find where `data/scientific-foundations-2-questions.js` and `data/practical-applied-2-questions.js` are `<script src="...">`-included in `index.html` and add two more lines immediately after them for the exam 3 files, before `app.js`'s own `<script>` tag (script order matters — `app.js` reads the globals at `EXAMS` object construction time... actually `EXAMS` uses getters so load order relative to `app.js` doesn't matter, but the data files must load before the getters are invoked, i.e. before `app.js` runs).

- [ ] **Step 2: Add the `exam3` entry to `EXAMS` in `app.js`**

```js
    exam3: {
        title: 'Exam 3 (Expert)',
        sections: {
            'scientific-foundations': {
                title: 'Scientific Foundations',
                domains: ['Exercise Sciences', 'Sport Psychology', 'Nutrition'],
                get questions() { return SF3_QUESTIONS; }
            },
            'practical-applied': {
                title: 'Practical/Applied',
                domains: ['Program Design', 'Exercise Technique', 'Program Implementation', 'Organization and Administration'],
                get questions() { return PA3_QUESTIONS; }
            }
        }
    }
```

Insert this as a third key in the `EXAMS` object (after `exam2`), matching its exact structure.

- [ ] **Step 3: Add the Exam 3 option to the exam bank selector in `index.html`**

Find the `<select id="examBankSelect">` element and its `exam2` `<option>`, add a matching `<option value="exam3">Exam 3 (Expert)</option>` after it.

- [ ] **Step 4: Update `README.md`**

Update the features list (`README.md:7-8`) and project structure section (`README.md:36-44`) to describe Exam 3 the same way Exam 1/2 are described — 660 total questions across three exams, Exam 3 described as harder than Exam 2 with the specific escalation (heavier Analysis-level weighting, more multi-step scenario stems, calculation items). List the two new data files in the project structure block.

- [ ] **Step 5: Manual verification in a browser**

Using the `run` skill's browser-driven pattern (Playwright, since `chromium-cli` is unavailable on this Windows environment): start a static server (`npx serve -l 8934 .`), then drive the app: select Exam 3 / Full Exam mode, answer through both sections, reach the results screen, click "Review Answers" on each section card, confirm explanations show correctly for both sections (this exercises the bug fixed earlier in this session), and check `console --errors` equivalent (page/console error listeners) is empty. Screenshot the results screen as evidence.

- [ ] **Step 6: Commit**

```bash
git add data/scientific-foundations-3-questions.js data/practical-applied-3-questions.js app.js index.html README.md
git commit -m "Add Exam 3 (Expert) with 220 new questions covering DCO gap areas"
```

(Do not commit `scratch/` — it's scratchpad/throwaway content, not project source.)
