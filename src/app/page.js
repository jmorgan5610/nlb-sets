"use client";

import { styled } from "@pigment-css/react";

import TopNav from "@/components/TopNav/TopNav";
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
              <a href={"/nlb-sets/" + team.id} key={team.id}>
                {team.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
