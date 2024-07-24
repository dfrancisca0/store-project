class PageComponent extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    window.onpopstate = () => this.handleRouteChange()
  }

  handleRouteChange () {
    this.render()
  }

  render () {
    const path = window.location.pathname
    this.getTemplate(path)
  }

  async getTemplate (path) {
    const routes = {
      '/': 'home.html',
      '/login': 'login.html',
      '/order': 'order.html',
      '/history': 'history.html',
      '/confirmation': 'confirmation.html',
      '/summary': 'summary.html',
      '/plans': 'cards.html',
      '/main': 'main-orders.html',
      '/admin': 'admin.html'
    }

    const filename = routes[path] || '404.html'

    await this.loadPage(filename)
  }

  async loadPage (filename) {
    const response = await fetch(`/pages/${filename}`)
    const html = await response.text()

    document.startViewTransition(() => {
      this.shadowRoot.innerHTML = html
      document.documentElement.scrollTop = 0
    })
  }
}

customElements.define('page-component', PageComponent)
