document.addEventListener("DOMContentLoaded", () => {
  const whoIAmLink = document.getElementById("who-I-am");
  const educationLink = document.getElementById("education");
  const workExperience = document.getElementById("work-experience");
  const skills = document.getElementById("skills");
  const contentDiv = document.getElementById("content");
  const contentTitle = contentDiv.querySelector("h3");
  const contentParagraph = contentDiv.querySelector("p");
  const aboutMeImgDiv = document.getElementById("AboutMeImg");

  const contentData = {
    "who-I-am": {
      title: "About Me",
      text: `<p class='text-justify'>Hello there! I'm Cai, short for Caique. :) <br> It feels good to have a space where I can share a bit about myself. I am originally from Brazil and have been living in New Zealand since 2019. I'm a very easy-going person (at least, that's what I believe), however, I do love having my private moments. <br>I can be very active and have a few hobbies, such as playing beach volleyball or taking walks on cold days. I'm also passionate about games and driven by curiosity.</p>`
    ,
      img: '<img class="h-full w-full object-cover" src="img/Caique_Who_I_am.webp" alt="Caique and Suki"/>',
    },
    education: {
      title: "My Education",
      text: `<p class='text-justify'>Tech Enthusiast & Continuous Learner I’ve been a student of tech since high school, and I’m someone who genuinely loves the process of 'learning how to learn.' After finishing my degree in Programming Technologies back in 2017 at UNIP - Universidade Paulistana, I did not want to stop there. I spent the following years diving into the creative side of things, picking up Graphic Design and SEO to see how code and user experience actually fit together.\nIn 2024, I decided to take a big leap and start my Postgraduate in New Zealand, at the Auckland Institute of Studies. I’ve just wrapped up my grades (September 2025) and I’m now ready to take everything I’ve learned—from technical dev work to digital strategy—and put it into practice in a new professional chapter.</p>`,
      img: '<img class="h-full w-full object-scale-down " src="img/AIS certificate.webp" alt="Caique Postgraduation Ceremony"/>',
    },
    "work-experience": {
      title: "Work Experience",
      text: `<p class='text-justify'>
        Throughout my journey, I’ve had the opportunity to continuously expand my skill set. Even though technology has been a part of my life from a young age, I’ve already traveled a long professional path. Here, I’ll share a bit of that story.
        </p>
        <br> <ul>
          <li>DXC (former HPE)</li>
          <li>Tivit</li>
          </ul>`,
      img: ''
    },
    skills: {
      title: "Skills",
      text: "<p></p>",
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

    whoIAmLink.parentElement.classList.toggle(
      "bg-white/40",
      sectionId === "who-I-am",
    );
    educationLink.parentElement.classList.toggle(
      "bg-white/40",
      sectionId === "education",
    );
    workExperience.parentElement.classList.toggle(
      "bg-white/40",
      sectionId === "work-experience",
    );
    skills.parentElement.classList.toggle(
      "bg-white/40",
      sectionId === "skills",
    );
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
  workExperience.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("work-experience");
  });
  skills.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("skills");
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
      .map(
        (imgHtml) =>
          `<li class="flex items-right transition delay-500 hover:animate-bounce hover:scale-110">${imgHtml}</li>`,
      )
      .map(
        (imgHtml) =>
          `<li class="flex justify-center items-center transition duration-300 hover:animate-bounce hover:scale-125">${imgHtml}</li>`,
      )
      .join("");

    const gridHtml = `<ul class="grid grid-cols-2 justify-right sm:grid-cols-4 gap-x-8 gap-y-10">${listItems}</ul>`;

    targetDiv.innerHTML = gridHtml;
  }

  createIconGrid(technologyDiv, svgInfo.technologies);
  createIconGrid(toolsDiv, svgInfo.tools);
});
