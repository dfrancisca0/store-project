class BackLink extends HTMLElement {
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

        button {
          background-color: hsl(0, 0%, 0%);
          border: none;
        }

        .back-link svg {
          fill: hsl(0, 0%, 100%);
          display: flex;
          height: 2rem;
          width: 2rem;
          cursor: pointer;
        }

      </style>

      <button class="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>
      </button>
      `
  }
}

customElements.define('back-link-component', BackLink)
