import TopNav from "@/components/TopNav";
import SetsTable from "@/components/SetsTable";

import data from "../_data/report.json";

export function generateStaticParams() {
  return data.map((team) => ({
    id: team.id,
  }));
}

function Page({ params }) {
  const team_data = data.find((el) => el.id == params.id);
  return (
    <>
      <TopNav id={data.map((team) => team.id)} slug={team_data.id} />
      <h1>{team_data.name}</h1>
      <SetsTable data={team_data.sets} />
    </>
  );
}

export default Page;
