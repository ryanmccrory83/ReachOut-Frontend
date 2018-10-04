# ReachOut

> Veteran suicide prevention application

## Build Setup

``` bash
#fork this repository to your GitHub account

#clone this repository to your local directory with:
git clone https://github.com/ryanmccrory83/ReachOut-Frontend.git
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

#build and deploy script
npm run deploy to run build and deploy scripts simulaneously when running in production mode for firebase changes

#note:
You will need to comment out the production callback url and uncomment the development callback url in authService.js in order to get the Auth0 to work on your local server.  Reverse the steps if you would like to run this application in production.
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Summary
This is an application for veterans suffering from combat PTSD, who have a hard time connecting to civilian counselors due to the inate differences of military and civilian cultures.  ReachOut is designed to allow suicidal veterans to "reach out" to supporting veterans within their community to get the emotional support, guidance and comradarie that is direly needed. Combat veterans all share the same experiences overseas which is why I created this application to allow veterans to come together in support for one another. Rather than going to the Department of Veteran Affairs, where civilian doctors try to understand what is going on and overly prescribe medications that only make matters worse, a veteran has the chance to learn from veterans who have learned to overcome the effects of combat PTSD.  As a veteran who has battled with PTSD, I found it extremely comforting when other veterans spoke about shared experiences as well as tools and methods used to reduce stress caused by PTSD. It is built with a Vue.js framework that has been integrated with socket.io to create a real-time chat environment, GoogleMaps to allow users to post their locations for other supporting veterans to see the veteran in distress, as well as Auth0 to provide secure login with authentication so user data can be secure. It was deployed using Firebase. 

You can reach me through:
Email: ryanmccrory83@gmail.com
LinkedIn: linkedin.com/in/ryan-mccrory83/