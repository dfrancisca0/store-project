class Margin extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.space = this.getAttribute('space')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>
        
        .margins {
          margin: 1rem ${this.space}%
        }
      </style>

      <div class="margins">
        <slot></slot>
      </div>

    `
  }
}

customElements.define('margin-component', Margin)
