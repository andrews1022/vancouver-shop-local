const businessesData = [
	// ART
	{
		name: 'a . cassidy',
		description:
			'Visual artist selling prints and original art. Commissions open for clothing/fabric pieces.',
		link: 'https://acassidy.ca/',
		category: 'Art'
	},
	{
		name: 'Apartment 903',
		description: 'Modern minimal wall art.',
		link: 'https://www.etsy.com/ca/shop/apartment903',
		category: 'Art'
	},
	{
		name: 'Clare Yow',
		description:
			'Visual artist primarily using photography to explore feminist and diasporic identity.',
		link: 'https://clareyow.bigcartel.com/',
		category: 'Art'
	},
	{
		name: 'Emily Story',
		description:
			'Kewpie inspired custom portraits and traditional tattoo inspired art. Get them as stickers or prints.',
		link: 'https://ivepaidforworse.bigcartel.com/',
		category: 'Art'
	},
	{
		name: 'Gen Soo Art',
		description:
			'Local artist and illustrator, selling quality hand painted holiday ornaments, cards, stickers, buttons, and prints.',
		link: 'https://www.etsy.com/ca/shop/GenSooArt',
		category: 'Art'
	},
	{
		name: 'Hey Marcus',
		description:
			'Graphic design & illustration as seen on local publications like Georgia Straight. Selling posters & stickers.',
		link: 'https://www.etsy.com/ca/shop/HeyMarcus',
		category: 'Art'
	},
	{
		name: 'Justine Erickson Art',
		description:
			'Local artist with a variety of original artworks, prints, greeting cards, and pins.',
		link: 'https://justinericksonart.com/',
		category: 'Art'
	},
	{
		name: "Lexie's Desk",
		description:
			'Cute original and anime inspired art & stickers. Perfect for your stationery-obsessed loved ones. "REDDIT10" for 10% off.',
		link: 'https://www.etsy.com/shop/lexiesdesk/',
		category: 'Art'
	},
	{
		name: 'Thorain Art & Illustration',
		description:
			'Art prints, stickers and stationery sets inspired by cottagecore and vintage fairytales.',
		link: 'https://www.etsy.com/ca/shop/thorain',
		category: 'Art'
	},
	{
		name: 'Retrophiliac',
		description:
			'Bright vibrant art promoting neurodiversity, autistic pride and retro inspired goods. Selling pins, patches, and stickers.',
		link: 'https://www.etsy.com/shop/retrophiliac',
		category: 'Art'
	},

	// ART - LANDSCAPES
	{
		name: 'AlpineglowPrints',
		description:
			'Vibrant minimalist art prints of iconic BC landscapes for the outdoorsperson on your list. Use "Reddit10" for 10% off',
		link: 'https://www.etsy.com/shop/alpenglowprints/',
		category: 'Art - Landscapes'
	},
	{
		name: 'Deville Shadowboxes',
		description: "Shadowboxes inspired by Vancouver's street patterns.",
		link: 'https://devilleshop.com/',
		category: 'Art - Landscapes'
	},
	{
		name: 'Ettennarts',
		description:
			'Original acrylic paintings inspired by nature. Also selling wood slice Christmas ornaments (set of 6).',
		link: 'https://www.etsy.com/ca/shop/ettennarts',
		category: 'Art - Landscapes'
	},
	{
		name: 'Mighty Marmot Art',
		description:
			'"Reddit20" for 20% off original paintings of iconic Vancouver locations. Greeting cards and commissions also available.',
		link: 'https://mightymarmot.com/',
		category: 'Art - Landscapes'
	},
	{
		name: 'Nature of Vancouver',
		description:
			'Original watercolour paintings inspired by Vancouver scenery. Inquire about purchases through Instagram.',
		link: 'https://www.instagram.com/natureofvancouver/',
		category: 'Art - Landscapes'
	},

	// ART - PHOTOGRAPHY
	{
		name: 'Dano Pendygrasse',
		description:
			'Vancouver photographer specializing in snowboarding & iconic Vancouver locations.',
		link: 'https://www.danopendygrasse.store/',
		category: 'Art - Photography'
	},
	{
		name: 'Tristan Todd Photography',
		description:
			'Local photographer selling his work as a calendar. You can also buy individual prints off his website.',
		link: 'https://www.tristantodd.photography/',
		category: 'Art - Photography'
	},

	// BATH & COSMETICS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Bath & Cosmetics'
	},

	// BOOKS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Books'
	},

	// CANDLES
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Candles'
	},

	// FASHION - ACESSORIES
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Fashion - Accessories'
	},

	// FASHION - CLOTHING BASICS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Fashion - Clothing Basics'
	},

	// FASHION - CLOTHING STATEMENTS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Fashion - Clothing Statements'
	},

	// FASHION - JEWELRY
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Fashion - Jewelry'
	},

	// FASHION - SPECIALITY/OUTDOORS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Fashion - Speciality/Outdoors'
	},

	// FOOD & DRINKS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Food & Drinks'
	},

	// GAMES & HOBBIES
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Games & Hobbies'
	},

	// HOLIDAYS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Holidays'
	},

	// HOME & KITCHEN
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Home & Kitchen'
	},

	// LITERARY
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Literary'
	},

	// MARKETPLACES
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Marketplaces'
	},

	// PETS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Pets'
	},

	// PHOTOGRAPHY
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Photography'
	},

	// TECH & ELECTRONICS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Tech & Electronics'
	},

	// THINGS TO DO
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Things to Do'
	},

	// VACATION
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Vacation'
	},

	// WELLNESS
	{
		name: 'NAME_HERE',
		description: 'DESCRIPTION_HERE',
		link: 'LINK_HERE',
		category: 'Wellness'
	}
];

export default businessesData;

/*
	Categories from Reddit:
	ART
	ART - LANDSCAPES
	ART - PHOTOGRAPHY
	BATH & COSMETICS
	BOOKS
	CANDLES
	FASHION - ACESSORIES
	FASHION - CLOTHING BASICS
	FASHION - CLOTHING STATEMENTS
	FASHION - JEWELRY
	FASHION - SPECIALITY/OUTDOORS
	FOOD & DRINKS
	GAMES & HOBBIES
	HOLIDAYS
	HOME & KITCHEN
	LITERARY
	MARKETPLACES
	PETS
	PHOTOGRAPHY
	TECH & ELECTRONICS
	THINGS TO DO
	VACATION
	WELLNESS

	Categories Simplified:
	ART
	BATH & COSMETICS
	BOOKS
	CANDLES
	FASHION
	FOOD & DRINKS
	GAMES & HOBBIES
	HOLIDAYS
	HOME & KITCHEN
	LITERARY
	MARKETPLACES
	PETS
	PHOTOGRAPHY
	TECH & ELECTRONICS
	THINGS TO DO
	VACATION
	WELLNESS
*/
