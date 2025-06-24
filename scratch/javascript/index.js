const a = "9";
const b = "10";

console.log(a > b);

console.log(typeof null);
console.log(typeof undefined);

// ==================

// const a = "19";
// const b = "10";

// console.log(a > b);

// NOTE: intialize GTM
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  // j.async = true; // NOTE: trying loading synchronously to avoid any race conditions
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-P8NMF243");

window.open(
  isProd ? "https://nysaa.com" : "https://nysaa-dev.vercel.app",
  "_self",
);

var apiEndpoint = window.location.hostname.includes("nysaa-web")
  ? "https://us-central1-nessa-ecommerce-prod.cloudfunctions.net/fetchCategoryInfo"
  : "https://us-central1-nessa-ecommerce-prod.cloudfunctions.net/fetchCategoryInfo";

// NOTE: intialize GTM
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  // j.async = true; // NOTE: trying loading synchronously to avoid any race conditions
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-53BVWFW7");

function logWindowObject() {
  var nessa = window.nessa || {};
  var nysaa = window.nysaa || {};

  logSuccess({
    message: "## Detected Window Object ##",
    nessa: nessa,
    nysaa: nysaa,
  });
}
