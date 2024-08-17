import { LitElement, html } from 'lit';
import Utils from '../utils/utils';
import Config from '../config/config';
import CheckUserAuth from '../pages/auth/check-user-auth';

class StoryHeader extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    CheckUserAuth.checkLoginState();
  }

  _userLogOut(event) {
    event.preventDefault();

    try {
      Utils.hilangkanNamaPengguna();
      Utils.hilangkanTokenPengguna(Config.USER_TOKEN_KEY);
      CheckUserAuth.checkLoginState();
    } catch (error) {
      console.error(error);
    }

    window.location.href = '/auth/login.html';
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
            <button @click="${this._userLogOut}" class="btn btn-secondary ms-2">
              Logout
            </button>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('story-header', StoryHeader);
