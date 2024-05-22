class Order extends HTMLElement {
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

        .plus-minus-button {
          display: flex;
          justify-content: flex-end
        }

        .plus-minus-button button {
          width: 15%;
          margin: 0;
          padding: .5rem .5rem;
          border: none; 
          cursor: pointer;
          background-color: hsla(0, 0%, 100%, 1);
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
        }

        .plus-minus-button input {
          width: 5%;
          margin: 0;
          padding: .6rem .6rem;
          background-color: hsl(240, 28%, 46%);
          color: hsl(0, 0%, 100%, 1);
          border: none; 
          font-weight: bold;
          text-align: center; 
          outline: none;
        }

        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
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
            <div class="plus-minus-button">
              <button class="minus">−</button>
                <input type="number" value="1" class="plus-minus-input"/>
              <button class="plus">+</button>
            </div>
          </div>
        </div>
        <div class="order-summary-button">
          <button>Ver pedido</button>
        </div>
      </section>
      `
  }
}

customElements.define('order-component', Order)
