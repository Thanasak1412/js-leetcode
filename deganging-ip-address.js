// Defanging an IP Address
// Given a valid (IPv4) IP `address`, return a defanged version of IP address.
// A defanged IP address replaces every period "." with "[.]"
function defangIPaddr(address) {
  if (!address.length) {
    return "";
  }

  let result = "";
  for (const item of address) {
    if (item !== ".") {
      result += item;
    } else {
      result += "[.]";
    }
  }

  return result;
}

const input1 = "1.1.1.1";
console.log(defangIPaddr(input1));

const input2 = "255.100.50.0";
console.log(defangIPaddr(input2));

// OPTIMIZE
function usingRegex(address) {
  if (!address.length) {
    return "";
  }

  return address.replace(/\./g, "[.]");
}

console.log(usingRegex(input1));
console.log(usingRegex(input2));
