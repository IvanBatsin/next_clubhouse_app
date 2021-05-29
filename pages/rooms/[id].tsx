import { useRouter } from "next/dist/client/router";
import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import Room from "../../components/Room/Room";

const RoomItemPage: React.FC = () => {
  const router = useRouter();
  console.log('id - ', router.query.id);
  return (
    <div className="container">
      <Header/>
      <BackButton title="Rooms" href="/rooms"/>
      <Room title="Test room title"/>
    </div>
  )
}

export default RoomItemPage;