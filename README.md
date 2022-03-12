# / readdit: a nc news app

A hosted version of this project can be found here: https://readdit-nc-news.netlify.app.

The repo for this project can be found here: https://github.com/jothwas/nc-news-jw

This individual project is the Frontend for a prior Backend project I also completed myself.

## What is / readdit

/ readdit is in the style of a news aggregating website and was built with React.

The website consists of articles which can be viewed, commented on, upvoted and downvoted, added and and deleted, sorted and ordered.

Users can also comment on articles with similar functionality options as for the articles.

## Backend

The API for this Frontend project was built using RESTful techniques to interact with a database.

A repo for the Backend can be found here: https://github.com/jothwas/news-api-jw

The hosted API from this Backend can be found here: https://news-api-jw.herokuapp.com/api

## Run Locally

To run this project locally, first clone its repo from GitHub:

```bash
  git clone https://github.com/jothwas/nc-news-jw.git
```

Go to the project directory:

```bash
  cd nc-news-jw
```

Install the project's required dependencies:

```bash
  npm i
```

Run the app locally:

```bash
  npm start
```

## Minimum Requirements

To ensure the app runs correctly, please ensure you have the following software versions installed as a minimum:

```
Node.js: v17.3.1
```

To check your current Node version, input into the command line:

```
node -v
```

## Future Features

I plan to add further features to this project in the near future, including:

- Log-In functionality: currently the site is permanently logged in as one user, this would allow the user to 'log-in' as themselves
- Create a new user
- Clicking a user's name will filter the article view by their username so you can only see articles they have written
- Clicking the comments from the main article list will direct you to the article page and navigate directly to the comments
- Pagination
