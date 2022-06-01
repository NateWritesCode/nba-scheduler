import Scheduler from "./Scheduler";
import teams from "../data/teams.json";
import fs from "fs";

const scheduler = new Scheduler(teams);
const { schedule } = scheduler.createNbaSchedule();
fs.writeFileSync(`./output/schedule-og.json`, JSON.stringify(schedule));
console.log("Finished creating schedule");
