/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload;
{
  let pronoun = ["the", "our", "your", "my"];
  let adj = ["great", "wonderful", "silly", "superb"];
  let noun = ["goose", "tardigrade", "penguin", "clown"];
  let end = [".com", ".io", ".org", ".net\n"];
  let domainName = "";
  let domainNames = "";

  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of end) {
          domainName = `${i}${j}${k}${l}\n`;
          domainNames += domainName;
        }
      }
    }
  }
  console.log(domainNames);
  document.getElementById("body-p").innerHTML = domainNames;
}
