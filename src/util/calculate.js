/*
9 + 8 + 

9 9 8
*/
export function calc({ result, operator, next }, key) {
  if (key === 'AC') {
    return {
      result: 0,
      operator: null,
      next: null
    };
  }

  if (key === '+/-') {
    if (operator === null) {
      result = -result;
    } else {
      next = -next;
    }
    return { result, next };
  }

  if (/[\d.]/.test(key)) {
    if (operator === null && next === null) {
      if (('' + result).indexOf('.') > -1) {
        return {};
      }
      return {
        result: +(result + key)
      };
    }
  } else {
    if (operator === null && next === null) {
      return {
        operator: key
      };
    }
  }

  if (operator && next !== null) {
    const res = eval(`${result}${operator === 'x' ? '*' : operator}${next}`);
    return {
      result: res,
      operator: key === '=' ? null : key,
      next: null
    };
  }

  return { result, operator, next: next === null ? +key : +(next + key) };
}
