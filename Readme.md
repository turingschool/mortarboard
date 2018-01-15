# Mortarboard
The [WebApp to Apply][app].

Mortarboard is a [Create React App][cra] built with [React Apollo][apollo] for
consuming the [Apply GraphQL API][api].

This project prefers [yarn][yarn] as it's package manager, though [npm][npm]
should work in most cases.

## Design
[Guiceworks][guiceworks] created the UX flows, designs and [Invision prototype][prototype].

## Development
Setup a local environment by overriding dotenv variables:

```sh
cp .env .env.local
```

Install project dependencies:

```sh
yarn install
```

Normal [Create React App scripts][cra_scripts] are now available replacing `npm`
with `yarn`.

* `yarn start`: Starts the development environment
* `yarn test`: Runs the [jest][jest] test suite
* `yarn lint`: Lints the project using [eslint-config-airbnb][airbnb]
* `yarn flow`: Runs the [flow][flow] type checker

## CI and Deployments
[![Travis Build Status](https://travis-ci.org/turingschool/apply-webapp.svg?branch=master)](https://travis-ci.org/turingschool/apply-webapp)
[![CircleCI Build Status](https://circleci.com/gh/turingschool/apply-webapp/tree/master.svg?style=svg)](https://circleci.com/gh/turingschool/apply-webapp/tree/master)

[Travis][travis] will auto deploy to the [gh-pages][pages] branch once a passing
build has run on `master`.

The passing build depends on:

```sh
yarn lint
yarn flow
yarn test
```

**The GitHub pages branch is production. A staging server does not exist.**

👋🎓 

<!-- Links -->
[airbnb]: https://github.com/airbnb/javascript
[api]: https://github.com/turingschool/apply
[apollo]: https://www.apollographql.com/docs/react/ 
[app]: https://turingschool.github.io/apply-webapp/
[cra]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
[cra_scripts]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts
[flow]: https://flow.org
[guiceworks]: http://www.guice.works
[jest]: https://facebook.github.io/jest/
[npm]: https://www.npmjs.com/get-npm
[pages]: https://github.com/turingschool/apply-webapp/tree/gh-pages
[prototype]: https://projects.invisionapp.com//share/87BC70RUV
[yarn]: https://yarnpkg.com/en/ 
[travis]: https://travis-ci.org/turingschool/apply-webapp
