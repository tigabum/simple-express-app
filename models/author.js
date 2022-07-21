var mongoose = require('mongoose');
const { DateTime } = require("luxon");


var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    family_name:{type: String, required: true, maxLength: 100},
    data_of_birth: {type: Date},
    date_of_death: {type: Date},
})

AuthorSchema
.virtual('name')
.get(function () {
    var fullname = '';

    if(this.first_name && this.family_name) {
        fullname = this.first_name + ', ' + this.first_name
    }
    if(!this.first_name || !this.family_name) {
        fullname = '';
    }
    return fullname;
})

AuthorSchema.virtual('lifespan').get(function() {
    var lifetime_string = '';
    if (this.date_of_birth) {
      lifetime_string = this.date_of_birth.getYear().toString();
    }
    lifetime_string += ' - ';
    if (this.date_of_death) {
      lifetime_string += this.date_of_death.getYear()
    }
    return lifetime_string;
  });
  
  // Virtual for author's URL
  AuthorSchema
  .virtual('url')
  .get(function () {
    return '/catalog/author/' + this._id;
  });
  
  // formating the date of span
AuthorSchema.virtual('life_span_format')
.get(function(){
  return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED): ''
})

AuthorSchema.virtual('death_span_format')
.get(function(){
  return this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED): ''
})
  //Export model
  module.exports = mongoose.model('Author', AuthorSchema);