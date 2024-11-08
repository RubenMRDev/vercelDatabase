import { sql } from "@vercel/postgres";

// main.js
async function sendMsg() {
    try {
        const content = document.getElementById("message").value;
        
        // Asegúrate de que tienes una instancia de `sql` correctamente configurada aquí.
        await sql`INSERT INTO messages (text) VALUES (${content})`;
        
        console.log("Mensaje enviado correctamente");
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
    }
}
