import styled from "@emotion/styled";

export const SixthItemStyled = styled.li`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;

  text-align: left;

  background-color: #fff;
  color: #000;

  border-radius: 10px;

  @media (min-width: 768px) {
    grid-column: 1/-1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-right: 24px;
  }

  & h3 {
    margin-bottom: 16px;

    font-size: 46px;
    font-weight: 500;
    letter-spacing: -4%;
    line-height: 0.9;

    @media (min-width: 768px) {
      font-size: 54px;
    }

    @media (min-width: 1280px) {
     grid-column: 2/3;
     grid-row: 4;
    }
  }

  & p {
    margin-bottom: 24px;

    font-size: 14px;
    font-weight: 400;
    line-height: 0.9;

    opacity: 0.5;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
