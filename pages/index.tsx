import Property from "@/features/property/Property";
import { TEST } from "@/features/property/Property.constants";

const Page = () => {
  return (
    <div>
      Property
      <Property {...TEST} />
    </div>
  );
};

export default Page;
