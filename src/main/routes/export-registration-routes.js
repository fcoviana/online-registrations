const ExportRegistrationRouterComposer = require("../composers/export-registration-router-composer");
const { adapt } = require("../adapters/express-router-adapter");

module.exports = (router) => {
  router.post(
    "/export-registration/:cpf",
    adapt(ExportRegistrationRouterComposer.compose())
  );
};
