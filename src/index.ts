import Scheduler from "./Scheduler";
import teams from "../data/teams.json";

const scheduler = new Scheduler(teams);
// console.log("Hello world");
const schedule = scheduler.createNbaSchedule();
// console.log("schedule", schedule);
console.log("Finished creating schedule");
