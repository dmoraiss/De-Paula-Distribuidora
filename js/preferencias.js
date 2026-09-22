/* O idioma escolhido fica neste navegador, mesmo depois de recarregar a página. */
function lerPreferencia(nome) {
  try {
    return localStorage.getItem(`de-paula-${nome}`);
  } catch {
    // O catálogo também funciona quando o navegador bloqueia o armazenamento.
    return null;
  }
}

function salvarPreferencia(nome, valor) {
  try {
    localStorage.setItem(`de-paula-${nome}`, valor);
  } catch {
    // A escolha continua funcionando durante esta visita.
  }
}
