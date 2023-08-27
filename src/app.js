/* eslint-disable */
  let pronoun = ["the", "our", "your", "my"];
  let adj = ["great", "big", "fabulous", "wonderful", "silly", "superb"];
  let noun = ["jogger", "racoon", "goose", "tardigrade", "penguin", "clown"];
  let end = [".com", ".io", ".org", ".net"];
  let domainName = "";
  let domainNames = [];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in end) {
          domainName = [pronoun[i] + adj[j] + noun[k] + end[l]].join();
          domainNames.push(domainName);
        }
      }
    }
  }
  console.log(domainNames);
