import { storiesOf } from "@storybook/vue";

import contentHeader from "./contentHeader.vue";

storiesOf("organisims", module).add("contentHeader", () => ({
  components: { contentHeader },
  template: `<contentHeader />`
}));
