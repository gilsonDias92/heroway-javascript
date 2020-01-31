// parametros : url ou endpoint / method
// function getHeroes() {
//   const get = fetch("https://akabab.github.io/superhero-api/api/all.json", {
//     method: "GET"
//   });

//   const myHeroes = get
//     .then(response => {
//       return response.json();
//     })
//     .then(heroes => {
//       return heroes;
//     })
//     .catch(err => {
//       console.log("err", err);
//     });

//   console.log(get);
// }

async function getHeroesAsyncAwait() {
  try {
    const get = await fetch("https://akabab.github.io/superhero-api/api/all.json", {
      method: "GET"
    });

    const heroes = await get.json();

    const tenFirstHeroes = heroes.filter((hero) => {
      if (hero.id <= 10) {
        return true;
      }
    });
    console.log(tenFirstHeroes);
  } catch (err) {
    console.log(err);
  }
}

getHeroesAsyncAwait();

//promises:
