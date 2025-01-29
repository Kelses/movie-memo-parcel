function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis,r={},o={},a=t.parcelRequire94c2;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire94c2=a);var l=a.register;l("7Ugvg",function(t,r){e(t.exports,"apiConfig",()=>o),e(t.exports,"fetchProducts",()=>a);let o={tmdbApiKey:"87596f432dd011ebe7fdd8cc1764f5d9",tmdbBaseUrl:"https://api.themoviedb.org/3",imageBaseUrl:"https://image.tmdb.org/t/p/w500"},a=async()=>{try{let e=await fetch(o.tmdbBaseUrl);if(!e.ok)throw Error(`${e.status}. Something went wrong`);return await e.json()}catch(e){console.error(e)}}}),l("9Z4le",function(t,r){e(t.exports,"addToJournal",()=>o),e(t.exports,"removeCard",()=>a);let o=e=>{let t;let r=JSON.parse(localStorage.getItem("journal"))||[];t=r.some(t=>t.id===e.id)?r:[...r,e],localStorage.setItem("journal",JSON.stringify(t))},a=e=>{let t=document.querySelector(`#movie-card-${e.id}`);t&&t.remove();let r=JSON.parse(localStorage.getItem("journal"))||[];r=r.filter(t=>t.id!==e.id),localStorage.setItem("journal",JSON.stringify(r))}});var n=a("7Ugvg"),s=a("9Z4le");console.log((0,n.fetchProducts)()),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("movie-list"),t=JSON.parse(localStorage.getItem("journal"))||[];0===t.length?e.innerHTML='<p class="text-white">Your journal is empty. Start adding movies!</p>':t.forEach(t=>{let r=function(e){let t=document.createElement("div");return t.className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105",t.innerHTML=`
    <img
      src="${n.apiConfig.imageBaseUrl+e.poster_path}"
      alt="${e.title}"
      class="w-full h-64 object-cover"
    />
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-2">${e.title}</h2>
      <p class="text-sm text-gray-600 mb-2">
        <span class="font-semibold">Release Date:</span> ${e.release_date}
      </p>
      <p class="text-sm text-gray-600 mb-2">
        <span class="font-semibold">Language:</span> ${e.original_language}
      </p>
      <p class="text-sm text-gray-600 mb-4">
        <span class="font-semibold">Rating:</span> ${e.vote_average}
      </p>
      <button id="remove-button-${e.id}"
        class="w-full bg-orange-500 text-gray-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Remove
      </button>
    </div>
  `,t.querySelector(`#remove-button-${e.id}`).addEventListener("click",()=>{t.remove(),(0,s.removeCard)(e)}),t}(t);e.appendChild(r)})});
//# sourceMappingURL=journal.d624734e.js.map
