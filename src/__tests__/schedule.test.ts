import Scheduler from "../Scheduler";
import teams from "../../data/teams.json";

const scheduler = new Scheduler(teams);
const { schedule, teamSchedulerObj } = scheduler.createNbaSchedule();

describe("Schedule array check", () => {
  test("Each team has 82 games in schedule", () => {
    const teamGameCount: any = {};

    teams.forEach((team) => {
      teamGameCount[team.id] = 0;
    });

    schedule.forEach((scheduledGame) => {
      teamGameCount[scheduledGame.team0Id]++;
      teamGameCount[scheduledGame.team1Id]++;
    });

    const teamGameCountKeys = Object.keys(teamGameCount);
    teamGameCountKeys.forEach((teamId) => {
      expect(teamGameCount[teamId]).toBe(82);
    });
  });
});

describe("Team scheduler obj check", () => {
  test("Each team's random opponents are included in opponents random opponents", () => {
    teams.forEach((team) => {
      teamSchedulerObj[team.abbrev].rareNonDivisionOpponents.forEach(
        (oppAbbrev) => {
          expect(
            teamSchedulerObj[oppAbbrev].rareNonDivisionOpponents.includes(
              team.abbrev
            )
          ).toBe(true);
        }
      );
    });
  });

  test("Each team's common opponents are included in opponents common opponents", () => {
    teams.forEach((team) => {
      teamSchedulerObj[team.abbrev].commonNonDivisionOpponents.forEach(
        (oppAbbrev) => {
          expect(
            teamSchedulerObj[oppAbbrev].commonNonDivisionOpponents.includes(
              team.abbrev
            )
          ).toBe(true);
        }
      );
    });
  });

  test("Each team's rare opponents home/away schedule matches with the opponent", () => {
    // ha[0] is the group of rareNonDivOpps that a team should play 2 home games against and 1 away game
    // ha[1] is the group of rareNonDivOpps that a team should play 2 away games against and 1 home game
    teams.forEach((team) => {
      const teamHa = teamSchedulerObj[team.abbrev].ha;
      const teamHomeHa = teamHa[0];
      const teamAwayHa = teamHa[1];

      teamHomeHa.forEach((oppAbbrev) => {
        expect(teamSchedulerObj[oppAbbrev].ha[1].includes(team.abbrev)).toBe(
          true
        );
      });

      teamAwayHa.forEach((oppAbbrev) => {
        expect(teamSchedulerObj[oppAbbrev].ha[0].includes(team.abbrev)).toBe(
          true
        );
      });
    });
  });
});
