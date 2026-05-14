# Todo List App

A modern, feature-rich todo list application built with React, Vite, and Tailwind CSS. This app helps you manage your daily tasks efficiently with a clean and intuitive user interface.

## ✨ Features

- ✅ **Add Todos** - Easily add new tasks with validation (minimum 4 characters)
- ✏️ **Edit Todos** - Modify existing tasks by clicking the Edit button
- 🗑️ **Delete Todos** - Remove tasks with the Delete button
- ☑️ **Mark as Completed** - Check off finished tasks with strikethrough styling
- 👁️ **Show/Hide Finished** - Toggle visibility of completed tasks
- 💾 **Local Storage** - All todos persist automatically across browser sessions
- 📱 **Responsive Design** - Works seamlessly on different screen sizes
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS styling

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **React Icons** - Icon library (Edit & Delete icons)
- **UUID** - Unique ID generation for todos
- **PostCSS** - CSS processing

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Usage

1. **Add a Todo**: Type your task in the input field and click "Save" (minimum 4 characters required)
2. **Mark as Complete**: Check the checkbox next to a todo to mark it as finished (appears with strikethrough)
3. **Edit a Todo**: Click the Edit button (pencil icon) to modify a todo
4. **Delete a Todo**: Click the Delete button (trash icon) to remove a todo
5. **Filter Completed**: Use the "Show Finished" checkbox to toggle visibility of completed tasks

## 💡 Key Implementation Details

- Empty todos are prevented from being added to the list
- Todos are automatically saved to browser's localStorage
- Each todo has a unique ID generated using UUID v4
- Completed todos are tracked with an `isCompleted` flag
- The app filters out any corrupted/empty todos on load
- Responsive layout with Tailwind CSS utilities

## 📝 Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Application styles
├── components/
│   └── Navbar.jsx       # Navigation bar component
├── index.css            # Global styles
└── main.jsx             # Entry point
```

## 🔄 Build & Deploy

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📄 License

This project is open source and available for personal and educational use.