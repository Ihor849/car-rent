import styled from "styled-components";

export const StyledWrap = styled.div`
    display: flex;
    align-items: center;
    
    gap: 20px;

    @media screen and (max-width: 767px) {
    display: none;
}
`