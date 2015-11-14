Meteor.startup(function () {
});

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "490305047807006",
      secret: "4f8e45b1674cf117eb3f18f05dfba217",
      loginStyle: "popup"
    }
  }
);