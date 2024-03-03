document.addEventListener("DOMContentLoaded", function () {
  const resumeText = `
    *********** Resume Record Id# 65-65465C656N89W ***********

    Name:       Barnett W. Fischer

    Title:      Full Stack Software Engineer, Senior Instructor
                SQL | .Net/C# | React

    Companies: Sabio School of Software Engineering
                Computer Network, ZCC
                Ocean Information Systems, Inc.
                Business Computer Services, Inc.

    Experience: Software Engineer
                Hardware Engineer
                Network Technician

    OS's:       MS-DOS, DR-DOS, MS Windows 3.1, 95, 98, XP, 10, 11,
                IBM O/S2, NetWare 3.0, 3.11, 3.12, MX-Linux, Ubuntu

    Software :  ASP.NET, Bootstrap, Cascading Style Sheets (CSS), C#, 
                HTML5,JavaScript, jQuery, React.js, SQL, Transact-SQL

    Contact:    barnett@sabio.la
                www.linkedin.com/in/barnettfischer
                wakatime.com/@Barnett
                g.dev/barnett
                github.com/BWFischer

    *********** auth trans sec key: 5KDO3WE3DK34-4 ***********
  `;

  function typeWriter(text, element, delay = 20) {
    let i = 0;

    function type() {
      if (i < text.length) {
        let char = text.charAt(i);
        if (char === "\x07") {
          element.innerHTML += '<audio autoplay src="./assets/beep-02.mp3"></audio>';
        } else {
          element.textContent += char;
        }
        i++;
        setTimeout(type, delay);
      }
    }

    type();
  }

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "F1":
        showHelpMessage();
        event.preventDefault();
        break;
      case "F2":
        saveAsBookmark();
        event.preventDefault();
        break;

      case "F3":
        reserved();
        event.preventDefault();
        break;

      case "F4":
        reloadPage();
        event.preventDefault();
        break;

      case "F5":
        showContactInfo();
        event.preventDefault();
        break;

      case "F6":
        event.preventDefault();
        copyToClipboard(resumeText);
        event.target.blur();
        break;

      case "F7":
        reserved();
        event.preventDefault();
        break;

      case "F8":
        console.log("toggleTheme fired");
        event.preventDefault();
        toggleTheme();
        break;
      case "F9":
        reserved();
        event.preventDefault();
        break;

      case "F10":
        window.location.href = "https://www.linkedin.com/in/barnettfischer";
        event.preventDefault();
        break;
      default:
        break;
    }
  });

  setTimeout(() => {
    typeWriter(resumeText, document.getElementById("resume-content"));
  }, 500);

  function copyToClipboard() {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = resumeText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    showCopiedMessage();
  }

  function showCopiedMessage() {
    const message = document.createElement("div");
    message.textContent = `Resume Info copied to clipboard. Press any key`;
    message.classList.add("message-box");
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

  function showHelpMessage() {
    const message = document.createElement("div");
    message.innerHTML = `
            <pre style="text-align: left;">
    F1:  Help - Displays this Help Summary.
    F2:  Save - Saves this Page as a Bookmark
    F3:  Find - Initiates a Search Function.(Reserved)
    F4:  Exit - Exits and Reloads Page.
    F5: Links - Opens Contacts Dialog as Hyperlinks.
    F6:  Copy - Copies Contact Info to Clipboard.
    F7: Paste - Pastes Copied Content.(Reserved)
    F8: Am/Gr - Toggles Amber or Green Screens.
    F9:  Redo - Reapplies Undone Action.(Reserved)
    F10: Quit - Quits or Exits the Program.

      Press any other key to close.</pre>`;
    message.classList.add("message-box");
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

  function updateCurrentTime() {
    const currentDateElement = document.getElementById("currentDate");
    const currentTimeElement = document.getElementById("currentTime");

    const currentDate = new Date().toLocaleDateString("en-US");
    const currentTime = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true });

    currentDateElement.textContent = currentDate;
    currentTimeElement.textContent = currentTime;
  }

  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);

  function showContactInfo() {
    const message = document.createElement("div");
    message.innerHTML = `
        <pre style="text-align: left;">
          Contact: <a href="mailto:barnett@sabio.la">barnettfischer03@gmail.com</a>

          <a href="https://www.linkedin.com/in/barnettfischer" target="_blank" rel="noreferrer" rel="noopener">www.linkedin.com/in/barnettfischer</a>

          <a href="https://wakatime.com/@Barnett" target="_blank" rel="noreferrer" rel="noopener">wakatime.com/@Barnett</a>

          <a href="https://g.dev/barnett" target="_blank" rel="noreferrer" rel="noopener">g.dev/barnett</a>

          <a href="https://github.com/BWFischer" target="_blank" rel="noreferrer" rel="noopener">github.com/BWFischer</a>

          1 (404) 492-9536

          
          ***Click any key to close.***
        </pre>`;
    message.classList.add("message-box");
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateCursorColor();
  });

  function reserved() {
    const message = document.createElement("div");
    message.textContent = "Unavailable in Resume Mode";
    message.classList.add("message-box");
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("green-theme");
    body.classList.toggle("amber-theme");
    updateCursorColor();
  }

  function saveAsBookmark() {
    const bookmarkURL = window.location.href;
    const bookmarkTitle = document.title;

    if (confirm(`Do you want to bookmark '${bookmarkTitle}'?`)) {
      if ("addToHomescreen" in window.navigator) {
        // browsers supporting the "addToHomescreen" method
        window.navigator.addToHomescreen();
      } else {
        if (window.sidebar && window.sidebar.addPanel) {
          // Mozilla Firefox
          window.sidebar.addPanel(bookmarkTitle, bookmarkURL, "");
        } else if (window.external && "AddFavorite" in window.external) {
          // For Deprecated Internet Explorer
          window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else if (window.opera && window.print) {
          // For Opera
          const elem = document.createElement("a");
          elem.setAttribute("href", bookmarkURL);
          elem.setAttribute("title", bookmarkTitle);
          elem.setAttribute("rel", "sidebar");
          elem.click();
        } else {
          // For all other browsers
          alert(`Press Ctrl+D to bookmark this page.`);
        }
      }
    }
  }
  function reloadPage() {
    location.reload();
  }

  const dimmerSlider = document.getElementById("dimmer-slider");
  const terminal = document.getElementById("terminal");

  dimmerSlider.addEventListener("input", function () {
    const value = this.value;
    terminal.style.opacity = value / 100;
  });
      if (window.innerWidth > window.innerHeight) {
      // Landscape mode      
    } else {
      // Portrait mode      
    }
  } 
  window.addEventListener("resize", handleOrientationChange);
  handleOrientationChange();  
});
