import DemoMain from "./src/demo-main.vue";

DemoMain.install = function (vue) {
  vue.component(DemoMain.name, DemoMain);
};

export default DemoMain;
