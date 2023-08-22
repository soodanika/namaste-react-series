# NPM 
    NPM is not an abbreviation for node pacakage manager although it manages the pcakages and is the standard repository for all packages.

# Parcel/Webpack 
    These are both bundlers that are used to bundle our application to make it production ready by minifying and optimizing our code.

# .parcel-cache 
    this is a cache folder which is generated during the build where the intermediate compiled code is present to avoid recomiplation and reprocessing of the code.

# NPX 
    This is a command line tool that is used to execute the pacakges.

# dependencies vs Devdependencies
    dependecies are the pacakages that our required by our application to run properly in production
    whereas the Devdependecies are the packages that are required during the development and should not be included in production.

# Tree shaking
    This is a technique used in the bundling tools that helps in removing the dead code from the final bundle, this in turns help in reducing the size and load time.

# Hot Module Replacement HMR
    This is a fetaure in the bundlers that helps us to update the UI in real time.

# Parcel super powers
    - HMR - This is a fetaure in the bundlers that helps us to update the UI in real time, it helps us view the changes in browsers.
    - Tree Shaking - This is a technique used in the bundling tools that helps in removing the dead code from the final bundle, this in turns help in reducing the size and load time.
    - Local Server - It provides a local server to view the changes in the browser.
    - Faster build - It has the files cached which helps in faster build time.
    - Minification

# .gitignore 
    This is the file where we can include all the files and folders that we don't want to push to git.
    We should avoid putting the folders that can be re-generated. eg - node-modules, parcel-cache etc.

# package vs package-lock.json
    pacakge.json contains all the configuartions for the packages i.e it keeps track of what version of package to be installed.
    package-lock.json keeps track of the exact version of the package installed.

# package-lock should not be modified 
    This is because a direct cahnge in the package-lock.json acn lead to errors and version conflicts.

# node-modules
    This is the folder that contains all the packages and the code for those packages.

# dist folder 
    This folder contains the final optimized and minified version of our application.

# browserslist
    This is used to specify the list of browsers that our application can support.

# carat vs tilde
    carat will keep the major version fixed and will automatically upgrade to the next minor version.
    tilde will keep the major and minor version fixed and will automatically upgrade to the next patch version.