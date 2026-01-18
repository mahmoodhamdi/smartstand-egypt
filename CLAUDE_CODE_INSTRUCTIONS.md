# 🤖 Smart Stand Egypt - Claude Code Master Instructions

## 🎯 Your Mission
Build and deploy a production-ready landing page for **Smart Stand Egypt** from a Figma design. Work autonomously through each phase until the project is complete and deployed.

---

## 🔑 CREDENTIALS & ACCESS (IMPORTANT!)

### GitHub
```
Token: [PROVIDED IN ENVIRONMENT]
Username: mahmoodhamdi
Repository: smartstand-egypt
```

### System
```
Linux Password: 0101
```

### Figma
```
Design URL: https://www.figma.com/design/iH6Brh7jhmDEzdej6uVlQy/Untitled?node-id=17-134
File Key: iH6Brh7jhmDEzdej6uVlQy
```

---

## 📁 Project Location
```
Working Directory: /home/user/projects/smartstand-egypt
Prompts Location: /home/user/projects/smartstand-egypt/docs/prompts/
```

---

## 🚀 HOW TO EXECUTE

### Step 1: Check Current Progress
```bash
cat PROGRESS.md
```
Look for the current phase and milestone.

### Step 2: Read the Current Phase Prompt
Based on progress, read the appropriate prompt file:
- Phase 1: `docs/prompts/PHASE_1_SETUP.md`
- Phase 2: `docs/prompts/PHASE_2_COMPONENTS.md`
- Phase 3: `docs/prompts/PHASE_3_SECTIONS.md`
- Phase 4: `docs/prompts/PHASE_4_RESPONSIVE.md`
- Phase 5: `docs/prompts/PHASE_5_DEPLOY.md`

### Step 3: Execute Tasks
Follow the instructions in the phase prompt file. Complete each milestone before moving to the next.

### Step 4: Update Progress
After completing each milestone:
1. Update `PROGRESS.md` with completion status
2. Commit changes with descriptive message
3. Push to GitHub

### Step 5: Continue to Next Phase
When a phase is complete, proceed to the next phase prompt.

---

## 📋 EXECUTION RULES

### Always Do
1. ✅ Read the phase prompt file BEFORE starting work
2. ✅ Verify each step works before moving on
3. ✅ Run `npm run dev` to test changes locally
4. ✅ Commit after each milestone
5. ✅ Push to GitHub regularly
6. ✅ Update PROGRESS.md with timestamps
7. ✅ Handle errors gracefully - try alternatives if something fails

### Never Do
1. ❌ Skip phases or milestones
2. ❌ Proceed if build is broken
3. ❌ Leave uncommitted changes
4. ❌ Ignore TypeScript errors
5. ❌ Deploy without testing

---

## 🔄 RESUMING WORK

If starting a new session:

1. **Check Repository Status**
```bash
cd /home/user/projects/smartstand-egypt
git status
git pull
```

2. **Check Progress**
```bash
cat PROGRESS.md
```

3. **Continue from Last Milestone**
Read the appropriate phase prompt and continue.

---

## 🛠️ TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📊 PROJECT PHASES OVERVIEW

| Phase | Name | Milestones | Prompt File |
|-------|------|------------|-------------|
| 1 | Project Setup | 4 | PHASE_1_SETUP.md |
| 2 | UI Components | 5 | PHASE_2_COMPONENTS.md |
| 3 | Page Sections | 7 | PHASE_3_SECTIONS.md |
| 4 | Responsive & Animations | 3 | PHASE_4_RESPONSIVE.md |
| 5 | Testing & Deployment | 4 | PHASE_5_DEPLOY.md |
| **Total** | | **23** | |

---

## 🎨 DESIGN SPECIFICATIONS

### Colors
| Name | Hex | CSS Variable |
|------|-----|--------------|
| Gold Light | #FBF7D3 | --gold-light |
| Gold | #FBDD97 | --gold |
| Gold Dark | #906F1E | --gold-dark |
| Black | #000000 | --black |
| White | #FFFFFF | --white |

### Typography
- **Font**: Albert Sans
- **Weights**: 400 (Regular), 700 (Bold), 900 (Black)

### Spacing
- **Border Radius - Cards**: 30px
- **Border Radius - Buttons**: 25px

### Gradient
```css
background: linear-gradient(180deg, #FBF7D3 0%, #906F1E 50.481%, #FBDD97 100%);
```

---

## 📝 COMMIT MESSAGE FORMAT

```
Phase X.Y: Brief description

- Detail 1
- Detail 2
```

Examples:
- `Phase 1.1: Initialize repository and Next.js project`
- `Phase 2.3: Create typography components`
- `Phase 5.4: Deploy to production`

---

## 🚨 TROUBLESHOOTING

### Build Fails
```bash
# Clear cache and retry
rm -rf .next node_modules
npm install
npm run build
```

### Git Auth Issues
```bash
# Use token in URL
git remote set-url origin https://[YOUR_TOKEN]@github.com/mahmoodhamdi/smartstand-egypt.git
```

### TypeScript Errors
```bash
# Check for type issues
npx tsc --noEmit
```

### Image Issues
```bash
# Ensure images are in public folder
ls -la public/images/
```

---

## 🏁 START HERE

**If this is a fresh start:**
```bash
# Read Phase 1 instructions
cat docs/prompts/PHASE_1_SETUP.md

# Then execute Phase 1
```

**If resuming:**
```bash
# Check progress first
cat PROGRESS.md

# Then continue from where you left off
```

---

## 💡 BEST PRACTICES

1. **Work incrementally** - Small, tested changes
2. **Verify visually** - Open browser to check work
3. **Follow the design** - Match Figma exactly
4. **Keep code clean** - Follow TypeScript best practices
5. **Document progress** - Update PROGRESS.md often

---

## 🎉 SUCCESS CRITERIA

The project is complete when:
- [ ] All 5 phases are marked complete in PROGRESS.md
- [ ] Site is deployed and accessible
- [ ] All features work correctly
- [ ] Lighthouse scores > 90
- [ ] No console errors
- [ ] Code is clean and well-organized

---

**Now start by checking PROGRESS.md and reading the appropriate phase prompt!**

Good luck! 🚀

