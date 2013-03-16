if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Meteor.publish("slides", function () {
  return Parties.find({owner: this.userId});
});
