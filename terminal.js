document.addEventListener("DOMContentLoaded", function () {
  const resumeText = `
    *********** Resume Record Id# 65-65465C656N89W ***********

    Name:\t\tBarnett W. Fischer

    Title:\t\tFull Stack Software Engineer, Senior Instructor
    \t\t\tSQL | .Net/C# | React | CompTIA A+ | CompTIA Security+

    Contact:\t\thire.barnett@gmail.com
    \t\t\twww.linkedin.com/in/barnettfischer
    \t\t\twakatime.com/@Barnett
    \t\t\tg.dev/barnett
    \t\t\tgithub.com/BWFischer

    Companies:\t\tSabio School of Software Engineering
    \t\t\tComputer Network, ZCC
    \t\t\tOcean Information Systems, Inc.
    \t\t\tBusiness Computer Services, Inc.

    Experience:\t\tSoftware Engineer
    \t\t\tHardware Engineer
    \t\t\tNetwork Technician

    OS's:\t\tMS-DOS, DR-DOS, MS Windows 3.1, 95, 98, XP, 10, 11,
    \t\t\tIBM O/S2, NetWare 3.0, 3.11, 3.12, MX-Linux, Ubuntu

    Software:\t\tASP.NET, Bootstrap, Cascading Style Sheets (CSS), C#,
    \t\t\tHTML5, JavaScript, jQuery, React.js, SQL, Transact-SQL

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

  function typeWriterToContainer(text, element, delay = 20) {
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

  setTimeout(() => {
    typeWriterToContainer(resumeText, document.getElementById("cv-content"));
  }, 500);

  setTimeout(() => {
    typeWriter(resumeText, document.getElementById("resume-content"));
  }, 500);

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "F1":
        event.preventDefault();
        showHelpMessage();
        event.target.blur();
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
        event.preventDefault();
        showAboutMessage();
        break;
      case "F5":
        showContactInfo();
        event.preventDefault();
        break;
      case "F6":
        event.preventDefault();
        copyToClipboard();
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
        reloadPage();
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

  document.getElementById("helpButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    showHelpMessage();
    event.target.blur();
  });

  document.getElementById("findButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    event.target.blur();
  });

  document.getElementById("cvButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    showAboutMessage();
    event.target.blur();
  });

  document.getElementById("linksButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    showContactInfo();
    event.target.blur();
  });

  document.getElementById("pasteButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    reserved();
    event.target.blur();
  });

  document.getElementById("colorButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    console.log("toggleTheme fired");
    toggleTheme();
    event.target.blur();
  });

  document.getElementById("redoButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    reserved();
    event.target.blur();
  });

  document.getElementById("quitButton").addEventListener("touchstart", function (event) {
    event.preventDefault();
    window.location.href = "https://www.linkedin.com/in/barnettfischer";
    event.target.blur();
  });

  function applyCurrentTheme(messageBox) {
    if (document.body.classList.contains("green-theme")) {
      messageBox.classList.add("green-theme");
    } else if (document.body.classList.contains("amber-theme")) {
      messageBox.classList.add("amber-theme");
    }
  }

  function showHelpMessage() {
    const message = document.createElement("div");
    message.innerHTML = `
      <pre style="text-align: left;">

        F1:  Help - Displays this Help Summary.
        F2:  Save - Saves this Page as a Bookmark
        F3:  Find - Initiates a Search Function.(Reserved)      
        F4:    CV - Loads an extended version of my resume!
        F5: Links - Opens Contacts Dialog as Hyperlinks.
        F6:  Copy - Copies Contact Info to Clipboard.
        F7: Paste - Pastes Copied Content.(Reserved)
        F8: Am/Gr - Toggles Amber or Green Screens.
        F9:  Redo - Reapplies Undone Action.(Reserved)
        F10: Quit - Quits or Exits the Program.

        Press any other key to close.
      </pre>`;
    message.classList.add("message-box");
    applyCurrentTheme(message);
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

  function showAboutMessage() {
    const aboutMessage = document.createElement("div");
    aboutMessage.innerHTML = `
      <pre id="cv-content" style="text-align: left;">

   I'm Barnett Fischer, a seasoned Full-Stack Developer
   with deep expertise in React, .NET, and SQL
   technologies.
   
   In my current role as Senior Technical Lead
   in Software Engineering at Sabio, based in Culver City,
   CA, I play a pivotal role in training and developers.
   This involves guiding them through the intricacies of
   Full Stack web application development.

   We use Agile methodologies such as Daily Standups,
   Code Talks, and Peer Reviews.

   I emphasize best practices in frontend development
   with React.js, leveraging JavaScript, HTML, and CSS,
   while also diving into backend solutions with .NET
   Core using C# and SQL Server managed through SSMS
   with T-SQL.

   Previously, at Interrogas, also in Culver City, CA,
   I was responsible for developing and managing Pollster
   Tables and Stored Procedures using SQL Server
   Management Studio (SSMS).
   
   I engineered RESTful APIs using .NET and C#,
   rigorously testing them with Postman to ensure
   robust functionality.
   
   An integral part of this project was creating an interactive
   React.js table for dynamic data management, featuring
   a responsive UI with advanced features like pagination,
   search capabilities, and export to CSV.
   
   I alos implemented frontend validations using Yup schemas
   and enhanced user interaction with libraries like Bootstrap,
   Toastr notifications, and Sweet Alerts.

   My career spans various roles that have contributed to
   my diverse skill set.
   
   As a Network Specialist at Zen Computer Co. in Rancho Cucamonga
   and earlier as a Computer Engineer at Ocean Information Systems,
   in Covina, California, I gained hands-on experience in
   hardware development. This included designing motherboards,
   integrating EDRAM, and conducting rigorous hardware stress testing.
   I also participated in software beta testing for industry leaders
   like Microsoft andNovell.

   In addition to my technical expertise, I'm also passionate
   about Pali and Sanskrit literature. I am literate in Pali
   and have translated several books into English. My studies
   have encompassed significant texts such as the Rig Veda,
   Upanishads, Bhagavad Gita, and Classical Sanskrit poetry,
   reflecting my deep interest in linguistic and spiritual
   studies. Currently, I have about four years of literary
   Chinese as well.

   I hold CompTIA A+ and Security+ certifications,
   demonstrating my commitment to maintaining high standards
   of technical proficiency and cybersecurity awareness.

   Additionally, my coursework towards an AS Degree in
   Business Management at Palo Verde College has equipped
   me with valuable insights into project management and
   organizational dynamics.</pre>`;
    aboutMessage.classList.add("message-box-cv");
    applyCurrentTheme(aboutMessage);
    document.body.appendChild(aboutMessage);
    document.addEventListener("keydown", function () {
      document.body.removeChild(aboutMessage);
    });
  }

  function saveAsBookmark() {
    const bookmarkURL = window.location.href;
    const bookmarkTitle = document.title;

    if (confirm(`Do you want to bookmark '${bookmarkTitle}'?`)) {
      if ("addToHomescreen" in window.navigator) {
        window.navigator.addToHomescreen();
      } else {
        if (window.sidebar && window.sidebar.addPanel) {
          window.sidebar.addPanel(bookmarkTitle, bookmarkURL, "");
        } else if (window.external && "AddFavorite" in window.external) {
          window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else if (window.opera && window.print) {
          const elem = document.createElement("a");
          elem.setAttribute("href", bookmarkURL);
          elem.setAttribute("title", bookmarkTitle);
          elem.setAttribute("rel", "sidebar");
          elem.click();
        } else {
          alert(`Press Ctrl+D to bookmark this page.`);
        }
      }
    }
  }

  function reserved() {
    const message = document.createElement("div");
    message.innerHTML = `
    <pre style="text-align: left; padding-top: 10px;">
      Unavailable in Resume Mode    
    </pre>`;
    message.classList.add("message-box");
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

  function reloadPage() {
    location.reload();
  }

  function showContactInfo() {
    const message = document.createElement("div");
    message.innerHTML = `
      <pre style="text-align: left;">

      Contact: <a href="mailto:barnett@sabio.la">barnettfischer03@gmail.com     </a>

      <a href="https://www.linkedin.com/in/barnettfischer" target="_blank" rel="noreferrer noopener">www.linkedin.com/in/barnettfischer</a>

      <a href="https://wakatime.com/@Barnett" target="_blank" rel="noreferrer noopener">wakatime.com/@Barnett</a>

      <a href="https://g.dev/barnett" target="_blank" rel="noreferrer noopener">g.dev/barnett</a>

      <a href="https://github.com/BWFischer" target="_blank" rel="noreferrer noopener">github.com/BWFischer</a>

      1 (404) 492-9536

      ***Click any key to close.***
      </pre>`;
    message.classList.add("message-box");
    applyCurrentTheme(message);
    document.body.appendChild(message);
    document.addEventListener("keydown", function () {
      document.body.removeChild(message);
    });
  }

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
    message.innerHTML = `
    <pre style="text-align: left; padding-top: 10px;">
      Resume Information was Copied to the Clipboard.    
    </pre>`;
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

  document.addEventListener("DOMContentLoaded", function () {
    updateCursorColor();
  });

  const dimmerSlider = document.getElementById("dimmer-slider");
  const terminal = document.getElementById("terminal");

  dimmerSlider.addEventListener("input", function () {
    const value = this.value;
    terminal.style.opacity = value / 100;
  });
});
