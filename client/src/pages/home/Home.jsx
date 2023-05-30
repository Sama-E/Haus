import "/src/assets/css/pages/home.scss";
import {cards, projects} from "/src/data.js";

import CategoryCard from "/src/components/cards/CategoryCard";
import ProjectCard from "src/components/cards/ProjectCard";
import TrustedByBar from "/src/components/TrustedByBar";
import Featured from "/src/components/Featured";
import Slide from "src/components/Slide";
import Benefits from "src/components/Benefits";
import BusinessSolutions from "src/components/BusinessSolutions";


const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedByBar />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CategoryCard item={card} key={card.id}/>
        ))}
      </Slide>
      <Benefits />
      <BusinessSolutions />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
          <ProjectCard item={card} key={card.id}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home