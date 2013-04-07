Slides = new Meteor.Collection("slides");
 if(Meteor.isServer){
    Meteor.methods({
      // options should include: title, description, x, y, public
      createSlide: function (options) {
        return Slides.insert({
          title: options.title
        });
      }
    });
}
Meteor.startup(function () {
if(Meteor.isClient){
Meteor.call("createSlide", {title:"title"});
var fragment = Meteor.render(
  function () {
    return Template.slideshow({slide:Slides.find({})});
  });
document.body.appendChild(fragment);
}
});
