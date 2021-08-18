import axios from 'axios';
import { GetStaticProps } from 'next';
import { Button, Htag, P, Rating, Tag } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home({ menu }: HomeProps): JSX.Element {
	return (
		<>
			<Htag tag="h1">Text</Htag>
			<Button appearance="primary" arrow="right">
				Button
			</Button>
			<Button appearance="ghost" arrow="right">
				Button
			</Button>
			<P size="l">big</P>
			<P>mid</P>
			<Tag>low</Tag>
			<Tag size="s">low</Tag>
			<Tag size="s" color="primary">
				red
			</Tag>
			<Rating rating={4} isEditable />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
