const rootNode = document.getElementById("root");

function createTree(structure) {
  const ul = document.createElement("ul");
  for (let i = 0; i < structure.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const icon = document.createElement("i");
    icon.className = "material-icons";
    const div = document.createElement("div");
    li.appendChild(div);
    ul.appendChild(li);
    div.appendChild(icon);
    div.appendChild(span);
    if (structure[i].folder) {
      div.className = "folder";
      icon.innerHTML = "folder";
      span.innerHTML = structure[i].title;
      if (structure[i].children) {
        const childrenUl = createTree(structure[i].children);
        li.appendChild(childrenUl);
      } else {
        const p = document.createElement("p");
        li.appendChild(p);
        p.innerHTML = "Folder is empty";
        p.className = "empty-folder";
      }
    } else {
      span.innerHTML = structure[i].title;
      icon.innerHTML = "insert_drive_file";
      icon.classList.add("file");
    }
    div.addEventListener("click", openFolder);
  }
  return ul;
}

function openFolder() {
  const blockOpen = this.nextElementSibling;
  if (blockOpen) {
    const icon = this.firstChild;
    if (blockOpen.style.display === "block") {
      blockOpen.style.display = "none";
      icon.innerHTML = "folder";
    } else {
      blockOpen.style.display = "block";
      icon.innerHTML = "folder_open";
    }
  }
}

rootNode.appendChild(createTree(structure));
