import { type Category } from "@/types";
import { FaceIcon } from "@radix-ui/react-icons";
import { FaCity, FaUmbrellaBeach, FaLeaf, FaBed } from "react-icons/fa";
import { MdApartment, MdCottage } from "react-icons/md";
import { GiBlockHouse, GiWheat } from "react-icons/gi";

export default function getCategoryIcon(category: Category) {
  switch (category) {
    case "City":
      return FaCity;
    case "Apartment":
      return MdApartment;
    case "Beach":
      return FaUmbrellaBeach;
    case "Villa":
      return GiBlockHouse;
    case "Countryside":
      return GiWheat;
    case "Cottage":
      return MdCottage;
    case "Nature":
      return FaLeaf;
    case "Loft":
      return FaBed;
    default:
      return FaceIcon;
  }
}
