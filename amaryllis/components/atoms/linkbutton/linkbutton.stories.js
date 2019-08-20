import { storiesOf } from "@storybook/vue";

import linkbutton from "./linkbutton.vue";

storiesOf("Atoms", module).add("linkbutton", () => ({
  components: { linkbutton },
  template: `<linkbutton />`
}));
