Array.from(document.getElementsByTagName("tr")).forEach(function(t){var e=t.querySelectorAll("td, th"),n=e[e.length-1];if(t.querySelector("th")){var r=document.createElement("th");r.textContent="".concat(e[1].textContent),t.insertBefore(r,n);return}var o=document.createElement("td");o.textContent="".concat(e[1].textContent),t.insertBefore(o,n)});
//# sourceMappingURL=index.63b175de.js.map
