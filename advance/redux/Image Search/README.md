# Media Search

A modern React-based media search application that lets users search for visual content, browse results by media type, open individual items, and save selected results to a personal collection. The application uses external media APIs and Redux Toolkit for centralized state management.

## Features

- Search for media using a single search interface.
- Search and browse image results.
- Search and browse GIF results.
- View search results in a responsive grid.
- Switch between available media-result tabs after performing a search.
- Open media items for a larger view.
- Save individual results to a personal collection.
- Remove individual items from the collection.
- Clear the entire collection at once.
- Persist the collection using browser local storage.
- Display an empty-state message when no items are saved.
- Show toast notifications when items are added to or removed from the collection.
- Client-side routing between the search experience and collection page.
- Dark-themed UI built with Tailwind CSS.

## Tech Stack

### Frontend

- React.js
- JavaScript
- Vite
- Tailwind CSS
- React Router DOM

### State Management

- Redux Toolkit
- React Redux

### API & Data

- Axios
- Unsplash API for image search
- Tenor API for GIF search
- Environment variables for API credentials

### UI / UX

- React-Toastify for toast notifications
- Responsive media grids
- Dark-themed interface

## How It Works

The application follows a simple media-search workflow:

1. The user enters a search query.
2. The application sends requests to the configured media APIs using Axios.
3. The returned data is normalized into the application's expected structure.
4. Redux Toolkit stores the search state and collection state.
5. Search results are rendered as reusable result cards.
6. Users can save any result to their collection.
7. Saved items are persisted in local storage so they remain available after a page reload.
8. Users can visit the Collection page to view, remove, or clear saved items.

## Application Architecture

The application separates API communication, state management, reusable UI components, and pages.

```text
src/
├── api/
│   └── mediaApi.js
│
├── components/
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   ├── ResultCard.jsx
│   └── SearchBar.jsx
│
├── pages/
│   └── Collection.jsx
│
├── redux/
│   ├── store.js
│   └── features/
│       ├── search/
│       │   └── searchSlice.js
│       └── collection/
│           └── collectionSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

> File names can be adjusted as the project evolves; the structure above represents the main separation of responsibilities used in the application.

## Redux State Management

Redux Toolkit is used to manage application-wide state.

### Search Slice

The search state is responsible for information related to the current search, including:

- Search query
- Image results
- GIF results
- Search/loading state
- API-related result data

### Collection Slice

The collection state is responsible for saved media.

It provides actions for:

- Adding an item to the collection
- Removing an item from the collection
- Clearing the entire collection

The collection is also synchronized with browser local storage so that saved items persist between reloads.

## API Integration

The application keeps API communication separate from UI components.

Axios is used to make HTTP requests, while API keys are loaded through Vite environment variables.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_TENOR_API_KEY=your_tenor_api_key
```

Do not commit your real API keys to GitHub.

The `.env` file should be included in `.gitignore`.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A modern web browser

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd media-search
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
touch .env
```

Add your API credentials to `.env`:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_TENOR_API_KEY=your_tenor_api_key
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown by Vite in your browser.

## Usage

### Search Media

1. Enter a keyword in the search bar.
2. Submit the search.
3. Browse the returned media results.
4. Switch between the available result tabs.

### Save Media

1. Find a media item you want to keep.
2. Select the save/add-to-collection action.
3. The item is stored in the Redux collection state.
4. The collection is persisted in local storage.
5. A toast notification confirms the action.

### Manage Your Collection

Open the Collection page to:

- View all saved media.
- Remove individual items.
- Clear the complete collection.

## Key Concepts Demonstrated

This project was built to practice and demonstrate several important frontend development concepts:

- React component-based architecture
- Reusable components
- React Router navigation
- Axios and REST API integration
- API authentication
- Environment variables
- Query parameters
- HTTP request headers
- Asynchronous JavaScript
- Redux Toolkit
- Redux slices and reducers
- `useSelector`
- `useDispatch`
- Local storage persistence
- Conditional rendering
- Array mapping and filtering
- Props and component communication
- Responsive UI development
- Toast-based user feedback

## Project Structure Responsibilities

| Directory / File | Responsibility |
|---|---|
| `api/` | Handles external API communication |
| `components/` | Contains reusable UI components |
| `pages/` | Contains route-level page components |
| `redux/` | Contains the Redux store and feature slices |
| `searchSlice.js` | Manages search-related state |
| `collectionSlice.js` | Manages saved media |
| `store.js` | Configures the Redux store |
| `App.jsx` | Defines the main application structure and routes |
| `main.jsx` | Application entry point |
| `index.css` | Global styles and Tailwind setup |

## Security Notes

- Never commit API keys or secrets to the repository.
- Store API credentials in environment variables.
- Add `.env` to `.gitignore`.
- Create your own API credentials from the respective provider dashboards.

## Future Improvements

Possible improvements include:

- Add pagination or infinite scrolling.
- Add better loading and error states.
- Add media preview/modal functionality.
- Add sorting and filtering options.
- Add user authentication.
- Move saved collections from local storage to a backend database.
- Add multiple collections instead of one default collection.
- Add downloadable media where permitted by the respective API and content license.
- Improve accessibility and keyboard navigation.
- Add automated tests.

## Learning Outcome

This project provides practical experience with building a React application that consumes external APIs and manages shared application state with Redux Toolkit.

The main focus is on understanding how API data flows through the application, how Redux slices manage different parts of the state, how components consume and update that state, and how local storage can be used to persist user data.

## License

This project is available for learning and personal use. Review the terms and content licenses of the external APIs before using the application commercially.
