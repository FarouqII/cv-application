# CV Builder (React)

A dynamic CV builder built with React that allows users to create and preview a professional résumé in real time. The application features a cinematic “camera-style” navigation system, smooth animations, and a retro-inspired UI.

## Features

- Live CV preview that updates as the user inputs data
- Multi-section form:
  - Personal Information
  - Professional Summary
  - Education (with dynamic course entries)
  - Professional Experience (with dynamic bullet points)
- Camera-based navigation system:
  - Smooth zoom and pan transitions between sections
  - Active section focus with blur effects on inactive sections
- Animated form transitions using GSAP
- Responsive layout with A4-style CV formatting
- Print-ready output with optimized print styles
- Reset functionality to restart the CV creation process

## Tech Stack

- React (functional components, hooks)
- JavaScript (ES6+)
- CSS (custom styling, transitions, responsive design)
- GSAP (GreenSock Animation Platform) for animations
- Vite / Webpack

## Key Concepts

### State Management
The application uses centralized state in the main App component to manage all CV data. Local component state is used for handling temporary form inputs before committing them to the main state.

### Dynamic Forms
- Education section supports adding up to three relevant courses
- Experience section supports multiple entries, each with up to three bullet points

### Camera System
Instead of traditional scrolling, the app uses a transform-based “camera” system:
- Sections are brought into focus using translate and scale
- Positions are calculated dynamically to support variable content height
- Inactive sections are blurred and dimmed for emphasis

### Animations
- GSAP is used to animate transitions between form sections
- CSS transitions are used for focus effects and UI interactions

### Print Optimization
Custom @media print styles ensure:
- Only the CV is printed
- Background UI elements are hidden
- Layout remains clean and readable