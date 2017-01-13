'use strict'

const docxFromTemplate = require('./lib/docxFromTemplate')
const convertPdf = require('./lib/convertPdf')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    docxFromTemplate(options)
    .then(convertPdf)
    .then((data) => {
      if (callback) return callback(null, data)
      resolve(data)
    })
    .catch((err) => {
      if (callback) return callback(err)
      reject(err)
    })
  })
}
