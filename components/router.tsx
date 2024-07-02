import { useNavigation } from "context/navigation";
import OrderConfirmed from "modules/order-confirmation/views/order-confirmed.screen";
import TabNavigation from "./tab-navigation";

const Router = () => {
  const { currentScreen } = useNavigation();

  return ["Products", "Checkout"].includes(currentScreen) ? (
    <TabNavigation />
  ) : (
    <OrderConfirmed />
  );
};
export default Router;
