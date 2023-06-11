import { TouristRoute1 } from "./TouristRoute1";
import { TouristRoute2 } from "./TouristRoute2";

export const App = () => {
  const route1 = {
    name: "Вишенське озеро",
    length: "12km",
    difficulty: "6/10",
    time: "3h",
  };
  const route2 = {
    name: "Черепашинецький кар'єр",
    length: "21km",
    difficulty: "9/10",
    time: "6h",
  };

  return (
    <div>
      {/* Спосіб 1: Передача параметрів через пряме використання */}
      <TouristRoute1
        name={route1.name}
        length={route1.length}
        difficulty={route1.difficulty}
        time={route1.time}
      />

      {/* Спосіб 2: Передача параметрів через об'єкт */}
      <TouristRoute2 route={route2} />
    </div>
  );
};
