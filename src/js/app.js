setTimeout(() => {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h1 class="text-2xl font-bold mb-4">Loaded Content</h1>
    <p class="mb-2">This is the actual content loaded after a short delay.</p>
    <p>More meaningful data appears here.</p>
  `;
}, 1500);

import { pokus } from "./pokus";