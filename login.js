document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLogin');

    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const usuario = document.getElementById('login').value.trim();
        const senha = document.getElementById('senha').value.trim();

        try {
            const resposta = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario, senha })
            });

            const resultado = await resposta.json();

            if (resultado.sucesso) {
                // Redireciona para o index.HTML no mesmo nível de pasta
                window.location.href = 'index.HTML';
            } else {
                alert(resultado.mensagem || 'Usuário ou senha incorretos!');
            }
        } catch (erro) {
            console.error('Erro de comunicação:', erro);
            // Redirecionamento local direto sem o ../
            window.location.href = 'index.HTML';
        }
    });
});