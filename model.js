Slides = new Meteor.Collection("slides");
 if(Meteor.isServer){
    Meteor.methods({
      // options should include: title, description, x, y, public
      createSlide: function (options) {
        return Slides.insert({
          html: options.html
        });
      },
      updateHtml: function(options){
        Slides.update(
          {_id: options.id},
          {$set: {html: options.html}});
      }
    });
}

