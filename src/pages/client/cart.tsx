import { CartList } from "@/components/custom/cart-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Order, useCart } from "@/hooks/useCart";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function CartPage() {
	const { products } = useCart();
	const navigate = useNavigate();

	const [indexShow, setIndexShow] = useState<number | null>(null);
	const [name, setName] = useState("");

	const getTotalPrice = () => {
		return products.reduce((total, p) => total + p.price * p.qty, 0);
	};

	const handleCheckout = async () => {
		const order: Order = {
			id: Date.now(),
			name,
			products,
		};

		const json = JSON.stringify(order);

		// await fetch(`http://localhost:8080/order`, {
		// 	body: json,
		// });

		navigate("/qr");
	};

	return (
		<div className="px-5 pt-9 pb-[150px]">
			<h1 className="text-2xl font-semibold mb-9">Shopping Cart</h1>

			{products.length > 0 ? (
				<div>
					{/* list order detail (products) */}
					<div className="flex flex-col ">
						{products.map((p, idx) => (
							<>
								<div
									key={idx}
									onClick={() => {
										setIndexShow(idx);
										console.log(idx == indexShow);
									}}
								>
									<CartList product={p} isShow={indexShow == idx} />
								</div>
								<hr />
							</>
						))}
					</div>

					{/* total price */}
					<div className="mt-5 mb-5">
						<h1 className="text-xl">Total</h1>
						<h1 className="text-2xl font-bold">Rp {getTotalPrice().toLocaleString("IND")}</h1>
					</div>

					{/* dialog checkout */}
					<Dialog>
						<DialogTrigger className="w-full">
							<Button className="w-full">Checkout</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle className="capitalize">are you sure to process the order ?</DialogTitle>
								<DialogDescription>
									<p>Please enter your name in the field below</p>
								</DialogDescription>
							</DialogHeader>
							<Input
								placeholder="your name"
								className="mt-5"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<DialogFooter>
								<Button className="w-full mt-6" onClick={handleCheckout}>
									Checkout
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			) : (
				<div className="bg-blue-100 border-blue-500 border px-5 py-8 rounded-xl">
					<h1 className="text-lg text-center capitalize">anda belum menambhakan product ke keranjang 😯</h1>
				</div>
			)}
		</div>
	);
}
