import { styled } from "@linaria/react";
import { Icons } from "@pkmn/img";

export const ItemIcon = ({ item }) => {
  const { style, url, left, top, css } = Icons.getItem(item);

  return (
    <Wrapper
      width={css.width}
      height={css.height}
      background={css.background}
    />
  );
}

export const PokemonIcon = ({ name }) => {
  const { style, url, left, top, css } = Icons.getPokemon(name);

  return (
    <Wrapper
      width={css.width}
      height={css.height}
      background={css.background}
    />
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  image-rendering: pixelated;
  background: ${(props) => props.background};
`;

// export default PokemonIcon;
