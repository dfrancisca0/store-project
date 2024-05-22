class HomeLink extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        .home-link {
          display: flex;
          width: 100%;
          cursor: pointer;
        }

/*    Make it work (img - svg)
        .home-link img {
          height: 1rem;
          width: 1rem;
          fill: hsla(0, 0%, 100%, 1)
        }
*/
      </style>

      <section class="home-link"></section>
      `

    const homeLink = this.shadow.querySelector('.home-link')
    const homeImage = document.createElement('div')
    homeImage.classList.add('home-image')
    homeLink.appendChild(homeImage)

    const itemLink = document.createElement('a')
    itemLink.setAttribute('href', '/')
    homeImage.appendChild(itemLink)

    const itemImage = document.createElement('img')
    itemImage.setAttribute('src', '/public/home.svg')
    itemLink.appendChild(itemImage)
  }
}

customElements.define('home-link-component', HomeLink)
