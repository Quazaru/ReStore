const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, currentFunc) => {
    return currentFunc(wrapped);
  }, comp)
}

export default compose; 