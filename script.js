const container = document.getElementById("container");

//fetch request
fetch("https://www.swapi.tech/api/films/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //console.log(data);
    createSWCard(data);
  })
  .catch((err) => console.error(err));

// creating a card for each film returned from the fetch method
const createSWCard = (data) => {
  const card = document.getElementById("card");
  for (let i = 0; i <= 5; i++) {
    const title = data.result[i].properties.title;
    const releaseDate = data.result[i].properties.release_date;
    const director = data.result[i].properties.director;
    const romanNumeral = ["I", "II", "III", "IV", "V", "VI"];

    const element = document.createElement("div");
    element.setAttribute("id", "movieCard");

    year = releaseDate.slice(0, 4);

    const content = `<div>  
    <h2>${title}</h2>
    <img src='moviePosters/m${i}.png' alt=${title}'> 
  <h4>Episode: ${romanNumeral[i]} <h4>
  <h4>Release Year: ${year} <h4>
  <h4>Director: ${director}</h4>
</div>`;

    element.innerHTML = content;
    container.appendChild(element);
  }
};
