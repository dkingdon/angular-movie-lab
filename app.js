console.log('app.js is connected')

angular
  .module('movieApp', [])
  .controller('MovieController', MovieController);

  function MovieController () {
    var vm = this;

    vm.moviesToWatch = [
      {
        id: 1,
        name: 'Bad Santa 2',
        rating: 'R',
        seen: false,
        type: 'Comedy'
      },
      {
        id: 2,
        name: 'Rogue One',
        rating: 'PG-13',
        seen: false,
        type: 'Sci-Fi'
      },
      {
        id: 3,
        name: 'Dr Strange',
        rating: 'PG-13',
        seen: false,
        type: 'Sci-Fi'
      },
      {
        id: 4,
        name: 'Deadpool',
        rating: 'R',
        seen: true,
        type: 'Comicbook'
      }
    ];
  };
