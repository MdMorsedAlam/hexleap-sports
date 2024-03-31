import Collections from "@/components/Collections/Collections";
import Sports from "@/components/Sports/Sports";
import Topbar from "@/components/TopBar/Topbar";

const Home = () => {
  return (
    <main className="max-w-[1444px] mx-auto">
      <div className="lg:mx-16 md:mx-5 mx-0 py-10">
        <Topbar />
        <Sports />
        <Collections/>
      </div>
    </main>
  );
};

export default Home;
