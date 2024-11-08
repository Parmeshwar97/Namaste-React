import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/large.png";

/*
* Header
    -logo 
    -Nav items
* Body
    -Search
    -Restaurant container 
       ?Restaurant Card
* Footer 
    -Copyright 
    -Links  
    -Address
    -Contact
*/

///Header

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

///Card
const RestaurantCard = (props)=>{
  // console.dir(data.resData.info);
  let {resData} = props;  
  let {name,costForTwo,cuisines,cloudinaryImageId,avgRating,sla} = resData.info; 
  
  return (
    <div className="res-card">
      <img className="res-img" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e/'+cloudinaryImageId }/>
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <p>{cuisines}</p>
      <p>{avgRating} rating</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
}

///Body

const resList =  [
{
info: {
id: "531441",
name: "Gourmet Ice Cream Cakes by Baskin Robbins",
cloudinaryImageId: "d679c532ca07a6f3fd6d89d603861412",
locality: "Satkar Square",
areaName: "Mohan Nagar",
costForTwo: "₹200 for two",
cuisines: [],
avgRating: 5,
veg: true,
parentId: "21932",
avgRatingString: "5.0",
totalRatingsString: "3",
sla: {
deliveryTime: 60,
lastMileTravel: 11.2,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "55-60 mins",
lastMileTravelString: "11.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Temporarily closed for delivery"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "50% OFF",
subHeader: "UPTO ₹80"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-rest531441",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "611435",
name: "Momomia Love In Every Bite",
cloudinaryImageId: "zvy2c2xcxzzlxg6tifvn",
locality: "Shivam Sundaram Colony",
areaName: "Chhindwara City",
costForTwo: "₹200 for two",
cuisines: [],
avgRating: 4.2,
veg: true,
parentId: "232865",
avgRatingString: "4.2",
totalRatingsString: "306",
sla: {
deliveryTime: 62,
lastMileTravel: 12.6,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "60-65 mins",
lastMileTravelString: "12.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Temporarily closed for delivery"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "25% OFF",
subHeader: "ABOVE ₹149",
discountTag: "FLAT DEAL"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/momomia-love-in-every-bite-shivam-sundaram-colony-chhindwara-city-rest611435",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "625927",
name: "Kathi Junction",
cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
locality: "Bunglow Madhuvan Colony",
areaName: "Prasia Road",
costForTwo: "₹200 for two",
cuisines: [
"rolls",
"Burgers",
"Pizzas",
"Fast Food"
],
avgRating: 3.9,
parentId: "1935",
avgRatingString: "3.9",
totalRatingsString: "277",
sla: {
deliveryTime: 80,
lastMileTravel: 14.6,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "80-85 mins",
lastMileTravelString: "14.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Opens next at 11:30 am, today"
},
badges: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "30% OFF",
subHeader: "UPTO ₹75"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},

{
info: {
id: "496348",
name: "Pizza Box",
cloudinaryImageId: "n7wbtvlifwbw5y4a7rrv",
locality: "Sanchar Colony",
areaName: "Chhindwara Locality",
costForTwo: "₹300 for two",
cuisines: [
"Pizzas",
"Burgers",
"Beverages"
],
avgRating: 4.3,
veg: true,
parentId: "3045",
avgRatingString: "4.3",
totalRatingsString: "208",
sla: {
deliveryTime: 60,
lastMileTravel: 11.5,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "55-60 mins",
lastMileTravelString: "11.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Temporarily closed for delivery"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/pizza-box-sanchar-colony-chhindwara-locality-rest496348",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "151653",
name: "Chinese Corner",
cloudinaryImageId: "swmkorkznqkkexzj4xsd",
locality: "Khajri road",
areaName: "Mohan Nagar",
costForTwo: "₹200 for two",
cuisines: [
"Chinese"
],
avgRating: 2,
parentId: "2648",
avgRatingString: "2.0",
totalRatingsString: "80",
sla: {
deliveryTime: 66,
lastMileTravel: 11.9,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "65-70 mins",
lastMileTravelString: "11.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Temporarily closed for delivery"
},
badges: { },
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/chinese-corner-khajri-road-mohan-nagar-rest151653",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "385824",
name: "The Belgian Waffle Co.",
cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
locality: "Sinchai Colony",
areaName: "Mohan Nagar",
costForTwo: "₹200 for two",
cuisines: [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
avgRating: 4.6,
veg: true,
parentId: "2233",
avgRatingString: "4.6",
totalRatingsString: "281",
sla: {
deliveryTime: 56,
lastMileTravel: 11.2,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "55-60 mins",
lastMileTravelString: "11.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Opens next at 2 pm, today"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "UPTO ₹50"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "487096",
name: "Dino's Pizza",
cloudinaryImageId: "seqnlipynpingek2iirl",
locality: "Teacher's Colony",
areaName: "Parasia Road",
costForTwo: "₹200 for two",
cuisines: [
"Pizzas",
"Burgers",
"Beverages"
],
avgRating: 4.1,
veg: true,
parentId: "387459",
avgRatingString: "4.1",
totalRatingsString: "275",
sla: {
deliveryTime: 69,
lastMileTravel: 12.3,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "65-70 mins",
lastMileTravelString: "12.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Opens next at 11 am, today"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "UPTO ₹50"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/dinos-pizza-teachers-colony-parasia-road-rest487096",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "150589",
name: "Just Chill Cafe",
cloudinaryImageId: "ojlmkgumrdsa88xfo4iq",
locality: "Ganesh Chowk ",
areaName: "Ganesh Chowk",
costForTwo: "₹200 for two",
cuisines: [
"Chinese",
"Pizzas"
],
avgRating: 3.3,
veg: true,
parentId: "112339",
avgRatingString: "3.3",
totalRatingsString: "96",
sla: {
deliveryTime: 58,
lastMileTravel: 10.3,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "55-60 mins",
lastMileTravelString: "10.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Opens next at 11 am, today"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/just-chill-cafe-ganesh-chowk-rest150589",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "584795",
name: "Chaska Cafe",
cloudinaryImageId: "uxgpy3bwmc5rsojmtw43",
locality: "Parasia Road",
areaName: "Chhindwara Locality",
costForTwo: "₹150 for two",
cuisines: [
"Cafe",
"Italian",
"Chinese"
],
avgRating: 3.6,
veg: true,
parentId: "58237",
avgRatingString: "3.6",
totalRatingsString: "6",
sla: {
deliveryTime: 67,
lastMileTravel: 13,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "65-70 mins",
lastMileTravelString: "13.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Opens next at 11 am, today"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/chaska-cafe-parasia-road-chhindwara-locality-rest584795",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
},
{
info: {
id: "769851",
name: "Healthy Bites",
cloudinaryImageId: "4dfbe240cf1a2be01e6f2805c75c4279",
locality: "Collectrate Road",
areaName: "Chhindwara City",
costForTwo: "₹250 for two",
cuisines: [
"Salads"
],
veg: true,
parentId: "3143",
avgRatingString: "--",
sla: {
deliveryTime: 62,
lastMileTravel: 11.3,
serviceability: "SERVICEABLE_WITH_BANNER",
slaString: "60-65 mins",
lastMileTravelString: "11.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextOpenTimeMessage: "Opens next at 3 pm, today"
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "5.0",
ratingCount: "1"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
},
analytics: {
context: "seo-data-0152c3e8-97a9-4db4-bf8c-960e66f10bb6"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/healthy-bites-collectrate-road-chhindwara-city-rest769851",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_TemporarilyClosed_by_Name"
}
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">     
        {
          resList.map((restro)=> <RestaurantCard key={restro.info.id} resData={restro}/>)
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
