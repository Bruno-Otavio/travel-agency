const card_container = document.querySelector('.card-container');

const fetchDestinos = async () => {
    const data = await fetch('http://localhost:3000/destinos')
        .then(res => res.json());
    
    console.log(data);
    return data;
}

const fetchPontos = async () => {
    const data = await fetch('http://localhost:3000/pontos')
        .then(res => res.json());

    console.log(data);
    return data;
}

const toggle_details = (element) => {
    const active = false;

    const details = element.querySelector('.card-details');
    const droplet = element.querySelector('.more');
    
    if (details.style.maxHeight === "") {
        details.style.maxHeight = "100vh";
        droplet.style.transform = "scaleY(1)";
    } else {
        details.style.maxHeight = "";
        droplet.style.transform = "scaleY(-1)";
    }
}

const render_cards = async () => {
    const destinos = await fetchDestinos();
    const pontos = await fetchPontos();

    const card = document.querySelector('.card');

    destinos.forEach((cidade) => {
        const new_card = card.cloneNode(true);

        new_card.classList.remove('hidden');

        new_card.querySelector('.cidade').textContent = cidade.nome;
        new_card.querySelector('.value').textContent = `R$ ${cidade.valor}`;
        new_card.querySelector('.data').textContent = cidade.data.split('T')[0];

        pontos.forEach((ponto) => {
            new_card.querySelector('.ponto').textContent = ponto.nome;
            new_card.querySelector('.endereco').textContent = ponto.endereco;
            new_card.querySelector('.telefone').textContent = ponto.telefone;
        });

        new_card.addEventListener('click', () => {
            toggle_details(new_card);
        });      

        card_container.appendChild(new_card);
    });
}

window.onload = () => {
    render_cards();
}
