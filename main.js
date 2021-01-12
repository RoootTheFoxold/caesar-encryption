function encrypt() {
  var text = getText();
  var code = getCode();

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabet_lc = alphabet.toLowerCase();
  var csarcode = alphabet;
  var csarcode_lc = alphabet_lc;

  var ta = text.split("");
  var out = "";


  var custom = isNaN(code*1);

  // if custom, use custom as caesar code
  if(custom) {
    csarcode = code.toUpperCase();
    csarcode_lc = csarcode.toLowerCase();
    if(alphabet.length != csarcode.length) {
      displayError("If the code is not a number, it needs to have the same length as the alphabet.");
      return;
    }
  }

  var aa = alphabet.split("");
  var aa_lc = alphabet_lc.split("");
  var ca = csarcode.split("");
  var ca_lc = csarcode_lc.split("");

  // if not custom, calculate caesar code based on code
  if(!custom) {
    var i = 0;
    while (i < code) {
      // calculate uppercase code
      var fe = ca[0];
      ca = ca.splice(1);
      ca = ca.concat(fe);
      // calculate lowercase code
      var fe_lc = ca_lc[0];
      ca_lc = ca_lc.splice(1);
      ca_lc = ca_lc.concat(fe_lc);
      i++;
    }
  }

  // create the new text
  ta.forEach(l => {
    // if letter is actually a letter
    if(l.length == 1 && l.match(/[a-z]/i)) {
      if(l == l.toUpperCase()) {
        var i = aa.findIndex((e) => e == l);
        out = out+ca[i];
      } else {
        var i = aa_lc.findIndex((e) => e == l);
        out = out+ca_lc[i];
      }
    } else {
      out = out+l;
    }
  });
  displayResult(out);
}

// decrypt function
function decrypt() {
  var text = getText();
  var code = getCode();

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabet_lc = alphabet.toLowerCase();
  var csarcode = alphabet;
  var csarcode_lc = alphabet_lc;

  var ta = text.split("");
  var out = "";

  var custom = isNaN(code*1);

  // if custom, use custom as caesar code
  if(custom) {
    csarcode = code.toUpperCase();
    csarcode_lc = csarcode.toLowerCase();
    if(alphabet.length != csarcode.length) {
      displayError("If the code is not a number, it needs to have the same length as the alphabet.");
      return;
    }
  }

  var aa = alphabet.split("");
  var aa_lc = alphabet_lc.split("");
  var ca = csarcode.split("");
  var ca_lc = csarcode_lc.split("");

  // if not custom, calculate caesar code based on code
  if(!custom) {
    var i = 0;
    while (i < code) {
      // calculate uppercase code
      var fe = ca[0];
      ca = ca.splice(1);
      ca = ca.concat(fe);
      // calculate lowercase code
      var fe_lc = ca_lc[0];
      ca_lc = ca_lc.splice(1);
      ca_lc = ca_lc.concat(fe_lc);
      i++;
    }
  }

  // create the new text
  ta.forEach(l => {
    // if letter is actually a letter
    if(l.length === 1 && l.match(/[a-z]/i)) {
      if(l == l.toUpperCase()) {
        var i = ca.findIndex((element) => element == l);
        out = out+aa[i];
      } else {
        var i = ca_lc.findIndex((element) => element == l);
        out = out+aa_lc[i];
      }
    } else {
      out = out+l;
    }
  });
  displayResult(out);
}

function displayResult(text) {
  document.getElementById("result").className = "text";
  document.getElementById("result").innerHTML = text;
}

function displayError(text) {
  document.getElementById("result").className = "redtext";
  document.getElementById("result").innerHTML = "Error: " + text;
}

function getText() {
  return document.getElementById("text").value;
}

function getCode() {
  return document.getElementById("code").value;
}
