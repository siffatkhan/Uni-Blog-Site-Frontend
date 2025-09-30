import { Link } from "react-router-dom";
import "./SubjectCard.css";

const SubjectCard = ({ title, link }) => {
  return (
    <article className="card">
      <h3 className="title">{title}</h3>
      <Link to={link} style={{ textDecoration: "none" }}>
        <button className="button">See Papers</button>
      </Link>
    </article>
  );
};
export default SubjectCard;
