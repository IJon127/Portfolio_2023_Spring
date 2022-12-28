import "./ProjectInfo.css";

function ProjectInfo({ title, subtitle, team, types, time, location, venue }) {
  return (
    <div className="project-info">
      <h1 className="project-info__title">{title}</h1>
      <h3 className="project-info__subtitle">{subtitle}</h3>
      <div>
        {team && (
          <p className="project-info__content">{`Co-created with ${team.join(
            " & "
          )}`}</p>
        )}
        <p className="project-info__content">{types.join(" / ")}</p>
        <p className="project-info__content">{time}</p>
        {location && <p className="project-info__content">{location}</p>}
        {venue && <p className="project-info__content">{venue}</p>}
      </div>
    </div>
  );
}
export default ProjectInfo;
