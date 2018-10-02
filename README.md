# reachout

> Veteran suicide prevention application

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

This is an application for veterans suffering from combat PTSD, who have a hard time connecting to civilian counselors due to the inate differences of military and civilian cultures.  ReachOut is designed to allow suicidal veterans to "reach out" to supporting veterans within their community to get the emotional support, guidance and comradarie that is direly needed. Combat veterans all share the same experiences overseas which is why I created this application to allow veterans to come together in support for one another. Rather than going to the Department of Veteran Affairs, where civilian doctors try to understand what is going on and overly prescribe medications that only make matters worse, a veteran has the chance to learn from veterans who have overcome the effects of combat PTSD.  As a veteran who has battled with PTSD, I found it extremely comforting when other veterans spoke about shared experiences as well as tools and methods used to reduce stress caused by PTSD. It is built with a Vue.js framework that has been integrated with socket.io to create a real-time chat environment, GoogleMaps to allow users to post their locations for other supporting veterans to see the veteran in distress, as well as Auth0 to provide secure login with authentication so user data can be secure.  