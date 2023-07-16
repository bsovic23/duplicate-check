// This js page is used to import the functionality to find duplciates

// Need to create the different sections for each round of duplicate screening

// ENROLLMENT FUNCTIONS ==================================================================================
// 1. FN, LN, DOB, DIGITS
export const functionOneEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.firstName === enterData.firstName &&
    data.lastName === enterData.lastName &&
    data.dob === enterData.dob &&
    data.digits === enterData.digits
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 2. FN, LN, DOB,
export const functionTwoEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.firstName === enterData.firstName &&
    data.lastName === enterData.lastName &&
    data.dob === enterData.dob
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 3. FN, LN, DIGITS
export const functionThreeEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.firstName === enterData.firstName &&
    data.lastName === enterData.lastName &&
    data.digits === enterData.digits
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 4. FN, LN
export const functionFourEnrollment = (currentData, enterData) => {
    const duplicates = currentData.filter((data) => (
      data.firstName === enterData.firstName &&
      data.lastName === enterData.lastName
    ));
  
    if (duplicates.length > 0) {
      return [
        enterData,
        ...duplicates
      ];
    } else {
      return [{}];
    }
  };

// 5. FN, Digits, DOB
export const functionFiveEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.firstName === enterData.firstName &&
    data.dob === enterData.dob &&
    data.digits === enterData.digits
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 6. LN, Digits, DOB
export const functionSixEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.lastName === enterData.lastName &&
    data.dob === enterData.dob &&
    data.digits === enterData.digits
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 7. FN, DOB
export const functionSevenEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.firstName === enterData.firstName &&
    data.dob === enterData.dob
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 8, LN, DOB
export const functionEightEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.lastName === enterData.lastName &&
    data.dob === enterData.dob
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};

// 9. Digits, DOB
export const functionNineEnrollment = (currentData, enterData) => {
  const duplicates = currentData.filter((data) => (
    data.dob === enterData.dob &&
    data.digits === enterData.digits
  ));

  if (duplicates.length > 0) {
    return [
      enterData,
      ...duplicates
    ];
  } else {
    return [{}];
  }
};


// WEEKLY SCREENING FUNCTIONS ==================================================================================
// 1. FN, LN, DOB, DIGITS
export const functionOneScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 2. FN, LN, DOB
export const functionTwoScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 3. FN, LN, DIGITS
export const functionThreeScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 4. FN, LN
export const functionFourScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 5. FN, Digits, DOB
export const functionFiveScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 6. LN, Digits, DOB
export const functionSixScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 7. FN, DOB
export const functionSevenScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 8, LN, DOB
export const functionEightScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};

// 9. Digits, DOB
export const functionNineScreening = (excelData) => {
  const duplicates = [];

  excelData.forEach((obj, index) => {
    if (obj.enter === 'yes') {
      const matchingObjects = excelData.filter(
        (o, i) =>
          i !== index &&
          o.firstName === obj.firstName &&
          o.lastName === obj.lastName &&
          o.dob === obj.dob &&
          o.digits === obj.digits
      );

      if (matchingObjects.length > 0) {
        duplicates.push(obj, ...matchingObjects);
      }
    }
  });

  return duplicates;
};