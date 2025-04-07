import Map from "./_components/Map";
import OmamoriFeedContainer from "./_components/OmamoriFeedContainer";

export default async function Home() {
  return (
    <div>
      <Map />
      <OmamoriFeedContainer />
    </div>
  );
}
