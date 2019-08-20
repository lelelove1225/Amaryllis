import { storiesOf } from "@storybook/vue";

import linkarea from "./linkarea.vue";

storiesOf("molecules", module).add("linkarea", () => ({
  components: { linkarea },
  template: `<linkarea />`
}));
