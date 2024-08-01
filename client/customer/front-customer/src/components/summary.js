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
    this.total = this.data.reduce((acc, product) => {
      return acc + (product.packPrice * product.quantity)
    }, 0)

    console.log(this.total)
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        span {
          margin: 0;
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: 1.2rem;
        }

        .summary {
          height: 100vh;
          padding: 1rem;
          background-color: hsl(257, 91%, 18%);
        }

        .summary-products {
          display: flex;
          flex-direction: column;
          min-height: 80vh;
          max-height: 80vh;
          overflow-y: scroll
        }

        .summary-product {
          height: 5vh;
          padding: 1rem;
          border-bottom: 1px solid hsla(0, 0%, 100%, 1)
        }

        .product-main {
          display: flex;
          justify-content: space-between
        }

        .product-main-name span {
          text-transform: capitalize;
          font-weight: 550
        }

        .product-main-specs span{
          font-weight: normal
        }

        .product-content {
          display: flex;
          justify-content: space-between;
          align-items: center
        }

        .product-order-details span{
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

        .summary-button {
          display: flex;
          justify-content: center;
          bottom: 0
        }
        .summary-button button {
          height: 2.5rem;
          width: 80%;
          margin: 2rem;
          padding: .5rem;
          border: none;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 550;
          cursor: pointer
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
            border: 5px solid hsla(0, 0%, 0%, 1)
          }
        }

      </style>

      <section class="summary"></section>
      `

    const summary = this.shadow.querySelector('.summary')
    const summaryProducts = document.createElement('div')
    summaryProducts.classList.add('summary-products')
    summary.appendChild(summaryProducts)

    this.data.forEach(element => {
      const summaryProduct = document.createElement('div')
      summaryProduct.classList.add('summary-product')
      summaryProducts.appendChild(summaryProduct)

      const productMain = document.createElement('div')
      productMain.classList.add('product-main')
      summaryProduct.appendChild(productMain)

      const productMainName = document.createElement('div')
      productMainName.classList.add('product-main-name')
      productMain.appendChild(productMainName)

      const nameElement = document.createElement('span')
      nameElement.textContent = element.name
      productMainName.appendChild(nameElement)

      const productMainSpecs = document.createElement('div')
      productMainSpecs.classList.add('product-main-specs')
      productMain.appendChild(productMainSpecs)

      const specsElement = document.createElement('span')
      specsElement.textContent = `${element.packPrice * element.quantity}€`
      productMainSpecs.appendChild(specsElement)

      const productContent = document.createElement('div')
      productContent.classList.add('product-content')
      summaryProduct.appendChild(productContent)

      const productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      productContent.appendChild(productDescription)

      const descriptionElement = document.createElement('span')
      descriptionElement.textContent = `${element.packSize}, ${element.unitySize}`
      productDescription.appendChild(descriptionElement)

      const productOrderDetails = document.createElement('div')
      productOrderDetails.classList.add('product-order-details')
      productContent.appendChild(productOrderDetails)

      const detailsElement = document.createElement('span')
      detailsElement.textContent = `${element.quantity} x ${element.packPrice}`
      productOrderDetails.appendChild(detailsElement)
    })

    const orderSummary = document.createElement('div')
    orderSummary.classList.add('order-summary')
    summary.appendChild(orderSummary)

    const orderSummaryMain = document.createElement('div')
    orderSummaryMain.classList.add('order-summary-main')
    orderSummary.appendChild(orderSummaryMain)

    const orderSummaryMainElement = document.createElement('span')
    orderSummaryMainElement.textContent = 'Total'
    orderSummaryMain.appendChild(orderSummaryMainElement)

    const orderSummaryMainTotal = document.createElement('span')
    orderSummaryMainTotal.textContent = `${this.total}€`
    orderSummaryMain.appendChild(orderSummaryMainTotal)

    const orderSummarySecondary = document.createElement('div')
    orderSummarySecondary.classList.add('order-summary-secondary')
    orderSummary.appendChild(orderSummarySecondary)

    const orderSummarySecondaryElement = document.createElement('span')
    orderSummarySecondaryElement.textContent = 'Impuestos no incluidos'
    orderSummarySecondary.appendChild(orderSummarySecondaryElement)

    const summaryButton = document.createElement('div')
    summaryButton.classList.add('summary-button')
    summary.appendChild(summaryButton)

    const summaryButtonElement = document.createElement('button')
    summaryButtonElement.textContent = 'Finalizar pedido'
    summaryButton.appendChild(summaryButtonElement)
  }
}

customElements.define('summary-component', Summary)
