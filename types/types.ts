import React from 'react';

export type Children = React.ReactNode;

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

export type Business = {
	name: string;
	description: string;
	link: string;
	category: BusinessCategory;
};
