class FilmCard extends HTMLElement {
  title: string;
  vote_average: string;
  imageurl: string;
  date: string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.imageurl = this.getAttribute("image-url") || "";
    this.title = this.getAttribute("title") || "";
    this.vote_average = this.getAttribute("vote-average") || "";
    this.date = this.getAttribute("date") || "";
  }

  static get observedAttributes() {
    return ["title", "image-url", "date", "vote_average"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      if (name === "image-url") this.imageurl = newValue;
      if (name === "title") this.title = newValue;
      if (name === "vote_average") this.vote_average = newValue;
      if (name === "date") this.date = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <style>
        .card {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .card .content {
          display: flex;
          gap: 0.5em;
          padding: 5px;
          justify-content: space-between;
          align-items: center;
        }
        .card h3 {
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 19.6px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .title {
          width: 70%;
        }
        .star-rating {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.2rem;
        }
        .star {
          width: 20px;
          height: 20px;
          background-color: #6306D9;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          cursor: pointer;
        }
        .half-star {
          background: linear-gradient(to right, #6306D9 50%, #ccc 50%); /* Half filled star */

        }
          span{
          color: black;
          }
    </style>

      <div class="card">
         <img src="${this.imageurl}" alt="${this.title}" />
         <div class="content">
           <h3 class="title">${this.title}</h3>
           <h3>(${this.date.split("-")[0]})</h3>
         </div>
         <div class="star-rating">
           <div class="star"></div>
           <div class="star"></div>
           <div class="star"></div>
           <div class="star"></div>
           <div class="half-star star"></div>
           <span>${this.vote_average.slice(0, 3)}</span>
         </div>
      </div>
    `;
  }
}

customElements.define("film-card", FilmCard);
