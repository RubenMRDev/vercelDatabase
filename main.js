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

        // Asegúrate de que `sql` esté configurado correctamente para la base de datos de Vercel
        const response = await fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: content })
        });

        if (!response.ok) {
            throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
        }

        console.log("Mensaje enviado correctamente");
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.");
    }
}
