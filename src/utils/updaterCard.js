import { Action } from 'async-dispatcher'

export function updaterCard(state, action = Action) {
	if (action?.type === 'updaterCard') {
		if (action?.payload) state = action?.payload
		return state
	}
	return state
}
