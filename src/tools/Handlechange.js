export const HandleChange = (state, setState, name, text) => {
    // console.log(name);
    setState({
      ...state,
      [name]: text,
    });
  };
  