
import './App.css';
import ImageCardSection from './component/ImageCardSection';
import MainSlider from './component/MainSlider';
import NavBar from './component/navBar';

function App() {
  return (
    <div>
    <NavBar/>
    <MainSlider/>
    <ImageCardSection
      imgsrc="https://cdn.pixabay.com/photo/2023/08/18/16/35/shutters-8198905_640.jpg  "
      title="image2"
      desc="image2 is called"
    />
    </div>
  );
}

export default App;
