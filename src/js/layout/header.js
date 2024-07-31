import { LitElement, html } from 'lit'

class StoryHeader extends LitElement {
  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <nav class="navbar fixed-top navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand main-title text-light" href="/">StorySphere</a>
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
                <a class="nav-link active text-light" aria-current="page" href="/company/companyProfile.html">BNZD Company</a>
              </li>
            </ul>
            <a class="btn btn-primary text-capitalize" href="/story/addStory.html" role="button">
              <i class="bi bi-plus-circle me-1"></i>Created Story
            </a>
            </form>
          </div>
        </div>
      </nav>
    `
  }
}
customElements.define('story-header', StoryHeader)
