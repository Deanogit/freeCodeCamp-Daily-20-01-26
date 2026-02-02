// Consonant Case
// Given a string representing a variable name, convert it to consonant case using the following rules:

// All consonants should be converted to uppercase.
// All vowels (a, e, i, o, u in any case) should be converted to lowercase.
// All hyphens (-) should be converted to underscores (_).

function toConsonantCase(str) {
  console.log(str);
  // all consonants to uppercase
  const up = str.toUpperCase();
  console.log(up);
  // all vowels to lowercase
  const regex = /aeiou/gi;
  // put into array
  const arr = [];
  for (let i = 0; i < up.length; i++) {
    arr.push(up[i]);
  }
  console.log(arr);
  const lower = arr.map((letter) => {
    return regex.test(letter).toLowerCase();
  });

  console.log(lower);

  // all hyphens to underscores
  return str;
}
