var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

const VOLUME_MUTE = 181;
const ENTER_KEY = 13;
const ARROW_UP = 38;
const ARROW_DOWN = 40;

var git = 0;
var fillPasswordEnabled = false;
let correctPassword = false;
var commands = [];
var isRoot = false;

setTimeout(function() {
  loopLines(banner, "", 100);
  textarea.focus();
}, 100);

console.log(
  "%csegmeПƬΛƬIӨП FΛЦᄂD (ᄃӨЯΣ DЦMPΣD)",
  "color: red; font-weight: bold; font-size: 14px;"
);

//init
textarea.value = "";
command.innerHTML = textarea.value;

window.addEventListener("keyup", enterKey);

function isPassword(){
  if (textarea.value.replace(/(\r\n|\n|\r)/gm, "") === password) {
    isRoot = true;
    return true;
  }
  return false;
}

function getUser(){

  if(isRoot){
    return "root@Evident#>";
  }
  return "evident@Evident~$>";

}

function enterKey(e) {
  if (e.keyCode == VOLUME_MUTE) {
    document.location.reload(true);
  }
  if (fillPasswordEnabled) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (e.keyCode == ENTER_KEY) {
      if (isPassword()){
        loopLines(secret, "color2 margin", 120);
        document.getElementById("liner").setAttribute("data-text", getUser());
      }else{
        addLine("Wrong password", "error", 0);
      }
      command.innerHTML = "";
      textarea.value = "";
      fillPasswordEnabled = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == ENTER_KEY) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(getUser()+ " " + command.innerHTML, "no-animation", 0);//todo make variable for username
      console.log(command.innerHTML);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  //split command in space
  cd = cmd.split(" ")[0];
  if (cd === "cd"){
    if(!isRoot){
      addLine("default user has no cd permissions, auth: su", "error", 0);
    }
    else{
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
   
    }
    return;
  }
  


  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "output", 80);
      break;
    case "whois":
      loopLines(whois, "output", 80);
      break;
    case "whoami":
      loopLines(whoami, "output", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "sudo":
      addLine("/etc/sudoers not found", "output", 80);/*
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); */
      break;
    case "su":
      liner.classList.add("password");
      fillPasswordEnabled = true;
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('rotitNhoj@dmail.com', "color2", 80);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "database":
      if (!isRoot) {
        commander("default");
        break;
      }
      addLine("Accessing Database...", "color2", 0);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "spec":
      loopLines(hardinfo, "output", 100);
      break;
    case "ls":
      loopLines(ls, "output", 100);
      break;
    default:
      addLine("<span class=\"inherit\">Unrecognized Command "+cmd+". try <span class=\"command\">'help'</span>.</span>", "error", 0);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}