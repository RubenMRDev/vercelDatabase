import { sql } from "@vercel/postgres";

// main.js

// Selecciona el botón por su ID
const sendButton = document.getElementById("sendButton");

// Agrega un event listener para el evento 'click'
sendButton.addEventListener("click", sendMsg);

// Define la función `sendMsg`
async function sendMsg() {
    try {
        const content = document.getElementById("message").value.trim();
        
        if (!content) {
            alert("Por favor, ingresa un mensaje.");
            return;
        }

        // Asegúrate de que tienes una instancia de `sql` correctamente configurada aquí.
        await sql`INSERT INTO messages (text) VALUES (${content})`;
        
        console.log("Mensaje enviado correctamente");
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
    }
}
