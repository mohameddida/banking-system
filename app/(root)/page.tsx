import Headerbox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalenceBox from "@/components/TotalBalencceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Mohamed",
    lastName: "Dida",
    email: "contact@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="this is home page from next JS see you in the other pages"
          />
          <TotalBalenceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
