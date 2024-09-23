import { styled } from "@linaria/react";
import { Dex } from "@pkmn/dex";
import { Generations } from "@pkmn/data";

const stats = {
  hp: "HP",
  atk: "Atk",
  def: "Def",
  spa: "SpA",
  spd: "SpD",
  spe: "Spe",
};
const default_ivs = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 };
const default_evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };

const StatBlock = ({ set }) => {
  if (set.ivs == null) {
    set.ivs = default_ivs;
  }

  if (set.evs == null) {
    set.evs = default_evs;
  }

  const ids = Object.keys(stats);

  const gens = new Generations(Dex);
  const plus = gens.get(9).natures.get(set.nature).plus;
  const minus = gens.get(9).natures.get(set.nature).minus;
  const base_stats = gens.get(9).species.get(set.species).baseStats;

  return (
    <Wrapper>
      <p></p>
      {ids.map((id) => {
        if (id == plus) {
          return <PlusWrapper key={id}>+{stats[id]}</PlusWrapper>;
        } else if (id == minus) {
          return <MinusWrapper key={id}>-{stats[id]}</MinusWrapper>;
        }
        return <p key={id}>{stats[id]}</p>;
      })}

      <p>Base </p>
      {ids.map((id) => {
        return <p key={id}>{base_stats[id]}</p>;
      })}

      <p>IVs</p>
      {ids.map((id) => {
        const val = set.ivs[id];
        if (val == default_ivs[id]) {
          return <DefaultWrapper key={id}>{val}</DefaultWrapper>
        }
        return <p key={id}>{val}</p>;
      })}

      <p>EVs</p>
      {ids.map((id) => {
        const val = set.evs[id];
        if (val == default_evs[id]) {
          return <DefaultWrapper key={id}>{val}</DefaultWrapper>
        }
        return <p key={id}>{val}</p>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  align-items: center;
  column-gap: 8px;
  text-align: center;

  :nth-child(7n + 1) {
    text-align: right;
  }
`;

const PlusWrapper = styled.p`
  color: rgb(244, 67, 54);
`;

const MinusWrapper = styled.p`
  color: rgb(33, 150, 243);
`;

const DefaultWrapper = styled.p`
  opacity: 0.3;
`;

export default StatBlock;
