import "../index.css";

export const TouristRoute1 = (props) => {
  return (
    <div className="tourist-routes">
      <h2>{props.name}</h2>
      <p>Length of the route: {props.length}</p>
      <p>Difficulty of the route: {props.difficulty}</p>
      <p>time of the route: {props.time}</p>
    </div>
  );
};
