# Mortarboard
The front-end [WebApp client][app] to Apply.

👋🎓 

&raquo; [Staging App][staging]

&raquo; [Production App][production]

Mortarboard is a [Create React App][cra] built with [Apollo][apollo] for
consuming the [Apply GraphQL API][api].

## Design
[Guiceworks][guiceworks] created the UX flows, designs and [Invision prototype][prototype].

## Development Requirements
For development, you will need [Node.js][node] installed on your machine. A
[Current or LTS version of Node.js][lts] should do the trick and gets installed
through [homebrew][brew].

```sh
brew install node
```

This project prefers [yarn][yarn] over [npm][npm] as it's package manager. You
can also install [yarn][yarn] through [homebrew][brew].

```sh
brew install yarn
```

To setup a local environment, override the default [.env](.env) variables:

```sh
cp .env .env.local
```

:raising_hand_woman: if you need any tokens. 

Next, install the project dependencies:

```sh
yarn install
```

Normal [Create React App scripts][cra_scripts] are now available:

```sh
yarn build # Creates the prodution build
yarn flow  # Runs the Flow type checker
yarn lint  # Lints the project using eslint-config-muvehealth
yarn start # Starts the development environment
yarn test  # Runs the Jest test suite
```

View the [package.json](package.json) file for a list of dependencies and
configuration options. To learn more about a dependency use npm's `home` command:

```sh
npm home ramda
```

## CI and Deployments
[![CircleCI Build Status](https://circleci.com/gh/turingschool/mortarboard/tree/master.svg?style=svg)](https://circleci.com/gh/turingschool/mortarboard/tree/master)

The following commands must pass on [CI][circle] for deployments to occur.

```sh
yarn flow
yarn lint
yarn test
```

[CircleCI][circle] will auto deploy to the S3 buckets:

&raquo; [Staging][staging]: Auto deployed when the master branch passes

&raquo; [Production App][production]: Auto deployed when a tagged commit passes

Both S3 buckets use CloudFront as a CDN.

:raising_hand_man: if you need access to S3 or CloudFront

<!-- Links -->
[api]: https://github.com/turingschool/apply
[apollo]: https://www.apollographql.com/docs/react/
[app]: https://mortarboard.turing.io
[brew]: https://brew.sh
[circle]: https://circleci.com/gh/turingschool/mortarboard
[cra]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
[cra_scripts]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts
[guiceworks]: http://www.guice.works
[lts]: https://github.com/nodejs/Release#nodejs-release-working-group
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/get-npm
[pages]: https://github.com/turingschool/mortarboard/tree/gh-pages
[production]: http://mortarboard.turing.io
[prototype]: https://projects.invisionapp.com//share/87BC70RUV
[staging]: http://mortarboard-staging.turing.io
[yarn]: https://yarnpkg.com
