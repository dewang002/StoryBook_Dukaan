import RevenueCard from "./component/RevenueCard";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div>
        <Sidebar />
      <div className="grid grid-cols-12 gap-10 pl-10">
        <RevenueCard
          title={"Amount pending"}
          money={23432}
          orders={23}
          time={"4:00PM"}
        />
        <RevenueCard
          title={"Amount pending"}
          money={23432}
          orders={23}
          time={"4:00PM"}
        />
        <RevenueCard
          title={"Amount pending"}
          money={23432}
          orders={23}
          time={"4:00PM"}
        />
      </div>
    </div>
  );
}

export default App;
