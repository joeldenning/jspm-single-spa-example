import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/app1",
  app: () => System.import("@org/app1"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
