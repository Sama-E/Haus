import "/src/assets/css/components/cards/projectcard.scss";
import { Link } from 'react-router-dom';

const ProjectCard = ({item}) => {
  return (
    <Link className="link" to="/">
      <div className="projectcard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.category}</h2>
            <span>{item.contractorName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;