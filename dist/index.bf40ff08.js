let e;function t(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var r=globalThis,o={},a={},l=r.parcelRequire94c2;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},r.parcelRequire94c2=l);var n=l.register;n("7Ugvg",function(e,r){t(e.exports,"apiConfig",()=>o),t(e.exports,"fetchProducts",()=>a);let o={tmdbApiKey:"87596f432dd011ebe7fdd8cc1764f5d9",tmdbBaseUrl:"https://api.themoviedb.org/3",imageBaseUrl:"https://image.tmdb.org/t/p/w500"},a=async()=>{try{let e=await fetch(o.tmdbBaseUrl);if(!e.ok)throw Error(`${e.status}. Something went wrong`);return await e.json()}catch(e){console.error(e)}}}),n("9Z4le",function(e,r){t(e.exports,"addToJournal",()=>o),t(e.exports,"removeCard",()=>a);let o=e=>{let t;let r=JSON.parse(localStorage.getItem("journal"))||[];t=r.some(t=>t.id===e.id)?r:[...r,e],localStorage.setItem("journal",JSON.stringify(t))},a=e=>{let t=document.querySelector(`#movie-card-${e.id}`);t&&t.remove();let r=JSON.parse(localStorage.getItem("journal"))||[];r=r.filter(t=>t.id!==e.id),localStorage.setItem("journal",JSON.stringify(r))}});var i=l("7Ugvg"),s=l("9Z4le");const d=document.querySelector("#search-bar"),c=document.getElementById("movie-list"),g=document.getElementById("mobile-menu");let u=JSON.parse(localStorage.getItem("journal"))||[],m=JSON.parse(localStorage.getItem("favorites"))||[],p=[];async function f(){let e=await fetch(`${i.apiConfig.tmdbBaseUrl}/movie/popular?api_key=${i.apiConfig.tmdbApiKey}`);return await e.json()}async function b(){try{p=(await f()).results,y("")}catch(e){console.error("Error fetching popular movies:",e)}}async function y(e){if(c)try{if(e){let t=p.filter(t=>t.title.toLowerCase().includes(e.toLowerCase()));c.innerHTML="",t.length?t.forEach(e=>{let t=h(e);c.appendChild(t)}):c.innerHTML=`<p class="text-white">No movies found matching "${e}"</p>`}else c.innerHTML="",p.forEach(e=>{let t=h(e);c.appendChild(t);let r=t.querySelector(`#add-button-${e.id}`);null!==u&&(r.style.backgroundColor=u.find(t=>t.id===e.id)?"#28A745":"bg-yellow-400")})}catch(e){console.error("Error displaying movies:",e),c.innerHTML="<p>Error fetching movies. Please try again later.</p>"}}function h(e){let t=document.createElement("div");return t.className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105",t.innerHTML=`
    <img
      src="${i.apiConfig.imageBaseUrl+e.poster_path}"
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
      <button id="add-button-${e.id}"
        class="w-full bg-yellow-400 text-gray-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Add to Journal
      </button>
    </div>
  `,t.querySelector(`#add-button-${e.id}`).addEventListener("click",()=>{var t;(0,s.addToJournal)(e),m.push(e),t=e.id,localStorage.setItem(String(t),JSON.stringify(m));let r=document.getElementById(`add-button-${e.id}`);m.some(t=>t===e)&&(r.style.backgroundColor="#28a745"),alert(`Added "${e.title}" to your Journal!`)}),t}document.getElementById("menu-toggle").addEventListener("click",()=>{g.classList.toggle("hidden")}),d.addEventListener("input",()=>{clearTimeout(e),e=setTimeout(()=>{y(d.value.trim())},300)}),b();
//# sourceMappingURL=index.bf40ff08.js.map
