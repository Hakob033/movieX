class FilmCard extends HTMLElement {
  title: string;
  imageurl: string;
  date: string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.imageurl = this.getAttribute("image-url") || "";
    this.title = this.getAttribute("title") || "";
    this.date = this.getAttribute("date") || "";
    console.log(this.imageurl);
  }

  static get observedAttributes() {
    return ["title", "image-url", "date"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      if (name === "image-url") this.imageurl = newValue;
      if (name === "title") this.title = newValue;
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
        }
        .card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .card .content {
          display:flex;
          gap: 0.5em;
          padding: 1rem;
        }
        .card h3 {
          font-family: Poppins;
          font-size: 14px;
          font-weight: 600;
          line-height: 19.6px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
          .title{
            width: 70%;
          }
      </style>

      <div class="card">
         <img src="${this.imageurl}" alt="${this.title}" />
         <div class="content">
           <h3 class="title">${this.title}</h3>
           <h3>(${this.date.split("-")[0]})</h3>
         </div>
      </div>
    `;
  }
}

customElements.define("film-card", FilmCard);

// class FilmCard extends HTMLElement {
//   title: string;
//   imageUrl: string;

//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });

//     this.title = this.getAttribute("title") || "";
//     this.imageUrl = this.getAttribute("imageUrl") || "";
//   }

// static get observedAttributes() {
//   return ["title", "imageUrl"];
// }

// attributeChangedCallback(name: string, oldValue: string, newValue: string) {
//   if (oldValue !== newValue) {
//     if (name === "title") this.title = newValue;
//     if (name === "imageUrl") this.imageUrl = newValue;
//     this.render();
//   }
// }

//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     this.shadowRoot!.innerHTML = `
//       <style>
//         .card {
//           background-color: white;
//           border-radius: 0.5rem;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//           width: 100%;
//         }
//         .card img {
//           width: 100%;
//           height: auto;
//         }
//         .card .content {
//           padding: 1rem;
//         }
//         .card h3 {
//           font-size: 0.875rem;
//           font-weight: 600;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//       </style>

//       <div class="card">
//         <img src="${this.imageUrl}" alt="${this.title}" />
//         <div class="content">
//           <h3>${this.title}</h3>
//         </div>
//       </div>
//     `;
//   }
// }

// customElements.define("film-card", FilmCard);
