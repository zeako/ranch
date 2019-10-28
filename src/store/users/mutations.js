export function someMutation (/* state */) {
}

export function setUsersMutation (state) {
  state.userList = [{ id: 1, name: 'Tomer' }, { id: 2, name: 'Nitsan' }, { id: 3, name: 'Erez' }]
}
