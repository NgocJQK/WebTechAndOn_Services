function rot13(str) {
    let decodedStr = "";
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        decodedStr += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      } else {
        decodedStr += str[i];
      }
    }
    return decodedStr;
  }
  
  rot13("SERR PBQR PNZC");