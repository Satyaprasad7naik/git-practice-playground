# Git Practice Playground

A small, beginner-friendly Git learning project designed to help you practice Git workflows, branching, merging, and commit management through a simple but interactive web application.

## 📋 Project Overview

This project contains a lightweight web app with:
- **Background Color Changer**: Click the button to cycle through random colors
- **Counter App**: Increment, decrement, or reset a counter with dynamic color feedback

The entire repository is structured to teach Git best practices through hands-on experience.

## 📁 Project Structure

```
git-practice-playground/
├── index.html      # Main HTML structure
├── style.css       # Styling for layout and components
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎯 Learning Objectives

- **Branching**: Create feature branches (e.g., `feature/color-changer`, `feature/counter`)
- **Committing**: Practice writing clear, descriptive commit messages
- **Merging**: Merge feature branches back to main with meaningful commit histories
- **History Exploration**: Use `git log` to review your work and commit messages
- **Reverting**: Practice undoing commits with `git revert` and `git reset`

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/Satyaprasad7naik/git-practice-playground.git
cd git-practice-playground
```

### Open in Browser
Simply open `index.html` in your web browser to see the app in action.

## 📝 Git Practice Commands

### View the Project History
```bash
git log --oneline
```

### Create a New Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Make Changes and Commit
```bash
git add index.html style.css script.js
git commit -m "Describe your changes here"
```

### Switch Back to Main
```bash
git checkout main
```

### Merge Feature Branch
```bash
git merge feature/your-feature-name
```

### View Branch Status
```bash
git branch -a
```

## 📚 Features

### Color Changer
- Cycles through a palette of 7 different colors
- Each click changes the background color
- Displays the current color code

### Counter
- Increment the counter with the "+" button
- Decrement with the "-" button
- Reset to 0 with the "Reset" button
- Dynamic color feedback: blue (normal), orange (medium), red (extreme)

## 💡 Tips for Git Practice

1. **Make small, focused commits**: Each feature change should be a separate commit
2. **Write meaningful messages**: Use past tense and be descriptive
3. **Use branches**: Always create a feature branch before making changes
4. **Review before merging**: Use `git diff` to review changes
5. **Keep history clean**: Avoid unnecessary merge commits when possible

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and transitions
- **JavaScript (ES6+)**: Event handling and DOM manipulation

## 📖 Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Learning](https://learngitbranching.js.org/)

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

This is a personal learning project, but feel free to fork and practice!

---

**Happy Learning!** 🎉 Use this repository to get comfortable with Git and GitHub workflows.
