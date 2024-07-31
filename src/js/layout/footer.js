import { LitElement, html, css } from 'lit'

class StoryFooter extends LitElement {
  static styles = css`
    .main-footer {
      color: white;
      background-color: purple;
      padding: 1rem;
    }

    .container {
      text-align: center;
    }
  `

  render() {
    const date = new Date()
    const year = date.getFullYear()

    return html`
      <div class="main-footer">
        <div class="container">&copy; ${year} Copyright | lussyanast@gmail.com</div>
      </div>
    `
  }
}
customElements.define('story-footer', StoryFooter)
