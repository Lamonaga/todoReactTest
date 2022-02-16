import logo from "./logo-todo.png";

const Home = () => {
  return (
    <div className='home'>
      <div className="home__logo">
        <img className="logo" src={logo} alt="#" />
      </div>
      <h1>Краткое описание страницы</h1>
      <div className="home__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus corrupti ratione sapiente fugiat ex saepe, doloremque animi. Perspiciatis ex voluptatum sapiente praesentium minima! Excepturi facilis rem enim. Sed, fugiat saepe!
      </div>
    </div>
  );
};

export default Home;
