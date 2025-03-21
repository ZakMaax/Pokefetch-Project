\# React + Vite + Tailwindcss + React-icons

# PokéFetch

![PokéFetch Screenshot](./screenshots/homepage.png)

A simple and interactive web application that displays a paginated list of 20 Pokémon fetched from the [PokeAPI](https://pokeapi.co/). Users can search and filter Pokémon by name or ID, and clicking on a Pokémon opens a modal with detailed information, including stats, abilities, height, weight, and a visual representation of stats using progress bars. The project is built with **React 19**, **Tailwind CSS 4**, and **React Icons**.

---

## Features

- **Pokémon List**:
  - Displays a paginated list of 20 Pokémon.
  - Pagination allows users to navigate through the list.

- **Search and Filter**:
  - Search Pokémon by name or ID.
  - Real-time filtering as you type.

- **Detailed Pokémon Modal**:
  - Click on a Pokémon to view detailed information in a modal.
  - Displays Pokémon stats, abilities, height, and weight.
  - Visual representation of stats using progress bars.

- **Responsive Design**:
  - Fully responsive and optimized for both mobile and desktop.

- **Modern Tech Stack**:
  - Built with **React 19**, **Tailwind CSS 4**, and **React Icons**.

---

## Live Demo

Check out the live demo of the project: [Pokéfetch Live Demo](https://pokemonfetch.netlify.app/)

---

## Technologies Used

- **React 19**:
- **Tailwind CSS 4**:
- **React Icons**:
- **PokeAPI**: Fetching Pokémon data from the [PokeAPI](https://pokeapi.co/).

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ZakMaax/PokeFetch.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PokeFetch
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`.

---

## Usage

1. **View Pokémon List**:
   - The homepage displays a paginated list of 20 Pokémon.
   - Use the pagination buttons to navigate through the list.

2. **Search and Filter**:
   - Use the search bar to filter Pokémon by name or ID.
   - The list updates in real-time as you type.

3. **View Pokémon Details**:
   - Click on a Pokémon card to open the modal.
   - The modal displays detailed information, including stats, abilities, height, and weight.
   - Stats are visualized using progress bars.

4. **Close the Modal**:
   - Click the close button (`X`) or outside the modal to close it.

---

## Code Structure

- **`src/components/DetailsModal.jsx`**:
  - The modal component that displays detailed Pokémon information.
  - Uses the `<dialog>` element for accessibility and built-in modal behavior.

- **`src/components/PokemonList.jsx`**:
  - Fetches and displays the paginated list of Pokémon.
  - Handles search and filter functionality.

- **`src/components/Filter.jsx`**:
  - Handles the search and filter logic.

- **`src/App.js`**:
  - The main component that renders the Pokémon list, search bar, and modal.

- **`src/index.js`**:
  - The entry point of the application.


## Author

[Sakarie W. Mohamed](https://github.com/ZakMaax)

---

