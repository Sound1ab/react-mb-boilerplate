HTML-REACT-WEBPACK-ES6
=================

##Structure

All dev work takes place within the src folder. Public acts as an intermediary for webpack dev server, which will host assets from memory and link them to an index.html file that is copied over to this folder using webpack-html-plugin. Global assets (such as bootstrap style sheets) should be added to the public folder and linked up inside the index.html as if index.html existed in public. When building, webpack will crawl through all linked files from the input point and output into build. It will then copy over assets from the public folder and add to build.

##Javascript

Use the latest javascript ES6 standards: arrow functions, classes, deconstructing, import/export modules. Babel is setup to transpile this into ES5. Currently not workin on <=IE9.

##CSS

CSS modules are being implemented on a component by component basis. Global stylesheets are also used to pull in third party styles and unsemantic grid. PostCSS is implemented to autoprefix properties. Add whatever plugins you want in postcss.config.js.

##Webpack

Webpack is used for input/output destinations, CSS modules and linting (ESLint). Currently all js, jsx, css, images and fonts will run through webpack.
##Package.json

A lot of packages are being included, not all of them are relevant but I cba to tidy these up. Uncomment BundleAnalyzerPlugin in the webpack dev config to see which libray's the fattest.

##Installing
Clone the repo and npm install

##Running the dev server
npm run dev - prepare to feel like you work for nasa.

##Building for production
npm run build - build is cleaned each time this runs fyi.