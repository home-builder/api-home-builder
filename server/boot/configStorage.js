'use strict';


const sha256= require('js-sha256');
module.exports= function(app) {
  app.dataSources.MediaFiles.connector.getFilename = (file, req, res) => {
    let originalName = file.name;

    let date = new Date();
    let _time = date.getTime()

    let _rs= originalName.split('.');
    // get tail of file
    let _extendTail = '.'  + _rs[_rs.length -1];
    
    let _indexImg = req.query.indexImg;
    // create new name
    
    let _aPartOfName = sha256(originalName);
    let newName = _aPartOfName + _time.toString() + '_' + _indexImg + _extendTail;
    return newName;
  }
}