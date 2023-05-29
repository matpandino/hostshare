import { type Category } from "@/types";
import {
  FaCity,
  FaUmbrellaBeach,
  FaLeaf,
  FaBed,
  FaSmile,
  FaSwimmingPool,
  FaSkating,
  FaQuestion,
} from "react-icons/fa";
import { GiBlockHouse, GiDuck, GiWheat } from "react-icons/gi";

export default function getCategoryIcon(category: Category) {
  switch (category.id) {
    case "677":
      return FaSwimmingPool;
    case "789":
      return FaUmbrellaBeach;
    case "8535":
      return FaCity;
    case "5348":
      return GiBlockHouse;
    case "4104":
      return GiWheat;
    case "7765":
      return FaSkating;
    case "8144":
      return GiDuck;
    case "8678":
      return FaBed;
    default:
      return FaQuestion;
  }
}
