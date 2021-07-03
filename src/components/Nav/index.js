import React from "react";

function categorySelected(name) {
  console.log(`${name} clicked`);
}

function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  return (
    <header>
      <header>
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">
              {" "}
              📸
            </span>{" "}
            Oh Snap!
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>
            {categories.map((category) => (
              <li className="mx-1" key={category.name}>
                <span onClick={() => categorySelected(category.name)}>
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </header>
  );
}

export default Nav;
