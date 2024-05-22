class Confirmation extends HTMLElement {
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

        h2, p {
          margin: 0;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif
        }

        .confirmation {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 100vh;
          padding: 1rem;
          justify-content: center;
          text-align: center;
          background-color: hsl(257, 91%, 18%)
        }

        .confirmation-text {
          font-size: 1.2rem
        }

        .confirmation button {
          height: 2.2rem;
          width: 70%;
          background-color: hsla(0, 0%, 100%, 1);
          color: hsla(0, 0%, 0%, 1);
          border: none;
          border-radius: 15px;
          font-size: 1rem;
          font-weight: 550
        }



      </style>

      <section class="confirmation">
        <div class="confirmation-title">
          <h2>Pedido realizado con éxito</h2>
        </div>
        <div class="confirmation-text">
          <p>En breve recibirá un correo con los detalles.</p>
          <p>La referencia de su pedido es 000000002</p>
        </div>
        <div class="confirmation-button">
          <button>Volver a inicio</button>
        </div>
      </section>
      `
  }
}

customElements.define('confirmation-component', Confirmation)
