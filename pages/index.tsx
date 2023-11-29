import dynamic from "next/dynamic";
import { Button } from "mf-packages";
// import { capitalizeText } from "@piscada/foresight-common-ui-components";

const Page = () => {
  return (
    <div>
      <div>Property</div>
      <Button />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
