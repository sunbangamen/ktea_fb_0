import React, { useEffect, useState } from "react";
import { authService, database } from "../services/firebase";
import { sendChart, getChart, getAllChart } from "../helpers/database";
import { Line } from "react-chartjs-2";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [charts, setCharts] = useState([]);

  const data = {
    labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
    datasets: [
      {
        label: "# of Votes",
        // data: [12, 19, 3, 5, 2, 3],
        data: charts,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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

  const getChartList = () => {
    const chartList = getChart();
    setCharts(chartList);
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
  // useEffect(() => {
  //   try {
  //     database.ref("charts").on("child_added", getChartList);
  //     database.ref("charts").on("child_changed", getChartList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  useEffect(() => {
    getAllChart().on("value", (snapshot) => {
      let chartInfo = [];
      snapshot.forEach((item) => {
        let data = item.val();
        chartInfo.push({
          key: item.key,
          place: data.place,
          uid: data.uid,
          value: data.value,
        });

        //chartData.concat(data.value);
        setCharts((charts) => [...charts.concat(data.value)]);
      });
    });
  }, []);

  console.log(charts);

  return (
    <>
      <div className="header">
        <form onSubmit={handleSumbit}>
          <input placeholder="현장명을 입력하세요." value={msg} onChange={handleOnChange} />
          <button type="submit">전송</button>
        </form>
        <h1 className="title">Line Chart</h1>
      </div>
      <div width={100} height={50}>
        <Line data={data} options={options} width={100} height={50} />
      </div>
    </>
  );
};

export default Chat;
