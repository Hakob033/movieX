class FilmCard extends HTMLElement {
  title: string;
  genre: string;
  rating: number;
  posterUrl: string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.title = this.getAttribute("title") || "Unknown Title";
    this.genre = this.getAttribute("genre") || "Unknown Genre";
    this.rating = parseFloat(this.getAttribute("rating") || "0");
    this.posterUrl = this.getAttribute("posterUrl") || "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
        <style>
          @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
          .card {
            @apply bg-white rounded-lg shadow-lg overflow-hidden w-full;
          }
          .poster {
            @apply w-full h-64 object-cover;
          }
          .content {
            @apply p-4;
          }
          .title {
            @apply text-xl font-bold text-gray-800;
          }
          .genre {
            @apply text-sm text-gray-600 mt-1;
          }
          .rating {
            @apply flex items-center mt-2;
          }
          .star {
            @apply text-yellow-500;
          }
          .rating-number {
            @apply ml-2 text-sm font-semibold text-gray-700;
          }
        </style>
        
        <div class="card">
          <img src="${this.posterUrl}" alt="${this.title}" class="poster">
          <div class="content">
            <h2 class="title">${this.title}</h2>
            <p class="genre">${this.genre}</p>
            <div class="rating">
              <span class="star">⭐</span>
              <span class="rating-number">${this.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("film-card", FilmCard);
