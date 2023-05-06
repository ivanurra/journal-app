export const startNewNote = () => {
  return async (dispatch) => {
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
  };
};
