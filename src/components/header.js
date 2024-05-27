class Header extends HTMLElement {
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
          
          header {
            position: sticky;
            display: flex;
            background-color: hsla(0, 0%, 0%, 1);
            height: 4rem;
            width: 100%;
            top: 0;
            z-index: 5;
          }

          .title {
            margin: 0;
            color: hsla(0, 0%, 100%, 1);
            font-family: "Lato", sans-serif;
            font-weight: 550
          }

        </style>

        <header>
          <title-componenet></title-component>
          <slot></slot>
        </header>
      `
  }
}

customElements.define('header-component', Header)
