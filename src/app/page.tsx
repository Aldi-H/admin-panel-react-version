import { redirect } from "next/navigation";

const Home = ({}) => {
  redirect("/admin/devices");
};

export default Home;
