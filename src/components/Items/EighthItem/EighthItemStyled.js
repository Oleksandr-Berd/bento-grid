import styled from "@emotion/styled";

export const EighthItemStyled = styled.li`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: left;

  background-color: #ffcc6a;
  color: #000;

  border-radius: 10px;

  & > h3 {
    margin-bottom: 24px;

    font-size: 32px;
    line-height: 0.9;
    font-weight: 500;

    @media (min-width: 768px){
        font-size: 36px;
    }
  }
`;
