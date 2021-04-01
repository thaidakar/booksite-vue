let bookdata = [{
    id: 1,
    name: "The Way of Kings",
    image: "https://m.media-amazon.com/images/I/91SkYC1TRHL._AC_UY327_FMwebp_QL65_.jpg",
    price: "$8.15",
    link: "https://www.amazon.com/Way-Kings-Brandon-Sanderson/dp/0765365278/ref=sr_1_3?crid=1GPK1UF35K64O&keywords=stormlight+archive+kindle&qid=1616105615&s=books&sprefix=stormlight+archive+kin%2Cstripbooks%2C222&sr=1-3",
    description: "From #1 New York Times bestselling author Brandon Sanderson, The Way of Kings, Book One of the Stormlight Archive begins an incredible new saga of epic proportion.",
    views: "23,504"
}, {
    id: 2,
    name: "Towers of Midnight",
    image: "https://m.media-amazon.com/images/I/81tcae+2plL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$16.69",
    link: "https://www.amazon.com/Towers-Midnight-Book-Thirteen-Wheel/dp/0765337843/ref=tmm_pap_title_0?_encoding=UTF8&qid=1616114714&sr=8-2",
    description: "In Towers of Midnight, the Last Battle has started. The seals on the Dark One's prison are crumbling. The Pattern itself is unraveling, and the armies of the Shadow have begun to boil out of the Blight.",
    views: "15,693"
}, {
    id: 3,
    name: "Fablehaven, vol 5: Keys to the Demon Prison",
    image: "https://m.media-amazon.com/images/I/51ZxYtD3a1L._AC_UL480_FMwebp_QL65_.jpg",
    price: "$8.49",
    link: "https://www.amazon.com/Fablehaven-vol-Keys-Demon-Prison-ebook/dp/B00371V6O8/ref=sr_1_1?crid=3FWWJ4RSJMND9&dchild=1&keywords=fablehaven+keys+to+the+demon+prison+kindle&qid=1616116957&sprefix=fablehaven+keys+to+%2Caps%2C224&sr=8-1",
    description: "Since ancient times, the great demon prison Zzyzx has protected the world from the most dangerous servants of darkness, including Gorgrog, the Demon King. After centuries of plotting, the Sphinx is on the verge of recovering the five artifacts necessary to open the legendary prison.",
    views: "13,732"
}, {
    id: 4,
    name: "World War Z: An Oral History of the Zombie War",
    image: "https://m.media-amazon.com/images/I/916vOZY325L._AC_UL480_FMwebp_QL65_.jpg",
    price: "$8.99",
    link: "https://www.amazon.com/World-War-Oral-History-Zombie-ebook/dp/B000JMKQX0/ref=sr_1_2?dchild=1&keywords=World+war+z+kindle&qid=1616121531&sr=8-2",
    description: "We survived the zombie apocalypse, but how many of us are still haunted by that terrible time? We have (temporarily?) defeated the living dead, but at what cost? Told in the haunting and riveting voices of the men and women who witnessed the horror firsthand, World War Z is the only record of the pandemic.",
    views: "11,110"
}, {
    id: 5,
    name: "Harry Potter and the Deathly Hallows",
    image: "https://m.media-amazon.com/images/I/81NEMbJJg8L._AC_UL480_FMwebp_QL65_.jpg",
    price: "$6.98",
    link: "https://www.amazon.com/Harry-Potter-Deathly-Hallows-Rowling/dp/1338299204/ref=tmm_pap_title_0?_encoding=UTF8&qid=1616121840&sr=8-1",
    description: "'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.'",
    views: "10,999"
}, {
    id: 6,
    name: "The Wise Man's Fear",
    image: "https://m.media-amazon.com/images/I/91B9knIiWiL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$10.70",
    link: "https://www.amazon.com/Wise-Mans-Fear-Kingkiller-Chronicle-ebook/dp/B00475AYJQ/ref=sr_1_1?dchild=1&keywords=the+wise+man%27s+fear+kindle&qid=1616122420&sr=8-1",
    description: "“There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.” My name is Kvothe.You may have heard of me. So begins a tale told from his own point of view— a story unequaled in fantasy literature. Now in The Wise Man’s Fear, Day Two of The Kingkiller Chronicle,    Kvothe takes his first steps on the path of the hero and learns how difficult life can be when a man becomes a legend in his own time.",
    views: "9,742"
}, {
    id: 7,
    name: "What To Expect When You're Expecting",
    image: "https://m.media-amazon.com/images/I/91tFvxyhcOL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$9.02",
    link: "https://www.amazon.com/What-Expect-Before-Youre-Expecting-ebook/dp/B06XPQGDJX/ref=sr_1_5?crid=39M76G7K62IVV&dchild=1&keywords=what+to+expect+when+you%27re+expecting+kindle&qid=1616122944&sprefix=what+to+expec%2Caps%2C250&sr=8-5",
    description: "Expecting to expect? Plan ahead. Here’s everything you need to know to help prepare for the healthiest possible pregnancy and the healthiest possible baby. Filled with practical tips, empathetic advice, and savvy strategies, all designed to help you get that baby of your dreams on board faster. How to get your body into the best baby-making shape. Which foods feed fertility. Which lifestyle habits to quit and which to cultivate.",
    views: "9,638"
}, {
    id: 8,
    name: "The Hobbit: An Unexpected Journey",
    image: "https://m.media-amazon.com/images/I/61Ng-W9EhBL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$7.02",
    link: "https://www.amazon.com/Hobbit-75th-Anniversary-J-R-R-Tolkien-ebook/dp/B007978NU6/ref=sr_1_1?crid=13O4TMJ5EMPDV&dchild=1&keywords=the+hobbit+an+unexpected+journey+kindle&qid=1616123459&sprefix=the+hobbit%3A+an+%2Caps%2C235&sr=8-1",
    description: "If you care for journeys there and back, out of the comfortable Western world, over the edge of the Wild, and home again, and can take an interest in a humble hero (blessed with a little wisdom and a little courage and considerable good luck), here is a record of such a journey and such a traveler.",
    views: "9,598"
}, {
    id: 9,
    name: "The DaVinci Code",
    image: "https://m.media-amazon.com/images/I/91InVm4TEgL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$9.99",
    link: "https://www.amazon.com/Vinci-Code-Novel-Robert-Langdon-ebook/dp/B000FA675C/ref=sr_1_2?dchild=1&keywords=the+davinci+code+kindle&qid=1616124128&sr=8-2",
    description: "As millions of readers around the globe have already discovered, The Da Vinci Code is a reading experience unlike any other. Simultaneously lightning-paced, intelligent, and intricately layered with remarkable research and detail, Dan Brown's novel is a thrilling masterpiece—from its opening pages to its stunning conclusion.",
    views: "9,035"
}, {
    id: 10,
    name: "Inheritance",
    image: "https://m.media-amazon.com/images/I/91Y8qFAt96L._AC_UL480_FMwebp_QL65_.jpg",
    price: "$14.18",
    link: "https://www.amazon.com/Inheritance-Cycle-Book-4-ebook/dp/B003YL4LNY/ref=sr_1_2?dchild=1&keywords=inheritance+kindle&qid=1616124930&sr=8-2",
    description: "The astonishing, masterful conclusion to the Inheritance Cycle, perfect for fans of Lord of the Rings! The New York Times bestselling series has sold over 35 million copies and is an international fantasy sensation.",
    views: "8,879"
}, {
    id: 11,
    name: "Rhythm of War",
    image: "https://m.media-amazon.com/images/I/91q4a8ZckDL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$18.89",
    link: "https://www.amazon.com/Rhythm-War-Stormlight-Archive-Book-ebook/dp/B0826NKZHR/ref=sr_1_1?crid=2JJRO5WTQZE7O&dchild=1&keywords=rhythm+of+war+kindle&qid=1616125158&sprefix=rhy%2Caps%2C299&sr=8-1",
    description: "An instant #1 New York Times Bestseller and a USA Today and Indie Bestseller! The Stormlight Archive saga continues in Rhythm of War, the eagerly awaited sequel to Brandon Sanderson 's #1 New York Times bestselling Oathbringer, from an epic fantasy writer at the top of his game.",
    views: "8,631"
}, {
    id: 12,
    name: "Artemis Fowl",
    image: "https://m.media-amazon.com/images/I/81VjclfBUAL._AC_UY327_FMwebp_QL65_.jpg",
    price: "$6.90",
    link: "https://www.amazon.com/Artemis-Fowl-Eoin-Colfer-ebook/dp/B002KP6DXQ/ref=sr_1_1?dchild=1&keywords=artemis+fowl+kindle&qid=1616125594&sr=8-1",
    description: "Twelve-year-old Artemis is a millionaire, a genius-and above all, a criminal mastermind. But Artemis doesn't know what he's taken on when he kidnaps a fairy, Captain Holly Short of the LEPrecon Unit. These aren't the fairies of the bedtime stories-they're dangerous!",
    views: "8,302"
}, {
    id: 13,
    name: "The Book of Mormon",
    image: "https://m.media-amazon.com/images/I/71ZnTIMfLBL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$9.07",
    link: "https://www.amazon.com/Book-Mormon-Another-Testament-Christ-ebook/dp/B00BNGXNW2/ref=sr_1_1?dchild=1&keywords=the+book+of+mormon+kindle&qid=1616125959&sr=8-1",
    description: "One of the four volumes of scripture accepted by The Church of Jesus Christ of Latter-day Saints. It is an abridgment by an ancient prophet named Mormon of the records of ancient inhabitants of the Americas. It was written to testify that Jesus is the Christ.",
    views: "8,299"
}, {
    id: 14,
    name: "The Fires of Heaven",
    image: "https://m.media-amazon.com/images/I/81tbzXler7L._AC_UL480_FMwebp_QL65_.jpg",
    price: "$10.99",
    link: "https://www.amazon.com/Fires-Heaven-Book-Five-Wheel-ebook/dp/B0037V18D2/ref=sr_1_2?dchild=1&keywords=the+fires+of+heaven+kindle&qid=1616126235&sr=8-2",
    description: "The Wheel of Time turns and Ages come and go, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. In the Third Age, an Age of Prophecy, the World and Time themselves hang in the balance. What was, what will be, and what is, may yet fall under the Shadow.",
    views: "8,230"
}, {
    id: 15,
    name: "Matched",
    image: "https://m.media-amazon.com/images/I/81ADcBc-4bL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$7.68",
    link: "https://www.amazon.com/Matched-Ally-Condie-ebook/dp/B005GSZZKG/ref=sr_1_2?dchild=1&keywords=matched+kindle&qid=1616126580&sr=8-2",
    description: "Cassia has always trusted the Society to make the right choices for her: what to read, what to watch, what to believe. So when Xander's face appears on-screen at her Matching ceremony, Cassia knows with complete certainty that he is her ideal mate . . . until she sees Ky Markham's face flash for an instant before the screen fades to black.",
    views: "8,225"
}, {
    id: 16,
    name: "Words of Radiance",
    image: "https://m.media-amazon.com/images/I/91KKmLd1UxL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$15.99",
    link: "https://www.amazon.com/Words-Radiance-Stormlight-Archive-Book-ebook/dp/B00DA6YEKS/ref=sr_1_2?dchild=1&keywords=words+of+radiance+kindle&qid=1616126994&sr=8-2",
    description: "From #1 New York Times bestselling author Brandon Sanderson, Words of Radiance, Book Two of the Stormlight Archive, continues the immersive fantasy epic that The Way of Kings began.",
    views: "8,106"
}, {
    id: 17,
    name: "The Final Empire",
    image: "https://m.media-amazon.com/images/I/712ApWt0xZL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$23.18",
    link: "https://www.amazon.com/Mistborn-Trilogy-Brandon-Sanderson-ebook/dp/B004H1TQBW/ref=sr_1_2?dchild=1&keywords=the+final+empire+kindle&qid=1616127646&sr=8-2",
    description: "Kelsier, a brilliant thief has turned his talents to the ultimate caper, with the Lord Ruler as the mark. Kel's plan is the ultimate long shot, until luck brings a ragged girl named Vin into the fold. But she will have to learn to trust if she is to master powers of which she never dreamed.",
    views: "8,012"
}, {
    id: 18,
    name: "Dune",
    image: "https://m.media-amazon.com/images/I/91EWCXXofLL._AC_UY327_FMwebp_QL65_.jpg",
    price: "$9.49",
    link: "https://www.amazon.com/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8/ref=sr_1_1?dchild=1&keywords=dune+kindle&qid=1616127797&sr=8-1",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for....",
    views: "8,011"
}, {
    id: 19,
    name: "Jesus The Christ",
    image: "https://m.media-amazon.com/images/I/51ZsA5C9JsL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$12.00",
    link: "https://www.amazon.com/Jesus-Christ-Index-James-Talmage-ebook/dp/B0077FC4CI/ref=sr_1_2?dchild=1&keywords=jesus+the+christ+kindle&qid=1616128315&sr=8-2",
    description: "Considered one of the all-time great classics of LDS literature, Jesus the Christ is a comprehensive look into the life and ministry of the Savior. Written at the request of the First Presidency by the Apostle James E. Talmage, and penned from an office inside the Salt Lake Temple, this volume is more than a simple outline of the Savior’s life. It presents a far-reaching view of the Savior — including His life in the flesh, His antemortal existence, and His activities across time as the world’s Redeemer. Allow this unparalleled work to enhance your knowledge of the Lord Jesus Christ as it magnifies your understanding of the scriptures.",
    views: "8,000"
}, {
    id: 20,
    name: "The Lost Causes of Bleak Creek",
    image: "https://m.media-amazon.com/images/I/914TZbZmAkL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$12.22",
    link: "https://www.amazon.com/Lost-Causes-Bleak-Creek-Novel-ebook/dp/B07NKPNZMF/ref=sr_1_1?dchild=1&keywords=the+lost+causes+of+bleak+creek+kindle&qid=1616128627&sr=8-1",
    description: "It’s 1992 in Bleak Creek, North Carolina—a sleepy little place with all the trappings of an ordinary Southern town: two Baptist churches, friendly smiles coupled with silent judgments, and an unquenchable appetite for pork products. Beneath the town’s cheerful façade, however, Bleak Creek teens live in constant fear of being sent to the Whitewood School, a local reformatory with a history of putting unruly youths back on the straight and narrow—a record so impeccable that almost everyone is willing to ignore the suspicious deaths that have occurred there over the past decade.",
    views: "7,999"
}, {
    id: 21,
    name: "Wayside School Gets a Little Stranger",
    image: "https://m.media-amazon.com/images/I/81HPdJ0eEWL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$7.99",
    link: "https://www.amazon.com/Wayside-School-Gets-Little-Stranger-ebook/dp/B01NCYMS0D/ref=sr_1_1?dchild=1&keywords=wayside+school+gets+a+little+stranger+kindle&qid=1616129406&sr=8-1",
    description: "Bestselling and Newbery Medal-winning author Louis Sachar knows how to make readers laugh. And there are laughs galore in perennial favorite Wayside School Gets a Little Stranger!",
    views: "7,998"
}, {
    id: 22,
    name: "Triangle",
    image: "https://m.media-amazon.com/images/I/91PEyIdBoWL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$13.49",
    link: "https://www.amazon.com/Triangle-Shape-Trilogy-Mac-Barnett/dp/076369603X/ref=sr_1_1?dchild=1&keywords=triangle+shape+trilogy&qid=1616129785&sr=8-1",
    description: "Multi-award-winning, New York Times best-selling duo Mac Barnett and Jon Klassen conspire again on a slyly funny tale about some very sneaky shapes.",
    views: "7,789"
}, {
    id: 23,
    name: "The Great Wide Sea",
    image: "https://m.media-amazon.com/images/I/81HgTQQRjvL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$7.99",
    link: "https://www.amazon.com/Great-Wide-Sea-M-H-Herlong-ebook/dp/B001LRB384/ref=sr_1_8?dchild=1&keywords=the+great+white+sea+kindle&qid=1616130381&sr=8-8",
    description: "Ben, Dylan, and Gerry are still mourning their mother's death when their dad decides to buy a boat and take them on a year-long sailing trip. Tensions flare between Ben and his father, but they gradually learn to live together in close quarters. Then one morning the boys wake up to discover their father has disappeared and they are lost. What happened to him? Where are they? And what will they do when a terrible storm looms on the horizon?",
    views: "7,439"
}, {
    id: 24,
    name: "So B. It",
    image: "https://m.media-amazon.com/images/I/61E3vuFTv8L._AC_UL480_FMwebp_QL65_.jpg",
    price: "$5.99",
    link: "https://www.amazon.com/So-B-Sarah-Weeks-ebook/dp/B002R2OFDM/ref=sr_1_1?dchild=1&keywords=so+b.+it+kindle&qid=1616130605&sr=8-1",
    description: "From acclaimed author Sarah Weeks comes a touching coming-of-age story about a young girl who goes on a cross-country journey to discover the truth about her parents, which the New York Times called 'a remarkable novel. Perfect for fans of Rebecca Stead's When You Reach Me and Ali Benjamin's The Thing About Jellyfish.'",
    views: "7,100"
}, {
    id: 25,
    name: "Pride and Prejudice",
    image: "https://m.media-amazon.com/images/I/41TYCIYe2-L._SY346_.jpg",
    price: "$10.99",
    link: "https://www.amazon.com/Pride-Prejudice-Jane-Austen-ebook/dp/B076X7QJFS/ref=sr_1_1?dchild=1&keywords=pride+and+prejudice+kindle&qid=1616131103&sr=8-1",
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work “her own darling child” and its vivacious heroine, Elizabeth Bennet, “as delightful a creature as ever appeared in print.” The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen’s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
    views: "1"
}, ]

export default bookdata