var menuOpen = true;
var doubleRightClick = false;
var singleRightClick = false

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

window.onload = function() {
  /* Regex test to determine if user is on mobile */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.addEventListener('touchend', detectDoubleTapClosure());
  }
}

function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("sidebar").style.width = "25%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

function chooseOption(evt, option) {
  // Declare all variables

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("option");
  // tablinks = document.getElementsByClassName("sidebarOption");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(option).style.display = "block";
  evt.currentTarget.className += " active";

  w3_close()
}


function hideMenu() {
    document.getElementById(
        "taskbar").style.display = "none"
    doubleRightClick = false;
    singleRightClick = false;
}

function rightClick(e) {
      e.preventDefault();
      openTaskbar(e)
}

function openTaskbar(e) {
      if (document.getElementById(
          "taskbar").style.display == "block") {
          hideMenu();
      } else {
          let menu = document
              .getElementById("taskbar")

          menu.style.display = 'block';
          menu.style.left = e.pageX + "px";
          menu.style.top = e.pageY + "px";
      } 
}

// /* Based on this http://jsfiddle.net/brettwp/J4djY/*/
// function detectDoubleTapClosure() {
//   let lastTap = 0;
//   let timeout;
//   return function detectDoubleTap(event) {
//     const curTime = new Date().getTime();
//     const tapLen = curTime - lastTap;
//     if (tapLen < 500 && tapLen > 0) {
//       console.log('Double tapped!');
//       console.log(event.changedTouches[0])
//       openTaskbar(event.changedTouches[0])
//     } else {
//       timeout = setTimeout(() => {
//         clearTimeout(timeout);
//       }, 500);
//     }
//     lastTap = curTime;
//   };
// }
//
