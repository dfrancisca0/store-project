class Summary extends HTMLElement {
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
          font-family: ;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: 1.2rem;
          font-weight: 550
        }

        .order {
          height: 100vh;
          padding: 1rem;
          background-color: hsl(257, 91%, 18%);
        }

        .order-product {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 80vh;
          max-height: 80vh;
          overflow-y: scroll
        }

        .product-main {
          display: flex;
          justify-content: space-between
        }

        .product-main-name {

        }

        .product-main-specs {

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

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
            border: 5px solid hsla(0, 0%, 0%, 1)
          }
        }

        .order-summary-button {
          display: flex;
          justify-content: center;
          bottom: 0
        }
        .order-summary-button button {
          height: 2.5rem;
          width: 80%;
          padding: .5rem;
          border: none;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 550
        }

      </style>

      <section class="order">
        <div class="order-product">
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
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="order-summary-button">
          <button>Finalizar pedido</button>
        </div>
      </section>
      `
  }
}

customElements.define('summary-component', Summary)
