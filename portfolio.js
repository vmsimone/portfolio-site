function fixFooter(position) {
  $('footer').css('position', position);
}

function createTechLogoList(arr) {
  let logoList = "";
  arr.forEach(logo => {
    logoList += `<li><img src="./images/${logo}-logo.png" alt=${logo} title=${logo} /></li>
    `;
  });
  return logoList;
}

//not strictly necessary, but this makes adding new projects a bit easier
function appendProject(title, repo, liveSite, screenshot, description, techUsed) {
  $('main').append(`
    <div class="project">
      <h2 class="project-title">${title}</h2>
      <a href=${repo} target="_blank">GitHub Repo</a>
      <a href=${liveSite} target="_blank">Live Site</a>
      <br><br>
      <img 
        class="screenshot"
        src=${screenshot}
        alt="screenshot"
      />
      <p class="desc">
        ${description}
      </p>
      <h3>Technology used:</h3>
      <ul>
        ${createTechLogoList(techUsed)}
      </ul>
    </div>
  `);
}

function appendAllProjects() {
  //from projectsArray.js
  PROJECTS.forEach(project => {
    appendProject(
      project.title, 
      project.repo, 
      project.live, 
      project.screenshot, 
      project.desc, 
      project.technology
    );
  });
}

function openAboutPage() {
  fixFooter('relative');
  $('main').html(`
    <h1>About Me</h1>
    <img class="profile-pic" src="./images/me.jpg" alt="me"/>
    <p>
      I am a recent graduate of Thinkful's Coding Bootcamp living in Phoenix. 
      I love science and technology, music, travel, and learning new things. 
      I dabble in just about anything and, unlike other programmers in Phoenix, 
      I can speak Japanese.
      <br><br>よろしくお願いします。
    </p>
  `);
}

function openProjectsPage() {
  fixFooter('relative');
  $('main').html(`<h1>Projects</h1>`);
  appendAllProjects();
  $('main').append(`
    <div class="other-work">
      <h3>Other stuff</h3>
      <ul>
        <li class="logo">
          <a href="https://www.freecodecamp.org/certification/vmsimone/legacy-front-end" target="_blank">
            <img src="./images/freecodecamp.png" alt="free code camp certificate" />
          </a>
        </li>

        <li class="logo">
          <a href="https://www.codecademy.com/jackuhlantern" target="_blank">
            <img src="./images/codecademy.png" alt="codecademy profile" />
          </a>
        </li>

        <li class="logo">
          <a href="https://codepen.io/collection/DpZogO/" target="_blank">
            <img src="./images/codepen.png" alt="codepen profile" />
          </a>
        </li>
      </ul>
    </div>
  `);
}

function openContactPage() {
  fixFooter('absolute');
  $('footer').css('bottom', '10px');
  $('main').html(`
    <h1>Contact</h1>
    <ul class="contact-info">
      <li>
        <a href="mailto:vsimone@protonmail.com">
          vsimone@protonmail.com
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vincent-simone-07b203157/" target="_blank">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/vmsimone" target="_blank">GitHub</a>
      </li>
    </ul>
  `);
}

function aestheticize() {
  $('body').toggleClass('aesthetic');
  const aestheticized = $('body').hasClass('aesthetic');
  if(aestheticized) {
    $('#macplus').get(0).play();
  } else {
    $('#macplus').get(0).pause();
    document.getElementById('macplus').currentTime = 0;
  }
}

function navListener(id, callback) {
  $(id).on('click', callback);
}

function readyNavLinks() {
  $('main, footer').hide();
  openAboutPage();
  $('main').fadeIn('slow', () => {
    $('footer').fadeIn('fast');
  });
  navListener('#about', openAboutPage);
  navListener('#projects', openProjectsPage);
  navListener('#contact', openContactPage);
  navListener('#aestheticize', aestheticize);
}

$(readyNavLinks);
