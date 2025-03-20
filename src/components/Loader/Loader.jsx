import { Triangle } from "react-loader-spinner";

const Loader = ({ height, width, color }) => {
  return (
    <div>
      <Triangle
        visible={true}
        height={height}
        width={width}
        color={color} // ✅ Виправлено: `colors` → `color`
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
