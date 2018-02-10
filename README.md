## Personal portfolio site

Made for Allison Declercq-Matthas.
Site logo is © 2017 Allison Decercq-Matthas.
Source code is MIT licensed.

[View the site here](https://allisondm.me)

### Description of technology

The site is built using React. It uses:

* React Router for navigation.
* Bulma as a CSS framework.
* Contentful as a CMS backend.

The use of Contentful to deliver content to a single-page application allows
the site to be hosted at minimal cost (configured here to deploy to Firebase
but can be hosted on any static hosting) while allowing real-time content
editing by the author.

### Running locally

You can clone the repository and run `npm install` followed by `npm start`.

However, this repository is missing the `secrets.ts` file containing my
Contentful access token and the build won't work without it. Feel free to
edit the code to work with your own Contentful space (or other backend) though.
