import React from "react";
import style from "../style/contact.modules.css";

function Contact() {
  console.log(style);
  return (
    <section className="clear ">
      <div id="contact">
        <h1 className="title_contact"> Contacto </h1>
        <div className="row">
          <div className="col-md-6 ">
            <h4 className="paragraph">
              Puedes contactarme en las siguientes redes:
            </h4>
          </div>
          <div className="col-md-6 ">
            <div className="link">
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="bo bi-github"></i>
              </a>

              <a href="https://wa.me/541150941389" target="-blank">
                <i class="bo bi-whatsapp" />
              </a>

              <a href="mailto:mauroezequiel3171@gmail.com" target="-blank">
                <i class="bo bi-envelope-at-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
