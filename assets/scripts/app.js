class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListFunction) {
    this.id = id;
    this.updateProjectListFunction = updateProjectListFunction;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement.querySelector(
      "button:last-of-type"
    );
    switchButton.addEventListener(
      "click",
      this.updateProjectListFunction.bind(this)
    );
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    // Example: #active-projects li
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    // for (let i = 0; i < this.project.length; i++) {}
    for (const projectItem of projectItems) {
      console.log(type);
      console.log(projectItem);
      this.projects.push(
        new ProjectItem(projectItem.id, this.switchProject.bind(this))
      );
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject() {
    console.log(this);
  }

  switchProject(projectId) {
    console.log("sasasa", projectId);
    this.project = this.projects.find((i) => i.id === projectId);
    console.log("soaos", this.project);
    this.projects.filter((i) => i.id !== projectId);
    console.log(
      "saas",
      this.projects.filter((i) => i.id !== projectId)
    );
    // const projectIndex = this.projects.findIndex((i) => i.id === projectId);
    // this.projects.splice();
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind()
    );
  }
}

App.init();
