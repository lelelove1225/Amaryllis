import { storiesOf } from "@storybook/vue";

import logo from "./logo.vue";

storiesOf("Atoms", module).add("logo", () => ({
  components: { logo },
  template: `<logo />`
}));
