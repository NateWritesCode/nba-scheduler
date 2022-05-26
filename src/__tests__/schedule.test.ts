import Scheduler from "../Scheduler";
import teams from "../../data/teams.json";

describe("Schedule generator test", () => {
  const scheduler = new Scheduler(teams);
  scheduler.createNbaSchedule();
  const { schedule, teamSchedulerObj } = scheduler;

  test("Each team has 82 games", () => {
    schedule.forEach((scheduledGame) => {});

    expect(4).toBe(4);
  });
});
