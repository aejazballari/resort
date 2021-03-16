import { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
const RoomContainer = () => {
  const { rooms, sortedRooms, loading } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;
