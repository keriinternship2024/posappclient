String.prototype.format = function () {
  var args = arguments;
  return this.replace(/{([0-9]+)}/g, function (match, index) {
    return typeof args[index] == 'undefined' ? match : args[index];
  });
};
//https://stackoverflow.com/questions/47604040/how-to-get-data-returned-from-fetch-promise

async function fetchURL(url) {
    let formData = new FormData();
	var json = '';
    let promiseobject = await fetch(url, {
      method: "POST", 
      body: formData
    });
	
	return promiseobject.json();
    //alert('The file has been uploaded successfully.');
}