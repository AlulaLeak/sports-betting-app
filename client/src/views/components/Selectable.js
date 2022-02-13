import React from "react";

function Selectable(props) {
  const BET_PLACED = "BET_PLACED";

  const {
    awayScore,
    homeScore,
    teamsPlaying,
    currentPeriods,
    periodTimeRemaining,
    awayMoneylineOdds,
    homeMoneylineOdds,
    awaySpread,
    homeSpread,
    awaySpreadOdds,
    homeSpreadOdds,
    overOdds,
    underOdds,
    pointsForTotalOdds,
    league,
    transition,
    homeTeam,
    awayTeam,
    addToBetSlipArray,
    betSlipArray,
  } = props;

  const awayMl = {
    odds: awayMoneylineOdds,
    betOn: "away",
    teamsPlaying: teamsPlaying,
    typeOfBet: "moneyline",
  };
  const homeMl = {
    odds: homeMoneylineOdds,
    betOn: "home",
    teamsPlaying: teamsPlaying,
    typeOfBet: "moneyline",
  };
  const awaySp = {
    odds: awaySpreadOdds,
    spread: awaySpread,
    betOn: "away",
    teamsPlaying: teamsPlaying,
    typeOfBet: "spread",
  };
  const homeSp = {
    odds: homeSpreadOdds,
    spread: homeSpread,
    betOn: "home",
    teamsPlaying: teamsPlaying,
    typeOfBet: "spread",
  };
  const totalOver = {
    odds: overOdds,
    betOn: "over",
    total: pointsForTotalOdds,
    teamsPlaying: teamsPlaying,
    typeOfBet: "total",
  };
  const totalUnder = {
    odds: underOdds,
    total: pointsForTotalOdds,
    betOn: "under",
    teamsPlaying: teamsPlaying,
    typeOfBet: "total",
  };

  function confirmBet(betToAdd) {
    addToBetSlipArray(betToAdd);
    console.log(betSlipArray);
  }
  return (
    <div className="fixture-card">
      <div>{league}</div>
      <div className="teams-and-scores">
        <div>{awayScore}</div>
        <br />
        <div>{teamsPlaying}</div>
        <br />
        <div>{homeScore}</div>
      </div>
      <div>period: {currentPeriods}</div>
      <div>time remaining: {periodTimeRemaining}</div>
      <div className="fixture-odds">
        <div className="odds">
          <button
            type="submit"
            onClick={() => confirmBet(awayMl)}
            value={awayMl}
          >
            {awayMoneylineOdds}
          </button>
          <div>moneyline</div>
          <button
            type="submit"
            onClick={(e) => confirmBet(homeMl)}
            value={homeMl}
          >
            {homeMoneylineOdds}
          </button>
        </div>
        <div className="odds">
          <button
            type="submit"
            onClick={(e) => confirmBet(awaySp)}
            value={awaySp}
            className="total-and-spread-alignment"
          >
            <div>{awaySpread}</div>
            <div>{awaySpreadOdds}</div>
          </button>
          <div className="total-and-spread-points">spread</div>
          <button
            type="submit"
            onClick={(e) => confirmBet(homeSp)}
            value={homeSp}
            className="total-and-spread-alignment"
          >
            <div>{homeSpread}</div>
            <div>{homeSpreadOdds}</div>
          </button>
        </div>
        <div className="odds">
          <button
            type="submit"
            onClick={(e) => confirmBet(totalOver)}
            value={totalOver}
            className="total-and-spread-alignment"
          >
            <div>O</div>
            <div>{overOdds}</div>
          </button>
          <div className="total-and-spread-points">
            total {pointsForTotalOdds} points
          </div>
          <button
            type="submit"
            onClick={(e) => confirmBet(totalUnder)}
            value={totalUnder}
            className="total-and-spread-alignment"
          >
            <div>U</div>
            <div>{underOdds}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selectable;
