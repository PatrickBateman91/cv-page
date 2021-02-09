import Main from './components/Main';
import './App.css'; 
// koristi SASS/SCSS, lagan za nauciti, puno bolju strukturu ima od CSSa, lakse odrzavati,
// manje stila za pisati, i impresivnije poslodavcima
// + podrzan je u reactu, isto ovako ga importujes i builda se automatski
// bolje je imati po jedan .scss fajl za svaku komponentu nego trpati sve u jedan, 
// kad pravis production build (npm run build) svakako ti on lijepo to upakuje u jedan fajl i bude efikasno

function App() {
  return (
    <Main /> // nema potrebe za Main komponentom, App komponenta je mogla sluziti istoj svrsi
  );
}

export default App;
