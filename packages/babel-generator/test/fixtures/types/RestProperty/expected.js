var { ...{
    z
  }
} = {
  z: 1
};
var { ...{
    x = 5
  }
} = {
  x: 1
};
({
  x,
  ...{
    y,
    z
  }
} = o);