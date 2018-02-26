let rootNode = document.getElementById("root");

function createTree(structure) {
  const ul = document.createElement("ul");
  for (let i = 0; i < structure.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const elemI = document.createElement("i");
    elemI.className = "material-icons";
    const div = document.createElement("div");
    li.appendChild(div);
    ul.appendChild(li);
    div.appendChild(elemI);
    div.appendChild(span);
    if (structure[i].folder) {
      div.className = "folder";
      elemI.innerHTML = "folder";
      span.innerHTML = structure[i].title;
      if (structure[i].children) {
        let childrenUl = createTree(structure[i].children);
        li.appendChild(childrenUl);
      } else {
        const p = document.createElement("p");
        li.appendChild(p);
        p.innerHTML = "Folder is empty";
        p.className = "empty-folder";
      }
    } else {
      span.innerHTML = structure[i].title;
      elemI.innerHTML = "insert_drive_file";
      elemI.classList.add("file");
    }
  }
  return ul;
}

rootNode.appendChild(createTree(structure));
