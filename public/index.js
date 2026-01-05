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
 const listImage = document.getElementById('list-images')
 const technologyDiv = document.getElementById('technologies')


const jsDelivr = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
 const svgInfo = {
    technologies: {
        javaScript: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="h-12"/>',
        react: '',
        tailwind: '',
        html: '',
        css: '',
        C: '',
        git: ''
    },
    tools: {
        figma: '',
        visualStudio: '',
        gitHub: '',
        uxUi: ''
    }
 }

function createImage() {

    const arrTech = svgInfo.map((imgRender)=> {
    const myImageTechnologies = `
        <ul
              class="flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
            >
              <li>
              ${imgRender.technologies}
              </li>
            
              </ul>`
        return myImageTechnologies
    })

    technologyDiv.innerHTML = arrTech

}

createImage()


})