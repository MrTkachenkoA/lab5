import "../index.css";

export const TouristRoute2 = (props) => {
  const { name, length, difficulty, time } = props.route;

  return (
    <div className="tourist-routes">
      <h2>{name}</h2>
      <p>Length of the route: {length}</p>
      <p>Difficulty of the route: {difficulty}</p>
      <p>time of the route: {time}</p>
    </div>
  );
};
