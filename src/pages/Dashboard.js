import HeroCard from "../components/Card";
import { useSelector } from "react-redux";

function Dashboard() {
  const heroesData = useSelector((state) => state.heroesData);
  return heroesData.map((hero) => <HeroCard key={hero.id} heroInfo={hero} />);
}

export default Dashboard;
