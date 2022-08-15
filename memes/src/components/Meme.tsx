import "../stylesheets/meme.css";
import memesData from "./memes.Data";

const Meme = () => {
  const random = () => {
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const { url } = memesArr[randomNum];
  };
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={random}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
