## Cosuno coding challenge

Create a simple React application that shows a list of construction companies, each with the following information:

- Company name
- Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City

The following should be possible:

- Search for a company by typing into a search field. The search term gets matched only against the company name and the list of companies is filtered based on the search term in real time as the user is typing.
- Filter the list using a set of checkboxes to include only those companies which offer a particular speciality (e.g. only Plumbing).

Create a simple API based on Node.js that returns the list of companies to the frontend. The API can read the data from a simple JSON source, no database setup is required.

In addition, make a list of ideas on how you would improve this application if you had more time to work on it.

## Running the app

### Dev

1. Star the backend server: `node server`
2. Start the react app: `npm start`
3. Navigate to http://localhost:3000/

### prod

1. Build the react app: `npm run build`
2. Star the backend server: `node server`
3. Serve the built app from the server: http://localhost:3001/
