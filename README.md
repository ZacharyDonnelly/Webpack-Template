![license](https://img.shields.io/badge/License-MIT-brightgreen) ![dependencies](https://img.shields.io/badge/dependencies-up_to_date-brightgreen)
![webpack](https://img.shields.io/badge/webpack-4.41.6-informational)
# Webpack-Template
## I created this template to save me the trouble of recreating for future projects.
Template contains Webpack w/ Code-Splitting, lazy-loading &amp; TypeScript support.

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save-dev webpack
```

Install with yarn:

```bash
yarn add webpack --dev
```
<br />

## I extracted the following from [Webpack's GitHub](https://github.com/webpack/webpack):

<br />

### [Plugins](https://webpack.js.org/plugins/)

webpack has a [rich plugin
interface](https://webpack.js.org/plugins/). Most of the features
within webpack itself use this plugin interface. This makes webpack very
**flexible**.

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|[mini-css-extract-plugin][mini-css]|![mini-css-npm]|![mini-css-size]|Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.|
|[compression-webpack-plugin][compression]|![compression-npm]|![compression-size]|Prepares compressed versions of assets to serve them with Content-Encoding|
|[i18n-webpack-plugin][i18n]|![i18n-npm]|![i18n-size]|Adds i18n support to your bundles|
|[html-webpack-plugin][html-plugin]|![html-plugin-npm]|![html-plugin-size]| Simplifies creation of HTML files (`index.html`) to serve your bundles|
|[extract-text-webpack-plugin][extract]|![extract-npm]|![extract-size]|Extract text from a bundle, or bundles, into a separate file|

[common-npm]: https://img.shields.io/npm/v/webpack.svg
[extract]: https://github.com/webpack-contrib/extract-text-webpack-plugin
[extract-npm]: https://img.shields.io/npm/v/extract-text-webpack-plugin.svg
[extract-size]: https://packagephobia.now.sh/badge?p=extract-text-webpack-plugin
[mini-css]: https://github.com/webpack-contrib/mini-css-extract-plugin
[mini-css-npm]: https://img.shields.io/npm/v/mini-css-extract-plugin.svg
[mini-css-size]: https://packagephobia.now.sh/badge?p=mini-css-extract-plugin
[component]: https://github.com/webpack-contrib/component-webpack-plugin
[component-npm]: https://img.shields.io/npm/v/component-webpack-plugin.svg
[component-size]: https://packagephobia.now.sh/badge?p=component-webpack-plugin
[compression]: https://github.com/webpack-contrib/compression-webpack-plugin
[compression-npm]: https://img.shields.io/npm/v/compression-webpack-plugin.svg
[compression-size]: https://packagephobia.now.sh/badge?p=compression-webpack-plugin
[i18n]: https://github.com/webpack-contrib/i18n-webpack-plugin
[i18n-npm]: https://img.shields.io/npm/v/i18n-webpack-plugin.svg
[i18n-size]: https://packagephobia.now.sh/badge?p=i18n-webpack-plugin
[html-plugin]: https://github.com/jantimon/html-webpack-plugin
[html-plugin-npm]: https://img.shields.io/npm/v/html-webpack-plugin.svg
[html-plugin-size]: https://packagephobia.now.sh/badge?p=html-webpack-plugin

### [Loaders](https://webpack.js.org/loaders/)

webpack enables the use of loaders to preprocess files. This allows you to bundle
**any static resource** way beyond JavaScript. You can easily [write your own
loaders](https://webpack.js.org/api/loaders/) using Node.js.

Loaders are activated by using `loadername!` prefixes in `require()` statements,
or are automatically applied via regex from your webpack configuration.

#### Files

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|[raw-loader][raw]|![raw-npm]|![raw-size]|Loads raw content of a file (utf-8)|
|[val-loader][val]|![val-npm]|![val-size]|Executes code as module and considers exports as JS code|
|[url-loader][url]|![url-npm]|![url-size]|Works like the file loader, but can return a Data Url if the file is smaller than a limit|
|[file-loader][file]|![file-npm]|![file-size]|Emits the file into the output folder and returns the (relative) url|


[raw]: https://github.com/webpack-contrib/raw-loader
[raw-npm]: https://img.shields.io/npm/v/raw-loader.svg
[raw-size]: https://packagephobia.now.sh/badge?p=raw-loader
[val]: https://github.com/webpack-contrib/val-loader
[val-npm]: https://img.shields.io/npm/v/val-loader.svg
[val-size]: https://packagephobia.now.sh/badge?p=val-loader
[url]: https://github.com/webpack-contrib/url-loader
[url-npm]: https://img.shields.io/npm/v/url-loader.svg
[url-size]: https://packagephobia.now.sh/badge?p=url-loader
[file]: https://github.com/webpack-contrib/file-loader
[file-npm]: https://img.shields.io/npm/v/file-loader.svg
[file-size]: https://packagephobia.now.sh/badge?p=file-loader

#### Styling

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/webpack-contrib/style-loader">`<style>`</a>|![style-npm]|![style-size]|Add exports of a module as style to DOM|
|<a href="https://github.com/webpack-contrib/css-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>|![css-npm]|![css-size]|Loads CSS file with resolved imports and returns CSS code|
|<a href="https://github.com/webpack-contrib/less-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/less-63.svg"></a>|![less-npm]|![less-size]|Loads and compiles a LESS file|
|<a href="https://github.com/webpack-contrib/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|![sass-npm]|![sass-size]|Loads and compiles a Sass/SCSS file|
|<a href="https://github.com/shama/stylus-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/stylus.svg"></a>|![stylus-npm]|![stylus-size]|Loads and compiles a Stylus file|
|<a href="https://github.com/postcss/postcss-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/postcss.svg"></a>|![postcss-npm]|![postcss-size]|Loads and transforms a CSS/SSS file using [PostCSS](https://postcss.org)|


[style-npm]: https://img.shields.io/npm/v/style-loader.svg
[style-size]: https://packagephobia.now.sh/badge?p=style-loader
[css-npm]: https://img.shields.io/npm/v/css-loader.svg
[css-size]: https://packagephobia.now.sh/badge?p=css-loader
[less-npm]: https://img.shields.io/npm/v/less-loader.svg
[less-size]: https://packagephobia.now.sh/badge?p=less-loader
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg
[sass-size]: https://packagephobia.now.sh/badge?p=sass-loader
[stylus-npm]: https://img.shields.io/npm/v/stylus-loader.svg
[stylus-size]: https://packagephobia.now.sh/badge?p=stylus-loader
[postcss-npm]: https://img.shields.io/npm/v/postcss-loader.svg
[postcss-size]: https://packagephobia.now.sh/badge?p=postcss-loader
