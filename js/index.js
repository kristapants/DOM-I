const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const addBR = (string) => string.split(" ").join("<br> "); //accepts a string and adds a line break after each word

// Example: Update the img src for the logo

//Nav selectors
let logo = document.getElementById("logo-img")
let nav = document.querySelector("nav")
let navItem1 = nav.querySelector("a:nth-of-type(1)")
let navItem2 = nav.querySelector("a:nth-of-type(2)")
let navItem3 = nav.querySelector("a:nth-of-type(3)")
let navItem4 = nav.querySelector("a:nth-of-type(4)")
let navItem5 = nav.querySelector("a:nth-of-type(5)")
let navItem6 = nav.querySelector("a:nth-of-type(6)")

//Nav assignments
logo.setAttribute("src", siteContent["nav"]["img-src"])
navItem1.textContent = siteContent["nav"]["nav-item-1"]
navItem2.textContent = siteContent["nav"]["nav-item-2"]
navItem3.textContent = siteContent["nav"]["nav-item-3"]
navItem4.textContent = siteContent["nav"]["nav-item-4"]
navItem5.textContent = siteContent["nav"]["nav-item-5"]
navItem6.textContent = siteContent["nav"]["nav-item-6"]

//Call to action selectors
let heroImg = document.getElementById("cta-img")
let ctaText = document.querySelector(".cta-text")
let ctaH1 = ctaText.querySelector("h1:nth-of-type(1)")
let ctaButton = ctaText.querySelector("button:nth-of-type(1)")

//Call to action assigntments
heroImg.setAttribute("src", siteContent["cta"]["img-src"])
ctaH1.innerHTML = addBR(siteContent["cta"]["h1"])
ctaButton.textContent = siteContent["cta"]["button"]

//Begin main content selectors
let mainContent = document.querySelector(".main-content")
let topContent = mainContent.querySelector(".top-content")
let bottomContent = mainContent.querySelector(".bottom-content")
let middleImg = document.getElementById("middle-img")

let featuresContent = topContent.querySelector("div:nth-of-type(1)")
let featuresTitle = featuresContent.querySelector("h4")
let featuresBody = featuresContent.querySelector("p")

let aboutContent = topContent.querySelector("div:nth-of-type(2)")
let aboutTitle = aboutContent.querySelector("h4")
let aboutBody = aboutContent.querySelector("p")

let servicesContent = bottomContent.querySelector("div:nth-of-type(1)")
let servicesTitle = servicesContent.querySelector("h4")
let servicesBody = servicesContent.querySelector("p")

let productContent = bottomContent.querySelector("div:nth-of-type(2)")
let productTitle = productContent.querySelector("h4")
let productBody = productContent.querySelector("p")

let visionContent = bottomContent.querySelector("div:nth-of-type(3)")
let visionTitle = visionContent.querySelector("h4")
let visionBody = visionContent.querySelector("p")

//Main content assignments
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

featuresTitle.textContent = siteContent["main-content"]["features-h4"]
featuresBody.textContent = siteContent["main-content"]["features-content"]

aboutTitle.textContent = siteContent["main-content"]["about-h4"]
aboutBody.textContent = siteContent["main-content"]["about-content"]

servicesTitle.textContent = siteContent["main-content"]["services-h4"]
servicesBody.textContent = siteContent["main-content"]["services-content"]

productTitle.textContent = siteContent["main-content"]["product-h4"]
productBody.textContent = siteContent["main-content"]["product-content"]

visionTitle.textContent = siteContent["main-content"]["vision-h4"]
visionBody.textContent = siteContent["main-content"]["vision-content"]

//Contact section selectors
let contact = document.querySelector(".contact")
let contactH4 = contact.querySelector("h4")
let contactAddress = contact.querySelector("p:nth-of-type(1)")
let contactPhone = contact.querySelector("p:nth-of-type(2)")
let contactEmail = contact.querySelector("p:nth-of-type(3)")

//Contact content assignments
contactH4.textContent = siteContent["contact"]["contact-h4"]
contactAddress.textContent = siteContent["contact"]["address"]
contactPhone.textContent = siteContent["contact"]["phone"]
contactEmail.textContent = siteContent["contact"]["email"]

//Footer section selectors
let footerContent = document.querySelector("footer p")

//Footer content assignments
footerContent.textContent = siteContent["footer"]["copyright"]