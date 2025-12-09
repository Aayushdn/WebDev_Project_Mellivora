const data = {
  destinations: [
    {
      id: "anton",
      name: "St. Anton",
      country: "Austria",
      description:
        "Located in the heart of the Tyrolean Alps, St. Anton is one of the world’s most famous ski destinations. It offers 85 cable cars and ski lifts, along with an impressive 305 kilometres of ski slopes for all levels. St. Anton is also known as the birthplace of modern skiing, home to the first ski school founded by Hannes Schneider in 1921.",
      elevation: {
        summit_m: 2811,
      },
      images: {
        background: "../assets/img/destinationImage/destination1BG.jpg",
        carousel: [],
      },
    },
    {
      id: "patagonia",
      name: "Catedral Alta Patagonia",
      country: "Argentina",
      description:
        "Located in Argentina’s Nahuel Huapi National Park, just 19 kilometres from the city of San Carlos de Bariloche, Catedral Alta Patagonia is one of South America’s premier ski resorts. It features 120 kilometres of ski slopes and over 30 ski lifts, offering something for every skill level. The slopes are divided into 35% beginner, 45% intermediate, and 20% advanced or expert runs, making it an ideal destination for all types of skiers.",
      elevation: {
        summit_m: 2180,
      },
      images: {
        background: "../assets/img/destinationImage/patagoniaBG.jpg",
        carousel: [],
      },
    },
    {
      id: "niseko",
      name: "Niseko",
      country: "Japan",
      description:
        "Niseko, located on Japan’s northern island of Hokkaido, is famous for its long runs that stretch up to 5 kilometers and for having some of the best powder snow in the world. The main mountain, Mt. Annupuri, is part of the Niseko Volcanic Range and offers a vast skiable area of about 2,200 acres (900 hectares). The resort is made up of four interlinked areas under Niseko United, providing a wide variety of terrain and experiences. Its north-facing slopes help retain fresh powder for longer, making it a paradise for skiers and snowboarders alike.",
      elevation: {
        summit_m: 1200,
      },
      images: {
        background: "../assets/img/destinationImage/nisekoBG.jpg",
        carousel: [],
      },
    },
    {
      id: "aspen",
      name: "Aspen",
      country: "United States",
      description:
        "Aspen, located in the Rocky Mountains of Colorado, is one of the most iconic ski destinations in the world. The area features four main ski mountains—Aspen Mountain, Snowmass, Aspen Highlands, and Buttermilk—each offering unique terrain and experiences. Snowmass boasts one of the biggest vertical drops in North America, while Aspen Mountain and the Highlands provide challenging runs and breathtaking alpine views. Buttermilk is especially popular for beginners and freestyle riders. Beyond skiing, Aspen Skiing Company leads the way in environmental sustainability with 100% renewable electricity for operations, carbon reduction projects, solar energy investments, and strong climate advocacy programs. Elevations: Aspen Mountain (Summit 3,418 m), Snowmass (Summit 3,813 m), Aspen Highlands (Summit 3,777 m), Buttermilk (Summit 3,018 m).",
      elevation: {
        summit_m: null,
      },
      images: {
        background: "../assets/img/destinationImage/aspenBG.jpg",
        carousel: [],
      },
    },
    {
      id: "kalinchowk",
      name: "Kalinchowk–Kuri",
      country: "Nepal",
      description:
        "Kalinchowk–Kuri Ski Resort, located in the Dolakha District of Nepal, offers a unique Himalayan skiing experience surrounded by breathtaking mountain scenery. The resort features natural alpine terrain with a blend of open meadows and ridgeline slopes, making it ideal for backcountry and introductory skiing. Though still developing, it has become a popular destination for local ski training and winter tourism. Notably, it is home to Nepal’s first rope-tow ski lift, installed by the Ski and Snowboard Federation of Nepal (SSFN), marking a milestone in the country’s growing ski culture.",
      elevation: {
        summit_m: 3842,
      },
      images: {
        background: "../assets/img/destinationImage/kalinchowkBG.jpg",
        carousel: [],
      },
    },
  ],
};

const params = new URLSearchParams(document.location.search);

const param1 = params.get("d");

const destContainer = document.querySelector(".container");
const destName = document.querySelector("#destName");
const destDesc = document.querySelector("#destDesc");
const destElevation = document.querySelector("#destElevation");
const destCountry = document.querySelector("#destCountry");
console.log(destName);

function displayDestination(id) {
  const dest = data.destinations.find((dest) => dest.id == id);
  console.log(destElevation, destCountry, dest);
  destName.textContent = dest.name;
  destContainer.style.backgroundImage = `url(${dest.images.background})`;
  destDesc.textContent = dest.description;
  destElevation.textContent = dest.elevation.summit_m;
  destCountry.textContent = dest.country;
}

displayDestination(param1);
