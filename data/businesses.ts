import { Business } from '../types/types';

const businessesData: Business[] = [
	// ACESSORIES
	{
		name: '4th + Fir Scrunchies',
		description:
			'Handcrafted high-quality hair scrunchies strong enough for anything life brings your way. "REDDIT10" for 10% off.',
		link: 'https://www.4thfir.ca/',
		category: 'Accessories'
	},
	{
		name: 'Chi Em Moments',
		description:
			'Handcrafted accessories for your head. Fluffy bucket hats and colorful silk scrunchies.',
		link: 'https://cmmclothing.com/',
		category: 'Accessories'
	},
	{
		name: 'Erin Templeton',
		description:
			'Leather bags and accessories made in Vancouver. Buy online or visit the store in Chinatown.',
		link: 'https://www.erintempleton.com/',
		category: 'Accessories'
	},
	{
		name: 'Magic Pumpkin Creations',
		description: 'Whimsical custom bags & accessories.',
		link: 'https://www.etsy.com/shop/magicpumpkinboutique/',
		category: 'Accessories'
	},
	{
		name: 'Origin Columbia:',
		description:
			'Handmade Wayuu bags from Colombia. Each bag is made by women from the indigenous Wayuu tribe from La Guajira.',
		link: 'https://origincolombia.com/',
		category: 'Accessories'
	},

	// ART
	{
		name: 'a . cassidy',
		description:
			'Visual artist selling prints and original art. Commissions open for clothing/fabric pieces.',
		link: 'https://acassidy.ca/',
		category: 'Art'
	},
	{
		name: 'AlpineglowPrints',
		description:
			'Vibrant minimalist art prints of iconic BC landscapes for the outdoorsperson on your list. Use "Reddit10" for 10% off',
		link: 'https://www.etsy.com/shop/alpenglowprints/',
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
		name: 'Deville Shadowboxes',
		description: "Shadowboxes inspired by Vancouver's street patterns.",
		link: 'https://devilleshop.com/',
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
		name: 'Ettennarts',
		description:
			'Original acrylic paintings inspired by nature. Also selling wood slice Christmas ornaments (set of 6).',
		link: 'https://www.etsy.com/ca/shop/ettennarts',
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
		name: 'Mighty Marmot Art',
		description:
			'"Reddit20" for 20% off original paintings of iconic Vancouver locations. Greeting cards and commissions also available.',
		link: 'https://mightymarmot.com/',
		category: 'Art'
	},
	{
		name: 'Nature of Vancouver',
		description:
			'Original watercolour paintings inspired by Vancouver scenery. Inquire about purchases through Instagram.',
		link: 'https://www.instagram.com/natureofvancouver/',
		category: 'Art'
	},
	{
		name: 'Retrophiliac',
		description:
			'Bright vibrant art promoting neurodiversity, autistic pride and retro inspired goods. Selling pins, patches, and stickers.',
		link: 'https://www.etsy.com/shop/retrophiliac',
		category: 'Art'
	},
	{
		name: 'Thorain Art & Illustration',
		description:
			'Art prints, stickers and stationery sets inspired by cottagecore and vintage fairytales.',
		link: 'https://www.etsy.com/ca/shop/thorain',
		category: 'Art'
	},

	// BATH & COSMETICS
	{
		name: 'Better Beard Care',
		description:
			'All-natural, cruelty free, handmade beard oils. Beard brush & accessories also available. "Reddit10" for 10% off.',
		link: 'https://www.betterbeard.ca/',
		category: 'Bath & Cosmetics'
	},
	{
		name: "Fiona's Handcrafted Soaps",
		description:
			'Bath & Hand Soaps that are firm, long lasting, and gentle on skin with a rich refreshing lather.',
		link: 'https://fionashandcraftedsoaps.ca/',
		category: 'Bath & Cosmetics'
	},
	{
		name: "Liv'Ez Co.",
		description:
			'Natural skincare products made with nourishing plant-based ingredients. Spend $50 get a keychain with "SHOPREDDIT".',
		link: 'https://www.liveeasyco.ca/',
		category: 'Bath & Cosmetics'
	},
	{
		name: 'Localbloom',
		description: 'Over 110 brands of self-care & bath products, check out Localbloom on Broadway.',
		link: 'https://localboom.ca/',
		category: 'Bath & Cosmetics'
	},
	{
		name: 'Luna Nector',
		description:
			'Haircare and skincare essentials. All-natural, vegan, and cruelty-free. "LNREDDIT10" for 10% off.',
		link: 'https://lunanectar.com/',
		category: 'Bath & Cosmetics'
	},
	{
		name: 'Ljos Handcrafted',
		description:
			'Cold process soaps, solid bubble bars, shampoo and conditioner. Products come in recyclable or reusable packaging.',
		link: 'https://ljos.bigcartel.com/',
		category: 'Bath & Cosmetics'
	},
	{
		name: 'Our Little Soap Co.',
		description:
			"Find all th e soapy goodness you're looking for from earthy soaps to holiday cheer.",
		link: 'https://www.ourlittlesoapco.com/',
		category: 'Bath & Cosmetics'
	},
	{
		name: 'SUVA Beauty',
		description: 'Lush and vibrant cosmetics inspired by Fiji islands. "Reddit15" for 15% off.',
		link: 'https://www.suvabeauty.com/en-ca',
		category: 'Bath & Cosmetics'
	},

	// BOOKS
	{
		name: 'Cyrus LongBones Series',
		description: 'Jeremy Mathiesen writes a Young Adult series for fantasy adventure lovers.',
		link: 'https://www.jeremymathiesen.com/',
		category: 'Books'
	},
	{
		name: 'The Shitkickers',
		description:
			'Written by local author Jason Bryan, a tale of bike theft, manipulation, and corruption in Vancouver.',
		link: 'https://www.shitkick.ca/',
		category: 'Books'
	},

	// CANDLES
	{
		name: "Ernesto's",
		description:
			'Small batch natural, eco-friendly, sustainable, and pup-safe candles made in Vancouver.',
		link: 'https://ernestoscandles.com/',
		category: 'Candles'
	},
	{
		name: 'Judes & Co.',
		description:
			'Handcrafted scented coconut soy candles made with crackling wooden wicks. Use code "REDDIT15" for 15% off.',
		link: 'http://www.judesandco.com/',
		category: 'Candles'
	},
	{
		name: 'Kikay Kandles',
		description:
			'Cruelty-free, sustainable, and uniquely scented candles hand poured, and made to order.',
		link: 'https://www.etsy.com/shop/KikayKandles?ref=simple-shop-header-name&listing_id=1112816527',
		category: 'Candles'
	},
	{
		name: 'Ninth Line Candles',
		description:
			'High grade, natural soy wax, and cotton wicks, scented with perfume grade fragrance oils. "Reddit20" for 20% off.',
		link: 'https://www.ninthlinecandles.ca/',
		category: 'Candles'
	},
	{
		name: 'Mui by Vui',
		description:
			'Decorative premium soy wax candles made with phthalate-free fragrances and essential oils.',
		link: 'https://muibyvui.com/',
		category: 'Candles'
	},
	{
		name: 'West End Wicks',
		description:
			'Soy wax candles. $1 of each candle is donated to Wildlife Rescue Association of BC. Use "REDDIT10" at checkout for 10% off.',
		link: 'https://www.etsy.com/ca/shop/WestEndWicks',
		category: 'Candles'
	},

	// CRAFT
	{
		name: 'Mended With Gold',
		description: 'Ceramic repair kits based on Japanese art of Kintsugi.',
		link: 'https://mendedwithgold.shop/',
		category: 'Craft'
	},

	// FASHION
	{
		name: 'Be The Roster',
		description: 'Everyday basics and lounge wear for women.',
		link: 'https://betheroster.com/',
		category: 'Fashion'
	},
	{
		name: 'CMFT Clothing',
		description: 'A brand that promotes seeking comfort within yourself.',
		link: 'https://cmftclothing.com/',
		category: 'Fashion'
	},
	{
		name: 'Coeva Vintage',
		description:
			'Be & wear a work of art. Curated vintage & modern clothing for sustainable style seekers.',
		link: 'https://coevavintage.com/',
		category: 'Fashion'
	},

	{
		name: 'Faulkner',
		description:
			'Online archive/designer & vintage clothing store. Niche Japanese brands, well-known European labels, and vintage Americana.',
		link: 'https://shopfaulkner.ca/',
		category: 'Fashion'
	},
	{
		name: 'Finnley',
		description:
			'Sustainable, quality clothing designed to outlive trends by creating wardrobe staples.',
		link: 'https://www.wearefinnley.com/',
		category: 'Fashion'
	},
	{
		name: 'Lace Embrace',
		description:
			'Beautiful corsets, lingerie, and accessories. Brick & Mortar shop on East 16th & Main.',
		link: 'https://www.laceembrace.com/',
		category: 'Fashion'
	},
	{
		name: 'Linesix Clothing',
		description: 'Tailored unisex Vancouver streetwear. Use "Reddit" for 15% off.',
		link: 'https://linesix.ca/',
		category: 'Fashion'
	},
	{
		name: "My Sister's Closet",
		description:
			'Social conscious fashion focusing on sustainability. Partial revenue goes towards Battered Womens Support Services.',
		link: 'https://mysistersclosetvancouver.shop/',
		category: 'Fashion'
	},
	{
		name: 'New World Designs',
		description:
			'Pinup, retro, and alternative fashion from daily clothing to statement piece accessories.',
		link: 'https://www.pinupcanada.com/',
		category: 'Fashion'
	},
	{
		name: 'Nth Degree Underwear',
		description: 'Men\'s underwear and loungewear. Use code "REDDIT15" for 15% off.',
		link: 'https://nthdegreeunderwear.ca/',
		category: 'Fashion'
	},
	{
		name: 'Rummage',
		description:
			'Community thrift store focusing on fostering creativity, community and affordable. Clothes and other unique finds.',
		link: 'https://www.instagram.com/thriftrummage/',
		category: 'Fashion'
	},
	{
		name: 'Search & Rescue Denim Co',
		description: 'Premium, hand made and customizable aprons for home chefs, bartenders, and more.',
		link: 'https://searchandrescuedenim.com/',
		category: 'Fashion'
	},
	{
		name: 'Sidechannel',
		description: 'Overalls designed for ski/snowboarding & fishing waders.',
		link: 'https://www.sidechannel.ca/',
		category: 'Fashion'
	},
	{
		name: 'Threads of Apollo',
		description: 'Made to order eco-friendly leather jackets.',
		link: 'https://threadsofapollo.com/',
		category: 'Fashion'
	},

	// FILM EQUIPMENT
	{
		name: 'Filmgear Canada',
		description:
			'Camera, lighting and film equipment store with largest selection of Aputure, Smallrig, Godox, Nanlite, and Tilta in town.',
		link: 'https://filmgearcanada.com/',
		category: 'Film Equipment'
	},

	// FOOD & DRINKS
	{
		name: "BAK'D Cookies",
		description:
			'Local, high quality, and BIG 5oz Gourmet Cookies. Place an order and get it delivered. Use "Reddit10" for 10% off.',
		link: 'https://bakdcookies.ca/66',
		category: 'Food & Drinks'
	},
	{
		name: "Bangin' Bannock",
		description: 'Selling pre-mixed dry bannock mix.',
		link: 'https://banginbannock.ca/collections/original-bannock-mix',
		category: 'Food & Drinks'
	},
	{
		name: 'Dangerdough_',
		description:
			'Small-batch handmade sourdough using quality ingredients. Order through Insta for your holiday dinners and parties!',
		link: 'https://www.instagram.com/dangerdough_/?hl=en',
		category: 'Food & Drinks'
	},
	{
		name: 'Meat Chew',
		description:
			'Premium nibbles & pairings. Locally made jerky & nuts, perfect for stocking stuffers!',
		link: 'https://meatchew.ca/',
		category: 'Food & Drinks'
	},
	{
		name: 'Melt Confectionary',
		description: 'Small batch delicious chocolate focusing on the nostalgic and playful.',
		link: 'https://meltconfectionary.com/',
		category: 'Food & Drinks'
	},
	{
		name: 'North Shore Sourdough',
		description:
			'Sourdough bread baked and delivered same day. Currently North Vancouver only. "Reddit15" for 15% discount.',
		link: 'https://www.northshoresourdough.com/',
		category: 'Food & Drinks'
	},
	{
		name: 'Pantry Philosophy',
		description:
			'Private dining in the comfort of your home. Have chefs cook for guests and yourself in your own space.',
		link: 'https://www.pantryphilosophy.ca/',
		category: 'Food & Drinks'
	},
	{
		name: 'Spirit Bear Coffee Company',
		description:
			'Coffee inspired by the creation story of the Spirit Bear - a symbolic gift of peace and harmony to all creatures.',
		link: 'https://spiritbearcoffeecompany.com/',
		category: 'Food & Drinks'
	},
	{
		name: 'Susgrainable',
		description:
			'Easy to make baking mixes that fight food waste. Use "REDDIT15" for 15% off. Gift boxes launching soon.',
		link: 'https://susgrainable.com/',
		category: 'Food & Drinks'
	},
	{
		name: 'Thomakis Real Greek Yogurt',
		description: 'Best Greek Yogurt in Vancouver. They do delivery & pickup.',
		link: 'https://thomakis.com/',
		category: 'Food & Drinks'
	},
	{
		name: 'Vancity Milk Bombs',
		description: 'Hot chocolate bombs that are Instagramable and delicious.',
		link: 'https://www.instagram.com/vancitymilkbombs/?hl=en',
		category: 'Food & Drinks'
	},

	// GAMES & HOBBIES
	{
		name: 'Mystery Interactive',
		description: 'Hardcopy or Instant download mystery games for kids. "VANREDDIT" for $7 off.',
		link: 'https://www.etsy.com/shop/MysteryInteractive',
		category: 'Games & Hobbies'
	},
	{
		name: 'Null: Non Grata',
		description:
			'Japan gaming import business specializing in CDs/Soundtracks, Art, and everything Persona.',
		link: 'https://www.nullnongrata.com/',
		category: 'Games & Hobbies'
	},
	{
		name: 'Rain City Games',
		description: "Downtown Vancouver and New West's friendly local board game store!",
		link: 'https://www.raincity.games/',
		category: 'Games & Hobbies'
	},

	// HOLIDAYS
	{
		name: 'AUMBR',
		description: 'Personalized Christmas ornaments. "Reddit10" for 10% off.',
		link: 'https://www.etsy.com/shop/aumbr/',
		category: 'Holidays'
	},
	{
		name: 'Cards by Barb',
		description:
			'Mouth painted cards by Barb Wilson, an ALS patient. All funds go to ALS Society of BC for patient support services and research.',
		link: 'https://www.alsbc.ca/cards-by-barb/',
		category: 'Holidays'
	},
	{
		name: 'Tinkering Explorer',
		description: 'Cute animal-themed holiday cards.',
		link: 'https://www.etsy.com/ca/shop/TinkeringExplorer',
		category: 'Holidays'
	},
	{
		name: 'Wreaths YVR',
		description: 'Fresh affordable holiday wreaths. Custom orders also accepted.',
		link: 'https://www.etsy.com/ca/shop/WreathsYVR',
		category: 'Holidays'
	},

	// HOME & KITCHEN
	{
		name: 'Balco Life',
		description: 'Bar tops that secure to your balcony to maximize your livable space.',
		link: 'https://www.balcolife.com/',
		category: 'Home & Kitchen'
	},
	{
		name: 'ChopxChop',
		description:
			'Laser engraved handmade chopping and charcuterie boards for the chef in your life.',
		link: 'https://chopxchop.com/',
		category: 'Home & Kitchen'
	},
	{
		name: 'Dzignworx',
		description: 'Wood trays, flags, and drink accessories.',
		link: 'https://dzignworx.com/',
		category: 'Home & Kitchen'
	},
	{
		name: 'Fiber Doodle',
		description:
			'Handmade eco-friendly decor and fashion accessories made with cotton macrame ropes in Vancouver. Also selling DIY kits.',
		link: 'https://www.instagram.com/fiberdoodle/?hl=en',
		category: 'Home & Kitchen'
	},
	{
		name: 'Himmeloo',
		description:
			'Perfect for displaying air plants, moss or a beautiful hanging feature on their own. "Reddit15" for 15% off.',
		link: 'https://www.himmeloo.com/',
		category: 'Home & Kitchen'
	},
	{
		name: 'Make Nice Company',
		description: "Plastic-Free Dish Soap to reduce world's consumption of single use plastics.",
		link: 'https://makenicecompany.com/',
		category: 'Home & Kitchen'
	},
	{
		name: 'Man-Cave Gifts & Collectibles',
		description:
			'Collectible Decor for your walls from LED Signs to Kit Cat Clocks. "REDDIT10" for 10% off at checkout.',
		link: 'https://man-cave.ca/',
		category: 'Home & Kitchen'
	},
	{
		name: 'MiMOKO',
		description: 'Ceramic planters and vases.',
		link: 'https://www.mimoko.me/',
		category: 'Home & Kitchen'
	},
	{
		name: 'Mosquito Creek Pottery',
		description:
			'Handmade contemporary ceramics inspired by the West Coast. "REDDIT10" for 10% off.)',
		link: 'https://www.etsy.com/ca/shop/MosquitoCreekPottery',
		category: 'Home & Kitchen'
	},
	{
		name: 'Valley Living Design',
		description: 'Made to order wood shelving for your home.',
		link: 'https://www.etsy.com/ca/shop/ValleyLivingDesign',
		category: 'Home & Kitchen'
	},

	// JEWELRY
	{
		name: 'Abbey Park',
		description:
			'Handcrafted Jewerly: Handcrafted minimal and personalized jewelry, made in small batches.',
		link: 'https://www.etsy.com/shop/AbbeyPark',
		category: 'Jewelry'
	},
	{
		name: 'AMLiora Designs',
		description: 'Resin jewelry inspired by nature, featuring pressed flowers in necklaces.',
		link: 'https://www.amliora.com/',
		category: 'Jewelry'
	},
	{
		name: 'Hunt of Hounds',
		description: 'Handmade jewelry that tells a story. "Reddit10" for 10% off.',
		link: 'https://huntofhounds.com/',
		category: 'Jewelry'
	},
	{
		name: 'Juliet925',
		description:
			'Hand forged sterling silver jewelry. Use "REDDIT10$" for 10 dollars off your first regularly priced order.',
		link: 'https://www.juliet925.ca/',
		category: 'Jewelry'
	},
	{
		name: 'Leah Yard Designs',
		description: 'Modern, affordable jewelry pieces.',
		link: 'https://leahyarddesigns.com/',
		category: 'Jewelry'
	},
	{
		name: 'Monday May Jewelry',
		description: 'Hand-Crafted Jewelry rich with culture.',
		link: 'https://mondaymayjewelry.com/',
		category: 'Jewelry'
	},
	{
		name: 'Moonstone',
		description:
			'Ethical designer jewelry and handmade beaded designs, in Burnaby Heights. Say you found us on Reddit and get 10% off in-store!',
		link: 'https://www.instagram.com/moonstonebc/',
		category: 'Jewelry'
	},
	{
		name: 'Nodantur Jewelry',
		description:
			'Unique micro-macrame jewelry in Celtic and Elven style. Also accessories like Christmas ornaments and bookmarks.',
		link: 'https://www.etsy.com/shop/nodanturjewelry/',
		category: 'Jewelry'
	},
	{
		name: 'Perching Clay Art',
		description:
			'Handcrafted polymer clay wearable and decorative art. Use "street10" to get 10% off your order.',
		link: 'https://www.perchingclayart.com/',
		category: 'Jewelry'
	},
	{
		name: 'Petal & Posy',
		description:
			'Small batch handcrafted polymer jewelry with a bespoke, retro feel. 15% with code "REDDIT15".',
		link: 'https://shoppetalandposy.com/',
		category: 'Jewelry'
	},
	{
		name: "Sam's Handmade Creations",
		description: 'Handmade jewelry made with love. Each piece is unique.',
		link: 'https://www.instagram.com/sams.handmade.creations/',
		category: 'Jewelry'
	},
	{
		name: 'Thé Vert Jewellery',
		description: 'Modern Handmade Japanese Jewelry. REDDIT15 for 15% off.',
		link: 'https://www.thevert-jewellery.com/',
		category: 'Jewelry'
	},

	// LITERARY
	{
		name: 'Autmog',
		description:
			'Minimalist and unique machined pens made in Vancouver. Use "reddit20" for 20% off.',
		link: 'https://autmog.ca/',
		category: 'Literary'
	},
	{
		name: 'Hemlock & Oak',
		description:
			'Canadian-made sustainable stationery. "REDDIT10" for 10% off the 2022 Signature Planner or Undated Signature Planner!',
		link: 'https://www.hemlockandoak.com/',
		category: 'Literary'
	},

	// MARKETPLACES
	{
		name: 'Bill Reid Gallery',
		description:
			"Northwest First Nations Art. Proceeds support local Indigenous artists and the Gallery's artistic & educational programs.",
		link: 'https://www.billreidgallery.ca/collections/all-products-targeturl#targetUrl',
		category: 'Marketplaces'
	},
	{
		name: 'The Nooks',
		description:
			'Marketplace for home décor, soaps, clothes, basically anything that can be handmade. Locations in Gastown, Kits, and North Van.',
		link: 'https://thenooks.ca/',
		category: 'Marketplaces'
	},
	{
		name: 'Loma',
		description:
			'Local online marketplace with fast, sustainable delivery. Order from various high-quality vendors throughout Greater Vancouver!',
		link: 'https://shoploma.ca/',
		category: 'Marketplaces'
	},
	{
		name: 'North of Fifty',
		description:
			'Métis and First Nations inspired wearable art, Christmas ornaments, home decor, jewelry, and gift ideas.',
		link: 'https://northoffifty.com/',
		category: 'Marketplaces'
	},
	{
		name: 'r/FirstNationsCanada',
		description: 'Has their own Indigenous Holiday Shopping Guide for businesses across Canada.',
		link: 'https://www.reddit.com/r/FirstNationsCanada/comments/qw315e/indigenous_holiday_shopping_guide/',
		category: 'Marketplaces'
	},

	// PETS
	{
		name: 'Fresh Bark',
		description:
			'All natural dog treats like chicken, fishies, salmon, beef liver and sweet potato.',
		link: 'https://www.freshbark.ca/',
		category: 'Pets'
	},
	{
		name: 'Living Life By Hand',
		description: 'Custom pet portraits. Choose framed picture or stickers.',
		link: 'https://www.etsy.com/shop/Livinglifebyhand',
		category: 'Pets'
	},
	{
		name: 'My Rainy Weekends',
		description: 'Custom pet portraits through Instagram. Corgi themed everything on Society6.',
		link: 'https://www.instagram.com/myrainyweekends/',
		category: 'Pets'
	},
	{
		name: 'Santa Paws Workshop',
		description: 'High quality holiday stockings and accessories for furry family members.',
		link: 'https://www.etsy.com/ca/shop/SantaPawsWorkshop',
		category: 'Pets'
	},
	{
		name: 'Strange Tails',
		description:
			'Dog collars and leashes made from leather and Biothane. Handcrafted locally in Vancouver.',
		link: 'https://www.shopstrangetails.com/',
		category: 'Pets'
	},
	{
		name: 'The Track Trove',
		description:
			'Equestrian consignment. Everything you need to dress, ride, and saddle your horse.',
		link: 'https://www.thetacktrove.ca/',
		category: 'Pets'
	},

	// PHOTOGRAPHY
	{
		name: 'Dano Pendygrasse',
		description:
			'Vancouver photographer specializing in snowboarding & iconic Vancouver locations.',
		link: 'https://www.danopendygrasse.store/',
		category: 'Photography'
	},
	{
		name: 'Ella Shirazi Photography',
		description: 'Maternity, newborn, and baby photography services.',
		link: 'https://www.ellashiraziphotography.com/',
		category: 'Photography'
	},
	{
		name: 'Melanie Chapman Photographer',
		description:
			'Book your shoots for: Wedding, engagement, couples, personal portraits, or family sessions.',
		link: 'https://www.melaniechapmanphotography.ca/',
		category: 'Photography'
	},

	{
		name: 'Tristan Todd Photography',
		description:
			'Local photographer selling his work as a calendar. You can also buy individual prints off his website.',
		link: 'https://www.tristantodd.photography/',
		category: 'Photography'
	},

	// THINGS TO DO
	{
		name: 'The Home Key',
		description:
			'Coworking space for esports, tech & gaming startups. Drop-ins coming soon. "25OFFREDDIT" for 25% off first month.',
		link: 'https://thehomekey.gg/',
		category: 'Things to Do'
	},

	// VACATION
	{
		name: 'Skwachàys Lodge Aboriginal Hotel and Gallery',
		description: 'Indigenous arts hotel featuring beautiful original Indigenous art.',
		link: 'https://gallery.urbanaboriginal.org/',
		category: 'Vacation'
	},

	// WELLNESS
	{
		name: 'Bursera',
		description:
			'Sustainable aromatherapy, tree planted with every order. Enter "REDDIT10" at checkout to save 10% on your order.',
		link: 'https://bursera.ca/',
		category: 'Wellness'
	},
	{
		name: 'Kasih Kit',
		description:
			'Therapist-developed mental health kits & tools to help manage stress and maintain wellness. 10% off code "REDDIT10".',
		link: 'https://kasih.ca/',
		category: 'Wellness'
	},
	{
		name: 'Pacific Coast Calm',
		description:
			'Products to inspire and promote wellbeing. Everything from crystal infusion essential oils to aromatherapy jewelry.',
		link: 'https://pacificcoastcalm.com/',
		category: 'Wellness'
	},
	{
		name: 'The Travelling Hygienist',
		description:
			'A mobile dental hygiene clinic. Gift certificates for all treatments available. Mention Reddit for 10% off.',
		link: 'https://www.thetravellinghygienist.com/',
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
