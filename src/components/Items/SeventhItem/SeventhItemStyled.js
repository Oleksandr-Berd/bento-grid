import styled from "@emotion/styled";

export const SeventhItemStyled = styled.li`
  padding-top: 32px;
  padding-bottom: 60px;
  padding-left: 32px;
  padding-right: 32px;

  text-align: left;

  background-color: rgba(255, 204, 106, 0.3);
  color: #000;

  border-radius: 10px;

  & > h3 {
    margin-bottom: 24px;

    font-size: 32px;
    font-weight: 500;
    line-height: 0.9;
    letter-spacing: -6%;

    & > span {
      font-style: italic;

      color: #7551dc;
    }
  }

  & > button {
position: relative;

    width: 190px;

    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;

    text-align: left;

    font-weight: 600;
    font-size: 20px;

    background-color: #ffcc6a;
    color: #7551dc;

    border-radius: 42px;

    &::after {
      content: "";
      display: inline-block;
      width: 18px;
      height: 18px;
      background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%237551DC%22%20d%3D%22M8.24%200.62c0.36-0.7%201.36-0.7%201.73%200l2.31%204.47a0.88%200.88%200%200%200%20.42.42l4.47%202.31c0.7%200.36%200.7%201.36%200%201.73l-4.47%202.31a0.88%200.88%200%200%200-.42.42l-2.31%204.47c-0.36%200.7-1.36%200.7-1.73%200l-2.31-4.47a0.88%200.88%200%200%200-.42-.42L1.04%209.55c-0.7-0.36-0.7-1.36%200-1.73l4.47-2.31a0.88%200.88%200%200%200%20.42-.42L8.24%200.62z%22/%3E%3C/svg%3E");
      background-size: cover;
      background-repeat: no-repeat;
      margin-left: 8px;
      vertical-align: middle;
    }

&::before {
position: absolute;

bottom: 0;
left: 50%;

transform: translate(-50%, 80%);

  content: '';
  display: inline-block;
  width: 36px;
  height: 36px;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M24.7421%200.391827L2.16614%209.07487C0.0571012%209.88604%200.470127%2012.9854%202.71799%2013.2159L13.1629%2014.2872C14.092%2014.3825%2014.853%2015.0673%2015.0454%2015.9813L17.1697%2026.0717C17.6351%2028.2822%2020.7594%2028.3681%2021.3456%2026.1865L27.5872%202.95363C28.0429%201.25764%2026.3811%20-0.238585%2024.7421%200.391827Z%22%20fill%3D%22%231C1C1C%22/%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
}
     
  }
`;
