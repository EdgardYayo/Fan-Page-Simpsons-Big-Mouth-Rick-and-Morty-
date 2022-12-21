import TabsView from './components/tabs/tabsView';
import { TabItem } from './components/types/types';
import sty from "./App.module.css";

function Content1() {
  return <div>
    <img className={sty.image} src='https://th.bing.com/th/id/R.f7afc41c5454ef89ef4849b01819bd95?rik=yQ%2f53Vc5HApsRQ&pid=ImgRaw&r=0' alt='simpsons' />
    <img className={sty.image2} src='https://i.pinimg.com/736x/bd/19/2f/bd192f2723f7d81013f04903d9e0428b.jpg' alt='simpsons' />
    <h1 className={sty.title}>Simpsons</h1>
    <img className={sty.image3} src='https://th.bing.com/th/id/OIP.Q1plmCrZRNW59mZegwtORgHaEJ?pid=ImgDet&rs=1' alt='simpsons' />
  </div>
}

function Content2() {
  return <div>
    <img  className={sty.image} src='https://th.bing.com/th/id/R.6e31c444b9aeeb53383bd5791bc742fa?rik=EvfqCETS4DziMg&pid=ImgRaw&r=0' alt='r and m' />
    <img className={sty.image2} src='https://th.bing.com/th/id/R.3c3943c0d8f87a88f397b5afdf7e4f4b?rik=n7ASuIgr9EPp%2fQ&pid=ImgRaw&r=0&sres=1&sresct=1' alt='r and m' />
    <h1 className={sty.title}>Rick and Morty</h1>
    <img className={sty.image3} src='https://th.bing.com/th/id/R.ec543bf0f695c7065cb404e5614ee80b?rik=exXgCM8KyI%2fJlQ&pid=ImgRaw&r=0' alt='r and m' />
  </div>
}

function Content3() {
  return <div>
     <img  className={sty.image} src='https://th.bing.com/th/id/R.21db8d6b83c9a48d14854ceedf8593da?rik=t7vYOCjeGn4mkA&riu=http%3a%2f%2ffr.web.img6.acsta.net%2fr_1280_720%2fnewsv7%2f17%2f10%2f25%2f15%2f25%2f41237770.jpg&ehk=lY0vFLLwHa7gy%2f20ga%2fMMwe015jVgP66gjoBqTnPYMU%3d&risl=&pid=ImgRaw&r=0' alt='big mouth' />
     <img className={sty.image2} src='https://th.bing.com/th/id/R.7fc7b6e5e99dedf8afcc090f3557405f?rik=%2bY%2bz5xftK4EmpQ&pid=ImgRaw&r=0' alt='big mouth' />
     <h1 className={sty.title}>Big Mouth</h1>
     <img className={sty.image3} src='https://th.bing.com/th/id/R.1ce9173fdcedf8bbebace6bac5b7c1eb?rik=MXOWSJDD0edOsA&pid=ImgRaw&r=0' alt='big mouth' />
  </div>
}

const items: TabItem[] = [{
  id: crypto.randomUUID(),
  title: "Simpsons",
  content: Content1
},
{
  id: crypto.randomUUID(),
  title: "Rick and Morty",
  content: Content2
},
{
  id: crypto.randomUUID(),
  title: "Big Mouth",
  content: Content3
}]

function App() {

  function handleChange(item: TabItem) {
    console.log(item.title)
  }

  return (
    <div className="App">
      <TabsView items={items} onChange={handleChange} />
    </div>
  );
}

export default App;
