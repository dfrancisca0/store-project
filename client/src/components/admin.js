class Admin extends HTMLElement {
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

        .admin {
          padding: 1.5rem 1rem
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem
        }

        .admin-reference {
          display: flex;
          justify-content: space-between;
        }

        .admin-date {
          display: flex;
          justify-content: space-between
        }

        .admin-list li {
          padding: 1rem;
          border-top: 2px solid hsl(0, 0%, 100%)
        }

        .admin-product {
          display: flex;
          flex-direction: column;
          gap: 1rem
        }

        .admin-product-main {
          display: flex;
          justify-content: space-between;
        }

        .admin-product-main span {
          font-size: 1.2rem;
          font-weight: 600
        }

        .admin-product-secondary {
          display: flex;
          justify-content: space-between
        }
        
        .admin-product-secondary button {
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

      <section class="admin"></section>
      `
    const admin = this.shadow.querySelector('.admin')
    const form = document.createElement('form')
    admin.appendChild(form)

    const adminReference = document.createElement('div')
    adminReference.classList.add('admin-reference')
    form.appendChild(adminReference)

    const referenceInputElement = document.createElement('input')
    referenceInputElement.setAttribute('type', 'number')
    referenceInputElement.setAttribute('name', 'number')
    referenceInputElement.setAttribute('placeholder', 'Referencia del pedido')
    adminReference.appendChild(referenceInputElement)

    const referenceButtonElement = document.createElement('button')
    referenceButtonElement.textContent = 'Buscar por referencia'
    adminReference.appendChild(referenceButtonElement)

    const adminDate = document.createElement('div')
    adminDate.classList.add('admin-date')
    form.appendChild(adminDate)

    const dateInputElement = document.createElement('input')
    dateInputElement.setAttribute('type', 'date')
    dateInputElement.setAttribute('name', 'date')
    adminDate.appendChild(dateInputElement)

    const dateButtonElement = document.createElement('button')
    dateButtonElement.textContent = 'Buscar por fecha'
    adminDate.appendChild(dateButtonElement)

    const adminList = document.createElement('div')
    adminList.classList.add('admin-list')
    admin.appendChild(adminList)

    const adminListElement = document.createElement('ul')
    adminList.appendChild(adminListElement)

    this.data.forEach(element => {
      const listElement = document.createElement('li')
      adminListElement.appendChild(listElement)

      const adminProduct = document.createElement('div')
      adminProduct.classList.add('admin-product')
      listElement.appendChild(adminProduct)

      const adminProductMain = document.createElement('div')
      adminProductMain.classList.add('admin-product-main')
      adminProduct.appendChild(adminProductMain)

      const productMainElement = document.createElement('span')
      productMainElement.textContent = element.reference
      adminProductMain.appendChild(productMainElement)

      const productMainTotalElement = document.createElement('span')
      productMainTotalElement.textContent = `${element.total}€`
      adminProductMain.appendChild(productMainTotalElement)

      const adminProductSecondary = document.createElement('div')
      adminProductSecondary.classList.add('admin-product-secondary')
      adminProduct.appendChild(adminProductSecondary)

      const productSecondaryElement = document.createElement('span')
      productSecondaryElement.textContent = `${element.date} ${element.time}`
      adminProductSecondary.appendChild(productSecondaryElement)

      const productSecondaryButtonElement = document.createElement('button')
      productSecondaryButtonElement.textContent = 'Ver pedido'
      adminProductSecondary.appendChild(productSecondaryButtonElement)
    })
  }
}

customElements.define('admin-component', Admin)
