const SUPABASE_URL = 'https://ijpqshxedkgewdxorwxi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcHFzaHhlZGtnZXdkeG9yd3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyODgxNzQsImV4cCI6MjEwNTg2NDE3NH0.0gJjTgON2u_SlvCT2o8QP9eozrHKRmAquUscqQDSJH8';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 1. Verifica se já está logado ao acessar o link do site
async function checarSessao() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (session) {
        // Se já tiver logado, manda direto para o home.html
        window.location.replace("home.html");
    } else {
        // Se não estiver logado, exibe a tela de login
        document.body.style.visibility = "visible";
    }
}

checarSessao();

// 2. Evento ao clicar em Logar
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
        // Redireciona obrigatoriamente para home.html após o login correto
        window.location.replace("home.html");
    }
});