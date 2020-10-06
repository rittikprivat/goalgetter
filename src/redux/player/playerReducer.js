import {initialState} from './playerSelectors'
import {FETCH_PLAYERS_STARTED, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_FAILURE} from './playerActions'

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYERS_STARTED:
            return {
                ...state,
                playersLoading: true,
                playersError: undefined
            };

        case FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.players,
                playersLoading: false,
            };

        case FETCH_PLAYERS_FAILURE:
            return {
                ...state,
                playersLoading: false,
                playersError: action.error
            };
        default:
            return state
    }
}
