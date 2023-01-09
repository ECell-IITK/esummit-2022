var spons = [];
var sponsors_gallery = document.getElementById("sponsors_gallery");

// To add a speaker just add an element
// in the below spons and add its
// respective properties name, pic, about, etc
// (
// and keep the element id as NULL
// it will automatically generate it

spons.push(
  {
    name: "National Payments Corporation of India",
    pic: "img/sponsors/npci.png",
    cat: "Title Sponsor",
    url: "https://www.npci.org.in/",
    id: "",
  },
  {
    name: "Westbridge Capital",
    pic: "img/sponsors/westbridge.png",
    cat: "Co-Title Sponsor",
    url: "https://www.westbridgecap.com/",
    id: "",
  },
  {
    name: "Yes Bank",
    pic: "img/sponsors/yes bank.jpg",
    cat: "Upstart Title Sponsor & Startup Expo Co-Powered By",
    url: "https://www.yesbank.in/",
    id: "",
  },
  {
    name: "Lohia Corp Ltd",
    pic: "img/sponsors/lohia.png",
    cat: "Startup Expo Gold Sponsor",
    url: "https://www.deutschebank.co.in/",
    id: "",
  },
  {
    name: "Commenda",
    pic: "img/sponsors/commenda.svg",
    cat: "Deep Track Sponsor",
    url: "https://www.commenda.io/",
    id: "",
  },
  {
    name: "Bizthon",
    pic: "img/sponsors/bizthon.png",
    cat: "Web3 Track Sponsor",
    url: "https://bizthon.com/",
    id: "",
  },
  {
    name: "Max Blocks",
    pic: "img/sponsors/maxblocks.jpg",
    cat: "Startup Expo Silver Sponsor",
    url: "https://maxblocks.in/",
    id: "",
  },
  {
    name: "SBI Bank",
    pic: "img/sponsors/sbi.png",
    cat: "Banking Partner",
    url: "https://www.onlinesbi.sbi/",
    id: "",
  },
  
  {
    name: "StockGro",
    pic: "img/sponsors/stockgro.png",
    cat: "Crypto Craze Presented By",
    url: "https://www.stockgro.club/",
    id: "",
  },
  {
    name: "LIC",
    pic: "img/sponsors/lic.png",
    cat: "Event Sponsor",
    url: "https://licindia.in/",
    id: "",
  },
  {
    name: "IMS Kanpur",
    pic: "img/sponsors/ims.png",
    cat: "Career Partner",
    url: "https://www.imsindia.com/center/kanpur/",
    id: "",
  },
  {
    name: "Nihkan",
    pic: "img/sponsors/nihkan.png",
    cat: "Corporate Gifting Partner",
    url: "https://nihkan.in/",
    id: "",
  },
  {
    name: "Hapi Pola",
    pic: "img/sponsors/hapipola.webp",
    cat: "Official Gifting Partner",
    url: "https://www.hapipola.com/",
    id: "",
  },
  {
    name: "Dizo",
    pic: "img/sponsors/dizo.png",
    cat: "Official Gifting Partner",
    url: "https://www.dizo.net/",
    id: "",
  },
  {
    name: "Bikano",
    pic: "img/sponsors/bikano.png",
    cat: "Official Gifting Partner",
    url: "https://www.bikano.com/",
    id: "",
  },
  {
    name: "Unibic",
    pic: "img/sponsors/unibic.png",
    cat: "Official Gifting Partner",
    url: "https://unibicfoods.com/",
    id: "",
  },
  {
    name: "Irusu",
    pic: "img/sponsors/irusu.png",
    cat: "Official Gifting Partner",
    url: "https://irusu.co.in/",
    id: "",
  },
  {
    name: "Fuji Film",
    pic: "img/sponsors/fujifilm.svg",
    cat: "Official Gifting Partner",
    url: "https://global.fujifilm.com/en/",
    id: "",
  },
  {
    name: "Lil Goodness",
    pic: "img/sponsors/lilgoodness.webp",
    cat: "Official Gifting Partner",
    url: "https://lilgoodness.com/",
    id: "",
  },
  {
    name: "m Caffeine",
    pic: "img/sponsors/mcaffeine.avif",
    cat: "Special Skin Care Gifting Partner",
    url: "https://lilgoodness.com/",
    id: "",
  },
  {
    name: "Attrangi",
    pic: "img/sponsors/attrangi.avif",
    cat: "Official Gifting Partner",
    url: "https://attrangi.in/",
    id: "",
  },
  {
    name: "Soxytoes",
    pic: "img/sponsors/soxytoes.avif",
    cat: "Official Gifting Partner",
    url: "https://soxytoes.com/",
    id: "",
  },
  {
    name: "GrowFitter",
    pic: "img/sponsors/growfitter.svg",
    cat: "Official Gifting Partner",
    url: "https://www.growfitter.com/",
    id: "",
  },
  {
    name: "Too Yum",
    pic: "img/sponsors/tooyum.cms",
    cat: "Official Gifting Partner",
    url: "https://www.tooyumm.com/",
    id: "",
  },
  {
    name: "News18",
    pic: "img/sponsors/news18.svg",
    cat: "Official News Partner",
    url: "https://www.news18.com/",
    id: "",
  },
  {
    name: "Kanpur Wants",
    pic: "img/sponsors/kanpurwants.png",
    cat: "Regional Media Partner",
    url: "https://www.kanpurwants.com/",
    id: "",
  },
  {
    name: "Amar Ujala",
    pic: "img/sponsors/amarujala.png",
    cat: "Media Partner",
    url: "https://www.amarujala.com/",
    id: "",
  },
  {
    name: "Fever FM",
    pic: "img/sponsors/feverfm.png",
    cat: "Radio Partner",
    url: "https://www.fever.fm/",
    id: "",
  },
  {
    name: "Radio One",
    pic: "img/sponsors/radioone.png",
    cat: "Regional Radio Partner",
    url: "https://www.amarujala.com/",
    id: "",
  },
  {
    name: "Education World",
    pic: "img/sponsors/educationworld.png",
    cat: "Digital Media Partner",
    url: "https://www.educationworld.in/",
    id: "",
  },
  {
    name: "Digital Raven",
    pic: "img/sponsors/digitalraven.webp",
    cat: "Digital Media Partner",
    url: "https://www.digitalraven.in/",
    id: "",
  },
  {
    name: "Eat My News",
    pic: "img/sponsors/eatmynews.png",
    cat: "Digital Media Partner",
    url: "https://www.eatmy.news/",
    id: "",
  },
  {
    name: "World Finance Informs",
    pic: "img/sponsors/WFI.png",
    cat: "Digital Media Partner",
    url: "https://www.worldfinanceinforms.com/",
    id: "",
  },
  {
    name: "Startup Insider",
    pic: "img/sponsors/startupinsider.png",
    cat: "Digital Media Partner",
    url: "https://www.startupinsider.in/",
    id: "",
  },
  {
    name: "exchange4media",
    pic: "img/sponsors/e4m.png",
    cat: "Diital Media Partner",
    url: "https://www.exchange4media.com/",
    id: "",
  },
  {
    name: "Glare Post",
    pic: "img/sponsors/glarepost.webp",
    cat: "Digital Media Partner",
    url: "https://www.glarepost.com/",
    id: "",
  },
  {
    name: "Jayesh Khade Startup Support Centre",
    pic: "img/sponsors/jayesh.png",
    cat: "Official Gifting Partner",
    url: "",
    id: "",
  },
);

//Assign id to each element of the speaker sponsay=> s0, s1, s2 etc
//and adds the respective speaker
for (var i = 0; i < spons.length; i++) {
  spons[i].id = "s" + i.toString();
  addSponsor(i);
}

function addSponsor(index) {
  var div = document.createElement("div");
  div.classList.add("flex-item");

  var a1 = document.createElement("a");
  if (spons[index].url) {
    a1.setAttribute("href", spons[index].url);
    a1.setAttribute("target", "_blank");
  } else {
    a1.setAttribute("href", "#");
  }

  var div11 = document.createElement("div");
  div11.classList.add("sponsor-pic-wrapper");

  var img111 = document.createElement("img");
  img111.classList.add("sponsor-pic");
  img111.setAttribute("src", spons[index].pic);

  var div2 = document.createElement("div");
  div2.classList.add("spon-cat");
  div2.innerText = spons[index].cat;

  div11.appendChild(img111);
  a1.appendChild(div11);

  div.appendChild(a1);
  div.appendChild(div2);

  sponsors_gallery.appendChild(div);
}
