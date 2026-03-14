import type { EnvOptions } from "tnp/src";

const env: Partial<EnvOptions> = {
  website: {
    domain: "my-awesome-command-line-tool.example.domain.com",
    title: "My Awesome Command Line Tool",
    useDomain: true,
  },
  loading: {
    preAngularBootstrap: {
      background: "#fdebed",
      loader: { name: "lds-default" },
    },
  },
};
export default env;
