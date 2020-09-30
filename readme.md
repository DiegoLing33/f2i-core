# F2I Core 0.1.0 &middot; [![GitHub license](https://img.shields.io/badge/license-Apache_2.0-green.svg)](https://github.com/DiegoLing33/f2i/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/f2i.core.svg?style=flat)](https://www.npmjs.com/package/f2i.core)
<img style="height: 100px" src="https://github.com/DiegoLing33/f2i/blob/master/resources/logo.png?raw=true" alt="logo" />

File to image utility


## API

You can import library to create your own projects. Just import F2I
```javascript
import F2I from "f2i.core";
```

### Text -> Image
```javascript
F2I.textToImage( text ).then( image => image.write( path ));
```

- Param `text` - this is the text to encode
- Param `path` - this is the path where image will be saved

### Image -> Text
```javascript
F2I.imagePathToText( path ).then(text => console.log(text));
```

- Param `path` - this is the path to your `png` image file

This function returns the `Promis<string>`.
