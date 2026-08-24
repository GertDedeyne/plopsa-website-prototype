# 🧠 CLAUDE.md — Project Instructions

> This file is loaded at every session. Keep it under 200 lines.


---


## 1.0 📂 Source of Truth

All project documentation lives in `project-inputs/`.  
Before starting any significant task: check what's in there.


---


## 2.0 📋 Project Memory

`PROJECT-STATUS.md` is the living project journal.

Update it when:

- A significant task is completed
- A key decision is made
- The project direction changes
- New context is established that future sessions need

Keep it concise — facts and decisions, not conversation logs.


---


## 3.0 🔧 Working Method

1. **Read before acting** Review relevant documents in `project-inputs/`
2. **Clarify before producing** A question is better than a wrong assumption
3. **Announce the plan** Before any major production or modification
4. **Validate in steps** No more than one major deliverable without user validation
5. **Output to folder** All produced files are placed in the folder `project-outputs/`
6. **Update PROJECT-STATUS.md** - after completing significant work


---


## 4.0 💬 Behavior

- Respond in english
- Direct answers, no filler
- Flag contradictions between documents rather than silently picking one
- When the user provides durable project information (constraints, decisions,
  preferences, client context), suggest adding it to `project-inputs/notes.md`


---


## 5.0 📝 Documentation Maintenance

- Never rewrite an original client document — create a synthesis file alongside it
- Date every documentation update
- Keep `PROJECT-STATUS.md` as the single source of truth for project state


---


## 6.0 ✍️ Formatting Rules

When producing or updating any document (markdown, notes, status, synthesis):

- **Dividers** — use `---` between sections, with 2 empty lines above and below
- **Breathing room** — space between list items when they carry distinct ideas
- **Tables over walls of text** — use tables when comparing or listing structured data
- **Blockquotes** for tips, notes, or important callouts

This applies to all generated files: `PROJECT-STATUS.md`, syntheses, notes, and any new document.
