class History extends HTMLElement {
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
          font-size: 1rem;
        }

        ul {
          list-style: none;
          padding: 0
        }

        input {
          width: 40%
        }

        input::placeholder {
          color:hsl(0, 0%, 0%)
        }

        button {
          width: 45%
        }

        button {
          padding: .5rem;
          background-color:hsl(0, 0%, 100%);
          font-weight: 600;
          border: none;
          border-radius: 5px
        }

        .history {
          padding: 1.5rem 1rem
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem
        }

        .history-reference {
          display: flex;
          justify-content: space-between;
        }

        .history-date {
          display: flex;
          justify-content: space-between
        }

        .history-list li {
          padding: 1rem;
          border-top: 2px solid hsl(0, 0%, 100%)
        }

        .history-product {
          display: flex;
          flex-direction: column;
          gap: 1rem
        }

        .history-product-main {
          display: flex;
          justify-content: space-between;
        }

        .history-product-main span {
          font-size: 1.2rem;
          font-weight: 600
        }

        .history-product-secondary {
          display: flex;
          justify-content: space-between
        }
        
        .history-product-secondary button {
          width: 30%;
          padding: .3rem
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
            border: 5px solid hsla(0, 0%, 0%, 1)
          }
        }

      </style>

      <section class="history">
        <form>
          <div class="history-reference">
            <input type="number" name="number" placeholder="Referencia del pedido">
            <button>Buscar por referencia</button>
          </div>
          <div class="history-date">
            <input type="date" name="date">
            <button>Buscar por fecha</button>
          </div>
        </form>
        <div class="history-list">
          <ul>
            <li>
              <div class="history-product">
                <div class="history-product-main">
                  <span>0000000002</span>
                  <span>180€</span>
                </div>
                <div class="history-product-secondary">
                  <span>02-05-2024 16:14</span>
                  <button>Ver pedido</button>
                </div>
              </div>
            </li>
            <li>
              <div class="history-product">
                <div class="history-product-main">
                  <span>0000000003</span>
                  <span>270€</span>
                </div>
                <div class="history-product-secondary">
                  <span>13-05-2024 17:09</span>
                  <button>Ver pedido</button>
                </div>
              </div>
            </li>
            <li>
              <div class="history-product">
                <div class="history-product-main">
                  <span>0000000004</span>
                  <span>360€</span>
                </div>
                <div class="history-product-secondary">
                  <span>20-05-2024 11:13</span>
                  <button>Ver pedido</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      `
  }
}

customElements.define('history-component', History)
