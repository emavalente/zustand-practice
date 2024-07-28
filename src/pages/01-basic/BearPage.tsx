import BlackBears from "../../components/shared/cards/BlackBears";
import PolarBears from "../../components/shared/cards/PolarBears";
import PandaBears from "../../components/shared/cards/PandaBears";

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
      </div>
    </>
  );
};
