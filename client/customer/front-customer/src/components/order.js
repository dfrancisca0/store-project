class Order extends HTMLElement {
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
          color: hsla(0, 0%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: 1.2rem;
          font-weight: 550;
          text-transform: capitalize
        }

        .order {
          height: 100vh;
          padding: 1rem;
          background-color: hsl(257, 91%, 18%);
        }

        .order-products {
          min-height: 80vh;
          max-height: 80vh;
        }
        .order-product {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
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

      <section class="order"></section>
      `
    const order = this.shadow.querySelector('.order')
    const orderProducts = document.createElement('div')
    orderProducts.classList.add('order-products')
    order.appendChild(orderProducts)

    this.data.forEach(object => {
      const orderProduct = document.createElement('div')
      orderProduct.classList.add('order-product')
      orderProducts.appendChild(orderProduct)

      const productMain = document.createElement('div')
      productMain.classList.add('product-main')
      orderProduct.appendChild(productMain)

      const productMainName = document.createElement('div')
      productMainName.classList.add('product-main-name')
      productMain.appendChild(productMainName)

      const nameElement = document.createElement('span')
      nameElement.textContent = `${object.name}`
      productMainName.appendChild(nameElement)

      const productMainSpecs = document.createElement('div')
      productMainSpecs.classList.add('product-main-specs')
      productMain.appendChild(productMainSpecs)

      const specsElement = document.createElement('span')
      specsElement.textContent = `${object.packPrice}`
      productMainSpecs.appendChild(specsElement)

      const productContent = document.createElement('div')
      productContent.classList.add('product-content')
      orderProduct.appendChild(productContent)

      const productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      productContent.appendChild(productDescription)

      const descriptionElement = document.createElement('span')
      descriptionElement.textContent = `${object.packSize}, ${object.unitySize}`
      productContent.appendChild(descriptionElement)

      const plusMinusButton = document.createElement('div')
      plusMinusButton.classList.add('plus-minus-button')
      productContent.appendChild(plusMinusButton)

      const buttonMinusElement = document.createElement('button')
      buttonMinusElement.classList.add('minus')
      buttonMinusElement.textContent = '-'
      plusMinusButton.appendChild(buttonMinusElement)

      const buttonInputElement = document.createElement('input')
      buttonInputElement.classList.add('plus-minus-input')
      buttonInputElement.setAttribute('type', 'number')
      buttonInputElement.setAttribute('value', 1)
      plusMinusButton.appendChild(buttonInputElement)

      const buttonPlusElement = document.createElement('button')
      buttonPlusElement.classList.add('plus')
      buttonPlusElement.textContent = '+'
      plusMinusButton.appendChild(buttonPlusElement)
    })

    const orderSummaryButton = document.createElement('div')
    orderSummaryButton.classList.add('order-summary-button')
    order.appendChild(orderSummaryButton)

    const summaryButton = document.createElement('button')
    summaryButton.textContent = 'Ver pedido'
    orderSummaryButton.appendChild(summaryButton)
  }
}

customElements.define('order-component', Order)
