# Newsbot

This exercise is about practicing combining Express and Mongoose to work with data.

The application is a personal jobs API. It automatically checks advertisements from the hackernews API and saves them to a Mongoose database. With this, our database is seeded from a third-party API.

## Tasks

### Task 1

- Create `db.js` and export an async function called `connect`
    - This function will be called from `server.js`

- The `connect` method should start to connect to MongoDB Atlas
    - Also register your Mongoose Connection Event Handlers
    - Add `console.log` for at least the `error` and `connected` events
    - Note: Do not commit your database credentials, they are secret!
        - Hint: use environment variables, make sure not to commit them

### Task 2

- Examine the data seeder `data.js`
- Add helpful comments to the existing code
- At the end of `refresh()`, save the `newData` into Mongoose using `Job`
    - Note the difference between using `originalId` and `_id`
    - The API uses "id", which our code translates to "originalId"
    - Our MongoDB will use "_id" for the ObjectID
    - In the database, it's a good idea to store both!

### Task 3

- Add an endpoint to delete a single job based on an `originalId` provided by user
- Make sure to test the endpoints

### Task 4

- Add an endpoint for deleting all jobs from the database

### **Optional bonus task, if you want a challenge**

- Hackernews also provides news articles from its API
- See https://github.com/HackerNews/API for documentation
- Just like saving a local copy of the jobs, save a copy of the news articles
- Add an endpoint for deleting all news articles from the database
