function fixFooter(position) {
  //only if we're not on mobile
  let screenHeight = $(window).height();
  console.log(screenHeight);

  if(screenHeight > 850) {
    $('footer').css('position', position);
  }
}

function openAboutPage() {
  fixFooter('absolute');
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
  $('main').html(`
    <h1>Projects</h1>
    <div class="project">
      <h2 class="project-title">Mindful Eater</h2>
      <a href="https://github.com/vmsimone/mindful-eater-client" target="_blank">GitHub Repo</a>
      <a href="https://mindful-eater-client.herokuapp.com/" target="_blank">Live Site</a>
      <br><br>
      <img 
        class="screenshot"
        src="./images/mindful-eater.PNG" 
        alt="screenshot"
      />
      <p class="desc">
        Mindful Eater is a fullstack web application designed to help users 
        track their eating habits, get information on the nutrients they're 
        lacking or eating too much of, and see suggestions on what foods will 
        provide these nutrients.
      </p>
      <h3>Technology used:</h3>
      <ul>
        <li><img src="./images/react-logo.png" alt="react" title="react" /></li>
        <li><img src="./images/redux-logo.png" alt="redux" title="redux" /></li>
        <li><img src="./images/js-logo.png" alt="javascript" title="javascript" /></li>
        <li><img src="./images/css-logo.png" alt="css" title="css" /></li>
        <li><img src="./images/node-logo.jpg" alt="node" title="node" /></li>
        <li><img src="./images/mongodb-logo.png" alt="mongodb" title="mongodb" /></li>
      </ul>
    </div>

    <div class="project">
      <h2 class="project-title">PicTranslate</h2>
      <a href="https://github.com/vmsimone/PicTranslate" target="_blank">GitHub Repo</a>
      <a href="https://vmsimone.github.io/PicTranslate/" target="_blank">Live Site</a>
      <br><br>
      <img 
        class="screenshot" 
        src="./images/pictranslate.PNG" 
        alt="screenshot" 
      />
      <p class="desc">
        PicTranslate is a multi-API app used for translating words or short phrases 
        into words in other languages. Unlike a standard translator, this app also 
        includes images to help aid understanding.
      </p>
      <h3>Technology used:</h3>
      <ul>
        <li><img src="./images/html-logo.png" alt="html" title="html" /></li>
        <li><img src="./images/css-logo.png" alt="css" title="css" /></li>
        <li><img src="./images/js-logo.png" alt="javascript" title="javascript" /></li>
      </ul>
    </div>

    <div class="project">
      <h2 class="project-title">Comic Tracker</h2>
      <a href="https://github.com/vmsimone/comic-reader-app" target="_blank">GitHub Repo</a>
      <a href="https://gentle-savannah-49734.herokuapp.com/" target="_blank">Live Site</a>
      <br><br>
      <img 
        class="screenshot" 
        src="./images/comic-tracker.PNG" 
        alt="screenshot" 
      />
      <p class="desc">
        Comic Tracker is a simple app for tracking the comics you read, 
        seeing how many pages of comics you've read, and rating your favorites on a 
        1-5 scale. The app utilizes its own database hosted on mLab.
      </p>
      <h3>Technology used:</h3>
      <ul>
        <li><img src="./images/html-logo.png" alt="html" title="html" /></li>
        <li><img src="./images/css-logo.png" alt="css" title="css" /></li>
        <li><img src="./images/js-logo.png" alt="javascript" title="javascript" /></li>
        <li><img src="./images/node-logo.jpg" alt="node" title="node" /></li>
        <li><img src="./images/mongodb-logo.png" alt="mongodb" title="mongodb" /></li>
      </ul>
    </div>

    <div class="project">
      <h2 class="project-title">Mr. Robot Quiz</h2>
      <a href="https://github.com/vmsimone/MR-ROBOT-Quiz" target="_blank">GitHub Repo</a>
      <a href="https://vmsimone.github.io/MR-ROBOT-Quiz/" target="_blank">Live Site</a>
      <br><br>
      <img 
        class="screenshot" 
        src="./images/mr-robot.png" 
        alt="screenshot" 
      />
      <p class="desc">
        A short, ten question trivia quiz based on the USA Network TV show, 
        Mr. Robot. This web app was created using Object Oriented Programming and 
        written using HTML, CSS, and jQuery
      </p>
      <h3>Technology used:</h3>
      <ul>
        <li><img src="./images/html-logo.png" alt="html" title="html" /></li>
        <li><img src="./images/css-logo.png" alt="css" title="css" /></li>
        <li><img src="./images/js-logo.png" alt="javascript" title="javascript" /></li>
      </ul>
    </div>

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
