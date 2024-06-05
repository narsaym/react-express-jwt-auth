# Instructions to run this repo:

- clone the repo
- navigate to `server` directory and run `npm install` then `npm start` , server should run on http://localhost:3010
- In a separate terminal window, cd into main directory and run `npm install` then `npm run dev`, then open http://localhost:5173 in your browser
- Initially, the user will land on Home page and a Login option is visible since the user has not been authenticated. Click login and use `jondoe` as username and password, this is the only valid credential.
- There is a `Profile` tab to test out the functionality, if user is authenticated then this page will display user's name, otherwise it will display a message indicating the user is not authenticated.
- Clicking the `Logout` button will clear the token cookie.
