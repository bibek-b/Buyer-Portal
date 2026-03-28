import type { PropertyType } from "../../types/propertyType";
import { storage } from "../../utils/storage";
import PropertyCard from "./PropertyCard";

const DashboardHome = () => {
    const properties: PropertyType[] = storage.get<PropertyType[]>("properties")!;
    console.log(storage.get<PropertyType[]>("properties"))
  return (
    <div className="py-4 space-y-20">
      <h2 className="text-4xl font-bold">Welcome, Bibek (Buyer)</h2>

      <span className=" absolute left-1/2 top-25 text-lg">
        List of available properties 🏘
      </span>

      <PropertyCard data={properties} />
    </div>
  );
};

export default DashboardHome;
