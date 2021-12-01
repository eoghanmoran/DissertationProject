import styled from "styled-components";

export const DropdownWrapper = styled.form`


  justify-content: center;
`;
 
export const StyledSelect = styled.select`
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 30%;
  height: 100%;
 margin: 50px;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
