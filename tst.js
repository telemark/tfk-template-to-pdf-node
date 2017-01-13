'use strict'

const pdfTemplater = require('./index')

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
