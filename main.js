import { sql } from "@vercel/postgres";


async function sendMsg(){
    const content = document.getElementById("message").value
    await sql`insert messages(text) values (${content})`;
    console.log("prueba")
}