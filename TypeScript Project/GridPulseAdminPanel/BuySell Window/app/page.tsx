import BiddingTables from "@/components/bidtable";
import Chart from "@/components/charts";
import ControlPanel from "@/components/controlpanel";
import Header from "@/components/navbar";
import Sidebar from "@/components/pricelist";

export default function Home() {
  return (
    <>
            <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <Chart />
          <div className="flex">
            <BiddingTables />
            <ControlPanel />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
    </>
  );
}
