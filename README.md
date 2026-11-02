# 🐙 GitHub Issues Page Clone

**A pixel-faithful clone of GitHub's Issues page in React. It pulls live issues from the GitHub REST API.**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![MUI Icons](https://img.shields.io/badge/MUI_Icons-007FFF?style=flat-square&logo=mui&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_REST_API-181717?style=flat-square&logo=github&logoColor=white)

## ✨ Features
- Fetches real issues from the **GitHub REST API** (`facebook/create-react-app` repo)
- Recreates GitHub's UI: navbar, repo header, labels and milestones actions, and the open-issue count
- Issue list rows with **coloured labels**, issue number, author, time opened, and comment count
- Component-based layout styled with **styled-components**

## 🛠️ Tech Stack
React · styled-components · Material UI icons · GitHub REST API

## 🚀 Getting Started
```bash
npm install
npm start   # http://localhost:3000
```

## 📂 Structure
```
src/components/
├── Navbar.js  Header.js  ActionSection.js
├── ListHeader.js  Count.js
└── Issues.js  IssueList.js  SingleIssue.js
```

---
Made by [Shikhar Jaiswal](https://github.com/shikharskj)
