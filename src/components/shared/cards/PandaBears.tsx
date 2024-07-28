import { useBearStore } from "../../../stores";
import { WhiteCard } from "./WhiteCard";

const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);
  const decreasePandaBears = useBearStore((state) => state.decreasePandaBears);

  return (
    <WhiteCard centered>
      <h2>Osos Panda</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => decreasePandaBears(1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export default PandaBears;
