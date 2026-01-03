document.addEventListener("DOMContentLoaded", () => {
  // Get references to all the elements we need
  const whoIAmLink = document.getElementById("who-I-am");
  const educationLink = document.getElementById("education");
  const contentDiv = document.getElementById("content");
  const contentTitle = contentDiv.querySelector("h3");
  const contentParagraph = contentDiv.querySelector("p");

  // Store the content for each section
  const contentData = {
    "who-I-am": {
      title: "About Me",
      text: 'Here is where the content about "Who I am" will be displayed. You can add paragraphs, lists, and other information about your background and story here.',
    },
    education: {
      title: "My Education",
      text: "This section will detail my educational background, including degrees, certifications, and relevant coursework. I am a lifelong learner, always seeking new knowledge.",
    },
  };

  // Function to update the content and active state
  function showContent(sectionId) {
    // Get the data for the selected section
    const data = contentData[sectionId];

    if (data) {
      // Update the title and text
      contentTitle.textContent = data.title;
      contentParagraph.textContent = data.text;

      // Make sure the content div is visible
      contentDiv.classList.remove("hidden");

      // Update active styles for the links
      whoIAmLink.parentElement.classList.toggle(
        "bg-white/40",
        sectionId === "who-I-am",
      );
      educationLink.parentElement.classList.toggle(
        "bg-white/40",
        sectionId === "education",
      );
    }
  }

  // Set the initial state (show "Who I am" by default)
  showContent("who-I-am");

  // Add click event listeners
  whoIAmLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("who-I-am");
  });
  educationLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("education");
  });
});
