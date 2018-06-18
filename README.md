# PhonegapDemoApp

PhonegapDemoApp is an application to demonstrate integration and usage of Streethawk plugin. 

[StreetHawk] is a mobile engagement automation library for your smartphone and tablet Apps.
Engage users in the right time using push notification, emails and sms, segment your user base, create geofences to trigger location based campaigns, analyse results and measure campaign performance. 
StreetHawk supports iOS and Android devices. 


## Steps for using the application
1. Clone the source code hosted in this repository
2. Add iOS platform using command

```  
    cordova platform add ios
```

3 Similarly add Android platform using command

```
   cordova platform add android
```

4. Add streethawk plugin using command

```
  cordova plugin add streethawkanalytics  --variable APP_KEY=MyFirstApp --variable URL_SCHEME="<URL_SCHEME_OF_APP>"

```
  where MyFirstApp is app_key registered with Streethawk servers.
  
5 Run the application using command 

* ios

```    
    cordova run ios
```   
    
* Android
   
```   
    cordova run Android
```    
## Streethawk plugin documentation
For details about Streethawk's plugin, please refer to [plugin documentation]. 

## Support
 For further information please contact us at support@streethawk.com  
  
[Streethawk]:http://streethawk.com/
[plugin documentation]:https://streethawk.freshdesk.com/solution/folders/5000254780


## Development

To use a development branch include the plugin like so:

```
  cordova plugin add "https://github.com/StreetHawkSDK/PhonegapPush.git#develop"  --variable APP_KEY=MyFirstApp --variable URL_SCHEME="<URL_SCHEME_OF_APP>"
```
