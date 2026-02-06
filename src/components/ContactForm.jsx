import emailjs from "emailjs-com";

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_7qpjukl",      // tu Service ID
      "template_bw74vb8",     // tu Template ID
      e.target,
      "AUF72Cky1eMCFdYmw"    // tu Public Key
    ).then(
      () => alert("Mensaje enviado correctamente"),
      () => alert("Error al enviar el mensaje")
    );

    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-4">
      <input
        className="border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="name"
        placeholder="Nombre"
        required
      />
      <input
        className="border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        className="border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="message"
        placeholder="Mensaje"
        required
      />
      <button
        type="submit"
        className="rounded-2xl bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}


