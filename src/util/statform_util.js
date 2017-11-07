export function createChar(charData) {

  debugger
  return new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    let reqUrl = "https://pizza.com";

    req.open('GET', reqUrl, true);
    req.onload = () => {
      if (req.status === 200 && req.readyState === XMLHttpRequest.DONE) {
        const info = JSON.parse(req.responseText);
        resolve(info);
      } else {
        reject(console.log(req.responseText));
      }
    };
    req.send();
  });
}
