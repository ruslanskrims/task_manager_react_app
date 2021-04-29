export const isEmptyObject = (obj) => {
    const objectKeys = Object.getOwnPropertyNames(obj);
    const objectIsEmpty = objectKeys.filter((key) => !!obj[key]).length === 0;
  
    return objectIsEmpty;
  };
  