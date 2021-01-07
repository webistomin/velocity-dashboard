<p align="center">
  <img width="50%" src="https://velocity-bucket1.s3.eu-central-1.amazonaws.com/logo/logo.png" alt="Velocity">
</p>

---

<h4 align="center">Simple prototype of taxi dashboard built on top of Nuxt.js and Express.js</h4>


<p align="center">
  <a href="https://travis-ci.org/github/webistomin/velocity-dashboard">
    <img src="https://travis-ci.org/webistomin/velocity-dashboard.svg?branch=master"
         alt="Travis CI">
  </a>
  <a href="https://www.codefactor.io/repository/github/webistomin/velocity-dashboard"><img src="https://www.codefactor.io/repository/github/webistomin/velocity-dashboard/badge" alt="CodeFactor" /></a>
  <a href="https://codecov.io/gh/webistomin/velocity-dashboard">
    <img src="https://codecov.io/gh/webistomin/velocity-dashboard/branch/master/graph/badge.svg" />
  </a>
  <a href="https://david-dm.org/webistomin/velocity-dashboard">
  <img src="https://david-dm.org/webistomin/velocity-dashboard/dev-status.svg" alt="Dependencies">
  </a>
  <a href="https://david-dm.org/webistomin/velocity-dashboard" title="dependencies status"><img src="https://david-dm.org/webistomin/velocity-dashboard/status.svg" alt="dev dependencies"/></a>
  <img alt="npm type definitions" src="https://img.shields.io/npm/types/nanogram.js">
</p>

<p align="center">
  <a href="#description-%EF%B8%8F">Description</a> •
  <a href="#demo-">Demo</a> •
  <a href="#Pages-">Pages</a> •
  <a href="#Installation-">Installation</a> •
  <a href="#tech-stack-%EF%B8%8F">Tech stack</a> •
  <a href="#documentation-%EF%B8%8F">Documentation</a> •
  <a href="#license-%EF%B8%8F">License</a>
</p>

## Description 🖊️

Beep beep. Meet Velocity – app for taxi company. It's not totally complete because doing this project alone is very difficult. The main goal for me was to learn how to use Vue with TypeScript in anticipation of the third version. Also, I never wrote the server side for applications. First tried Node.js, Mongo, Mongoose in action.

All components are ready on the client side, it remains only to write the logic. The server uses stubs to respond to pages. Only the logic for working with the user is ready: registration, authorization, password recovery, changing information about yourself, loading the avatar on S3.

For unit tests I used Jest. Tests cover only client components, approximately 80% of the entire code. Also, the application was not tested in most browsers, since I did not have a goal to make applications for production, I wanted to learn more about new things.

As a result, I realized that Vue in conjunction with TypeScript is still not reaching React. Poor IDE support, not working templates with prop types highlighting. It forced me to switch from templates to JSX, where I met new problems. Small community, poor documentation, etc.


## Demo 👀

~~**If app is taking a long time to load – please wait.**~~

~~Heroku will spin down app to save resources, if it's not accessed for a certain amount of time. Thus the slowness is caused by having to start up the entire app again.~~

### [~~DEMO~~](https://stormy-ocean-88138.herokuapp.com/)

**Application unavailable for now due to AWS free tier expiring. You can run it locally after filling the `.env` file with all keys.**

## Pages 📃

<table>
  <thead>
    <tr>
      <th>Page</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/">Home</a></td>
      <td>Home page</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/login">Login</a></td>
      <td>This is a page where the user can log in, register, receive a password reset email</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/reset-password/123">Reset password</a></td>
      <td>This is a page where the user enters a new password. A token is required that comes to the mail</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/analytics">Analytics</a></td>
      <td>This is a page with various graphs and statistics on the project</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/vehicles">Vehicles</a></td>
      <td>This is a page with a table of all the vehicles that can be filtered</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/reminders">Reminders</a></td>
      <td>This is a To Do List Page</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/map">Map</a></td>
      <td>This is a page with current trips</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/chat">Chat</a></td>
      <td>This is a page where you can communicate with customers</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/settings">Settings</a></td>
      <td>This is a page where the user can change information about himself, choose a theme for the site</td>
    </tr>
    <tr>
      <td><a href="https://stormy-ocean-88138.herokuapp.com/404">Not found</a></td>
      <td>Not found page for 404 error</td>
    </tr>
  </tbody>
</table>

## Installation 🚀

<table>
  <thead>
    <tr>
      <th>Page</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>npm ci</code></td>
      <td>Install dependencies from package-lock.json</td>
    </tr>
    <tr>
      <td><code>npm run dev</code></td>
      <td>Run dev server with HMR</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Build app for production</td>
    </tr>
    <tr>
      <td><code>npm run start</code></td>
      <td>Serve production build locally</td>
    </tr>
    <tr>
      <td><code>npm run analyze</code></td>
      <td>Analyze webpack bundle</td>
    </tr>
    <tr>
      <td><code>npm run test</code></td>
      <td>Run unit tests</td>
    </tr>
    <tr>
      <td><code>npm run lint:write</code></td>
      <td>Lint and fix all files</td>
    </tr>
    <tr>
      <td><code>npm run prettier:write</code></td>
      <td>Run prettier</td>
    </tr>
  </tbody>
</table>

## Tech stack ⚙️

### Frontend

<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://typescript.nuxtjs.org/">TypeScript</a></td>
      <td>TypeScript is getting more and more popular in the Front-end environment. Myself, I have loved it since I used it for the first time. And I will continue using this in all my next projects for sure.</td>
    </tr>
    <tr>
      <td><a href="https://vuejs.org/index.html">Vue.js</a></td>
      <td>My main JavaScript framework for building user interfaces and single-page applications.</td>
    </tr>
    <tr>
      <td><a href="https://vuex.vuejs.org">Vuex</a></td>
      <td>A main state management library for Vue.js. This app is fine without Vuex, but <code>@nuxt-auth</code> module requires activated Vuex.</td>
    </tr>
     <tr>
      <td><a href="https://router.vuejs.org">Vue Router</a></td>
      <td>I don't like built in Nuxt.js `pages` folder so I use my own router config.</td>
    </tr>
     <tr>
      <td><a href="https://nuxtjs.org/">Nuxt.js</a></td>
      <td>It simplifies the development of universal or single page Vue apps.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/nuxt-community/nuxt-property-decorator">Nuxt property decorator</a></td>
      <td>Handy ES / TypeScript decorators for class-style Vue components in Nuxt.</td>
    </tr>
    <tr>
      <td><a href="https://vuejs.org/v2/guide/render-function.html">JSX</a></td>
      <td>Vue.js doesn't have good TypeScript support using a <code>template</code> so I switched to JSX</td>
    </tr>
    <tr>
      <td><a href="https://mjml.io/">MJML</a></td>
      <td>The only framework that makes responsive email easy</td>
    </tr>
    <tr>
      <td><a href="https://www.chartjs.org/">Chart.js</a></td>
      <td>Chart.js is an easy way to include animated, interactive graphs on website</td>
    </tr>
    <tr>
      <td><a href="https://leafletjs.com/">Leaflet</a></td>
      <td>Open-source JavaScript library for mobile-friendly interactive maps</td>
    </tr>
    <tr>
      <td><a href="https://jestjs.io/">Jest</a></td>
      <td>Framework for unit testing</td>
    </tr>
    <tr>
      <td><a href="https://storybook.js.org/">Storybook</a></td>
      <td>Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.</td>
    </tr>
  </tbody>
</table>

### Backend

<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://nodejs.org/en/">Node.js</a></td>
      <td>Node is a popular choice for building backends largely due to the fact that it shares the same base language, JavaScript, as many frontends.</td>
    </tr>
    <tr>
      <td><a href="https://nodejs.org/en/">Express.js</a></td>
      <td>The fast, unopinionated, minimalist web framework for node</td>
    </tr>
    <tr>
      <td><a href="https://www.mongodb.com/">MongoDB</a></td>
      <td>The most popular database for modern apps</td>
    </tr>
    <tr>
      <td><a href="https://mongoosejs.com/">Mongoose</a></td>
      <td>Mongoose provides a straight-forward, schema-based solution to model my application data.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/jquense/yup">Yup</a></td>
      <td>Dead simple Object schema validation</td>
    </tr>
    <tr>
      <td><a href="https://aws.amazon.com/ru/s3/">AWS S3</a></td>
      <td>Object storage for users static files</td>
    </tr>
  </tbody>
</table>

## Documentation ⚙️

### [SWAGGER](https://app.swaggerhub.com/apis-docs/velocity-dashboard/Velocity/1.0.0)

### [STORYBOOK](https://velocity-dashboard.now.sh/?path=/story/basebadge--default)


## License 👨‍⚖️

### [READ](https://github.com/webistomin/velocity-dashboard/blob/master/LICENSE.pdf)
