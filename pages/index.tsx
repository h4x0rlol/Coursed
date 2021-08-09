import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
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
		</>
	);
}
