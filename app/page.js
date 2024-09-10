import Landing from "./src/components/landing";
import Navbar from "./src/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {" "}
      {/* Set background to white and height to full screen */}
      <Navbar />
      <Landing />
    </div>
  );
}
