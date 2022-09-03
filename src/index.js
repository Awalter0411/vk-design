import Button from "./components/button";

const components = { Button };

const VkDesign = {
  install(app) {
    for (const k in components) {
      app.component(`vk-${k.toLocaleLowerCase()}`, components[k]);
    }
  },
};

export default VkDesign;
