class Login extends HTMLElement {
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

        h2, span, label {
          margin: 0;
          font-family: ;
          color: hsl(0, 0%, 0%, 1)
        }

        .login-form {
          background-color: hsl(257, 91%, 18%)
        }

        .login-form-title {

        }

        .login-form-main {
          
        }

        .login-form-email {
          
        }

        .login-form-password {
          
        }

        .login-form-button {
          
        }

        .login-form-recovery {
          
        }

      </style>

      <section class="login-form">
        <form>
          <div class="login-form-title">
            <h2>Pedidos</h2>
          </div>
          <div class="login-form-main">  
            <div class="login-form-email">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" size="30" required />
            </div>
            <div class="login-form-password">
              <label for="userPassword">Password</label>
              <input type="password" id="userPassword" minlength="6"/>
            </div>
            <div class="login-form-button">
              <button>Enviar</button>
            </div>
          </div>
          <div class="login-form-recovery">
            <span>Olvidé mi contraseña</span>
          </div>
        </form> 
      </section>
      `
  }
}

customElements.define('login-component', Login)
