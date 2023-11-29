import dynamic from "next/dynamic";

const Page = () => {
  return <div>Property</div>;
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
