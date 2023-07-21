import React from "react";
import { CardsPorPagina, ContainerCardsPorpagina, ParagrafoCardsPorPagina } from "./Styled";

const PaginationSelector = ({cardsPerPage, setCardsPerpage}) => {
    return (
        <ContainerCardsPorpagina>
            <ParagrafoCardsPorPagina>Cards por página:</ParagrafoCardsPorPagina>
            <CardsPorPagina value={cardsPerPage} onChange={(e) => setCardsPerpage(Number(e.target.value))}>
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
            </CardsPorPagina>
        </ContainerCardsPorpagina>
    )
} 

export default PaginationSelector;