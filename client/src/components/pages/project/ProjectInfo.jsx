import "./ProjectInfo.css";

function ProjectInfo({
  title,
  subtitle,
  team,
  company,
  types,
  time,
  location,
  venue,
}) {
  return (
    <div className="project-info">
      <h1 className="project-info__title">{title}</h1>
      <h3 className="project-info__subtitle">{subtitle}</h3>
      <div className="project-info__content">
        {team && <p>{`Co-created with ${team.join(" & ")}`}</p>}
        {company && <p>{`Worked at ${company}`}</p>}
        <p>{types.join(" / ")}</p>
        <p>{time}</p>
        {location && <p>{location}</p>}
        {venue && <p>{venue}</p>}
      </div>
    </div>
  );
}
export default ProjectInfo;
