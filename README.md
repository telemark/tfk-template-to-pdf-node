[![Build Status](https://travis-ci.org/telemark/tfk-template-to-pdf-node.svg?branch=master)](https://travis-ci.org/telemark/tfk-template-to-pdf-node)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-template-to-pdf-node
This is a convenience module for creating pdf documents from templates by using node
like [pdftemplater-webservice-docker](https://github.com/telemark/pdftemplater-webservice-docker)

## Installation

From npm

```sh
$ npm install tfk-template-to-pdf-node
```

From GitHub

```sh
$ git clone git@github.com:telemark/tfk-template-to-pdf-node.git
```

cd into folder and run setup

```sh
$ npm run setup
```

## Usage

Pass in an options object.

**templateData** key:value for data to render with template
**templateFilepath**: path to .docx template
**documentFilepath**: where to save the rendered document
**pdfServiceUrl**: URL to pdf converter service

```javascript
'use strict'

const createPdfFromTemplate = require('tfk-template-to-pdf-node')
const options = {
  templateData: {
    'title': 'My title is none of your concerns',
    'description': 'Describe me as your best friend',
    'body': 'My body is beautiful'
  },
  templateFilepath: 'test/data/template.docx',
  documentFilepath: 'test/data/document.pdf'
}

pdfTemplater(options)
  .then(console.log)
.catch((err) => {
  console.error(err)
})
```

You can also use callbacks

## License
[MIT](LICENSE)
