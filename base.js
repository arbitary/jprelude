
// curry :: ((a, b) -> c) -> a -> b -> c
// e.g. curry ((x,y) => x + y) (5) (6) => 11

const curry = (f) => {
    const go = (arity, acc) => {
      return (acc.length >= arity)
             ? f(...acc)
             : x => go(arity, [...acc,x])
    }
    // invoke helper    
    return go(f.length, [])
  }

  

