import { styled } from "@linaria/react";
import "./globals.css";

export const metadata = {
  title: "NLB Sets",
  description: "Sets previously used in NLB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;
