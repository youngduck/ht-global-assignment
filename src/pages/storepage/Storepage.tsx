import "./storepage.scss";
import StoreList from "@/component/store/storeList/StoreList";

const Storepage = () => {
  return (
    <>
      <h1 className="storePage-header">굿즈 구매하러가기</h1>
      <StoreList />
    </>
  );
};

export default Storepage;
