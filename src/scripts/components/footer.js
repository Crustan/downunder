const template = document.createElement("template");

const css = `
#footer {
  background: var(--footer-bg);
  font-size: var(--font-size-xs);
  clear: both;
  width: 100%;
  padding: 0.1em 0px;
}
#footer p {
  margin-left: 10px;
  margin-right: 10px;
}
#footer span {
  color: var(--red);
}
#kiwiDiv {
  position: relative;
  @media screen and (max-width: 1280px) {
    display: none;
  }
}
#kiwi {
  position: absolute;
  bottom: 10px;
  right: 0px;
}
`;

template.innerHTML = `
<style>${css}</style>
<div id="footer">
  <p>Utvecklad av Christian Söderberg | <span>Senast uppdaterad: Juni 2012</span></p>
  <div id="kiwiDiv">
    <img src="/src/images/kiwi.png" alt="Kiwi" id="kiwi" />
  </div>
</div>
`;

class Component extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(template.content);
  }
}

customElements.define("c-footer", Component);
