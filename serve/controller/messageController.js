import userModel from "../models/userSchema.js";
import CropModel from "../models/dummySchema.js";
import twilio from "twilio";

const accountSid = 'AC79d387010fc45ffe0e89516911074033';
const authToken = 'd7f7e686f6f2dc4edcc8c55be975d26a';
const client = twilio(accountSid, authToken);
function sendSMS(to, message) {
  client.messages
    .create({
      body: message,
      from: '+18177569177',
      to: to, // Indian phone number in E.164 format, e.g., +919876543210
    })
    .then((message) => console.log(`SMS sent with SID: ${message.sid})`))
    .catch((error) => console.error(`Error sending SMS: ${error.message})`));
}

//sendSMS('+919876543210', 'Hello from your Node.js app!'); // Replace with the recipient's phone number

async function updates(change){
    try{
    //console.log("value Change",change);
    const id = change.documentKey._id.toString();
    const newMSP = change.updateDescription.updatedFields.MSP
    const userCrop = await CropModel.findOne({_id:id})
    const crop = userCrop.CropName;
    const user = await userModel.find({cropPreference: crop})
    let temp = ``
    for(let i=0;i<user.length;i++){
        temp =`Dear ${user[i].firstName}, the current MSP for ${crop} is ${newMSP} per ${userCrop.Unit}.`
        
    sendSMS("+91"+user[i].phoneNumber, temp);
 
        
    }

    }

    catch(e){
        console.log(e.message)
    }
}

export default updates