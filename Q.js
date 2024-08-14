jsconst applyButtons = document.querySelectorAll('.overlay-button');
applyButtons.forEach(button => {
  button.addEventListener('click', () => {
const universityName = button.closest('figure').querySelector('h1').textContent.trim();
let link;
    switch (universityName) {
      case 'PRINCETON UNIVERSITY':
        link = 'https://www.princeton.edu/';
        break;
      case 'HARVARD UNIVERSITY':
        link = 'https://www.harvard.edu/';
        break;
      case 'YALE UNIVERSITY':
        link = 'https://www.yale.edu/';
        break;
      case 'COLUMBIA UNIVERSITY':
        link = 'https://www.columbia.edu/';
        break;
      case 'STANFORD UNIVERSITY':
        link = 'https://www.stanford.edu/';
        break;
      case 'UNIVERSITY OF CHICAGO':
        link = 'https://www.uchicago.edu/';
        break;
      case 'DUKE UNIVERSITY':
        link = 'https://www.duke.edu/';
        break;
      case 'THE MASSACHUSETTS INSTITUTE OF TECHNOLOGY':
        link = 'https://www.mit.edu/';
        break;
      case 'UNIVERSITY OF PENNSYLVANIA':
        link = 'https://www.upenn.edu/';
        break;
      case 'CALIFORNIA INSTITUTE OF TECHNOLOGY':
        link = 'https://www.caltech.edu/';
        break;
      default:
        link = 'https://www.example.com/';
    }
window.open(link, '_blank');
  });
});
const learnMoreButton = document.querySelector('button');
learnMoreButton.addEventListener('click', () => {
  window.open('https://www.quantumbooks.com/science/top-10-universities-in-the-united-states/', '_blank');
});
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
server.use(router);
server.listen(3000, () => {
  console.log('Dummy API server listening on port 3000');
});
