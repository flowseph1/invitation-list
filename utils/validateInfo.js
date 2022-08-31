export const validateInfo = (name, nickname, state) => {
    // Check if name and nickname are empty.
    if (name === '' || nickname === '') return 'Please complete all the fields';

    // Check if the name and nickname already exist on state.
    if (state.value.some(value => value.name === name || value.nickname === nickname))
        return 'User already added to list.';

    return false;
};
