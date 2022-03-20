import MarkComp from "./Mark";

MarkComp.install = (Vue) => {
  Vue.components(MarkComp.name, MarkComp);
};

export default MarkComp;
