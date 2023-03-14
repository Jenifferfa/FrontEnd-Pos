import { MainMenu } from "./components/MainMenu";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <Header />
      <PostList />
    </div>
  );
}
