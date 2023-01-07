//Array to store the data of the speakers
var arr = [];
var section = document.getElementById("all-speakers");
var m_contents = document.getElementById("model_contents");

//To add a speaker just add an element
// in the below array and add its
//respective properties like name, pic, about, etc
//(
//and keep the element id as NULL
// it will automatically generate it
arr.push(
  {
    name: "Srikanth Gopalakrishnan",
    pic: "img/images-speakers/Srikanth Gopalakrishnan. CIO, Legal, HR and communications, Deutsche bank.png",
    about:
      "Since joining Deutsche Bank in 2020 as CIO for HR, Legal and Communications, Srikanth has been involved in evolving the Workday footprint in HR. He has also been managing the Legal portfolio with the rollout of the new Document Management system for the bank. Srikanth has had a wealth of experience in the HR Technology domain with over 22 years in that space. He has been involved in large HR technology projects in the US. He has been building HR products for Peoplesoft, Oracle, SAP and Success Factors. He also has spent the last 5 years building products for manufacturing using IoT, Machine Learning and building Business networks at SAP for Industry 4.0.",
    id: "",
  },
  {
    name: "Manu Rekhi",
    pic: "img/images-speakers/manu.jpg",
    about:
      '"Manu Rekhi, a Venture Investor, is the Partner & Managing Director at Inventus Capital Partners. He has worked across Product Management, General management, and marketing segmentation, and has served as a top-level executive at companies namely Myspace, Google, NewsCorp, 6waves Lolapps Inc & WineGlobe Inc. He\'s a Boston University graduate and did the Berkeley-Columbia Executive MBA program by HaaS school of business and Columbia Business School."',
    id: "",
  },
  {
    name: "Amit Agarwal",
    pic: "img/present/amitAgarwal.jpg",
    about:
      "A banking & finance veteran with over 15 years of experience in management consulting and strategy, Amit Kumar Agarwal is the Co-founder and CEO of NoBroker.com, the world’s largest peer-to-peer real estate portal. He is responsible for defining and guiding the overall vision and direction at NoBroker.com and spearheads the company’s corporate strategies. Amit is an alumnus of the Indian Institute of Technology, Kanpur, and IIM, Ahmedabad. He was associated with the Management Consulting division of PricewaterhouseCoopers’ Banking and Financial Services vertical. He worked with many leading Indian and foreign banks during his eight years at PwC, leading consulting teams and working directly with top CXOs on critical aspects such as formulating business strategy and enhancing on-ground profitability.",
    id: "",
  },
  {
    name: "Srikant Gokhale",
    pic: "img/images-speakers/srikant.jpg",
    about: "",
    id: "",
  },
  {
    name: "Manpreet Bhuie",
    pic: "img/images-speakers/manpreet.jpg",
    about:
      "Since joining Deutsche Bank in 2020 as CIO for HR, Legal and Communications, Srikanth has been involved in evolving the Workday footprint in HR. He has also been managing the Legal portfolio with the rollout of the new Document Management system for the bank. Srikanth has had a wealth of experience in the HR Technology domain with over 22 years in that space. He has been involved in large HR technology projects in the US. He has been building HR products for Peoplesoft, Oracle, SAP and Success Factors. He also has spent the last 5 years building products for manufacturing using IoT, Machine Learning and building Business networks at SAP for Industry 4.0.",
    id: "",
  },
  {
    name: "Jay Vikram Bakshi",
    pic: "img/images-speakers/jay-vikram.jpg",
    about:
      "Jay is founder president of DIGIQOM SOLUTIONS (www.digiqom.com), a leading digital marketing and social media communications advocacy consulting firm, focused at enabling corporates, institutions, and governments across the world – communicate for results. A senior management professional with a track record of over 25 years in media, marketing, and corporate communications, Jay, in addition to spearheading innovation in Telecom, Software, and Brand creation, has been associated with sustainability and development organizations as the leader of Corporate Social Responsibility initiatives in every corporate he served in.",
    id: "",
  },
  {
    name: "Ninad Karpe",
    pic: "img/images-speakers/ninad.jpg",
    about:
      "Ninad Karpe is a Partner at 100X.VC – a VC firm, which invests in early stage start-ups and has invested in 70 startups so far. It aims to invest in 100 startups every year. Karpe was the MD & CEO of Aptech Ltd. for more than seven years, till 2016. He previously served CA Technologies, a US headquartered leader in software products, as Managing Director of India. Karpe has authored a book on business strategies, titled “BOND to BABA”, which received rave reviews and was listed by Amazon in its prestigious list of “Memorable books of 2018”. He was the Chairman, Western Region of the Confederation of Indian Industries (CII) for 2017-18, an honorary position. Besides his day job as a VC, Karpe is passionate about supporting theatre and has produced two Marathi plays, which have received wide acclaim. An avid follower of F1 racing, he switches off his mobile phone during race days.",
    id: "",
  },
  {
    name: "Anil Joshi",
    pic: "img/images-speakers/anil-joshi.jpg",
    about:
      "Anil Joshi is the Founder and Managing Partner at Unicorn India Ventures, a leading Venture Capital Fund focusing on early-stage investments in tech companies. With over two decades of experience in the field, Anil pioneered angel investments in India as the head of operations and President at Mumbai Angels, one of the most reputable and prolific Angel Investment forums in India. As an early mover in early 2000 in this segment, Anil was investing in budding companies even before venture investment had taken any formal shape in India. Within the start-up ecosystem, Anil has been at the helm of over 100 venture-financing deals. He serves on the board of several companies in the field of Fintech, Robotic, Meditech, IOT, Bigdata, SaaS and is involved with multiple incubation centres as a board member and mentor in India as well as internationally. Additionally, he also advices the government and industry bodies on start-ups regarding policy. Young entrepreneurs draw upon his vast experience for guidance and strategic direction for their own start-ups. As an accomplished public speaker with informed opinions about the sector, he is much sought after at start-up events both in the domestic and the international circuit. His speaking engagements have taken him to countries like Singapore, Malaysia, USA, Canada, China, France, Australia and the Middle East",
    id: "",
  },
  {
    name: "Harsh Pamnani",
    pic: "img/images-speakers/Harsh-Picture-RC-Fellowship.jpg",
    about:
      "Harsh is a storyteller by passion and a brand expert by profession. He curates real-world inspiring stories that help to establish a brand's distinct identity. An attractive identity makes a brand preferable in the market and drives growth.      Harsh has authored 3 books on brand building. His bestselling book series Booming Brands covering inspiring journeys of 22 new age 'Made in India' brands, is published by CNBC. It has been widely acclaimed by eminent academicians, Indian government leaders, entrepreneurs, and venture capitalists. His third book Booming Digital Stars, covering 11 inspiring journeys from 'India's Creator Economy,' has become a National Bestseller. He has also written over 80 articles for various business publications, including Forbes. ",
    id: "",
  },
  {
    name: "Aman Dhall",
    pic: "img/aman-dhall.jpg",
    about:
      "Aman Dhall is founder of award-winning global integrated communications consultancy, CommsCredible. Through his venture, Aman is trying to build mutual trust within the corporate and media community, by curating stories that matter for the ecosystem. In his last role, he was the story maker in chief for world’s most valued insurtech brand Policybazaar.com. He led their storytelling in their business journey from valuation of $100 Mn in 2014 to over $2bn in 2020.In 2019, Exchange4Media recognised Aman among India's most influential gamechangers in the corporate communications and PR field.  He has also been identified as India's best young talent from the field of marketing, advertising, public relations, and media, in various ‘40 under 40’ lists by media houses.Aman is an alumnus of Delhi University and Loughborough University, UK. He has been a sportsperson and a journalist early in his career.",
    id: "",
  },
  {
    name: "Ranjith Mukundan",
    pic: "img/images-speakers/ranjith.jpg",
    about:
      "Ranjith, an alum from Bangalore Institute of Technology, is the CEO and Co-founder at Stellapps Technologies. Earlier, he was the Practice Head at Wipro in the Communications domain. Ranjith is currently working on digitizing the dairy industry.",
    id: "",
  },
  {
    name: "Vipin Pathak",
    pic: "img/images-speakers/vipin-pathak.jpg",
    about:
      "Mr. Vipin Pathak is the Co-founder and CEO of Care24. Mr. Vipin Pathak (BT/CE/2006) was honored with the Businessworld Young Entrepreneur Award. Founded in 2014, Care24 is not only one of India’s top home healthcare companies but also one of India’s pioneering venture capital-backed startups in this space.",
    id: "",
  },
  {
    name: "Priya Prakash",
    pic: "img/images-speakers/priya-prakash.jpg",
    about:
      "Priya Prakash is a healthcare entrepreneur and the Founder and CEO of HealthSetGo. HealthSetGo is India's largest healthcare organisation for school with the vision to establish India's largest network of health promoting schools. HealthSetGo currently operates in over 77 cities across India with 250,000+ students and parents with it’s flagship program CARE which monitors the healthy growth of students at School and generates Intelligent insights for Parents to empower them to take care of their child’s health as well as impart the right Health Education customised to the age of the child. Priya is a Delhi State Level Weightlifter, Tedx Speaker, Crossfit L1 Trainer , and an avid health blogger. She was honoured as Forbes Under 30 Asia 2018 in Healthcare and Sciences and awarded the Unilever Young Entreprenuer of the Year in 2018.",
    id: "",
  },
  {
    name: "Tamanna Singh",
    pic: "img/images-speakers/Tamanna Singh, Founder & CEO, UberLux.jpg",
    about:
      "Tamanna Singh, is an Indian Business Woman, a President of India Awardee, Under 40 Top 40 business women awardee, a well-known mentor, motivational speaker, investor, philanthropist with over 20 yrs. Of experience. She is Founder and Managing Director of The Uberlux group of Companies .She along with her husband Col. Gautam Singh, formed UberLux in 2011, with the vision to pioneer the concept of affordable luxury in India. The company presently has seven brands under its wings .Recently, the company diversified its portfolio to foray into Real estate projects and exports in Australia. An MBA in HR & marketing, Tamanna also studied Cosmetology from Paris. She has conceptualized and executed a number of innovative brand management and global market entry strategies for some of the world’s best known brands as well as start-ups and entrepreneurs. She has also collaborated with leading thought leaders of Harvard Business School, Indian Institute of Management, Indian Institute of Technology and some other leading management institutes on case studies and teaching programmes. She contributes regularly for various articles for magazines, websites and papers on entrepreneurship. She is also a subject matter expert in Beauty, wellness, fashion, women entrepreneurship, scaling up businesses, negotiation skills, how to bootstrap your start-up, fund raising, pitch deck, etc. She has already empowered over 15,000 women through various platforms .Over the last 15 years she has been highly recognized and awarded both nationally and internationally for her work on women empowerment and upliftment.",
    id: "",
  },
  {
    name: "Amar Nagaram",
    pic: "img/images-speakers/amar-nagaram.jpg",
    about:
      "Amar Nagaram is an Indian Business Executive. He was the chief executive officer (CEO) of Myntra.com, succeeding Ananth Narayanan in 2019. Before becoming CEO, he was the vice president of Flipkart Technology, responsible for building and running the consumer products. He is regarded as one of the very vocal voices on technology and its role in modern business.",
    id: "",
  },

  {
    name: "Alok Bansal",
    pic: "img/images-speakers/Alok-Bansal.jpg",
    about:
      "Alok Bansal is the Whole-time Director & CFO, PB Fintech Limited that owns India’s leading insurtech brand Policybazaar.com & leading lending marketplace Paisabazaar.com. He heads various functions including corporate finance and controllership, tax, treasury, strategic planning, and analytics. He firmly believes that the primary responsibility of a CFO is to accomplish business goals rather than just concentrating on functional goals. According to him, the success of any business lies in working with a team with different mindsets, allowing them the flexibility and freedom to experiment, innovate and contribute. Alok’s core strengths lie in strategic thinking, process control, and execution. Prior to joining PolicyBazaar.com, Alok has worked in various cross-functional leadership roles with Mahindra & Mahindra, iGate Global Solutions and GE. He was recognized as one of the top 100 CFOs in the country by the CFO India Magazine in 2016. Alok has a special interest in science and technology, economic empowerment, education and civil rights.",
    id: "",
  },

  {
    name: "Niranjan Gupta",
    pic: "img/images-speakers/niranjan.jpg",
    about:
      "Niranjan Gupta is CFO at Hero Motocorp Limited and plays Senior leadership roles in finance and procurement , covering a wide range from start up businesses ( water purifier in HUL ) to large scale established categories ( Home & personal care ) , and covering both local and global responsibilities. Width of experience covers wide ranging finance roles ; P/L balance sheet management, acquisitions and disposals, setting up financially viable models for start ups, driving financial metrics/performance in business and controls & governance. Experience in procurement has given deep understanding of supply chain, and external market forces which influence business performance; a crucial element for a modern day CFO.",
    id: "",
  },

  {
    name: "Saket Modi",
    pic: "img/images-speakers/Saket Modi, Founder & CEO, Lucideus.jpg",
    about:
      "Saket Modi is an entrepreneur, co-founder and CEO of Safe Security, a cybersecurity and digital business risk quantification company, based out of Palo Alto, California.",
    id: "",
  },

  {
    name: "Sandeep Jain",
    pic: "img/images-speakers/Sandeep Jain, CEO, GFG.jpg",
    about:
      "The founder and CEO of GeeksforGeeks, a widely popular computer science portal created by geeks, for geeks. A postgraduate from IIT Roorkee, he has worked at D.E Shaw and Co., and at JIIT Noida as an assistant professor. His passion for imparting quality and affordable programming knowledge and a vision to build a gigantic network of geeks has helped GeeksforGeeks mark its incredible presence in the e-learning world, helping innumerable students and coding enthusiasts build a successful career in the tech world.",
    id: "",
  },

  {
    name: "Tapan Singhel",
    pic: "img/images-speakers/Tapan-singhel.jpg",
    about:
      "Tapan Singhel has a rich experience of over 30 years in the insurance industry. He is one of the founding members of Bajaj Allianz General Insurance and has been with the Company for over 20 years. As its MD & CEO for close to 10 years, Tapan has built the organisation to where it is today with close to 11 crore customers and a wide distribution network spanning across more than 1,000 locations across the country. Customer obsession and passion to do good for the people are what drives Tapan and his success in the industry. Under his aegis, the Company has been recognised as one of the best in Asia. An avid social media influencer, Tapan has over 6.8 lakh followers on LinkedIn and has been recognised as the LinkedIn’s Top Voice in India in both 2018 and 2019. He also chairs the CII National Committee on Insurance and Pensions. He recently won the ‘Lifetime Achievement Award’ at the 25 th Asia Insurance Industry Awards 2021. He has also been honoured as the ‘Personality of the Year’ at Quantic’s BFSI Excellence Awards 2021, India Insurance Summit & Awards 2019, 22nd Asia Insurance Industry Awards 2018 and Indian Insurance Summit 2017 and the ‘Most Promising Business Leader’ of Asia at The Economic Times Global Business Summit 2018. He has also won ‘CEO of the Year’ for India and Asia-Pacific region at the IDC Future Enterprise Awards 2021, 3 rd Annual Insurance India Summit & Awards 2018 and Insurance Asia Awards.",
    id: "",
  },
  {
    name: "Suchishree Chatterjee",
    pic: "img/images-speakers/Suchishree-Chatterjee-scaled.jpg",
    about:
      "Suchi is a technologist with over 25 years’ experience. Suchi has taken over as the Head of India Technology Centre as well as the CIO for RFT Global Data Ingestion She is globally responsible for data platforms and services within the Risk, Finance, and Treasury Technology organization and responsible for the execution of the Technology Centre strategy for India. A post-graduate in Computer Science, Suchi has extensive experience in implementing, developing, and managing trade lifecycle platforms across all asset classes and has a very good understanding of the Front2Back data and process flows within the Investment and Corporate Banking domains. For the past few years, she has been working to simplify the fragmented data sourcing landscape across the key reporting functions within the Bank. At the same time, she has helped build the India technology Centre and worked on its vision and mission. She is passionate about the Diversity & Inclusion agenda within the bank and is the sponsor for the India franchise across DbGO, dbEnable and dbPride pillars.",
    id: "",
  },

  {
    name: "Mikhil Innani",
    pic: "img/images-speakers/mikhil.jpg",
    about:
      "Mikhil Innani is the Managing Director & CEO at Apollo Finvest, a public listed NBFC. He has 10+ years experience of building products from scratch to an unprecedented scale of 250+ million monthly active users. He is currently building the \"AWS for Lending\" platform which enables any company to start digital lending in under 48 hours Prior to Apollo Finvest, Mikhil headed consumer products and growth at Hotstar (India’s largest OTT platform) and CouponDunia (Acquired by Times Internet). He also co-founded PharmEasy (India’s largest online medicine delivery startup valued at >$1 Billion) Mikhil holds a Master's degree in Information Systems from Carnegie Mellon University and a Bachelor's degree from Mumbai University",
    id: "",
  },

  {
    name: "Vishal Chaudhary",
    pic: "img/images-speakers/vishal.jpg",
    about:
      "Vishal Chaudhary is Co-Founder at Zetwerk. He has worked as Lead, Organization & Business Engine (OBE) at RIVIGO, as Manager at ITC Limited. He holds Master’s from Indian Institute of Technology, Kharagpur.",
    id: "",
  },

  {
    name: "Harishankaran",
    pic: "img/images-speakers/Harishankaran, Founder, InterviewStreet(Hackerrank).jpg",
    about:
      "Harishankaran is Co-founder and CTO at HackerRank. He has Scaled the product from 0 users to thousands of users per day and wrote an in-house code checker which is the core of hackerrank.com. Responsible for product delivery and management. He has also worked in IBM as a Software Developer and Build Engineer and with DB2, Websphere, Cognos, and Datastage",
    id: "",
  },
  {
    name: "Jayesh Parekh",
    pic: "img/images-speakers/jayesh.jpg",
    about:
      "Mr Jayesh Parekh is a Managing Partner at Good StartUp, an Alternate Protein VC fund manager. He was a Co-Founder of Sony Entertainment Television. He is a board member of Aavishkaar India Fund 2, Milaap and One Animation. Mr Jayesh is an active angel investor, who has invested in various Venture Capital Funds. He spent 12 years at IBM in Houston (USA) and Singapore and was a part of the IBM Offshore team that brought IBM back to India.",
    id: "",
  }
);

//Assign id to each element of the speaker array=> s0, s1, s2 etc
//and adds the respective speaker
for (var i = 0; i < arr.length; i++) {
  arr[i].id = "s" + i.toString();
  addspeaker(i);
}

//function will add a speaker by using
// the data from the Xth position of the array
function addspeaker(x) {
  //creates an model element to be appended to the m_content class=============================

  // The first word in the name of the variables tells
  // about the type of element
  // and the numbers after these tells us about the
  // position with respect to the parent element
  var div1 = document.createElement("div");
  div1.classList.add("md-modal");

  //can change this md-effect-8 class if want an different effect
  div1.classList.add("md-effect-8");
  div1.setAttribute("id", arr[x].id);
  var div11 = document.createElement("div");
  div11.classList.add("md-content");
  var div111 = document.createElement("div");
  div111.classList.add("md-box-wrapper");
  var div112 = document.createElement("div");
  div112.classList.add("md-close-wrapper");
  var button1121 = document.createElement("button");
  button1121.classList.add("md-close");
  button1121.innerText = "Close";
  var div1111 = document.createElement("div");
  div1111.classList.add("md-pic-wrapper");
  var div1112 = document.createElement("div");
  div1112.classList.add("md-disc");
  div1112.innerHTML = arr[x].about;
  var img11111 = document.createElement("img");
  img11111.setAttribute("src", arr[x].pic);
  var h111112 = document.createElement("h2");
  h111112.innerText = arr[x].name;
  div1111.appendChild(img11111);
  div1111.appendChild(h111112);
  div111.appendChild(div1111);
  div111.appendChild(div1112);
  div112.appendChild(button1121);
  div11.appendChild(div111);
  div11.appendChild(div112);
  div1.appendChild(div11);
  m_contents.appendChild(div1);
  //-------------------------------------------------------------------

  //Creates a new row if previous row is completely filled
  if (x % 4 == 0) {
    var row = document.createElement("div");
    row.classList.add("row");
    var bgrid = document.createElement("div");
    bgrid.classList.add("bgrid-fourth");
    bgrid.classList.add("s-bgrid-third");
    bgrid.classList.add("tab-bgrid-half");
    bgrid.classList.add("mob-bgrid-whole");
    bgrid.classList.add("group");
    //adds a pseudo class 'row-detect' to detect row
    bgrid.classList.add("row-detect");
    row.appendChild(bgrid);
    section.appendChild(row);
  }
  //============================================================

  // Creates an element to be appended to the row
  var bid = "b" + arr[x].id;
  var link = "javascript:run_model('" + arr[x].id + "','" + bid + "')";
  var ddiv1 = document.createElement("div");
  ddiv1.classList.add("bgrid");
  ddiv1.classList.add("member");
  var da11 = document.createElement("a");
  da11.setAttribute("id", bid);
  da11.setAttribute("href", link);
  var ddiv111 = document.createElement("div");
  ddiv111.classList.add("speaker-pic-wrapper");
  var dimg1111 = document.createElement("img");
  dimg1111.setAttribute("src", arr[x].pic);
  dimg1111.classList.add("speaker-pic");
  var ddiv112 = document.createElement("div");
  ddiv112.classList.add("speaker-name");
  var dh21121 = document.createElement("h2");
  dh21121.innerText = arr[x].name;
  ddiv111.appendChild(dimg1111);
  ddiv112.appendChild(dh21121);
  da11.appendChild(ddiv111);
  da11.appendChild(ddiv112);
  ddiv1.appendChild(da11);

  //Detect The last row by the "row-detect" class
  //and adds the created element
  var sbgrid = document.getElementsByClassName("row-detect");
  var num = sbgrid.length - 1;
  sbgrid[num].appendChild(ddiv1);
}

var arrPresent = [];
var section_present = document.getElementById("all-speakers-present");
var m_contents_present = document.getElementById("model_contents_present");

//To add a speaker just add an element
// in the below array and add its
//respective properties like name, pic, about, etc
//(
//and keep the element id as NULLF
// it will automatically generate it
arrPresent.push(
  {
    name: "Ashneer Grover",
    pic: "img/sp-images/ashneer.jpeg",
    designation: "Founder - BharatPe",
    about:
      "Indian businessman Ashneer Grover is the former co-founder and managing director (MD) of the Indian fintech company BharatPe which he co-founded along with Shashvat Nakrani and Bhavik Koladiya in 2018. Grover also appeared as an investor on the reality TV show called 'Shark Tank India'.",
    id: "",
  },
  {
    name: "BVR Mohan Reddy",
    pic: "img/sp-images/bvr.jpeg",
    designation: "Founder Chairman & Board Member - Cyient",
    about:
      "Dr. BVR Mohan Reddy is an Indian entrepreneur who has firmly placed India on the global map for leading-edge engineering, research, and development services by establishing Cyient in 1991. Sir was awarded the Padma Shri award for his contribution to Trade & Industry. He was the Chairman of NASSCOM from 2014–2015, and is a prolific business analyst.",
    id: "",
  },
  {
    name: "Sanjiv Rangrass",
    pic: "img/sp-images/sanjiv rangrass.jpg",
    designation: "Former Head ITC | ITC Mafia",
    about:
      "Rangrass is the investor behind the ITC mafia in India's startup ecosystem. The ITC veteran spent 40 years at ITC, where he joined as a trainee and became the CEO of the company's agri-business unit before retiring as its group head for research and development, sustainability and projects. 'Rangy Sir' is an active investor, mentor and has minted a generation of business leaders and founders",
    id: "",
  },
  {
    name: "Saurabh Chandra",
    pic: "img/sp-images/saurabh chandra.jpg",
    designation: "Retired Secretary Government of India",
    about:
      "Mr. Saurabh Chandra, a Distinguished Alumnus graduated in Electrical Engineering from the Indian Institute of Technology, Kanpur. He retired from the post of Secretary, Government of India, Ministry of Petroleum and Natural Gas. Prior to that, he was Secretary of the Department of Industrial Policy and Promotion, Ministry of Commerce and Industry, Government of India.",
    id: "",
  },
  {
    name: "Ved Maani Tiwari",
    pic: "img/sp-images/ved maani.jpg",
    designation: "CEO National Skill Development Corporation(NSDC)",
    about:
      "Mani Sir serves as the CEO at National Skill Development Corporation and Managing Director of its fully owned subsidiary, NSDC International. He has served several senior positions in the Government of India, and the private sector, including Director at Ministry of Railways. He has over 25 years of experience in the Infrastructure sector- Energy, Urban Development and Transportation.",
    id: "",
  },
  {
    name: "Sudeep Chaudhary",
    pic: "img/sp-images/sudeep.jpeg",
    designation: "Head India Blockchain - NPCI",
    about:
      "Sir is the Head India Blockchain of the National Payments Corporation Of India (NPCI). He is a blockchain evangelist known for his work in India's DeFi (Decentralised Finance) journey and its potential applications as an emerging financial technology that eliminates banking fees. He is a Technocrat working in deep trenches of blockchain engineering and his immediate goal is to set up Distributed Digital Public Infrastructure for financial services in India at NPCI.",
    id: "",
  },
  {
    name: "Dilip Asbe",
    pic: "img/sp-images/dilip asbe.jpg",
    designation: "Managing Director & CEO - NPCI",
    about:
      "Mr. Dilip Asbe is the MD & CEO of National Payments Corporation of India (NPCI). Prior to this he was the Chief Operating Officer (COO) of NPCI. He has played a pivotal role in designing, building, and managing large scale innovative payments processing platforms like Unified Payments Interface (UPI), Bharat Interface for Money (BHIM), Immediate Payment Service (IMPS) and India’s homegrown card network RuPay.",
    id: "",
  },
  {
    name: "Ravi Purohit",
    pic: "img/sp-images/ravi purohit.jpg",
    designation: "Vise President & India Head - Colortokens",
    about:
      "Ravi Purohit plays an integral role in the organization’s operations, delivery services, and GTM strategy. Prior to ColorTokens, Ravi held multiple leadership roles over more than two decades at Wipro and demonstrated transformative leadership, superior results, and collaboration across global teams. Most recently, as a Global head of Wipro’s Oracle service line, he reoriented the service portfolio around customer needs such as enterprise process transformation, digital transformation, and cloud technology. He has led integrated services, solutions, demand generation, presales, and large multi-services deals and headed industry verticals in Retail, CPG, and Food and Beverage globally.",
    id: "",
  },
  {
    name: "Nishant Chandra",
    pic: "img/sp-images/nishant.jpeg",
    designation: "Founder - Newton School",
    about:
      "He is the Co-Founder and CEO at Newton School, an EdTech platform that helps people improve their skills and become better software engineers. Prior to this he was the Co-Founder and CEO at Bolo.",
    id: "",
  },
  {
    name: "Shweta Bajpai",
    pic: "img/sp-images/sweta bajpai.jpeg",
    designation: "Vertical Head - Meta India",
    about:
      "Aman Dhall is founder of award-winning global integrated communications consultancy, CommsCredible. Through his venture, Aman is trying to build mutual trust within the corporate and media community, by curating stories that matter for the ecosystem. In his last role, he was the story maker in chief for world’s most valued insurtech brand Policybazaar.com. He led their storytelling in their business journey from valuation of $100 Mn in 2014 to over $2bn in 2020.In 2019, Exchange4Media recognised Aman among India's most influential gamechangers in the corporate communications and PR field.  He has also been identified as India's best young talent from the field of marketing, advertising, public relations, and media, in various ‘40 under 40’ lists by media houses.Aman is an alumnus of Delhi University and Loughborough University, UK. He has been a sportsperson and a journalist early in his career.",
    id: "",
  },
  {
    name: "Kanika Tekriwal",
    pic: "img/sp-images/kanika tekriwal.jpg",
    designation: "Founder - JetSetGo",
    about:
      "Kanika Tekriwal is an Indian entrepreneur who is serving as CEO of JetSetGo. She is the youngest richest woman in India. She founded India's first aircraft leasing organisation.She was not only chosen as one of the 100 most inspirational women in the world by BBC but also recognized by Forbes Asia as one of the 30 under 30 leading entrepreneurs in Asia amongst various other accolades.",
    id: "",
  },
  {
    name: "Amit Agrawal",
    pic: "img/sp-images/amit agarwal.jpg",
    designation: "Founder - NoBroker",
    about:
      "A banking & finance veteran with over 15 years of experience in management consulting and strategy, Amit Kumar Agarwal is the Co-founder and CEO of NoBroker.com, the worldâ€™s largest peer-to-peer real estate portal. He is responsible for defining and guiding the overall vision and direction at NoBroker.com and spearheads the company corporate strategies. Amit is an alumnus of the Indian Institute of Technology, Kanpur. He was associated with the Management Consulting division of PricewaterhouseCoopersâ€™ Banking and Financial Services vertical.",
    id: "",
  },
  {
    name: "Shiva Kumar RV",
    pic: "img/sp-images/shiva kumar.jpeg",
    designation: "Deputy Chief of Technology - NPCI",
    about:
      "Priya Prakash is a healthcare entrepreneur and the Founder and CEO of HealthSetGo. HealthSetGo is India's largest healthcare organisation for school with the vision to establish India's largest network of health promoting schools. HealthSetGo currently operates in over 77 cities across India with 250,000+ students and parents with it’s flagship program CARE which monitors the healthy growth of students at School and generates Intelligent insights for Parents to empower them to take care of their child’s health as well as impart the right Health Education customised to the age of the child. Priya is a Delhi State Level Weightlifter, Tedx Speaker, Crossfit L1 Trainer , and an avid health blogger. She was honoured as Forbes Under 30 Asia 2018 in Healthcare and Sciences and awarded the Unilever Young Entreprenuer of the Year in 2018.",
    id: "",
  },
  {
    name: "Gautam Raj Anand",
    pic: "img/sp-images/gautam raj.jpeg",
    designation: "Founder - HubHopper",
    about:
      "He is the Founder & CEO of Hubhopper, India's largest podcast hosting, creation and distribution platform. He has been recognised as a member of the Forbes 30 Under 30 in Asia for media and technology (batch of 2018) and has been nominated on the Economic Times 40 Under 40 list. He was also awarded Entrepreneur of the Year for 2018 by Entrepreneur Magazine.",
    id: "",
  },
  {
    name: "Dhruvam Thaker",
    pic: "img/sp-images/dhruvan thaker.jpg",
    designation: "Founder - Smart Taxi",
    about:
      "Mr. Dhruvam is a risk-taking and self-motivated individual who started his own business –a bootstrapped venture ‘The SMART Taxi,’ which aims to become India’s ranked 1 cab-service in terms of customer satisfaction. Along with a degree in Business Administration and skills which he learned during his education; his professional experiences also helped him establish his start-up.",
    id: "",
  },

  {
    name: "Satanik Roy",
    pic: "img/sp-images/satanik roy.jpg",
    designation: "Founder - HyperXCharge",
    about:
      "Satankik Roy is the co-founder of the startup that is bringing the next 500 million to 1 billion Indians over the Internet affordably – HyperXchange – recognized by the premier Indian government incubation hub ‘IIM – Calcutta (Innovation Park)’ through its department of Science & Technology and raised investment technology Investmentfrom ‘Microsoft’ and several other industry leaders valued at over a million dollars.",
    id: "",
  },

  {
    name: "Ashish Sinha",
    pic: "img/sp-images/ashish sinha.jpeg",
    designation: "Founder - NextBigWhat.com",
    about:
      "In 2009, Ashish Sinha founded plugged.in as a hobby to assist the growing tech talent and innovative companies that are on the rise in India. Today, NextBigWhat has grown to become an active community of Indian startups, community of founders, CXOs and Product Marketers.",
    id: "",
  },

  {
    name: "Vidushi Jain",
    pic: "img/sp-images/vidushi jain.jpg",
    designation: "Founder - Attrangi",
    about:
      "Vidushi is the Co-founder of Attrangi – a leading jewellery brand in India. She heads the financials & operations for the company. Before her entrepreneurial stint– Vidushi has worked with Book My Show and Kataria Honda. She loves dancing and travelling & is a big movie buff. She has also done an MBA in Marketing and Advertising.",
    id: "",
  },

  {
    name: "Aadit Palicha",
    pic: "img/sp-images/adit palicha.jpg",
    designation: "Founder & CEO - Zepto",
    about:
      "Aadit Palicha is the CEO and co-founder of the famous delivery app Zepto. He started his first startup GoPool at the age of 17. He is also the founder of the company PryvaSee, an AI project that summarises privacy policies.",
    id: "",
  },
  {
    name: "Pratham Mittal",
    pic: "img/sp-images/prathammittal.jpg",
    designation: "Founder at Masters’ Union",
    about:
      "Pratham Mittal is the Founderoft Masters' Union - a unique practitioner-led higher education institution, where courses are taught by CXOs from Morgan Stanley, Tata, StanChart, Google, Twitter, Reliance, Razorpay, etc. He attended the University of Pennsylvania and previously cofounded Outgrow.co, an interactive content platform used by top agencies and Fortune 500 companies.",
    id: "",
  },
  {
    name: "Divya Gandotra Tandon",
    pic: "img/sp-images/divya gandotra.jpg",
    designation: "Director - Scoop Beats Private Limited",
    about:
      "Divya Gandotra Tandon is a young entrepreneur, and an influential figure. Divya Gandotra Tandon has worked for more than 500 individual stars, influencers, and companies. Divya is the Director of Scoop Beats Pvt Ltd, COO at ASTNT Technologies Pvt Ltd, Designated Partner of Soulbeats Studio LLP and Member of Media Advisory Board at Krypto.",
    id: "",
  },
  {
    name: "Shutapa Paul",
    pic: "img/sp-images/Shutapa-Paul.jpg",
    designation: "Founder - Dharma Media Consultants",
    about:
      "She is the Founder at Dharma Media Consultants, Providing complete media solutions from content writing and social media management to internal/external communication and product placement and strategy. She has won several awards like Sattva Nation’s Iconic Wellness Award (2021), ‘Woman of the Year in Media and Journalism’ by Woman Times (2019) , and  ‘100 Women Faces’ by the Confederation of Women Entrepreneurs (2018).",
    id: "",
  },
  {
    name: "Jivraj Singh Sachar",
    pic: "img/sp-images/jivraj singh.jpg",
    designation: "Venture Operations - AngelList India",
    about:
      "Jivraj Singh Sachar’s podcast, Indian Silicon Valley, has ranked among Spotify’s Top 10 business podcasts in India. It also made the rankings in 10 other countries besides India. He started the Indian Silicon Valley podcast when he was 21 because he wanted to build a content repository for people his age, who aspired to build a business. ",
    id: "",
  },
  {
    name: "Lipi Goyal",
    pic: "img/sp-images/lipi goyal.jpg",
    designation: "Independent Artist - Roasted Beanz Production",
    about:
      "Lipi Goyal is an award winning anchor, podcaster, actor & public speaking coach who has anchored 1500+ shows live & virtually around the globe. A certified Public Speaker from University of Washington, Lipi owns a rich repertoire of skills to spell-bind audiences.",
    id: "",
  }
);

for (var i = 0; i < arrPresent.length; i++) {
  arrPresent[i].id = "sp" + i.toString();
  addspeakerNew(i);
}

//function will add a speaker by using
// the data from the Xth position of the array
function addspeakerNew(x) {
  //creates an model element to be appended to the m_content class=============================

  // The first word in the name of the variables tells
  // about the type of element
  // and the numbers after these tells us about the
  // position with respect to the parent element
  var div1 = document.createElement("div");
  div1.classList.add("md-modal");

  //can change this md-effect-8 class if want an different effect
  div1.classList.add("md-effect-8");
  div1.setAttribute("id", arrPresent[x].id);
  var div11 = document.createElement("div");
  div11.classList.add("md-content");
  var div111 = document.createElement("div");
  div111.classList.add("md-box-wrapper");
  var div112 = document.createElement("div");
  div112.classList.add("md-close-wrapper");
  var button1121 = document.createElement("button");
  button1121.classList.add("md-close");
  button1121.innerText = "Close";
  var div1111 = document.createElement("div");
  div1111.classList.add("md-pic-wrapper");
  var div1112 = document.createElement("div");
  div1112.classList.add("md-disc");
  div1112.innerHTML = arrPresent[x].about;
  var img11111 = document.createElement("img");
  img11111.setAttribute("src", arrPresent[x].pic);
  var h111112 = document.createElement("h2");
  h111112.innerText = arrPresent[x].name;
  div1111.appendChild(img11111);
  div1111.appendChild(h111112);
  div111.appendChild(div1111);
  div111.appendChild(div1112);
  div112.appendChild(button1121);
  div11.appendChild(div111);
  div11.appendChild(div112);
  div1.appendChild(div11);
  m_contents_present.appendChild(div1);
  //-------------------------------------------------------------------

  //Creates a new row if previous row is completely filled
  if (x % 4 == 0) {
    var row = document.createElement("div");
    row.classList.add("row");
    var bgrid = document.createElement("div");
    bgrid.classList.add("bgrid-fourth");
    bgrid.classList.add("s-bgrid-third");
    bgrid.classList.add("tab-bgrid-half");
    bgrid.classList.add("mob-bgrid-whole");
    bgrid.classList.add("group");
    //adds a pseudo class 'row-detect' to detect row
    bgrid.classList.add("row-detect-present");
    row.appendChild(bgrid);
    section_present.appendChild(row);
  }
  //============================================================

  // Creates an element to be appended to the row
  var bid = "b" + arrPresent[x].id;
  var link = "javascript:run_model('" + arrPresent[x].id + "','" + bid + "')";
  var ddiv1 = document.createElement("div");
  ddiv1.classList.add("bgrid");
  ddiv1.classList.add("member");
  var da11 = document.createElement("a");
  da11.setAttribute("id", bid);
  da11.setAttribute("href", link);
  var ddiv111 = document.createElement("div");
  ddiv111.classList.add("speaker-pic-wrapper");
  var dimg1111 = document.createElement("img");
  dimg1111.setAttribute("src", arrPresent[x].pic);
  dimg1111.classList.add("speaker-pic");
  var ddiv112 = document.createElement("div");
  ddiv112.classList.add("speaker-name");
  var dh21121 = document.createElement("h2");
  dh21121.innerText = arrPresent[x].name;
  var desig = document.createElement("h2");
  desig.classList.add("designation");
  desig.innerHTML = arrPresent[x].designation;
  ddiv111.appendChild(dimg1111);
  ddiv112.appendChild(dh21121);
  ddiv112.appendChild(desig);
  da11.appendChild(ddiv111);
  da11.appendChild(ddiv112);
  ddiv1.appendChild(da11);

  //Detect The last row by the "row-detect" class
  //and adds the created element
  var sbgrid = document.getElementsByClassName("row-detect-present");
  var num = sbgrid.length - 1;
  sbgrid[num].appendChild(ddiv1);
}
