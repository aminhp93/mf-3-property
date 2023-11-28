import Property from "@/features/property/Property";
import { TEST } from "@/features/property/Property.constants";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";

const Page = () => {
  return (
    <div>
      Property
      <Button variant="contained">Button</Button>
      <Property
        {...TEST}
        onChange={(data: any) => {
          console.log("onChange", data);
        }}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
