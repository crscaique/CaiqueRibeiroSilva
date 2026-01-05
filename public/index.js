document.addEventListener("DOMContentLoaded", () => {
  const whoIAmLink = document.getElementById("who-I-am");
  const educationLink = document.getElementById("education");
  const contentDiv = document.getElementById("content");
  const contentTitle = contentDiv.querySelector("h3");
  const contentParagraph = contentDiv.querySelector("p");
  const aboutMeImgDiv = document.getElementById("AboutMeImg")
  

  const contentData = {
    "who-I-am": {
      title: "About Me",
      text: "<text>Hello there! I'm Cai, short for Caique. :) <br> It feels good to have a space where I can share a bit about myself. I am originally from Brazil and have been living in New Zealand since 2019. I'm a very easy-going person (at least, that's what I believe), however, I do love having my private moments. <br>I can be very active and have a few hobbies, such as playing beach volleyball or taking walks on cold days. I'm also passionate about games and driven by curiosity.</text>",
      img: '<img class="h-full w-full object-cover" src="img/Caique_Who_I_am.webp" alt="Caique and Suki"/>',
    },
    education: {
      title: "My Education",
      text: "This section will detail my educational background, including degrees, certifications, and relevant coursework. I am a lifelong learner, always seeking new knowledge.",
      img: '<img class="h-full w-full object-scale-down " src="img/Postgraduated.webp" alt="Caique Postgraduation Ceremony"/>',
    },
  };

  function showContent(sectionId) {
    const data = contentData[sectionId];

    if (!data) {
      return;
    }

    contentDiv.classList.remove("hidden");
    contentTitle.textContent = data.title;
    contentParagraph.innerHTML = data.text;
    aboutMeImgDiv.innerHTML = data.img;

    whoIAmLink.parentElement.classList.toggle("bg-white/40", sectionId === "who-I-am");
    educationLink.parentElement.classList.toggle("bg-white/40", sectionId === "education");
  }

  showContent("who-I-am");

  whoIAmLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("who-I-am");
  });
  educationLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("education");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const technologyDiv = document.getElementById("technologies");
  const toolsDiv = document.getElementById("tools");

  const svgInfo = {
    technologies: {
      javaScript:
        '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="h-12"/>',
      react:
        '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="h-12" />',
      tailwind:
        '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg" alt="Tailwind CSS" class="h-12" />',
      html: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" class="h-12" />',
      css: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" class="h-12" />',
      git: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" class="h-12" />',
    },
    tools: {
      figma:
        '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" class="h-12" />',
      visualStudio:
        '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" class="h-12" />',
      gitHub:
        '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="h-12" />',
      npm: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" class="h-12" />',
    },
  };

  function createIconGrid(targetDiv, imageSources) {
    const listItems = Object.values(imageSources)
      .map((imgHtml) => `<li class="flex items-right transition delay-500 hover:animate-bounce hover:scale-110">${imgHtml}</li>`)
      .map((imgHtml) => `<li class="flex justify-center items-center transition duration-300 hover:animate-bounce hover:scale-125">${imgHtml}</li>`)
      .join("");

    const gridHtml = `<ul class="grid grid-cols-2 justify-right sm:grid-cols-4 gap-x-8 gap-y-10">${listItems}</ul>`;

    targetDiv.innerHTML = gridHtml;
  }

  createIconGrid(technologyDiv, svgInfo.technologies);
  createIconGrid(toolsDiv, svgInfo.tools);
});