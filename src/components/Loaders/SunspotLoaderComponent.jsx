import { SunspotLoader } from "react-awesome-loaders";
export const SunspotLoaderComponent = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#000]">
      <SunspotLoader
        gradientColors={["#6366F1", "#E0E7FF"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </div>
  );
};