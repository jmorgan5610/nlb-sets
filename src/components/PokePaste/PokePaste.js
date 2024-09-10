import React from "react";
import { styled } from "@pigment-css/react";

const PokePaste = ({ paste }) => {
  if (paste === null) {
    return null;
  }

  return (
    <Wrapper>
      {paste.map((line, idx) => {
        return <div key={idx}>{line}</div>;
      })}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  
`;

export default PokePaste;
