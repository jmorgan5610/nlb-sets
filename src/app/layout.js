import GlobalStyles from "@/components/GlobalStyles";

export const metadata = {
  title: "NLB Sets",
  description: "Sets previously used in NLB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalStyles />
      </body>
    </html>
  );
}
