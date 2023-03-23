import Form from "ComponentsFarm/pageComp/order/Form";
import OrderLayout from "ComponentsFarm/layouts/pageLayouts/OrderLayout";

function Group() {
  return (
    <OrderLayout>
      <h2 className="tit tit2">상담자 정보</h2>
      <p className="txt">정보 입력시, 동그라미 표시는 필수입력 항목입니다.</p>
      <Form />
    </OrderLayout>
  );
}

export default Group;
