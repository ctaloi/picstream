Meteor.publish("Pictures", function () {
  return Pictures.find({userId: this.userId})
});
