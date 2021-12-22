import React from 'react';

export type Business = {
	category: BusinessCategory;
	description: string;
	link: string;
	location?: string;
	name: string;
};

export type BusinessCategory =
	| 'Accessories'
	| 'Art'
	| 'Bath & Cosmetics'
	| 'Books'
	| 'Candles'
	| 'Craft'
	| 'Fashion'
	| 'Film Equipment'
	| 'Food & Drinks'
	| 'Games & Hobbies'
	| 'Holidays'
	| 'Home & Kitchen'
	| 'Jewelry'
	| 'Literary'
	| 'Marketplaces'
	| 'Pets'
	| 'Photography'
	| 'Things to Do'
	| 'Vacation'
	| 'Wellness';

export type Children = React.ReactNode;

export type TagMode = 'category' | 'directions' | 'link';
