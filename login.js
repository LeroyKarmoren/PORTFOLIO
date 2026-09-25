const SUPABASE_URL = 'https://ijpqshxedkgewdxorwxi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcHFzaHhlZGtnZXdkeG9yd3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyODgxNzQsImV4cCI6MjEwNTg2NDE3NH0.0gJjTgON2u_SlvCT2o8QP9eozrHKRmAquUscqQDSJH8';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function checarSessao() {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            window.location.replace("portfolio.html");
        }
    } catch (err) {
        console.error("Erro ao checar sessão:", err);
    }
}

checarSessao();

document.getElementById('formLogin').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert('Erro ao fazer login: ' + error.message);
    } else {
        window.location.replace("portfolio.html");
    }
});