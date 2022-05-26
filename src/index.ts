import Scheduler from "./Scheduler";
import teams from "../data/teams.json";

const scheduler = new Scheduler(teams);
scheduler.createNbaSchedule();
console.log("Finished creating schedule");
