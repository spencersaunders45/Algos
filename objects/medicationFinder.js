/* 
  Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
  {
    name: "Sulforaphane",
    treatableSymptoms: [
      "dementia",
      "alzheimer's",
      "cancer",
      "inflammation",
      "neuropathy",
    ],
  },
  {
    name: "Longvida Curcumin",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "depression",
      "arthritis",
      "anxiety",
    ],
  },
  {
    name: "Hericium erinaceus",
    treatableSymptoms: [
    "anxiety", 
    "cognitive decline", 
    "depression"],
  },
  {
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
      "ageing",
      "low NAD",
      "obesity",
      "mitochondrial myopathy",
      "diabetes",
    ],
  },
  {
    name: "PainAssassinator",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "cramps",
      "headache",
      "toothache",
      "back pain",
      "fever",
    ],
  },
];

/* 
Input: ailments1, medications
Output: ["PainAssassinator", "Longvida Curcumin"] 
*/
const ailments1 = ["pain"];

/* 
Input: ailments2, medications
Output: ["Longvida Curcumin"] 
*/
const ailments2 = ["pain", "inflammation", "depression"];

/* 
Input: ailments3, medications
Output: [] 
*/
const ailments3 = ["existential dread"];


function getMeMyMeds(ailments, meds) {
  //creates an object with all med names set to value 0
  let medsObj = {};
  for(let i = 0; i < meds.length; i++){
    medsObj[meds[i].name] = 0;
  }

  //checks each treatable symptom under each med and adds one if the treatable symptom matches the ailment
  //The while loop stops when the ailmentIdx has gone thorugh the ailment array
  //The ailmentIdx will increase by one when the medIdx has cycled through the length of the meds array
  //The medIdx will increase by one when the treatIdx has cycled through the treatableSymtoms array of the specific med
  let ailmentIdx = 0;
  let medIdx = 0;
  let treatIdx = 0;
  let max = 0;
  while(ailmentIdx < ailments.length){
    if(treatIdx >= meds[medIdx].treatableSymptoms.length){
      medIdx++;
      treatIdx = 0;
    }
    if(medIdx >= meds.length){
      ailmentIdx++;
      medIdx = 0;
    }
    if(meds[medIdx].treatableSymptoms[treatIdx] == ailments[ailmentIdx]){
      medsObj[meds[medIdx].name] += 1;
      //looks at each new value and compares it with the max value that was set
      //max value is changed if it finds a higher value
      if(medsObj[meds[medIdx].name] > max){
        max = medsObj[meds[medIdx].name];
      }
    }
    treatIdx++;
  }

  //If max remains at zero then no meds are able to treat any Symptom and it returns a empty array
  if(max == 0){
    return [];
  }

  //Adds all keys that have a value equal to the max value
  //Returns the array of key names
  let medsArr = [];
  for(const key in medsObj){
    if(medsObj[key] === max){
      medsArr.push(key)
    }
  }

  return medsArr;
}


console.log(getMeMyMeds(ailments1, medications));
console.log(getMeMyMeds(ailments2, medications));
console.log(getMeMyMeds(ailments3, medications));