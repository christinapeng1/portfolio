import React from 'react'
import "./ProjectDetail.css";
import { Carousel } from "antd";
import discordKeyboardGif from "../../assets/gifs/discord-status-dropdown-keyboard.gif";
import discordMouseGif from "../../assets/gifs/discord-status-dropdown-mouse.gif";
import steamKeyboardGif from "../../assets/gifs/steam-games-dropdown-keyboard.gif";
import steamMouseGif from "../../assets/gifs/steam-games-dropdown-mouse.gif"
import cabKeyboardGif from "../../assets/gifs/cab-dropdown-keyboard.gif"
import cabMouseGif from "../../assets/gifs/cab-dropdown-mouse.gif"
import Table from "../../components/Table"

const input_columns = ["", "Courses @ Brown", "Discord", "Steam"];

const input_data = [
  {
    "": "Mouse/Trackpad",
    "Courses @ Brown": "🟡 difficult to find options lower in the dropdown",
    Discord: "✅ easy to navigate",
    Steam: "✅ easy to navigate",
  },
  {
    "": "Keyboard",
    "Courses @ Brown": "❌ inefficient due to the high number of options",
    Discord:
      "🟡 unclear whether `space` or `enter` confirmed selection; confusing focus order",
    Steam:
      "❌ difficult to begin tabbing through list of games from steam page",
  },
];

const output_columns = ["", "Courses @ Brown", "Discord", "Steam"];

const output_data = [
  {
    "": "State change results in visual change",
    "Courses @ Brown": "✅ change in dropdown text",
    Discord: "✅ change in dropdown text and icon",
    Steam:
      "✅ light blue highlight on selected game and visual game displayed on the right side",
  },
  {
    "": "Logical focus order",
    "Courses @ Brown": "✅ top-down focus order",
    Discord: "✅ focus order begins at the first component",
    Steam:
      "❌ difficult to navigate, some components are skipped by the focus order",
  },
  {
    "": "Screenreader compatibility",
    "Courses @ Brown": "✅ compatible overall, clear about which dropdown option is being considered and provides instructions for how to select the option",
    Discord:
      "✅ compatible overall, clear about which dropdown option is selected and which is not",
    Steam:
      "❌ incompatible; only message from screenreader is 'you are currently on a window'",
  },
];

function Dropdown() {
  return (
    <div>
      <h1>Dropdown Menu - Design Case Study</h1>
      <div className="project-detail">
        {/* Sidebar for navigation */}
        <div className="sidebar">
          <h3>Sections</h3>
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#state-models">State Models</a>
            </li>
            <li>
              <a href="#reflection">Reflection</a>
            </li>
          </ul>
        </div>

        {/* Content area with sections */}
        <div className="content">
          <section id="overview" className="project-section">
            <h2>Overview</h2>
            <p>
              The dropdown menu is a crucial element in web and app design,
              often used for navigation, selection, and settings. This case
              study explores the complexities in dropdown menu design, including
              how to make them function across different input methods, support
              screen readers, and maintain usability for all users.
            </p>
          </section>

          <section id="key objectives" className="project-section">
            <h2>Key Objectives</h2>
            <ul>
              <li>
                Learn how dropdown menus incorporate accessibility for user
                interaction
              </li>
              <li>
                Explore multiple forms of input (mouse, keyboard) and output
                (visual style, text, labels for screen readers)
              </li>
              <li>
                Design dropdown menus to transition smoothly between various
                states of interaction (e.g., open, selected, or disabled)
              </li>
              <li>
                Understand trade-offs between learnability, memorability,
                efficiency, and accessibility
              </li>
            </ul>
          </section>

          <section id="research" className="project-section">
            <h2>Research</h2>
            <p>
              First, let's take a look at how dropdown components interact in
              three different applications:
            </p>
            <h3>Inputs</h3>
            <Table columns={input_columns} data={input_data} />
            <h3>Outputs</h3>
            <Table columns={output_columns} data={output_data} />

            <h3>Courses @ Brown</h3>
            <p>
              Dropdown menus in{" "}
              <a
                href="https://cab.brown.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Courses @ Brown
              </a>{" "}
              are used to filter for courses by class year and department.
            </p>

            {/* Flex container for alignment */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* Bullet Points Container */}
              <div style={{ width: "40%", textAlign: "left" }}>
                <h4>🟡 Mouse Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Long list of options make it difficult to navigate</li>
                  <li>Option has a blue background when hovered over</li>
                  <li>Option is selected after mouse click release</li>
                  <li>
                    Dropdown text changes to the currently selected option
                  </li>
                  <li>Filter immediately takes effect</li>
                </ul>
              </div>

              {/* Image Container */}
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={cabMouseGif}
                  alt="Cab dropdown mouse GIF"
                  style={{
                    width: "70%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>

            {/* Flex container for alignment */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* Bullet Points Container */}
              <div style={{ width: "40%", textAlign: "left" }}>
                <h4>❌ Keyboard Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Long list of options make it difficult to navigate; must
                    arrow-key-down through every option before reaching later
                    options
                  </li>
                  <li>Option has a blue background when hovered over</li>
                  <li>Option is selected after pressing `enter`</li>
                  <li>
                    Dropdown text changes to the currently selected option
                  </li>
                  <li>Filter immediately takes effect</li>
                </ul>
              </div>

              {/* Image Container */}
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={cabKeyboardGif}
                  alt="CAB dropdown keyboard GIF"
                  style={{
                    width: "70%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>

            <h3>Updating a Discord Status</h3>
            <p>
              Updating a discord status utilizes a dropdown menu which contains
              a list of possible statues: Online, Idle, Do Not Disturb, and
              Invisible
            </p>

            {/* Flex container for alignment */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* Bullet Points Container */}
              <div style={{ width: "60%", textAlign: "left" }}>
                <h4>✅ Mouse Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter gray background when hovered
                    over
                  </li>
                  <li>Status is selected after mouse click release</li>
                  <li>
                    Dropdown text indicating the current status updates after
                    selection
                  </li>
                  <li>Must press `save` for the status to take effect</li>
                </ul>
              </div>

              {/* Image Container */}
              <div style={{ width: "40%", textAlign: "center" }}>
                <img
                  src={discordMouseGif}
                  alt="Discord status dropdown mouse GIF"
                  style={{
                    width: "70%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>

            {/* Flex container for alignment */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* Bullet Points Container */}
              <div style={{ width: "60%", textAlign: "left" }}>
                <h4>🟡 Keyboard Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Having only 4 types of statuses make it easy to tab through
                    quickly
                  </li>
                  <li>
                    Focus order began at the `Cancel` button instead of the
                    first component box
                  </li>
                  <li>
                    Must tab through 5 layers to reach the status update
                    component
                  </li>
                  <li>
                    Unfriendly to error - any mistake in tabbing through the
                    components requires retabbing through them again
                  </li>
                  <li>
                    Unclear whether `enter` or `space` confirmed the status
                    selection
                  </li>
                  <li>
                    Dropdown text indicating the current status updates after
                    selection
                  </li>
                  <li>Must press `save` for the status to take effect</li>
                </ul>
              </div>

              {/* Image Container */}
              <div style={{ width: "40%", textAlign: "center" }}>
                <img
                  src={discordKeyboardGif}
                  alt="Discord status dropdown keyboard GIF"
                  style={{
                    width: "70%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>

            <h3>Steam</h3>
            <p>
              Steam is a digital storefront for buying and playing video games.
            </p>

            {/* Flex container for alignment */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* Bullet Points Container */}
              <div style={{ width: "40%", textAlign: "left" }}>
                <h4>✅ Mouse Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected game has a light blue highlight when hovered over
                  </li>
                  <li>Game is selected after mouse click release</li>
                  <li>
                    Dropdown can be collapsed by clicking the `minus` sign next
                    to `All`
                  </li>
                  <li>
                    Contains a search function that allows quickly searching for
                    a game when the list is too long
                  </li>
                </ul>
              </div>

              {/* Image Container */}
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={steamMouseGif}
                  alt="Steam games dropdown mouse GIF"
                  style={{
                    width: "70%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>

            {/* Flex container for alignment */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* Bullet Points Container */}
              <div style={{ width: "40%", textAlign: "left" }}>
                <h4>❌ Keyboard Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Focus order is hard to understand -- difficult to begin
                    tabbing through the games list without first clicking on the
                    dropdown
                  </li>
                  <li>
                    Game is immediately selected when navigating through with
                    arrow keys -- no confimration required
                  </li>
                  <li>
                    Impossible to tab into search bar as a keyboard-only user
                  </li>
                  <li>Selected game has a light blue highlight</li>
                </ul>
              </div>

              {/* Image Container */}
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={steamKeyboardGif}
                  alt="Discord status dropdown keyboard GIF"
                  style={{
                    width: "70%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>
          </section>

          <section id="state-models" className="project-section">
            <h2>State Models</h2>
            <p>
              Explain the results of the project, how successful it was, and any
              additional outcomes.
            </p>
          </section>

          <section id="reflection" className="project-section">
            <h2>Reflection</h2>
            <p>
              This section can describe the challenges faced during the project
              and how you solved them.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dropdown