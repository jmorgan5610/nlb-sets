import Link from 'next/link';
import { styled } from '@linaria/react';

const TopNav = ({ id, slug }) => {
  return (
    <Wrapper>
      <ul>
        <li className="brand">
          <Link href=".">Home</Link>
        </li>
        {id.map((id) => {
          if (id != slug) {
            return (
              <li key={id}>
                <Link href={"/" + id}>{id}</Link>
              </li>
            );
          } else {
            return (
              <li key={id}>
                <p>{id}</p>
              </li>
            );
          }
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: 1fr min(85ch, 100%) 1fr;

  background-color: var(--theme-callout-bg);
  border-bottom: 1px solid var(--theme-callout-border);

  font-weight: bold;
  padding: 16px 0;

  ul {
    grid-column: 2;
    display: flex;
    list-style-type: none;
    align-items: baseline;
    padding: 0px;
    margin: 0;
  }

  .brand {
    margin-right: auto;
  }

  li,
  p {
    display: inline;
    white-space: pre;
  }

  li:not(:last-child, .brand):after {
    content: " / ";
  }
`;

export default TopNav;
