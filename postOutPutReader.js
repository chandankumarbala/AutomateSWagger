/**
 * Created by chandan on 11/6/16.
 */
var fs = require('fs');

module.exports = {
    readDataFromJsonFile: readDataFromJsonFile
};


function readDataFromJsonFile(fileName){
var allProcessedRequest=new Array();
try{
    var jsonData=require(fileName);
    var interestedParams=new Array("headers","url","pathVariables","method","data","dataMode","description","descriptionFormat","responses","name");
    var allRawRequestObjects=jsonData.requests;

    for(i=0;i<allRawRequestObjects.length;i++){
        var requestObj={};
        for(j=0;j<interestedParams.length;j++){
            requestObj[interestedParams[j]]=allRawRequestObjects[i][interestedParams[j]];
        }
        allProcessedRequest[i]=requestObj;
    }
   //console.log(allProcessedRequest);
}
catch (e){
    if( /^win/.test(process.platform)==true)
        console.log("Windows path : C:\\\\file\\\\path\\\\file.json \n");
    else
        console.log("Unix path : /c/file/path/file.json");
}
return allProcessedRequest;
}
