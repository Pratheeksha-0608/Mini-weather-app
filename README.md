# Mini Weather App

A simple React + Vite weather application that fetches live weather data for a searched city using OpenWeatherMap.

## Features

- Search weather by city name
- Uses OpenWeatherMap Geo API to resolve city coordinates
- Uses OpenWeatherMap Weather API to fetch current conditions
- Displays temperature, humidity, pressure, and feels-like values
- Only renders the weather card after a successful search
- Handles invalid city names by showing an error message

## Project Structure

- `src/Weatherapp.jsx` – main app container and state management
- `src/Searchbox.jsx` – search input and API request logic
- `src/Infobox.jsx` – weather display card
- `src/Searchbox.css` – search box styling
- `src/Infobox.css` – weather card styling

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with your OpenWeatherMap API key:

```env
VITE_API_KEY=your_openweathermap_api_key
```

3. Run the development server:

```bash
npm run dev
```

4. Open the local dev URL shown in the terminal.

## Notes

- The app requests metric units from OpenWeatherMap and includes a fallback to convert Kelvin values to Celsius if needed.
- Keep `package-lock.json` committed for consistent dependency installs.

## Available Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – build the app for production
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint on the project files

## Dependencies

- React 19
- Vite
- Material UI
- OpenWeatherMap API

## License

This project is provided as-is for learning and demonstration purposes.
