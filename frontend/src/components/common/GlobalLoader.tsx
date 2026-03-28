import { FallingLines } from "react-loader-spinner";
import { LockBodyScroll } from "../../utils/lockBodyScroll";
import { useLoaderStore } from "../../stores/loaderStore";

const GlobalLoader = () => {
  const { isLoading } = useLoaderStore();

  LockBodyScroll(isLoading);
  return (
    isLoading && (
      <div className=" fixed text-gre inset-0 flex items-center justify-center bg-black/50 bg-blue">
        <FallingLines color="white" />
      </div>
    )
  );
};

export default GlobalLoader;
