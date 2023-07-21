import React from "react";
import PaginationSelector from '../PaginationSelector/PaginationSelector';
import { FaGripHorizontal, FaGripVertical } from 'react-icons/fa';
import { ContainerOpcoesCards } from "./Styled";

const OpcoesCards = ({handleLayoutToggle, cardsPerPage, setCardsPerpage, layout, handleBrandFilter }) => {
    return (
        <ContainerOpcoesCards>
            <PaginationSelector cardsPerPage={cardsPerPage} setCardsPerpage={setCardsPerpage}/>
            {layout === 'vertical' ? (
                <FaGripHorizontal onClick={handleLayoutToggle} size={24} color={'#ffffff'} style={{ cursor: 'pointer' }} />
            ) : (
                <FaGripVertical onClick={handleLayoutToggle} size={24} color={'#ffffff'} style={{ cursor: 'pointer' }} />
            )}
        </ContainerOpcoesCards>
    )
} 

export default OpcoesCards;