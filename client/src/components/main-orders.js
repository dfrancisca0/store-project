class MainOrders extends HTMLElement {
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

        h2, span {
          margin: 0;
          padding: 0;
          color: hsla(0 , 0%, 100%, 1)
        }

        .main-orders {
          height: 100vh;
          margin: 1rem 1rem
        }



      </style>

      <section class="main-orders">
        <div class="-main-orders-title">
          <h2>Pedidos</h2>
        </div>
        <div class="main-search">
          <div class=""></div>
        </div>
        <div class="main-create">
          <div class=""></div>
        </div>
      </section>
    `
  }
}

customElements.define('main-orders-component', MainOrders)