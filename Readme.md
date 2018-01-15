# Mortarboard
The [WebApp to Apply][app].

Mortarboard is a [Create React App][cra] built with [Apollo][apollo] for
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

```sh
yarn start # Starts the development environment
yarn test  # Runs the Jest test suite
yarn lint  # Lints the project using eslint-config-airbnb
yarn flow  # Runs the Flow type checker
```

## CI and Deployments
[![CircleCI Build Status](https://circleci.com/gh/turingschool/apply-webapp/tree/master.svg?style=svg)](https://circleci.com/gh/turingschool/apply-webapp/tree/master)
[![Travis Build Status](https://travis-ci.org/turingschool/apply-webapp.svg?branch=master)](https://travis-ci.org/turingschool/apply-webapp)

[Travis][travis] will auto deploy to the [gh-pages][pages] branch once a passing
build has run on `master`.

The passing build depends on:

```sh
yarn lint
yarn flow
yarn test
```

**A staging server does not exist.**
**The GitHub pages branch is production.**

👋🎓 

<!-- Links -->
[api]: https://github.com/turingschool/apply
[apollo]: https://www.apollographql.com/docs/react/ 
[app]: https://turingschool.github.io/apply-webapp/
[cra]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
[cra_scripts]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts
[guiceworks]: http://www.guice.works
[npm]: https://www.npmjs.com/get-npm
[pages]: https://github.com/turingschool/apply-webapp/tree/gh-pages
[prototype]: https://projects.invisionapp.com//share/87BC70RUV
[yarn]: https://yarnpkg.com/en/ 
[travis]: https://travis-ci.org/turingschool/apply-webapp
