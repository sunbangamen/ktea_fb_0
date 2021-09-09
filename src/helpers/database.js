import { database } from "../services/firebase";
const chartDB = database.ref("/chart");

export const sendChat = (data) => {
  return database.ref("chats").push({
    message: data.message,
    timestamp: data.timestamp,
    uid: data.uid,
  });
};

export const getChats = () => {
  let chats = [];
  database.ref("chat").on("value", (snapshot) => {
    snapshot.forEach((row) => {
      chats.push(row.val());
    });
  });
  return chats;
};

// get Chart
export const sendChart = (data) => {
  return database.ref("chart").push({
    place: data.place,
    value: data.value,
    timestamp: data.timestamp,
    uid: data.uid,
  });
};
// export const getChart = () => {
//   let charts = [];
//   database.ref("chart").on("value", (snapshot) => {
//     snapshot.forEach((row) => {
//       // charts.push(row.val());
//       console.log(row.val());
//     });
//   });
//   return charts;
// };
export const getAllChart = () => {
  return chartDB;
};

export const getChart = (key) => {
  return chartDB.child(key);
};
