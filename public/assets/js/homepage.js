const playgameHandler = async (event) => {
    event.preventDefault();
  
    window.location.href = "localhost:3001/playgame";
};

document
  .querySelector('#battle')
  .addEventListener('submit', playgameHandler);
