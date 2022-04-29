console.log("helllo");
const d = new Date();
let clickNote = 1;
let html = "";
let addon = document.getElementById("addNote");
function clearAll() {
  console.log("Calling man");
  document.getElementById("data").value = "";
}

// let objNote = [];
// let txt = document.getElementById("data");
// objNote.push(txt.value);
// JSON.parse(objNote);
addClass = document.getElementById(`${clickNote}`);
function addNote() {
  console.log("note is here");
  if (document.getElementById("data").value === "") {
    alert("Nothing to add!");
  } else {
    html += `<h1 id="note-head" class="note"><p style="display:inline;padding:5px;">#task${clickNote}</p>${
      document.querySelector(".title").value
    }
    
    <button id="note-btn" "><img src="cross-symbol.png" class="note-img" width="30px" height="30px" alt="" title="Click on note to mark as done" >
  </button></h1>
  
  <p class="card" id="${clickNote}" onclick="strikeNote(this.id)" title="Click to mark as done" >${
      document.getElementById("data").value
    }</p>`;
    clickNote++;
    document.getElementById("data").value = "";
    document.querySelector(".title").value = "";
    addon.innerHTML = html;
    // d = new Date();
  }
}
// let i = 0;
function strikeNote(clickNote) {
  console.log(clickNote);
  document.getElementById(`${clickNote}`).classList.add("lineAdd");
  // document.getElementById(`${clickNote}`).style.textDecoration = "line-through";
  // i++;
}
