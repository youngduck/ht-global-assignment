import "./chargepage.scss";
import ChargeList from "@/component/charge/chargeList/ChargeList";

const Chargepage = () => {
  return (
    <>
      <h1 className="chargePage-header">포인트 교환</h1>
      <ChargeList />
    </>
  );
};

export default Chargepage;
