const mongoose = require('mongoose');
const TrainerSchema = mongoose.Schema({
            email:{
                type:String,
                isEmail:true
            },
            name:String,
            surname:String,
            password:String,
            dateOfBirth:Date,
            bio:String,
            priceSession: Number,
            profilePictureReference:String,
            gender:{
                type:String,
                enum:['Male','Female']
            },
            rib:{
                type:Object,
                properties:
                {
                    iban: {
                        type: String,
                        required: true
                    },
                    bicswift: {
                        type: String,
                        required: true
                    },
                    address:{
                        type:Date,
                        required:true
                    },
                    cardOwner:{
                        type:String,
                        required:true
                    }
                }
            },
            languages:{
                type:Array,
                items:{
                    type:String
                }
            },
            reviews: {
                type: Array,
                items:
                    {
                        trainee:String,
                        review:String	
                    }
            },
            tags:{
                type:Array,
                items:{
                    type:String
                }
            }
});

module.exports = mongoose.model('Trainers', TrainerSchema);