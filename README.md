# Sticky Notes App

A simple React application for managing sticky notes with draggable, resizable, and pinning features.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Demo

![image](https://github.com/khuranajordan/react-sticky-note/assets/32005723/82bff4f8-72bb-4591-a49d-b35285b6ceed)

**Live Demo:** [Sticky Notes App](https://remarkable-axolotl-d6ddab.netlify.app/)

## Features

- **Draggable Notes**: Move your notes freely around the board.
- **Resizable Notes**: Resize the notes by adjusting the text area.
- **Add New Notes**: Click on the "+" button to create a new note.
- **Delete Notes**: Click on the "x" button to remove a note.
- **Edit Notes**: Click on the "Edit" button to start editing the note text.
- **Pin Notes**: Pin a note to make it non-draggable and prevent overlapping.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/sticky-notes-app.git
    ```

2. Navigate to the project directory:


    ```
    cd sticky-notes-app
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

    ```
    npm start
    ```

Visit http://localhost:3000 in your browser to use the Sticky Notes App.

## Components

### Board.jsx

    The main board component that renders the Sticky Notes.

    addNote(): Adds a new note to the board.
    removeNote(): Removes a note from the board.
    handleNoteDragEnd(): Handles the drag end event for a note.
    handleNoteDrag(): Handles the drag event for a note.

### StickyNote.jsx

    The individual sticky note component.

    handleEditClick(): Moves the cursor to the beginning of the note text.
    handleMouseDown(): Handles the mouse down event for dragging.
    handleMouseMove(): Handles the mouse move event for dragging within bounds.
    handleMouseUp(): Handles the mouse up event for ending dragging.
