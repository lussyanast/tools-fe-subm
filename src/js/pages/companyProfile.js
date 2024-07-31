import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class CompanyProfile extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }

    .head {
      text-align: center;
    }

    h1 {
      color:  purple;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }

    ul {
      margin-top: 1rem;
      list-style-type: none;
      padding-left: 0;
    }

    li::before {
      content: '•';
      color: #4b0082;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="head">
          <h1>PT. StorySphere</h1>
        </div>
        <div class="body">
          <p>
            ${msg(html`
              StorySphere adalah aplikasi revolusioner yang membawa pengguna dalam petualangan berbagi cerita dan pengalaman dengan cara yang penuh kreativitas dan makna.
              Di sini, setiap kisah hidup bisa diabadikan dan dibagikan, dari momen-momen sederhana hingga pencapaian besar yang mengubah hidup.
            `)}
          </p>
          <p>
            ${msg(html`
              Dengan StorySphere, Anda dapat:
            `)}
          </p>
          <ul>
            <li>${msg(html`Menghidupkan Kenangan: Abadikan setiap momen berharga dengan narasi visual yang memukau.`)}</li>
            <li>${msg(html`Berempati dan Terhubung: Temukan dan rasakan cerita orang lain dari berbagai latar belakang.`)}</li>
            <li>${msg(html`Merayakan Kreativitas: Ungkapkan kisah Anda melalui foto indah dan tulisan inspirasional.`)}</li>
          </ul>
          <p>
            ${msg(html`
              Platform ini mengajak Anda untuk menyimpan kenangan, merasakan empati, dan merayakan kehidupan melalui cerita-cerita penuh warna.
              StorySphere menghubungkan orang-orang dengan pengalaman yang mendalam dan makna yang inspiratif, menjadikan setiap cerita berharga dan setiap momen berarti.
            `)}
          </p>
          <p>
            ${msg(html`
              Dengan StorySphere, dunia menjadi kanvas untuk cerita-cerita yang menginspirasi,
              membantu kita merangkul keindahan dan makna di setiap langkah perjalanan hidup kita.
            `)}
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('company-profile', CompanyProfile);

export default CompanyProfile;
