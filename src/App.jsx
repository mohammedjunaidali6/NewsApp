import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NewsFeed from "./components/newsFeed/NewsFeed";
import { NewsProvider } from "./context/Context";

export default function App() {
  return (
    <NewsProvider>
      <div className="app">
        <Navbar />
        <NewsFeed />
      </div>
    </NewsProvider>
  );
}
