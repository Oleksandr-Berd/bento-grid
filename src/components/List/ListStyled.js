import styled from "@emotion/styled";

export const ListStyled = styled.ul`


@media (min-width: 768px){
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: auto auto;
gap: 32px;
}

@media (min-width: 1280px){
  /* grid-auto-flow:dense; */
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);

}

&>li:not(:last-of-type){
    margin-bottom: 32px;

    @media (min-width: 768px){
        margin: 0;
    }
}
`