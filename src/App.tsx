import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/client/home";
import ClientLayout from "./layouts/client";
import DetailPage from "./pages/client/detail";
import OrderPage from "./pages/client/order";
import CartPage from "./pages/client/cart";
// import QrPage from "./pages/client/Qr";
import ScanPage from "./pages/cashier/scan";
import QrPage from "./pages/client/qr";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/qr" element={<QrPage />} />
				</Route>
				<Route path="/:id" element={<DetailPage />} />
				<Route path="/order/:id" element={<OrderPage />} />

				<Route path="/cashier" element={<ScanPage />} />
				{/* <Route path="/admin">
				</Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
