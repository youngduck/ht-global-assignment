import "./storeItem.scss";
import type { IStore } from "@/types/types";

const StoreItem: React.FC<IStore> = ({ singer }) => {
  return (
    <div className="storeItem-wrapper">
      <p className="storeItem-title">{singer}</p>
      <p>굿즈 구매하기</p>
    </div>
  );
};

export default StoreItem;
