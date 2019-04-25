
const meetingTimes = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

const meetingTimes2 = [
  { startTime: 1, endTime: 2 }, 
  { startTime: 2, endTime: 3 }
];

const meetingTimes3 = [
  { startTime: 1, endTime: 5 }, 
  { startTime: 2, endTime: 3 }
];

const meetingTimes4 = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];


/*
* Takes in an array of objects of unsorted meeting times, and sorts them based upon start time
*
*/
function sortMeetingTimes(a, b) {
  return a.startTime - b.startTime;
}

/*
* Takes in an array of objects of sorted meeting times, and merges meeting times if there is an overlap
*
*/
function mergeMeetingTimes(meetings) {
  const sortedMeetings = meetings.sort(sortMeetingTimes);
  const numberOfMeetings = sortedMeetings.length;
  let meetingIndex = 0;
  let mergedMeetings = [];

  // Go over each meeting
  while(meetingIndex < numberOfMeetings) {
    let currentMeeting = sortedMeetings[meetingIndex];
    let innerIndex = meetingIndex + 1;
    console.log("Meeting Index: ", meetingIndex);

    // For each meeting, check the meetings at the later indices (our array is sorted)
    while(innerIndex < numberOfMeetings) {
      console.log("Inner Index: ", innerIndex);
      const comparedMeeting = sortedMeetings[innerIndex];

      //Case 1: Meetings can be merged
      if(comparedMeeting.startTime <= currentMeeting.endTime) {
        // Set endTime to the highest possible value
        currentMeeting.endTime = (currentMeeting.endTime > comparedMeeting.endTime) ? currentMeeting.endTime : comparedMeeting.endTime;
        meetingIndex++;
      } else {
        //Case 2: Meetings cannot be merged
        console.log("COULDN'T MERGE, BREAKING");
        break;
      } 

      innerIndex++;
    }

    mergedMeetings.push({
      startTime: currentMeeting.startTime,
      endTime: currentMeeting.endTime
    });

    meetingIndex++;
  }

  return mergedMeetings;
}

console.log("Original Meeting Times: ", meetingTimes4);
console.log("New Meeting Times: ", mergeMeetingTimes(meetingTimes4));