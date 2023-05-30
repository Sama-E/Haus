import "/src/assets/css/pages/home.scss";
import TrustedByBar from "/src/components/TrustedByBar";
import Featured from "/src/components/Featured";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedByBar />
    </div>
  )
}

export default Home