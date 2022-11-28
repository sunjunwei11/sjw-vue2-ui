import Demo from "./demo";
import Card from "./card";

const components = [Demo, Card];

const install = function (Vue) {
  if (install.installed) return;
  components.forEach((comp) => {
    comp.install(Vue);
  });
};

const Lib = {
  install,
};

export default Lib;
