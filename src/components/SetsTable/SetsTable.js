import { styled } from "@linaria/react";

import PokePaste from "../PokePaste";

export const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((opponent) => {
          return <th key={opponent}>{opponent}</th>;
        })}
      </tr>
    </thead>
  );
};

export const TableBody = ({ index, data }) => {
  return (
    <tbody>
      {index.map((name, name_idx) => {
        return (
          <tr key={name}>
            {data[name_idx].map((set, key) => {
              return (
                <td key={key}>{set !== null && <PokePaste paste={set} />}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

const SetsTable = ({ data }) => {
  return (
    <Wrapper>
      <TableHead columns={data["columns"]} />
      <TableBody index={data["index"]} data={data["data"]} />
    </Wrapper>
  );
};

const Wrapper = styled.table`
  display: block;
  border-collapse: collapse;
  white-space: nowrap;

  th,
  td {
    font-size: 0.875em;
    vertical-align: top;
    border: 1px solid;
    padding: 4px;
  }
`;

export default SetsTable;
