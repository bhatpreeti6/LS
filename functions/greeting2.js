function localGreet(code) {
  let language = extractLanguage(code);
  let region = extractRegion(code); 
  switch(language) {
    case 'en':
      switch(region) {
        case 'US':
          return 'Hi!';
        case 'GB':
          return 'Hello';
        case 'AU':
          return 'Howdy'
      }
      
      
    case 'fr':
      return 'Salut!'
      
    case 'pt':
      return 'Ola';

  }
}
function extractRegion(code) {
  return code.split('.')[0].split('_')[1];
}
function extractLanguage(code) {
  return code.split('_')[0];
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'

