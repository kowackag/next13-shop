import { Product } from "@/components/Product";
interface ProductProps {
	id: number;
	title: string;
	description: string;
	price: number;
	color: string[];
	size: string[];
	image: string;
}

const Products = ({ data }: { data: ProductProps[] }) => {
	if (!data) {
		return (
			<div className="flex-grow px-8 py-8 text-2xl text-zinc-700">
				<p>Loading....</p>
			</div>
		);
	}

	return (
		<div className=" mx-2 my-2 flex items-center justify-between">
			<ul
				className="grid grow grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3"
				data-testid="products-list"
			>
				{data.length &&
					data.map((item) => (
						<li key={item.id}>
							<Product data={item} />
						</li>
					))}
			</ul>
		</div>
	);
};
export default Products;
