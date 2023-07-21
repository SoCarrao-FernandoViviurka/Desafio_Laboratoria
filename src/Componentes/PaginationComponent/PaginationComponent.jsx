import React from "react";
import { BotaoPaginacao, ContainerPaginacao } from "./Styled";

const PaginationComponent = ({pages, currentPage, setCurrentPage}) => {
    return (
        <ContainerPaginacao>
            {Array.from(Array(pages), (item, index) => {
                return <BotaoPaginacao 
                    style = {index === currentPage ? {backgroundColor: "#EDDA27"} : null}
                    value={index} 
                    onClick={(e) => 
                        setCurrentPage(Number(e.target.value))}>
                    {index + 1}
                </BotaoPaginacao>
            })}
        </ContainerPaginacao>
    )
} 

export default PaginationComponent;