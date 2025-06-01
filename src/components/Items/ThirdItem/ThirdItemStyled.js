import styled from "@emotion/styled";

export const ThirdItemStyled = styled.li`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #ffcc6a;

  border-radius: 10px;

  @media (min-width: 768px){
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1280px){
  grid-column: 3;
  grid-row: 2;
  }

  & > h3 {
    margin-bottom: 16px;

    text-align: left;

    font-weight: 500;
    font-size: 26px;
    line-height: 0.9;

    color: #000;

    @media (min-width: 768px){
        font-size: 28px;
    }
  }
`;

export const Thumb = styled.div`
  height: 157px;
  width: 208px;

  & > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
