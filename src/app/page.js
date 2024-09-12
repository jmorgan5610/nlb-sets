"use client";

import Link from 'next/link';
import { styled } from '@linaria/react';

import TopNav from "@/components/TopNav";
import data from "./_data/report.json";

export default function Home() {
  return (
    <>
      <TopNav id={data.map((team) => team.id)} />
      <div>
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
      </div>
    </>
  );
}
