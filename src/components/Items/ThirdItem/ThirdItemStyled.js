import styled from "@emotion/styled";

export const ThirdItemStyled = styled.li`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #ffcc6a;

  border-radius: 10px;

  & > h3 {
    margin-bottom: 16px;

    text-align: left;

    font-weight: 500;
    font-size: 26px;
    line-height: 0.9;

    color: #000;
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
