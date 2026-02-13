import "./ContactForm.css";
import emailjs from "emailjs-com";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_7qpjukl",
      "template_bw74vb8",
      e.target,
      "AUF72Cky1eMCFdYmw"
    ).then(
      () => alert("Mensaje enviado correctamente"),
      () => alert("Error al enviar el mensaje")
    );
    e.target.reset();
  }

  return (
    <section className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p>¿Hablamos? Escríbeme y te responderé lo antes posible.</p>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
