import { LitElement, html, css } from 'lit'

class CompanyProfile extends LitElement {
  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  static styles = css`
    .head {
      text-align: center;
    }

    p {
      font-size: 1.2rem;
    }
  `

  render() {
    return html`
      <div class="container">
        <div class="head">
          <h1 class="text-success">PT. StorySphere,</h1>
        </div>
        <div class="body">
          <p>
            ${msg(html`
            StorySphere adalah aplikasi revolusioner yang membawa pengguna dalam petualangan berbagi cerita dan pengalaman dengan cara yang penuh kreativitas dan makna. 
            Di sini, setiap kisah hidup bisa diabadikan dan dibagikan, dari momen-momen sederhana hingga pencapaian besar yang mengubah hidup.

            Dengan StorySphere, Anda dapat:
            
            - Menghidupkan Kenangan: Abadikan setiap momen berharga dengan narasi visual yang memukau.
            - Berempati dan Terhubung: Temukan dan rasakan cerita orang lain dari berbagai latar belakang.
            - Merayakan Kreativitas: Ungkapkan kisah Anda melalui foto indah dan tulisan inspirasional.
            
            Platform ini mengajak Anda untuk menyimpan kenangan, merasakan empati, dan merayakan kehidupan melalui cerita-cerita penuh warna. 
            StorySphere menghubungkan orang-orang dengan pengalaman yang mendalam dan makna yang inspiratif, menjadikan setiap cerita berharga dan setiap momen berarti.
            
            Dengan StorySphere, dunia menjadi kanvas untuk cerita-cerita yang menginspirasi, 
            membantu kita merangkul keindahan dan makna di setiap langkah perjalanan hidup kita.
            `)}
          </p>
        </div>
      </div>
    `
  }
}
customElements.define('company-profile', CompanyProfile)

export default CompanyProfile
