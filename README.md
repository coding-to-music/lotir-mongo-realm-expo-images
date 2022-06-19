# lotir-mongo-realm-expo-images

Share anything between your

phone and your computer

Have you ever wanted to share a file, or some text between your phone and your computer ?

Lotir is a simple way to share content between your devices.

# 🚀 Javascript full-stack 🚀

https://github.com/coding-to-music/lotir-mongo-realm-expo-images

https://lotir-mongo-realm-expo-images.vercel.app

From / By https://github.com/julien040/lotir

https://github.com/julien040/lotir

https://dev.to/julien41/lotir-share-link-and-images-between-your-phone-and-your-computer-5d36

https://lotir.ml

https://github.com/julien040/lotir/releases

![](https://raw.githubusercontent.com/julien040/lotir/master/assets/Architecture%20Scheme.png)

## Environment variables:

```java

const { Expo } = require("expo-server-sdk");
let expo = new Expo({ accessToken: context.values.get("expoKey") });

realm/realm_config.json
{
    "config_version": 20210101,
    "app_id": "lotir-mongo-realm-expo-images-qhlli",
    "name": "lotir-mongo-realm-expo-images",
    "location": "US-VA",
    "deployment_model": "GLOBAL",
    "environment": "production"
}

realm/values/expoKey.json
{
    "name": "expoKey",
    "value": "expo",
    "from_secret": true
}

realm/data_sources/mongodb-atlas/config.json
{
    "name": "mongodb-atlas",
    "type": "mongodb-atlas",
    "config": {
      "clusterName": "Cluster0",
      "readPreference": "primary",
      "wireProtocolEnabled": false
    }
  }

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/lotir-mongo-realm-expo-images.git
git push -u origin main
```

# Lotir

![Header](https://raw.githubusercontent.com/julien040/lotir/master/assets/Github%20header.png)

## What is Lotir ?

I've created this app because I couldn't support sending myself an email to share something on my phone.

Lotir is a simple app that allows you to share images and text between your phone and your computer.

- It's free
- No ads
- Simple to use
- Share text and images
- Temporary : Lotir keep your stuff for 7 days

[![Demo Image](https://img.youtube.com/vi/48bThHfEfug/0.jpg)](https://www.youtube.com/watch?v=48bThHfEfug "Lotir - Text sharing demo")

## How to use it ?

To use the app, you need to install it on your phone. Download it from [Github Release](https://github.com/julien040/lotir/releases). To access the computer app, just go to [lotir.ml](https://lotir.ml) and set a sync key.

If you want to know more about this project, it has been built for the MongoDB Atlas hackathon. Check the announcement post [here](https://dev.to/julien41/lotir-share-link-and-images-between-your-phone-and-your-computer-5d36).

## Development

### Project structure

This repository is monorepo. It contains the following sub-projects:

- `mobile` - Mobile apps (Expo)
- `desktop` - Desktop apps (Neutralino)
- `website` - Web app (Next.js)
- `realm` - Server side (Realm)
- `assets` - Some images and other assets

### Architecture

I've made a diagram on Figjam to help you understand the architecture of this project.

[**Diagram**](https://raw.githubusercontent.com/julien040/lotir/master/assets/Architecture%20Scheme.png)

### Contribute

If you want to contribute, you can fork this repository and make your changes. Then, you can push your changes using a pull request. Any help is welcome.

### License

    This project is licensed under the Apache 2.0 license.
