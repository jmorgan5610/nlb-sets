import { Sets } from "@pkmn/sets";
import { Sprites, Icons } from "@pkmn/img";
import { styled } from "@linaria/react";

import { ItemIcon, PokemonIcon } from "../PokemonIcon";
import CopyButton from "../CopyButton";

const PokePaste = ({ paste }) => {
  if (paste === null) {
    return null;
  }

  const set = Sets.fromString(paste.join("\n"));

  return (
    <Wrapper>
      <HorizontalWrapper>
        <IconButton>
          <PokemonIcon name={set.species} />
          <ItemWrapper>{set.item && <ItemIcon item={set.item} />}</ItemWrapper>
        </IconButton>
        <h3>{set.species}</h3>
        <CopyButton text={paste} />
      </HorizontalWrapper>

      <InfoBlock>
        <p>Ability</p>
        <p>Nature</p>
        <p>Item</p>
        <Callout>{set.ability}</Callout>
        <Callout>{set.nature}</Callout>
        <Callout>{set.item}</Callout>
      </InfoBlock>

      <div>
        <ul>
          <p>EVs: </p>
          {set.evs.hp > 0 && <li>{set.evs.hp + " HP"}</li>}
          {set.evs.atk > 0 && <li>{set.evs.atk + " Atk"}</li>}
          {set.evs.def > 0 && <li>{set.evs.def + " Def"}</li>}
          {set.evs.spa > 0 && <li>{set.evs.spa + " SpA"}</li>}
          {set.evs.spd > 0 && <li>{set.evs.spd + " SpD"}</li>}
          {set.evs.spe > 0 && <li>{set.evs.spe + " Spe"}</li>}
        </ul>
      </div>

      {set.ivs ? (
        <div>
          <ul>
            <p>IVs: </p>
            {set.ivs.hp < 31 && <li>{set.ivs.hp + " HP"}</li>}
            {set.ivs.atk < 31 && <li>{set.ivs.atk + " Atk"}</li>}
            {set.ivs.def < 31 && <li>{set.ivs.def + " Def"}</li>}
            {set.ivs.spa < 31 && <li>{set.ivs.spa + " SpA"}</li>}
            {set.ivs.spd < 31 && <li>{set.ivs.spd + " SpD"}</li>}
            {set.ivs.spe < 31 && <li>{set.ivs.spe + " Spe"}</li>}
          </ul>
        </div>
      ) : (
        <p>IVs: </p>
      )}

      {set.moves.map((move) => {
        return (
          <Callout key={move}>
            {move}
          </Callout>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px;
  gap: 4px;

  ul {
    display: flex;
    list-style-type: none;
    align-items: baseline;
    padding: inherit;
  }

  li,
  p {
    display: inline;
    white-space: pre;
  }

  li:not(:last-child):after {
    content: " / ";
  }

  .callout {
    background-color: var(--theme-callout-bg);
    border: 1px solid var(--theme-callout-border);
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const IconButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;

  border: none;
  position: relative;
  border-radius: 100%;
  background: inherit;
`;

const ItemWrapper = styled.div`
  position: absolute;
  right: -7%;
  bottom: -17%;
  opacity: 0.8;
  transform: scale(0.75);
`;

const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0px 4px;

  p {
    padding: 0 0.5rem;
  }
`;

const Callout = styled.div`
  background-color: var(--theme-callout-bg);
  border: 1px solid var(--theme-callout-border);
  border-radius: 0.5rem;
  padding: 0 0.5rem;
`;

export default PokePaste;
