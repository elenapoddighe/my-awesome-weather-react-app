import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/elena-poddighe-736276104/"
            target="_blank"
            rel="noreferrer"
          >
            Elena Poddighe
          </a>
          , it is{" "}
          <a
            href="https://github.com/elenapoddighe/my-awesome-weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub and{" "}
          <a
            href="https://elenas-awesome-weather-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted
          </a>{" "}
          on Netlify.
        </footer>
      </div>
    </div>
  );
}
