import { LitElement, html } from 'lit';

class StoryHeader extends LitElement {
  createRenderRoot() {
    return this;
  }

  handleLogout() {
    localStorage.removeItem('authToken');

    window.location.href = '/auth/login.html';
  }

  isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
  }

  render() {
    return html`
      <style>
        .navbar-purple {
          background-color: purple !important;
        }

        .navbar .nav-link,
        .navbar .navbar-brand {
          color: white !important;
        }

        .btn-primary {
          background-color: purple !important;
          border-color: purple !important;
        }
      </style>
      <nav class="navbar fixed-top navbar-expand-lg navbar-purple">
        <div class="container-fluid">
          <a class="navbar-brand main-title" href="/">StorySphere</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/company/companyProfile.html">About Us</a>
              </li>
            </ul>
            <a class="btn btn-primary text-capitalize" href="/story/addStory.html" role="button">
              <i class="bi bi-plus-circle me-1"></i>Created Story
            </a>
            ${
              this.isLoggedIn()
                ? html`
                    <button @click="${this.handleLogout}" class="btn btn-secondary ms-2">
                      Logout
                    </button>
                  `
                : ''
            }
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('story-header', StoryHeader);
