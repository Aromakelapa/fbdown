# Facebook Video Downloader Scrapper
Scrap data from a Facebook video downloader and get direct info & url links from your Facebook video

## Install
```
npm install fbdown
```

## Changelog
- #### v1.0.0
  - Initial commit

## Usage
```
const fbdown = require('fbdown');

const link = "https://m.facebook.com/story.php?story_fbid=pfbid02tLvj3Z7nepbxPWETCoZuigV3pVCSQWbxUUMMsJ3AwLQvnJ6MwnyGh2XVuECone25l&id=100082950226013&mibextid=Nif5oz";

fbdown(link)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Issues & Contact
- Create issue session in [Github Repo](https://github.com/Aromakelapa/fbdown/issues)

- You can reach me on [Telegram](https://t.me/Aromakelapa)

### Thanks for using my module, Hope you forgive me if it shows an error, because I'm newbie at this :>
