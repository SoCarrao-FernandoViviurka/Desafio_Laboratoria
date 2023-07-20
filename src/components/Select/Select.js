import React, { forwardRef }from 'react';
import { StyledSelect } from './Styles';

const Select = forwardRef((props, ref) => {
 
    return(
        <StyledSelect  ref={ref} onChange={props.onChange}>                         
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
        </StyledSelect>
    )
});

export default Select;