import { sql } from "@vercel/postgres";


async function sendMsg(){
    const content = document.getElementById("message").value
    await sql`insert into mydatabase.messages(text) values (${content})`;
}