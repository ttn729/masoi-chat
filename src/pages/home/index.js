import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room != "" && username != "") {
      socket.emit("join_room", { username, room });
      navigate("/chat", { replace: true });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Spicy Ma Sói Chat</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Choose Room --</option>
          <option value="nhat">Nhật</option>
          <option value="spicy">Spicy</option>
          <option value="edric">Edric</option>
          <option value="tun">Tủn</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
