type InputProps = {
  a: string | number,
  b: string | number,
};

const create = async ({ a, b }) => {
  return {
    c: a,
    d: b,
  };
};

export default create;
