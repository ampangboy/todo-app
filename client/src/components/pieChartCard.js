import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip } from "recharts";

const useStyles = makeStyles({
  root: {
    margin: "2.5rem",
  },
  container: {
    width: "200px",
    margin: "0 auto",
  },
});

function PieChartCard() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const tasks = useSelector((state) => state.tasks);
  const totalTask = tasks.tasks.length;
  const completedTask = tasks.tasks.filter((t) => t.isDone === true).length;
  const incompleteTask = totalTask - completedTask;

  const data = [
    {
      name: "Completed Task",
      value: completedTask,
    },
    {
      name: "Incompleted Task",
      value: incompleteTask,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <PieChart width={200} height={200}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default PieChartCard;
