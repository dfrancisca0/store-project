class Table extends HTMLElement {
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
    const response = await fetch('src/data/users.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2, li, span, label {
          margin: 0;
          font-family: ;
          color: hsla(0, 100%, 100%, 1);
          font-family: "Lato", sans-serif;
          font-size: .9rem;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none
        }

        .table {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          background-color: hsla(0, 100%, 100%, 1);
        }

        .table-header svg {
          fill: hsla(257, 91%, 18%, 1);
          height: 2rem;
          width: 2rem;
          padding: .1rem .5rem
        }

        .table-body {
          width: 80%;
        }

        .table-body svg {
          fill: hsla(257, 91%, 18%, 1);
          height: 2rem;
          width: 2rem;
          padding: .1rem .5rem
        }

        .entry-header {
          display: flex;
          justify-content: flex-end;
          background-color: hsla(0, 100%, 100%, 1);
        }

        .entry-header-buttons button {
          background-color: hsla(0, 100%, 100%, 1);
          border: none;
          padding: 0
        }

        .entry-data {
          display: flex;
          flex-direction: column;
          gap: .5rem;
          background-color: hsla(0, 0%, 0%, 1);
          padding: 1rem
        }

        .notification {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
          height: 3rem;
          width: 100%;
          background-color: hsla(0, 100%, 100%, 1)
        }

        .notification span {
          color: hsla(0, 0%, 0%, 1)
        }

        .notification svg {
          height: 1rem;
          width: 1rem
        }

        @media (hover: hover) {
          button:hover {
            cursor: pointer
          }
        }

      </style>

      <section class="table">
        <div class="table-header">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
          </a>
        </div>
      </section>
      `
    this.data.forEach(element => {
      const table = this.shadow.querySelector('.table')
      const tableBody = document.createElement('div')
      tableBody.classList.add('table-body')
      table.appendChild(tableBody)
      
      const bodyEntry = document.createElement('div')
      bodyEntry.classList.add('body-entry')
      tableBody.appendChild(bodyEntry)

      const entryHeader = document.createElement('div')
      entryHeader.classList.add('entry-header')
      bodyEntry.appendChild(entryHeader)
      
      const entryHeaderButtons = document.createElement('div')
      entryHeaderButtons.classList.add('entry-header-buttons')
      entryHeader.appendChild(entryHeaderButtons)

      const entryHeaderbuttonElement1 = document.createElement('button')
      entryHeaderbuttonElement1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
      entryHeaderButtons.appendChild(entryHeaderbuttonElement1)

      const entryHeaderbuttonElement2 = document.createElement('button')
      entryHeaderbuttonElement2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'
      entryHeaderButtons.appendChild(entryHeaderbuttonElement2)
    
      const entryData = document.createElement('div')
      entryData.classList.add('entry-data')
      bodyEntry.appendChild(entryData)

      const listElements = document.createElement('ul')
      entryData.appendChild(listElements)

      Object.entries(element).forEach(([key, value]) => {
        const listElement = document.createElement('li')
        listElement.textContent = `${key}: ${value}`
        listElements.appendChild(listElement)
      })  
    })

    const table = this.shadow.querySelector('.table')
    const notification = document.createElement('div')
    notification.classList.add('notification')
    table.appendChild(notification)

    const notificationTextElement = document.createElement('span')
    notificationTextElement.textContent = '1 registro en total. Mostrando 10 registros por página'
    notification.appendChild(notificationTextElement)

    const notificationImageElement = document.createElement('svg')
    notificationImageElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>'
    notification.appendChild(notificationImageElement)
  }
}

customElements.define('table-component', Table)