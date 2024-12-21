import { CardProduct } from "@/components/custom/card-product";
import { Input } from "@/components/ui/input";
import { getProducts } from "@/data/product";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function HomePage() {
	const products = getProducts();
	const navigate = useNavigate();

	return (
		<div className="min-h-screen">
			<header className="mb-[150px] px-[20px]">
				<div className="flex justify-between mt-8 items-center mb-5">
					<h1 className="text-3xl font-semibold">NgombeanKu</h1>
					<ShoppingBag />
				</div>
				<Input placeholder="search..." className="py-5" />
			</header>

			{/* <h1 className="text-xl font-semibold mb-3 px-[20px]">Best Seller</h1> */}

			<Swiper
				spaceBetween={12}
				slidesPerView={"auto"}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				direction="horizontal"
				centeredSlides={true}
				loop={true}
				className="overflow-visible"
			>
				{products.map((p) => (
					<SwiperSlide className="w-fit" key={p.id}>
						<CardProduct product={p} navigate={navigate} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
