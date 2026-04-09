# ToDo React App

A modern, responsive ToDo list application built with React. This app helps users manage their daily tasks efficiently with a clean and intuitive interface.

## Features

- **Add Tasks**: Easily add new tasks to your list
- **Mark Complete**: Check off completed tasks with a single click
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent State**: Tasks are managed in real-time using React state
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## Technologies Used

- React (with Hooks)
- Tailwind CSS for styling
- Vite for build tooling
- ESLint for code quality

## Live Demo
https://itsiamdev.github.io/ToDo_react/

The application is deployed and can be viewed at:
- **GitHub Pages**: https://iam269.github.io/ToDo_react/

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ToDo_react.git
cd ToDo_react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open in your browser at [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

## Usage

1. **Add a Task**: Type your task in the input field and click "ADD +"
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Delete a Task**: Click the delete icon to remove a task from the list

## Project Structure

```
src/
├── components/
│   ├── Todo.jsx          # Main Todo component with state management
│   └── TodoItems.jsx     # Individual todo item component
├── assets/               # Images and icons
├── App.jsx               # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles with Tailwind
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React
