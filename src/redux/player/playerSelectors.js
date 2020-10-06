export const initialState = {
    players: null,
    playersLoading: true,
    playersError: undefined
};

export const getPlayers = (state = initialState) => state.players ? state.players.players : null;
export const getPlayersLoading = (state = initialState) => state.players ? state.players.playersLoading : true;
export const getPlayersError = (state = initialState) => state.players ? state.players.playersError : undefined;

