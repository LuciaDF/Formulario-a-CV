const datasource = document.getElementById("datasource");
const datasourceContent = datasource.innerHTML;
const dataFmt = datasourceContent.replace(/&#39;/g, '"');
const dataObject = JSON.parse(dataFmt);

function createItem(data, id) {
  const CONTAINER = document.getElementById(id);
  CONTAINER.innerHTML = "";

  Array.from(data.data).forEach((item, idx) => {
    const identify = `${data.tag}${idx}`;

    const DIV = document.createElement("div");
    DIV.classList.add(data.classParent);

    const INPUT = document.createElement("input");
    INPUT.id = identify;
    INPUT.name = data.tag;
    INPUT.type = data.type;
    INPUT.value = item.value;
    INPUT.classList.add(data.classInput);

    const LABEL = document.createElement("label");
    LABEL.htmlFor = identify;
    LABEL.textContent = item.text;
    LABEL.classList.add(data.classLabel);

    DIV.appendChild(INPUT);
    DIV.appendChild(LABEL);

    CONTAINER.appendChild(DIV);
  });
}

function submit() {
  const form = document.getElementById("data-form");
  const skillElement = document.getElementById("skill-id");
  form.onsubmit = () => {
    let skillsData = [];

    const skills = document.querySelectorAll("[id*=skill]");
    skills.forEach((e) => {
      if (e.checked) skillsData.push(e.value);
    });
    skillElement.value = JSON.stringify(skillsData);

    return true;
  };
}

function bootstrap() {
  submit();

  createItem(dataObject.skills, "skills");
}

bootstrap();