// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver => {
      return driver.toLowerCase() === name.toLowerCase();
    });
  };

  const fuzzyMatch = (drivers, letters) => {
    return drivers.filter(driver => {
      return driver.toLowerCase().startsWith(letters.toLowerCase());
    });
  };

  const matchName = (drivers, name) => {
    return drivers.filter(driver => {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  };