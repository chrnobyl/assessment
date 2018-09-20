########## Ollie Code Assessment ##########

  This code test solution was written in React for the client side and Ruby on Rails for the API. The database is SQLite 3. Styling was done with Semantic UI React.

# Before running the program
  The program exists in two subfolders: `ollie-client` contains the front end, and `ollie-api` contains the back end. To start, open each subfolder in its own command line window. In `ollie-api`, run `bundle install` to install the dependencies. In `ollie-client`, run `npm install` to install the dependencies.

# Running the program
  A local server must be run for both the client and the API. Start the server for the API first. In the command line you have open for `ollie-api`, run `rails s` to start the server. It will run on `localhost:3000`. Once the server is up and running, start the client server by going to the command line for `ollie-client` (in a separate window) and executing `npm start`. Since the API is already running on port 3000, it will ask if you want to run on a different port. Answer `Yes`. It will run on `localhost:3001` and our browser should automatically open to display the form.

# Architecture
  The database structure consists of a User table and a Pet table. Pets belong to a user and a user can have many pets. When the form is submitted, the user information is submitted to the database first to determine if that user exists or if a new user should be created. Then, the pet information is submitted, creating a new pet in the database and associating it with the user. To see saved users, go to `localhost:3001/api/v1/users`. To see saved pets, go to `localhost:3001/api/v1/pets`.

# Directory structure
  `ollie-api` contains the Rails back end code.  `ollie-client` contains the react front end code.
