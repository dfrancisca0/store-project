class Home extends HTMLElement {
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

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .menu {
          background-color: hsl(257, 91%, 18%);
          height: 100vh;
          padding: 2rem 3rem;
        }

        .menu-list {
          align-items: center;
        }

        .menu-list ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;       
        }

        .menu button {
          display: flex;
          flex-direction: column;
          height: 3rem;
          width: 100%;
          color: hsl(271, 69%, 32%);
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 20px;
          font-size: 1.2rem;
          font-weight: 550
        }

      </style>

      <section class="menu">
        <div class="menu-list">
          <ul>
            <li>
              <button>Nuevo pedido</button>
            </li>
            <li>
              <button>Pedidos anteriores</button>
            </li>
          </ul>
        </div>
      </section>
      `
  }
}

customElements.define('home-component', Home)
