import styled from 'styled-components';

const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
`;

export default Checkbox;
