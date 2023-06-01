# Elemes.id Frontend Test

## Description

Elemes.id Frontend Test is a web application built predominantly with the React JavaScript library. Its main purpose is to provide users access to a wide array of food items, each accompanied by a detailed recipe. In addition, the application features a 'Trending Foods' section to highlight currently popular or trending foods.

This application is particularly beneficial for food enthusiasts looking to explore new recipes, discover trending foods, and draw inspiration for their next culinary endeavor.

---

## Live Demo

The application is deployed and can be accessed at [elemes.dafkur.com](http://elemes.dafkur.com)

---

## Screenshots

Below are some screenshots of the Elemes.id Frontend Test application:

### Landing Page

## ![Landing Page](/Web-capture.jpeg)

---

## Folder Structure

```
/elemes-test
  README.md
  README_REACT.md
  package.json
  package-lock.json
  .gitignore
  public/
    index.html
    logo.svg
    manifest.json
    robots.txt
  src/
    Components/           # contains react components
      StarRating.js
      Category.js
      Footer.js
      Header.js
      Navigation.js
      Trending.js
    scss/
      component/          # contains SCSS styles for components
        _category.scss
        _footer.scss
        _header.scss
        _navigation.scss
        _trending.scss
      _mixins.scss
      _reset.scss
      _variable.scss
      style.scss
    css/                  # contains CSS styles compiled from SCSS
      style.css
      style.css.map
    img/                  # contains all static images
      foods/
      icons/
    App.js
    App.test.js
    index.js
    reportWebVitals.js
    setupTest.js

```

---

## Libraries

The following libraries were used to enhance both the user experience and developer efficiency:

- **[React](https://reactjs.org/)**: A JavaScript library for constructing user interfaces. This was used to build all the UI components of our app.

- **[React-Bootstrap](https://react-bootstrap.github.io/)**: A front-end framework that offers pre-designed, responsive React components styled with Bootstrap. This was used for the layout and styling of the application.

- **[React-Icons](https://react-icons.github.io/react-icons/)**: Employed to incorporate widely recognized icons into our project. This package allows access to a broad range of free, open-source icons.

- **[Swiper](https://swiperjs.com/react)**: A potent and modern touch slider. It was used to establish a responsive and mobile-friendly slider for our components.

Each library has played a significant role in the application, and we are grateful to all the creators and contributors for their efforts in developing these open-source tools.

---

## Installation

### Clone

1. To clone this repository to your local machine, you need to have [git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your system. Then run the following command:

```bash
git clone https://github.com/daffakurnia11/elemes-test.git
```

2. Navigate into the cloned repository

```bash
cd elemes-test
```

---

## Setup

### Requirements

Before setting up the project make sure you have the following installed:

- [Node.js and npm](https://nodejs.org/en/download/): Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. npm is a package manager for JavaScript and is included with Node.js.

### Installation

To set up the project for development on your local machine, please follow the instructions below:

1. Install the project dependencies. This can be done locally using npm or yarn.

```bash
npm install
```

2. Start the development server

```bash
npm start
```

The project should now be up and running at http://localhost:3000
If it's not, check the console for any issues that might have occurred.

---

## Features

List of features ready and TODOs for future development

- Responsive UI for desktop and mobile
- Menu swiper using mouse drag and navigation button
- Interactive menu card background upon hover
- Contact and address details
- Subscription form

---

## Author

- Daffa Kurnia Fatah - [Dafkur.com](https://dafkur.com/) - daffakurniaf11@gmail.com

---
