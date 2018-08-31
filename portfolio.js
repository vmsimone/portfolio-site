function openAboutPage() {
  $('main').html(`
    <h1>About Me</h1>
    <img src="#" alt="me"/>
    <p>I am a recent graduate of Thinkful's Coding Bootcamp living in Phoenix. I love science and technology, music, travel, and learning new things. I dabble in just about anything and, unlike other programmers in Phoenix, I can speak Japanese.<br><br>よろしくお願いします。</p>
  `);
}

function openProjectsPage() {
  $('main').html(`
    <h1>Projects</h1>
    <div class="project">
      <h2 class="project-title">Mindful Eater</h2>
      <a href="">GitHub Repo</a>
      <a href="">Live Site</a>
      <br>
      <img 
        class="screenshot"
        src="https://github.com/vmsimone/mindful-eater-client/blob/master/screenshots/diets.PNG?raw=true" 
        alt="screenshot" 
      />
      <p class="desc">blah blah blah blah</p>
    </div>
    <div class="project">
      <h2 class="project-title">PicTranslate</h2>
      <a href="">GitHub Repo</a>
      <a href="">Live Site</a>
      <br>
      <img 
        class="screenshot" 
        src="https://github.com/vmsimone/PicTranslate/blob/master/Screenshot1.PNG?raw=true" 
        alt="screenshot" 
      />
      <p class="desc">blah blah blah blah</p>
    </div>
    <div class="project">
      <h2 class="project-title">Mr. Robot Quiz</h2>
      <a href="">GitHub Repo</a>
      <a href="">Live Site</a>
      <br>
      <img 
        class="screenshot" 
        src="https://raw.githubusercontent.com/vmsimone/portfolio-site/master/screenshots/mr-robot.png" 
        alt="screenshot" 
      />
      <p class="desc">blah blah blah blah</p>
    </div>
    <div class="other-work">
      <h3>Other stuff</h3>
      <img class="logo" src="#" />
      <img class="logo" src="#" />
      <img class="logo" src="#" />
      <img class="logo" src="#" />
    </div>
  `);
}

function openContactPage() {
  $('main').html(`
    <h1>Contact</h1>
    <ul class="contact-info">
      <li>Email: email@email.com</li>
      <li>LinkedIn: username</li>
      <li>Slack: slackhandle</li>
      <li>
        <a href="https://github.com/vmsimone" target="_blank">GitHub</a>
      </li>
    </ul>
  `);
}

function navListener(id, callback) {
  $(id).on('click', callback);
}

function readyNavLinks() {
  openAboutPage();
  navListener('#about', openAboutPage);
  navListener('#projects', openProjectsPage);
  navListener('#contact', openContactPage);
}

$(readyNavLinks);