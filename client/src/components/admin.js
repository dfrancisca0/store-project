class Admin extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('src/data/purchase-details.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2, span, label {
          margin: 0;
          font-family: ;
          color: hsla(0, 100%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: .9rem;
        }

        .admin {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          padding: 2rem
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
            border: 5px solid hsla(0, 0%, 0%, 1)
          }
        }

      </style>

      <section class="admin">
        <slot></slot>
      </section>
      `
    
  }
}

customElements.define('admin-component', Admin)
