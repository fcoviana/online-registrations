const fs = require('fs');
const Storage = require('../../app/contracts/storage');

module.exports = class LocalStorageAdapter extends Storage {
  async store(fileName, path, content) {
    await fs.writeFileSync(`${path}/${fileName}.json`, content);
    
    return true;
  }
}