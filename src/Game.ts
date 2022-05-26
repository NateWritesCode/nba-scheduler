import { Team } from "./types";

class Game {
  gameDate: string;
  opponent: Team;
  isHome: boolean;
  constructor({
    gameDate,
    opponent,
    isHome,
  }: {
    gameDate: string;
    opponent: Team;
    isHome: boolean;
  }) {
    this.gameDate = gameDate;
    this.opponent = opponent;
    this.isHome = isHome;
  }
}

export default Game;
