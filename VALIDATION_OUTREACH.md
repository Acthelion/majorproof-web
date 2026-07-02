# MajorProof Outreach Script

## Goal

Find 10 real students to test whether TechProof Starter Pack has real demand.

Primary validation question:

Will students pay ¥29 or ¥99 for a structured technical Proof Asset that helps them turn their background into a project, resume material, and interview defense?

---

## Target users

Prioritize students who match at least 2 of these:

- Engineering, CS, EE, AI, data, math, finance engineering, or related major
- Has taken technical courses but lacks a strong independent project
- Preparing internship, graduate school application, research project, or portfolio
- Says their resume is empty or project experience is weak
- Has used ChatGPT but still does not know what project to build
- Wants a concrete technical project that can be explained in interviews

Avoid first-round testing with users who:

- Only want homework help
- Do not care about resume, application, or internship
- Are not willing to give feedback
- Expect guaranteed outcomes
- Want free unlimited consulting

---

## Private message version 1

我最近在做一个小产品，叫 MajorProof，主要是帮大学生把课程、项目和技能整理成可以写进简历、面试能讲清楚的专业能力证据。

现在先测 TechProof 方向，适合工科、CS、EE、AI、数据这类学生。

它不是代写作业，也不是编造经历，而是帮你判断：

- 你现在的背景适合做什么项目
- 最后应该交付什么成果
- 过程中要保留什么证据
- 简历上怎么克制地写
- 面试被问到时怎么解释

我现在在找 10 个真实学生试用一个 AI Roadmap Preview。你愿意帮我测一下吗？填完之后会生成一份项目路线预览，我也想听听你觉得有没有用。

测试入口：

http://localhost:3000/ai-roadmap-preview

---

## Private message version 2

我在做一个面向学生的专业能力资产系统，第一版聚焦 TechProof。

简单说，就是帮那些“有课程基础，但没有能写进简历的项目”的学生，整理一个可展示、可解释、面试能防守的技术项目路线。

现在有一个 AI Roadmap Preview，可以根据你的专业、年级、目标、已有经历和当前问题，生成一份项目资产路线。

你愿意帮我测一下吗？我主要想知道三件事：

1. 你看完之后是否觉得有用
2. 它有没有比你自己问 ChatGPT 更清楚
3. 如果后续给你做完整 Starter Pack，你是否愿意付 ¥29 / ¥99

测试入口：

http://localhost:3000/ai-roadmap-preview

---

## Short version for group chat

我最近在做一个学生项目资产工具 MajorProof，第一版是 TechProof，帮工科/CS/EE/AI/数据方向学生把背景整理成可写简历、可展示、可面试解释的技术项目路线。

现在找 10 个真实用户试用 AI Roadmap Preview。不是代写作业，也不是包装假经历，只是帮你判断适合做什么项目、怎么保留证据、怎么写简历和准备面试。

感兴趣的话可以私聊我，我发测试入口和访问码。

---

## Follow-up questions after they test

After the user generates a roadmap, ask:

1. 你看完之后第一反应是什么？
2. 哪一部分最有用？
3. 哪一部分最空泛或没帮助？
4. 这个结果有没有比你自己问 ChatGPT 更清楚？
5. 如果我人工帮你整理成完整 TechProof Starter Pack，你觉得 ¥29 是否能接受？
6. 如果包括项目结构、技术栈、成果清单、过程证据、简历 bullet、面试防守问题，¥99 是否能接受？
7. 你最希望它最后交付成什么形式？PDF、Notion、Markdown、GitHub README、还是网页？
8. 你会把它推荐给同专业同学吗？

---

## Manual scoring

Score each tester from 1 to 5.

### Pain strength

1 = no clear need  
2 = mild curiosity  
3 = real problem but not urgent  
4 = strong need  
5 = urgent and willing to act

### Willingness to pay

1 = only wants free  
2 = maybe ¥9.9  
3 = accepts ¥29  
4 = accepts ¥99  
5 = accepts ¥199+

### Fit for TechProof

1 = not technical  
2 = weak fit  
3 = possible fit  
4 = good fit  
5 = ideal early user

---

## Validation table

| Name | Major | Year | Goal | Pain strength | Pay willingness | TechProof fit | Interested price | Notes |
|---|---|---|---|---:|---:|---:|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

---

## Success threshold

This validation round is considered promising if:

- 10 students try AI Roadmap Preview
- At least 6 say the result is useful
- At least 3 ask for a more complete version
- At least 1 is willing to pay ¥29 or ¥99
- At least 1 has a clear TechProof use case

If nobody is willing to pay even ¥29, do not build more features. Rework positioning and offer.