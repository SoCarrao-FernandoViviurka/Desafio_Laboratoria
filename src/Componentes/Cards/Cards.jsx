import { useEffect, useState } from 'react';
import data from '../../Data/data.json';
import { Botao, BotaoContainer, Card, CardInfo, Cidade, IconeLocation, ImagemCarro, InformacoesDetalhes, ListaDeCards, Marca, Modelo, Valor } from './Styled';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import OpcoesCards from '../OpcoesCards/OpcoesCards';

const Cards = () => {

    const [cardsPerPage, setCardsPerpage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const [layout, setLayout] = useState('vertical');

    const handleLayoutToggle = () => {
        setLayout(prevLayout => (prevLayout === 'vertical' ? 'horizontal' : 'vertical'));
    };

    const pages = Math.ceil(data.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentItens = data.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentPage(0);
        window.scrollTo(0, 0);
    }, [cardsPerPage]);
    
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [currentPage]);
    
    return (
        <div>
            <OpcoesCards handleLayoutToggle={handleLayoutToggle} setCardsPerpage={setCardsPerpage} layout={layout}/>
            <ListaDeCards>
                {currentItens.map ((card, index) => (
                    <Card key={index} layout={layout}>
                        <div>
                            <ImagemCarro src={card.veiculo_foto[0]} alt='Imagem do carro' layout={layout}/>
                            <Cidade><IconeLocation/>{card.cidade_nome}</Cidade>
                        </div>
                        <CardInfo>
                            <Marca layout={layout}>{card.veiculo_marca} {card.modelo_nome_pai}</Marca>
                            <Modelo layout={layout}>{card.veiculo_modelo}</Modelo>
                            <InformacoesDetalhes layout={layout}>
                                <p>{card.veiculo_cambio}</p>
                                <p>{card.ano_fabricacao}/{card.ano_modelo}</p>
                                <p>{Number(card.veiculo_km).toLocaleString()} Km</p>
                            </InformacoesDetalhes>
                            <Valor layout={layout}>{Number(card.veiculo_valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Valor>
                            <BotaoContainer>
                                <Botao primary layout={layout}>Simular financiamento</Botao>
                                <Botao layout={layout}>Entrar em contato</Botao>
                            </BotaoContainer>
                        </CardInfo>
                    </Card>
                ))}
            </ListaDeCards>
            <PaginationComponent pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Cards;