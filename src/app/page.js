"use client";

import Link from 'next/link';
import { styled } from '@linaria/react';

import TopNav from "@/components/TopNav";
import data from "./_data/report.json";

export default function Home() {
  return (
    <>
      <TopNav id={data.map((team) => team.id)} />
      <Wrapper>
        <h1>Teams</h1>
        {data.map((team) => {
          return (
            <div key={team.id}>
              <Link href={"/" + team.id} key={team.id}>
                {team.name}
              </Link>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(85ch, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`
