import CardMain from "./src/card-main.vue";

CardMain.install = function (vue) {
  vue.component(CardMain.name, CardMain);
};

export default CardMain;
