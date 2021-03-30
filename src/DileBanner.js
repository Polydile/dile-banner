import { LitElement, html, css } from "lit-element";
import "@dile/dile-button";
export class DileBanner extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      text: { type: String },
      bgImage: { type: String, attribute: "bg-image" },
      buttonText: { type: String, attribute: "button-text" },
      sizeImage: { type: Number },
      imgAccessibilityText: {
        type: String,
        attribute: "img-accessibility-text",
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        font-size: var(--dile-banner-font-size, 1em);
      }
      .container {
        margin: 80px auto;
        min-width: 230px;
        position: relative;
        height: auto;
        min-height: fit-content;
        max-height: 500px;
        border-radius: 10px;
        overflow: hidden;
        background-color: grey;
        font-family: Arial, Helvetica, sans-serif;
      }
      .container-bg {
        position: relative;
        width: 100%;
        z-index: 1;
      }
      .content {
        position: absolute;
        top: 50%;
        right: 10%;
        z-index: 1;
        max-width: 35%;
        text-align: right;
      }
      h2 {
        font-size: 1.5em;
      }
      dile-button:hover {
        background-color: var(--dile-button-hover-background-color, #c7c7c7);
        color: var(--dile-button-hover-text-color, #303030);
      }
    `;
  }

  constructor() {
    super();
    this.text = "Welcome";
    this.bgImage = "";
    this.buttonText = "Come in!";
    this.imgAccessibilityText = "Background Image";
  }

  updated(changedProps) {
    if (changedProps.has("bgImage")) {
      console.log("holaaa");
      this.requestUpdate();
    }
  }
  render() {
    return html` <div class="container">
      <img class="container-bg" src=${this.bgImage} />
      <div class="content">
        ${this.title ? html`<h2>${this.title}</h2>` : ""}
        ${this.text ? html`<p>${this.text}</p>` : ""}
        <dile-button role="primary">${this.buttonText}</dile-button>
      </div>
    </div>`;
  }
}
