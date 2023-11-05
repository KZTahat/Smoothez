import "./homeView.css";
import {
  Header,
  PostHeader,
  NewFlavors,
  Statistics,
  Organic,
  PeopleSay,
} from "../../Components";

function HomeView() {
  return (
    <>
      <Header homeView={true} />
      <PostHeader />
      <NewFlavors />
      <Statistics />
      <Organic />
      <PeopleSay />
    </>
  );
}

export default HomeView;
