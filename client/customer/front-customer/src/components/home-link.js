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

        button {
          background-color: hsl(0, 0%, 0%);
          border: none;
        }

        .home-link svg{
          fill: hsl(0, 0%, 100%);
          display: flex;
          height: 2rem;
          width: 2rem;
          cursor: pointer;
        }

      </style>

      <button class="home-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
      </button>
    `
  }
}

customElements.define('home-link-component', HomeLink)
