import { LitElement, html, css } from 'lit';

class AddStory extends LitElement {
  static styles = css`
    .body {
      margin-top: 2rem;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
      padding: 2rem;
      background-color: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-bottom: 1.5rem;
      font-family: 'Arial', sans-serif;
      color: #343a40;
      text-align: center;
    }

    .form-label {
      font-weight: bold;
      color: #495057;
      margin-top: 1rem;
    }

    .form-control {
      border-radius: 0.25rem;
      margin-bottom: 1rem;
    }

    .btn-primary {
      background-color: purple;
      border-color: purple;
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
      width: 100%;
    }

    .btn-primary:hover {
      background-color: darkpurple;
      border-color: darkpurple;
    }

    .invalid-feedback {
      color: red;
    }

    .text-center {
      text-align: center;
    }

    .form-section {
      margin-bottom: 1rem;
    }

    .link-primary {
      color: purple;
      text-decoration: none;
    }

    .link-primary:hover {
      text-decoration: underline;
    }
  `;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="body mt-4">
        <h2>Create Story</h2>
        <form class="was-validated">
          <div class="form-section">
            <label for="validationTextarea" class="form-label">Description</label>
            <textarea
              class="form-control"
              id="validationTextarea"
              placeholder="Required example textarea"
              required
              oninvalid="this.setCustomValidity('Tidak boleh kosong')"
              oninput="this.setCustomValidity('')"
            ></textarea>
            <div class="invalid-feedback">Wajib mengisi deskripsi.</div>
          </div>
          <div class="form-section">
            <label for="validationFile" class="form-label">Image Story</label>
            <input
              type="file"
              class="form-control"
              aria-label="file example"
              id="validationFile"
              required
              oninvalid="this.setCustomValidity('Tidak boleh kosong')"
              oninput="this.setCustomValidity('')"
            />
            <div class="invalid-feedback">Wajib mengunggah gambar</div>
          </div>
          <div class="form-section text-center">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
        <div class="text-center mt-3">
          <a href="/" class="link-primary">Back to Home</a>
        </div>
      </div>
    `;
  }
}

customElements.define('add-story', AddStory);

export default AddStory;
