import Image from "next/image";
import Link from "next/link";

interface ProductProps {
	id: number;
	title: string;
	price: number;
	newPrice?: number;
	sizes?: string[];
	colors?: string[];
	discount?: string;
	image: string;
}

export const Product = ({ data }: { data: ProductProps }) => {
	const { id, image, title, price} = data;
	// const [isFavouriteList, setIsFavouriteList] = useState(false);

	// const cartState = useCartState();

	// const addToFavourite = (e: MouseEvent<HTMLDivElement>) => {
	// 	e.preventDefault();
	// 	setIsFavouriteList(!isFavouriteList);
	// };

	// const addItemToCart = () => {
	// 	cartState.addItemToCart({
	// 		price: price,
	// 		newPrice: newPrice,
	// 		id: id,
	// 		title: title,
	// 		amount: 1,
	// 		color: colors && colors[0],
	// 		size: sizes && sizes[0],
	// 		image: image[0],
	// 	});
	// };

	return (
		<div className="group relative mx-6 my-4 flex w-full flex-col border-[1px] border-solid border-zinc-50 bg-white shadow-md transition-shadow duration-500 hover:border-zinc-100 hover:shadow-xl md:px-8 md:py-8">
			<div>
				<div className="center relative flex aspect-square h-auto w-full">
					<Image
						src={image}
						alt={title}
						fill
						unoptimized={true}
						className="h-auto object-contain"
						crossOrigin="anonymous"
					/>
				</div>
		
				<div
					className={`text-zinc-200 absolute right-4 top-4
					text-3xl`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={`duration-600 h-8 
                        w-8 transition-opacity hover:cursor-pointer group-hover:opacity-100`}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
				</div>
			</div>
			<Link href={`/products/${id}`} className="grow py-4 hover:underline hover:underline-offset-4">
				<h3 className="text-l text-center  decoration-transparent transition-opacity duration-500 group-hover:decoration-inherit">
					{title}
				</h3>
				<div className="flex justify-center">
					<p className={`mt-1.5 text-center tracking-wide`}>{`${price} EUR`}</p>
				</div>
			</Link>
			<div className="mx-auto">
				<button type="button">Add to Cart</button>
			</div>
		</div>
	);
};
