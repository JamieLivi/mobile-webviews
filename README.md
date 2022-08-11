## Mobile Web Views Proof of Concept

[Expo web browser](https://docs.expo.dev/versions/v46.0.0/sdk/webbrowser/) provides access to the system's web browser and supports handling redirects.

For authentication, it uses [ASWebAuthenticationSession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession) under the hood.

| Auth Session Browser      	| Safari Browser       	| In-app WebView      	|
|---------------------------	|----------------------	|---------------------	|
| ![1](authsesh.png)           	| ![2](safari.png)      | ![3](inapp.png)    	|


### Web

<img src="web.png" alt="screenshot" width="500"/>