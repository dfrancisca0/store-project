class History extends HTMLElement {
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
          border-radius: 5px;
          cursor: pointer
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

      <section class="history"></section>
      `
    const history = this.shadow.querySelector('.history')
    const form = document.createElement('form')
    history.appendChild(form)

    const historyReference = document.createElement('div')
    historyReference.classList.add('history-reference')
    form.appendChild(historyReference)

    const referenceInputElement = document.createElement('input')
    referenceInputElement.setAttribute('type', 'number')
    referenceInputElement.setAttribute('name', 'number')
    referenceInputElement.setAttribute('placeholder', 'Referencia del pedido')
    historyReference.appendChild(referenceInputElement)

    const referenceButtonElement = document.createElement('button')
    referenceButtonElement.textContent = 'Buscar por referencia'
    historyReference.appendChild(referenceButtonElement)

    const historyDate = document.createElement('div')
    historyDate.classList.add('history-date')
    form.appendChild(historyDate)

    const dateInputElement = document.createElement('input')
    dateInputElement.setAttribute('type', 'date')
    dateInputElement.setAttribute('name', 'date')
    historyDate.appendChild(dateInputElement)

    const dateButtonElement = document.createElement('button')
    dateButtonElement.textContent = 'Buscar por fecha'
    historyDate.appendChild(dateButtonElement)

    const historyList = document.createElement('div')
    historyList.classList.add('history-list')
    history.appendChild(historyList)

    const historyListElement = document.createElement('ul')
    historyList.appendChild(historyListElement)

    this.data.forEach(element => {
      const listElement = document.createElement('li')
      historyListElement.appendChild(listElement)

      const historyProduct = document.createElement('div')
      historyProduct.classList.add('history-product')
      listElement.appendChild(historyProduct)

      const historyProductMain = document.createElement('div')
      historyProductMain.classList.add('history-product-main')
      historyProduct.appendChild(historyProductMain)

      const productMainElement = document.createElement('span')
      productMainElement.textContent = element.reference
      historyProductMain.appendChild(productMainElement)

      const productMainTotalElement = document.createElement('span')
      productMainTotalElement.textContent = `${element.total}€`
      historyProductMain.appendChild(productMainTotalElement)

      const historyProductSecondary = document.createElement('div')
      historyProductSecondary.classList.add('history-product-secondary')
      historyProduct.appendChild(historyProductSecondary)

      const productSecondaryElement = document.createElement('span')
      productSecondaryElement.textContent = `${element.date} ${element.time}`
      historyProductSecondary.appendChild(productSecondaryElement)

      const productSecondaryButtonElement = document.createElement('button')
      productSecondaryButtonElement.textContent = 'Ver pedido'
      historyProductSecondary.appendChild(productSecondaryButtonElement)
    })
  }
}

customElements.define('history-component', History)
