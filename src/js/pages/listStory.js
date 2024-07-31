import { LitElement, html, css } from 'lit';

class ListStory extends LitElement {
  static styles = css`
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .loading-logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .custom-card {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;
    }

    .custom-card img {
      height: 200px;
      object-fit: cover;
    }

    .custom-card .card-body {
      padding: 1rem;
    }

    .alert {
      position: fixed;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1050;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      padding: 0.75rem 1.25rem;
      border-radius: 0.25rem;
    }

    .date {
      background-color: #4b0082;
      color: #ffffff; 
      display: inline-block;
      margin-top: 0.5rem;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
      border-radius: 5px; 
    }
  `;

  constructor() {
    super();
    this.stories = [];
    this.isLoading = false;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  async init() {
    await this._initialData();
    this.requestUpdate();
  }

  async _initialData() {
    this.isLoading = true;
    try {
      const fetchRecords = await fetch('/data/Data.json');
      const response = await fetchRecords.json();
      if (response && response.listStory) {
        this.stories = response.listStory;
      } else {
        console.log('Data tidak ditemukan dalam JSON.');
      }
    } catch (error) {
      console.log('Error :', error);
    }
    this.isLoading = false;

    // Hide alert after 4 seconds
    setTimeout(() => {
      const alertElement = document.querySelector('.alert');
      if (alertElement) {
        alertElement.remove();
      }
    }, 4000);
  }

  formatDate(dateString) {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }

  render() {
    if (this.isLoading) {
      return html`
        <div class="loading">
          <div class="loading-logo">
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow mx-3 text-warning" role="status"></div>
            <div class="spinner-grow text-success" role="status"></div>
          </div>
          <span class="mt-1">Mengambil data...</span>
        </div>
      `;
    } else {
      return html`
        <div class="alert" role="alert">
          <div>Berhasil mendapatkan data!</div>
        </div>

        <div class="row pt-4">
          ${this.stories.map((story) => {
            const formattedDate = this.formatDate(story.createdAt);

            return html`
              <div class="col-lg-4 col-md-6">
                <div class="card mb-4 custom-card">
                  <img src="${story.photoUrl}" class="card-img-top" alt="gambar" />
                  <div class="card-body">
                    <h5 class="card-title">${story.name}</h5>
                    <p class="card-text">${story.description}</p>
                    <span class="date">${formattedDate}</span>
                  </div>
                </div>
              </div>
            `;
          })}
        </div>
      `;
    }
  }
}

customElements.define('list-story', ListStory);

export default ListStory;
