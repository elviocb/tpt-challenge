import styled from "styled-components";

const Button = styled.div`
  width: 144px;
  height: 48px;
  border-radius 4px;
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
`;

const ButtonBlue = styled(Button)`
  background-color: #0074d9;
`;

const ButtonOrange = styled(Button)`
  background-color: #ff851b;
`;

const ButtonGray = styled(Button)`
  background-color: #aaa;
`;

export { ButtonBlue, ButtonOrange, ButtonGray };
