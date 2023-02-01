const names = ['anna','susy','bob','john','susan'];
const lastNames = "shakeandBake";
const fullNames=[];

for (i=0 ; i < names.length ; i++){
     fullNames.push(`${names[i]} ${lastNames}`);
}
console.log(fullNames);