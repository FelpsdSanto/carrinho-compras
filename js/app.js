let totalGeral = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insisra uma quantidade válida.");
        return;
    }


    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);  
    let preco = quantidade * valorUnitario;

    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco.toLocaleString('pt-BR', { minimumFractionDigits:2, maximumFractionDigits:2})}</span>
        </section>`;
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('quantidade').value = '';

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}