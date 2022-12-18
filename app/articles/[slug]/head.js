import React from 'react';
import articles from '../../../utils/articles';

export default function head({ params }) {
	const article = articles.find((x) => x.slug === params.slug);
	return (
		<>
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<title>{article.name} | Supervision Dublin</title>
			<meta
				name='description'
				content={article.p1}
			/>
			<meta
				name='keywords'
				content='therapy supervision, articles, resources, information'
			></meta>
			<link
				rel='icon'
				href='/icon.svg'
			/>
		</>
	);
}
