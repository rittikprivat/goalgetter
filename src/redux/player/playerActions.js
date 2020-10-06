export const FETCH_PLAYERS_STARTED = "FETCH_PLAYERS_STARTED";
export const FETCH_PLAYERS_SUCCESS = "FETCH_PLAYERS_SUCCESS";
export const FETCH_PLAYERS_FAILURE = "FETCH_PLAYERS_FAILURE";

export const fetchPlayersStarted = () => {
    return {
        type: FETCH_PLAYERS_STARTED
    }
};

export const fetchPlayersSuccess = (players) => {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        players,
    }
};

export const fetchPlayersFailure = (error) => {
    return {
        type: FETCH_PLAYERS_FAILURE,
        error: error
    }
};

