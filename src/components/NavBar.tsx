export default function NavBar() {
  return (
    <div className="navbar-buttons">
      <div className="about-us">
        <button
          className="navbar---button--underline-aboutus"
          onClick={() => {
            const elementA = document.getElementById("aboutUs");
            elementA?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          About us
        </button>
      </div>

      <div className="trashCan">
        <button
          className="navbar--button-underline-trashCan"
          onClick={() => {
            const element = document.getElementById("Trash-Title");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          The Trashcan
        </button>
      </div>

      <div>
        <button
          className="navbar--button-home"
          onClick={() => {
            const elementA = document.getElementById("topPage");
            elementA?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
