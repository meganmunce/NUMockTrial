var mcard = document.querySelector(".m");
var ecard = document.querySelector(".e");
var fcard = document.querySelector(".f");
var jcard = document.querySelector(".j");
var kcard = document.querySelector(".k");
var lcard = document.querySelector(".l");

mFlipped="false";
eFlipped="false";
fFlipped="false";
jFlipped="false";
kFlipped="false";
lFlipped="false";

const flipMcard = () => {
    if (mFlipped == "false") {
      mcard.classList.add("flipped");
      mFlipped = "true";
      return mFlipped;
    }
    else if (mFlipped == "true") {
      mcard.classList.remove("flipped");
      mFlipped = "false";
      return mFlipped;
    }
};

const flipEcard = () => {
    if (eFlipped == "false") {
      ecard.classList.add("flipped");
      eFlipped = "true";
      return eFlipped;
    }
    else if (eFlipped == "true") {
      ecard.classList.remove("flipped");
      eFlipped = "false";
      return eFlipped;
    }
};

const flipFcard = () => {
    if (fFlipped == "false") {
      fcard.classList.add("flipped");
      fFlipped = "true";
      return fFlipped;
    }
    else if (fFlipped == "true") {
      fcard.classList.remove("flipped");
      fFlipped = "false";
      return fFlipped;
    }
};

const flipJcard = () => {
    if (jFlipped == "false") {
      jcard.classList.add("flipped");
      jFlipped = "true";
      return jFlipped;
    }
    else if (jFlipped == "true") {
      jcard.classList.remove("flipped");
      jFlipped = "false";
      return jFlipped;
    }
};

const flipKcard = () => {
    if (kFlipped == "false") {
      kcard.classList.add("flipped");
      kFlipped = "true";
      return kFlipped;
    }
    else if (kFlipped == "true") {
      kcard.classList.remove("flipped");
      kFlipped = "false";
      return kFlipped;
    }
};

const flipLcard = () => {
    if (lFlipped == "false") {
      lcard.classList.add("flipped");
      lFlipped = "true";
      return lFlipped;
    }
    else if (lFlipped == "true") {
      lcard.classList.remove("flipped");
      lFlipped = "false";
      return lFlipped;
    }
};

document.querySelector('.m').onclick = flipMcard;
document.querySelector('.e').onclick = flipEcard;
document.querySelector('.f').onclick = flipFcard;
document.querySelector('.j').onclick = flipJcard;
document.querySelector('.k').onclick = flipKcard;
document.querySelector('.l').onclick = flipLcard;
