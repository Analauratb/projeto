document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    document.getElementById('resultado').innerHTML =`
        <h2>Quantidade de itens a serem comprados:</h2>
        <p>Carne Bovina: ${carneBovina}Kg</p>
        <p>Frango: ${frango}Kg</p>
        <p>Linguiça: ${linguica}Kg</p>
        <p>Refrigerante: ${refrigerante}L</p>
        <p>Cerveja: ${cerveja}L</p>`
        ;
    });
