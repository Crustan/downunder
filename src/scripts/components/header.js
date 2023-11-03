const template = document.createElement("template");

const css = `
#headerNav {
  background: var(--header-bg);
  width: 100%;
  min-width: 1000px;
  height: 153px;
  border-bottom: 3px solid var(--header-border-color);
  padding: 0px;
  margin: 0px;
}
#header {
  font-family: var(--font-heading);
  padding: 10px 0px;
  color: var(--header-color);
  position: relative;
  min-width: 1000px;
}
#header #pic0 {
  position: absolute;
  top: 15px;
  left: 550px;
}
#header #pic1 {
  position: absolute;
  top: 15px;
  left: 700px;
}
#header h1 {
  font-size: var(--heading-font-size-1);
  font-weight: 900;
  margin-left: 10px;
  margin-top: 0em;
  margin-bottom: 0em;
  text-shadow: var(--header-text-shadow) 3px 2px;
  line-height: 0.8;
}
#header h2 {
  font-size: var(--heading-font-size-2);
  font-weight: 700;
  margin: 0 0 0 12px;
  text-shadow: var(--header-text-shadow) 2px 1px;
  line-height: 1;
}

#navigation {
  font-family: var(--font-heading);
  font-size: var(--nav-font-size);
  background: var(--header-bg);
  min-width: 800px;
  padding-left: 200px;
  display: block;
  position: absolute;
  padding-bottom: 0px;
  top: 120px;
  z-index: 0;
}
::slotted(a) {
  background: var(--blue);
  color: var(--white);
  display: inline;
  position: relative;
  text-decoration: none;
  text-shadow: var(--heading-text-shadow-2) 1px 1px;
  margin: 0px 5px;
  padding: 5px 7px 3px 7px;
}
`;

template.innerHTML = `
<style>${css}</style>
<div id="headerNav">
  <div id="header">
    <img src="/src/images/map.png" id="pic0" alt="Oceanien" />
    <img src="/src/images/headerqoute.png" id="pic1" alt="Skippa charter och få en upplevelse för livet!" />
    <h2>SÖDERBERG</h2>
    <h1>DOWN UNDER</h1>
  </div>
  
  <div id="navigation">
    <slot name="nav">
      <a href="/">START</a>
      <a href="/diaries">RESEDAGBÖCKER</a>
      <a href="/photos">FOTOALBUM</a>
      <a href="/destinations">DESTINATIONER</a>
    </slot> 
  </div>
</div>
`;

class Component extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("c-header", Component);
