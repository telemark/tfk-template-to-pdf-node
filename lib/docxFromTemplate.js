'use strict'

const dirname = require('path').dirname
const uuid = require('uuid')
const isFile = require('file-exists')
const generateDocx = require('generate-docx')

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options')
    }
    if (!options.templateData) {
      throw Error('Missing required input: options.templateData')
    }
    if (!options.templateFilepath) {
      throw Error('Missing required input: options.templateFilepath')
    }
    if (!isFile(options.templateFilepath)) {
      throw Error('options.templateFilepath is invalid')
    }
    if (!options.documentFilepath) {
      throw Error('Missing required input: options.documentFilepath')
    }

    const documentPath = `${dirname(options.documentFilepath)}/`
    const temporaryName = uuid.v4()
    const tempFile = `${documentPath}${temporaryName}.docx`
    const docxOpts = {
      template: {
        filePath: options.templateFilepath,
        data: options.templateData
      },
      save: {
        filePath: tempFile
      }
    }
    generateDocx(docxOpts, (err, message) => {
      if (err) {
        return reject(err)
      }
      if (!isFile(tempFile)) {
        return reject('Unknown error')
      }
      options.temporaryDocxFile = docxOpts.save.filePath
      delete options.templateData
      return resolve(options)
    })
  })
}
