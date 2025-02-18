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

const columns = ["", "Mouse/Touchpad", "Keyboard"];

const data = [
  {
    "": "Courses @ Brown",
    "Mouse/Touchpad": "🟡 difficult to find options lower in the dropdown",
    Keyboard: "❌ inefficient due to the high number of options",
  },
  {
    "": "Discord",
    "Mouse/Touchpad": "✅ easy to navigate",
    Keyboard: "🟡 unclear whether `space` or `enter` confirmed selection; confusing focus order",
  },
  {
    "": "Steam",
    "Mouse/Touchpad": "✅ easy to navigate",
    Keyboard: "❌ difficult to begin tabbing through list of games from steam page",
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
            <Table columns={columns} data={data} />

            <h3>Courses @ Brown</h3>
            <p>Dropdown menus in [Courses @ Brown](https://cab.brown.edu/)</p>

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
                <h4>Mouse Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter black background when hovered
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
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={cabMouseGif}
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
              <div style={{ width: "40%", textAlign: "left" }}>
                <h4>Keyboard Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter black background when hovered
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
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={cabKeyboardGif}
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

            <h3>Updating a Discord Status</h3>
            <p>Updating a discord status in </p>

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
                <h4>Mouse Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter black background when hovered
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
                <h4>Keyboard Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter black background when hovered
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

            <h3>Viewing Steam Games</h3>
            <p>Updating a discord status in </p>

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
                <h4>Mouse Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter black background when hovered
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
              <div style={{ width: "60%", textAlign: "center" }}>
                <img
                  src={steamMouseGif}
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
              <div style={{ width: "40%", textAlign: "left" }}>
                <h4>Keyboard Interaction</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Seamless and intuitive navigation</li>
                  <li>
                    Selected status has a lighter black background when hovered
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

          <section id="research" className="project-section">
            <h2>Discord</h2>
            <p>
              First, let's take a look at how dropdown components interact in
              three different applications:
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {/* <div style={{ width: "45%", textAlign: "center" }}>
                <h3>Keyboard Interaction</h3>
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
              </div> */}

              <div style={{ width: "45%", textAlign: "center" }}>
                <h3>Mouse Interaction</h3>
                <div>
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

                  <div style={{ width: "45%", textAlign: "left" }}>
                    <ul>
                      <li>
                        <strong>
                          Learn how components incorporate accessibility for
                          user interaction
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Explore multiple forms of input (mouse, keyboard) and
                          output (visual style, text, labels for screen readers)
                        </strong>
                      </li>
                      <li>
                        <strong>Component States:</strong> Designing components
                        to transition smoothly between various states of
                        interaction (e.g., open, selected, or disabled) was key
                        to creating a user-friendly experience.
                      </li>
                      <li>
                        <strong>
                          Understand trade-offs between learnability,
                          memorability, efficiency, and accessibility
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              <div style={{ width: "45%", textAlign: "center" }}>
                <h3>Steam Games Keyboard Interaction</h3>
                <img
                  src={steamKeyboardGif}
                  alt="Steam Games Keyboard Interaction GIF"
                  style={{
                    width: "90%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>

              <div style={{ width: "45%", textAlign: "center" }}>
                <h3>Steam Games Mouse Interaction</h3>
                <img
                  src={steamMouseGif}
                  alt="Steam Games Mouse Interaction GIF"
                  style={{
                    width: "90%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              <div style={{ width: "45%", textAlign: "center" }}>
                <h3>Discord Status Keyboard Interaction</h3>
                <img
                  src={cabKeyboardGif}
                  alt="Discord status dropdown keyboard GIF"
                  style={{
                    width: "90%", // Adjust GIF width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    outline: "5px solid #333",
                    outlineOffset: "-5px",
                  }}
                />
              </div>

              <div style={{ width: "45%", textAlign: "center" }}>
                <h3>Discord Status Mouse Interaction</h3>
                <img
                  src={cabMouseGif}
                  alt="Discord status dropdown keyboard GIF"
                  style={{
                    width: "90%", // Adjust GIF width
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