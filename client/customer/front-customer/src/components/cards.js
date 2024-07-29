class Cards extends HTMLElement {
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
    const response = await fetch('src/data/plans.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>
        
        h2, span {
          margin: 0;
          color: hsla(210, 14%, 89%, 1);
          font-family: "Lato", sans-serif
        }

        .cards {
          display: flex;
          gap: 2rem;
          height: 100vh;
          padding: 1rem;
          justify-content: center;
          background-color:hsla(210, 11%, 15%, 1)
        }

        .card {
          display: flex;
          flex-direction: column;
          height: 35vh;
          width: 30%;
          min-width: 13rem;
          max-width: 16rem;
          align-items: center;
          box-sizing: border-box;
          border: 1px solid hsla(210, 2%, 35%, 1);
          border-radius: 10px;
        }

        .card-title {
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom: 1px solid hsla(210, 2%, 35%, 1);
          background-color: hsla(210, 9%, 17%, 1);
          text-align: center;
          text-transform: capitalize;
          font-size: 1.3rem;
        }

        .card-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          flex-grow: 1;
        }

        .card-subtitle {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: .5rem;
          color: hsla(53, 9%, 65%, 1);
          font-size: 1.3rem
        }

        .card-description {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .3rem;
          text-align: center;
          font-size: .8rem;
          flex-grow: 1;
        }

        .card-button {
          width: 90%;
          margin-top: auto
        }

        .card-button button {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          background-color: hsla(216, 98%, 52%, 1);
          color: hsla(210, 14%, 89%, 1);
          cursor: pointer;
        }

        .card-button button:hover {
          background-color: hsla(216, 98%, 52%, .5);
        }

        .card.secondary {
          border: 1px solid hsla(216, 98%, 52%, 1);
        }

        .card.secondary {
          border: 1px solid hsla(216, 98%, 52%, 1);
        }

        .card.secondary .card-title {
          background-color: hsla(216, 98%, 52%, 1);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          border-bottom: none
        }

      </style>

      <section class="cards"></section>
      `

    const cards = this.shadow.querySelector('.cards')

    this.data.forEach(element => {
      const card = document.createElement('div')
      card.classList.add('card')
      card.classList.add(`${element.category}`)
      cards.appendChild(card)

      const cardTitle = document.createElement('div')
      cardTitle.classList.add('card-title')
      card.appendChild(cardTitle)

      const titleElement = document.createElement('span')
      titleElement.textContent = `${element.type}`
      cardTitle.appendChild(titleElement)

      const cardMain = document.createElement('div')
      cardMain.classList.add('card-main')
      card.appendChild(cardMain)

      const cardSubtitle = document.createElement('div')
      cardSubtitle.classList.add('card-subtitle')
      cardMain.appendChild(cardSubtitle)

      const subtitleElement = document.createElement('h2')
      subtitleElement.textContent = `${element.price}`
      cardSubtitle.appendChild(subtitleElement)

      const subtitleSideElement = document.createElement('span')
      subtitleSideElement.textContent = `${element.priceDetail}`
      cardSubtitle.appendChild(subtitleSideElement)

      const cardDescription = document.createElement('div')
      cardDescription.classList.add('card-description')
      cardMain.appendChild(cardDescription)

      element.description.forEach(item => {
        const descriptionElement = document.createElement('span')
        descriptionElement.textContent = `${item}`
        cardDescription.appendChild(descriptionElement)
      })

      const cardButton = document.createElement('div')
      cardButton.classList.add('card-button')
      cardMain.appendChild(cardButton)

      const buttonElement = document.createElement('button')
      buttonElement.textContent = `${element.buttonMessage}`
      cardButton.appendChild(buttonElement)
    })
  }
}

customElements.define('cards-component', Cards)
