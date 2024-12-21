import { QRCodeCanvas } from "qrcode.react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Order, ProductOrder, useCart } from "@/hooks/useCart";

export default function QrPage() {
	const { products } = useCart();

	return (
		<>
			<div className="bg-blue-500 min-h-screen px-5 pt-5 pb-[150px]">
				<div className="bg-white  py-5 rounded-2xl">
					<h1 className="capitalize text-2xl text-center mb-3">Tunjukkan QR ini ke kasir</h1>
					<QRCodeCanvas value={Date.now().toString()} size={300} className="mx-auto" />

					<div className="flex px-4 gap-5 font-bold mt-6 mb-8 justify-center">
						<h1 className=" text-lg ">Nama Pemesan :</h1>
						<h1 className=" text-lg ">David Bontha</h1>
					</div>
					<OrderDetail products={products} />
				</div>
			</div>
		</>
	);
}

function OrderDetail({ products }: { products: ProductOrder[] }) {
	const total = products.reduce((total, p) => total + p.price * p.qty, 0);
	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Img</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>price</TableHead>
						<TableHead>qty</TableHead>
						<TableHead>subtotal</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map((p) => (
						<TableRow>
							<TableCell>
								<img src={p.img} className="h-[50px]" />
							</TableCell>
							<TableCell>{p.name}</TableCell>
							<TableCell className="whitespace-nowrap">Rp {p.price.toLocaleString("IND")}</TableCell>
							<TableCell>{p.qty}</TableCell>
							<TableCell className="whitespace-nowrap">Rp {(p.price * p.qty).toLocaleString("IND")}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="flex text-xl justify-between px-4 mt-5">
				<h1>Total Harga</h1>
				<h1 className="font-bold">Rp {total.toLocaleString("IND")}</h1>
			</div>
		</>
	);
}
