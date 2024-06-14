class Confirmation extends HTMLElement {
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
    const response = await fetch('src/data/checkout.json')
    this.data = await response.json()
  }

  async render () {
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

      <section class="confirmation"></section>
      `

    const confirmation = this.shadow.querySelector('.confirmation')
    const confirmationTitle = document.createElement('div')
    confirmationTitle.classList.add('confirmation-title')
    confirmation.appendChild(confirmationTitle)

    const titleElement = document.createElement('h2')
    titleElement.textContent = 'Pedido realizado con éxito'
    confirmationTitle.appendChild(titleElement)

    const confirmationText = document.createElement('div')
    confirmationText.classList.add('confirmation-text')
    confirmation.appendChild(confirmationText)

    const textElement = document.createElement('p')
    textElement.textContent = `En breve recibirá un correo con los detalles. La referencia de su pedido es ${this.data.reference}`
    confirmationText.appendChild(textElement)

    const confirmationButton = document.createElement('div')
    confirmationButton.classList.add('confirmation-button')
    confirmation.appendChild(confirmationButton)

    const buttonElement = document.createElement('button')
    buttonElement.textContent = 'Volver a inicio'
    confirmationButton.appendChild(buttonElement)
  }
}

customElements.define('confirmation-component', Confirmation)
