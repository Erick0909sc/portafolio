import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  // Validación de datos
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Debe estar verificado en Resend
      subject: "📩 Nuevo Mensaje de Contacto",
      to: "erickingacalle@gmail.com", // Tu correo donde recibirás los mensajes

      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: "Mensaje enviado con éxito", data });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
