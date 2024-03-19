import "./ChargeItem.scss";
import type { ICharge } from "@/types/types";

const ChargeItem: React.FC<ICharge> = ({ point, price }) => {
  return (
    <div className="chargeItem-wrapper">
      <p className="chargeItem-title">{point} POINT 교환하기</p>
      <p className="chargeItem-content">{price}원</p>
    </div>
  );
};

export default ChargeItem;
