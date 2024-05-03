function verificarPreenchimento() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const enviarBtn = document.getElementById('enviarBtn');

    if (nome !== '' && email !== '' && assunto !=='' && mensagem !== '') {
        enviarBtn.desabled = false;
    } else {
        enviarBtn.desabled = true;
    }
}

document.getElementById('nome').addEventListener('input', verificarPreenchimento);
document.getElementById('email').addEventListener('input', verificarPreenchimento);
document.getElementById('assunto').addEventListener('input', verificarPreenchimento);
document.getElementById('mensagem').addEventListener('input', verificarPreenchimento);

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '') {
        document.getElementById('nomeErro').textContent = 'Por favor, preencha o campo Nome.';
        return;
    }

    
    if (nome.length > 50) {
        document.getElementById('nomeErro').textContent = 'O nome deve ter no máximo 50 caracteres.';
        return;
    }

    document.getElementById('nomeErro').textContent = '';
    
    if (email === '') {
        document.getElementById('emailErro').textContent = 'Por favor, preencha o campo Email.';
        return;
    }

    if (!validarEmail(email)) {
        document.getElementById('emailErro').textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    document.getElementById('emailErro').textContent = '';
    
    if (assunto === '') {
        document.getElementById('assuntoErro').textContent = 'Por favor, preencha o campo Assunto.';
        return;
    }

    
    if (assunto.length > 50) {
        document.getElementById('assuntoErro').textContent = 'O assunto deve ter no máximo 50 caracteres.';
        return;
} 
        document.getElementById('assuntoErro').textContent = '';

        if (mensagem === '') {
            document.getElementById('mensagemErro').textContent = 'Por favor, preencha o campo Mensagem.';
            return;
        }
    
        
        if (mensagem.length > 300) {
            document.getElementById('mensagemErro').textContent = 'A mensagem deve ter no máximo 300 caracteres.';
            return;
        }
    
        document.getElementById('mensagemErro').textContent = '';
    
       
        alert('Formulário enviado com sucesso!');
        document.getElementById('formContato').reset();
        document.getElementById('enviarBtn').disabled = true;
}

document.getElementById('enviarBtn').addEventListener('click', function(event) {
    event.preventDefault()
    enviarFormulario();
}); 