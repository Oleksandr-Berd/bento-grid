import styled from "@emotion/styled";

export const FifthItemStyled = styled.li`
padding-top: 24px;
padding-bottom: 24px;
padding-left: 42px;
padding-right: 42px;

text-align: center;

background-color: #7551DC;
color: #fff;

border-radius: 10px;

 @media (min-width: 768px){
    grid-column: 1/-1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-left: 80px;
    padding-right: 80px;

    text-align: left;
  }

& > h3{
    font-size: 32px;
    line-height: 0.9;
    font-weight: 500;
    letter-spacing: -6%;

    @media (min-width: 768px){
        font-size: 36px;
    }
}
`

export const Thumb = styled.div`

`