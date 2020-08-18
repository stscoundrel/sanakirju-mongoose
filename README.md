# Sanakirju Mongoose

MongoDB / Mongoose implementation of Sanakirju, a Karelian - Finnish dictionary with over 90 000 words. Based on data from Karjalan Kielen Sanakirja.

### Install

`yarn add sanakirju-mongoose`

### Usage

sanakirju-mongoose uses the core sanakirju to fetch all the dictionary data from XML files. The Mongoose example provides one function for populating your own MongoDB instance with data from Sanakirju.

```javascript
const toMongoose = require('sanakirju-mongoose')

// Your MongoDB / Mongoose config.
const config = {
  url: 'YOUR_CONNECTION_STRING_HERE',
  config: {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // Whatever other configs you require.
  },
}

/**
 * Run once to populate your DB.
 */
const populateMyDB = async() => {
  await toMongoose(config)
}

populateMyDB()
```

### Sources.

Words & translations are from [Karjalan Kielen Sanakirja](http://kaino.kotus.fi/cgi-bin/kks/kks_etusivu.cgi) created by [Institute for the Languages of Finland](https://www.kotus.fi/en). The original material is licenced under [Creative Commons International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
