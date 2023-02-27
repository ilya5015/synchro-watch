import Link from "next/link";
import styles from "./Rooms.module.css";

const roomsInit = [
  { roomId: "2", roomCreator: "dfsdf" },
  { roomId: "3", roomCreator: "cvbbcv" },
  { roomId: "1", roomCreator: "gcvb" },
  { roomId: "4", roomCreator: "ghjhg" },
];

function Rooms({ rooms }) {
  return (
    <div className={styles.roomsWrapper}>
      {roomsInit.map((room, index) => (
        <div className={styles.room} key={index}>
          <Link href={`/room/${room.roomId}`}>Room №{room.roomId}</Link>
        </div>
      ))}
    </div>
  );
}

export default Rooms;
