const fs = require('fs')
const unoconv = require('unoconv2')
const isFile = require('file-exists')

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options')
    }
    if (!options.temporaryDocxFile) {
      throw Error('Missing required input: options.temporaryDocxFile')
    }
    if (!options.documentFilepath) {
      throw Error('Missing required input: options.documentFilepath')
    }

    const listenerOpts = {
      port: options.port || '2002'
    }
    unoconv.convert(options.temporaryDocxFile, 'pdf', listenerOpts, (err, result) => {
      if (err) {
        return reject(err)
      }
      fs.writeFileSync(options.documentFilepath, result)
      if (!isFile(options.documentFilepath)) {
        return reject('Unknown error')
      }
      fs.unlinkSync(options.temporaryDocxFile)
      const message = `Converted ${options.temporaryDocxFile} to ${options.documentFilepath}`
      return resolve(message)
    })
  })
}
