"use client";

import { styled } from "@linaria/react";

const CopyButton = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text.join("\n"));
  };

  return (
    <Wrapper onClick={handleCopy}>
      EXPORT
    </Wrapper>
  );
};

const Wrapper = styled.button`
  margin-left: auto;
  background-color: inherit;
  color: inherit;
  border: none;
  font-size: 0.675rem;
  border-radius: 15px;

  &:hover {
    background-color: rgba(64, 64, 64)
  }
`;

export default CopyButton;
