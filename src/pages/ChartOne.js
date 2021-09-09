import React, { useEffect, useState } from "react";
import { authService, database } from "../services/firebase";
import { sendChart, getChart, getAllChart, getChats } from "../helpers/database";
import { Line } from "react-chartjs-2";
import { logout } from "../helpers/auth";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const Chat = () => {
  // 현장명
  const [msg, setMsg] = useState("");
  // Chart value
  // const [charts, setCharts] = useState([]);
  // const [charts1, setCharts1] = useState([]);
  const [average, setAverage] = useState([]);
  // Chart value1
  const [average1, setAverage1] = useState([]);
  // alert ,loaded
  const [loaded, setLoaded] = useState(false);
  const [magAlert, setMagAlert] = useState(false);

  //  https://github.com/reactchartjs/react-chartjs-2/issues/648
  // const LineChart = () => <Line data={data} options={options} />
  // const areEqual = (prevProps, nextProps) => true;
  const data = {
    labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100"],
    //labels: ["5", "10", "15", "20", "25"],
    datasets: [
      {
        label: "# sensor",
        // data: [12, 19, 3, 5, 2, 3],
        data: average,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "# sensor1",
        // data: [12, 19, 3, 5, 2, 3],
        data: average1,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    legend: {
      display: false, // label 숨기기
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },

    //maintainAspectRatio: false,
  };

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log(msg);
    try {
      await sendChart({
        place: msg,
        value: 0,
        timestamp: Date.now(),
        uid: authService.currentUser.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllChart().on("child_changed", (snapshot) => {
      setAverage((average) => [...average.concat(Math.floor(snapshot.val().value))]);

      console.log("change : ", snapshot.val().value);
    });
    getAllChart().on("child_changed", (snapshot) => {
      setAverage1((average) => [...average.concat(Math.floor(snapshot.val().value1))]);
      console.log("change1 : ", snapshot.val().value1);
    });
  }, []);

  // // 동시적용
  // useEffect(() => {
  //   getAllChart().on("value", (snapshot) => {
  //     let chartInfo = [];
  //     snapshot.forEach((item) => {
  //       let data = item.val();
  //       chartInfo.push({
  //         key: item.key,
  //         place: data.place,
  //         uid: data.uid,
  //         value: data.value,
  //         value1: data.value1,
  //       });

  //       setCharts((charts) => [...charts.concat(Math.floor(data.value))]);
  //       setAverage((average) => [...average.concat(Math.floor(data.value))]);
  //       // Chart value1
  //       setAverage1((average) => [...average.concat(Math.floor(data.value1))]);
  //     });
  //   });
  // }, []);

  //console.log("charts배열값 : ", charts);
  console.log("loaded : ", loaded);
  // 배열의 평균 값
  const avr = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
  // 총배열
  console.log("average 총배열 : ", average);
  console.log("average1 총배열 : ", average1);
  console.log("평균값 : ", avr(average));
  console.log("평균값 : ", avr(average1));
  const avgPlusData = avr(average) + 5;
  const avgMiusData = avr(average) - 5;
  const avgPlusData1 = avr(average1) + 5;
  const avgMiusData1 = avr(average1) - 5;
  //console.log(avgData, " : ", avr(average) + 5);
  //console.log("배열마지막 값 : ", average[average.length - 1]);
  const lastData = average[average.length - 1];
  const lastData1 = average1[average1.length - 1];

  const sensor = "sensor";
  const sensor1 = "sensor1";
  const alertMsg = (name) => {
    setMagAlert(true);
    alert(`${name}위치에 문제가 발생되었습니다.`);
    //window.confirm("문제가 발생되었습니다.");
  };
  if (avgMiusData > lastData) {
    if (!magAlert) {
      alertMsg(sensor);
    } else {
      console.log("문제발생");
    }
  } else if (avgPlusData < lastData) {
    console.log("문제 발생");
    if (!magAlert) {
      alertMsg(sensor);
    } else {
      console.log("문제발생");
    }
  } else {
    console.log("정상측정");
    //setMagAlert(false);
  }

  if (avgMiusData1 > lastData1) {
    if (!magAlert) {
      alertMsg(sensor1);
    } else {
      console.log("문제발생");
    }
  } else if (avgPlusData1 < lastData1) {
    console.log("문제 발생");
    if (!magAlert) {
      alertMsg(sensor1);
    } else {
      console.log("문제발생");
    }
  } else {
    console.log("정상측정");
    //setMagAlert(false);
  }

  // if (alertResult < maxlimit || alertResult > minlimit) {
  //   //window.confirm("확인요청");
  // } else {
  //   console.log("문제가 발생되었다!");
  // }
  const handleStart = () => {
    setLoaded(true);
    setMagAlert(false);
    setAverage(average.filter((arr) => arr === average));
    setAverage1(average1.filter((arr) => arr === average1));
  };

  const handleStop = () => {
    setLoaded(false);
    // setCharts([]);
    setAverage([]);
    setAverage1([]);
  };

  if (average[19]) {
    //const index = 3;
    setAverage((average) => [...average.slice(18)]);
  }
  if (average1[19]) {
    //const index = 3;
    setAverage1((average1) => [...average1.slice(18)]);
  }

  return (
    <>
      <div className="header">
        <button onClick={logout}>로그아웃</button>
        <form onSubmit={handleSumbit}>
          <input placeholder="현장명을 입력하세요." value={msg} onChange={handleOnChange} />
          <button type="submit">전송</button>
        </form>
        <h1 className="title">Line Chart</h1>
      </div>
      {loaded ? <button onClick={handleStop}>초기화</button> : <button onClick={handleStart}>측정시작</button>}
      <Line data={data} options={options} width={100} height={50} />
    </>
  );
};

export default React.memo(Chat);
