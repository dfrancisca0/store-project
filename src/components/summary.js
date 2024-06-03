class Summary extends HTMLElement {
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
    const response = await fetch('src/data/products.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2, span {
          margin: 0;
          font-family: ;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: 1.2rem;
          font-weight: 550
        }

        .summary {
          height: 100vh;
          padding: 1rem;
          background-color: hsl(257, 91%, 18%);
        }

        .summary-product {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 70vh;
          max-height: 70vh;
          overflow-y: scroll
        }

        .product-main {
          display: flex;
          justify-content: space-between
        }

        .product-content {
          display: flex;
          justify-content: space-between;
          align-items: center
        }

        .product-details span{
          font-size: 1.1rem;
          font-weight: 500
        }

        .order-summary {
          display: flex;
          flex-direction: column;
          gap: 1rem
        }

        .order-summary-main {
          display: flex;
          justify-content: space-between;
        }

        .order-summary-main span {
          font-size: 1.7rem;
        }

        .order-summary-secondary span {
          font-weight: 400
        }

        .order-summary-button {
          display: flex;
          justify-content: center;
          bottom: 0
        }
        .order-summary-button button {
          height: 2.5rem;
          width: 80%;
          margin: 2rem;
          padding: .5rem;
          border: none;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 550
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
            border: 5px solid hsla(0, 0%, 0%, 1)
          }
        }

      </style>

      <section class="summary">
        <div class="summary-product">
          <div class="product-main">
            <div class="product-main-name">
              <span>Cocacola</span>
            </div>
            <div class="product-main-specs">
              <span>90.00€</span>
            </div>
          </div>
          <div class="product-content">
            <div class="product-description">
              <span>16u, 330ml</span>
            </div>
            <div class="product-details">
              <span>2 x 90.00€</span>
            </div>
          </div>
        </div>
        <div class="order-summary">
          <div class="order-summary-main">
            <span>Total</span>
            <span>180.00€</span>
          </div>
          <div class="order-summary-secondary">
            <span>Impuestos no incluidos</span>
          </div>
        </div>
        <div class="order-summary-button">
          <button>Finalizar pedido</button>
        </div>
      </section>
      `
  }
}

customElements.define('summary-component', Summary)
