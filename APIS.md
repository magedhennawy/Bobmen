# Bobboard: APIS

## APIS:

### TWITTER:

Twitter uses OAuth to log in, so we need a redirection link, to allow users to log into their twitter account, to allow
Bobboard to have permission to access the user's feed.

link here: https://dev.twitter.com/oauth/application-only

After that, the api calls and documentation to get the statuses, and user timelines, are provided here:  https://dev.twitter.com/rest/public/timelines

but before all of that. we need to create an app, and get an api key: https://apps.twitter.com/ (PLEASE CALL IT BOBBOARD :) ) 



### GMAIL API
Sidenote: I dont really know if we want to support all emails, or just gmail for the sake of having api calls, because supporting more than 2 email types through their api would be very very tedious and extremely annoying. So going to leave the gmail here, and we can discuss this further.


to get the overview of the api, what you can do, etc.. : https://developers.google.com/gmail/api/guides/

Just like the twitter api, it also uses OAuth to authenticate. 
To get messages from the user that is authenticated, we use it like such: https://developers.google.com/gmail/api/v1/reference/users/messages/get

To get a list of emails: 
https://developers.google.com/gmail/api/v1/reference/users/messages/list

Would be neat if we could send emails, but that will come later on, i will throw the documentation link here anyways just in case: https://developers.google.com/gmail/api/v1/reference/users/messages/send


###Motivational Quotes API. 
https://theysaidso.com/api/#random
Will dive deeper into it later.. last feature.
