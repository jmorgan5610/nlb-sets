import { styled } from "@linaria/react";

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

const Wrapper = styled.div`
  padding: 1px;
`;

export default PokePaste;
