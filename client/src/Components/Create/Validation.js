const regexName = /^[a-zA-Z ]+$/;
const regexUrl =
  /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;

const testDiets = (value) => {
  if (!value.length) return true;

  return false;

  // for (let el in value) {
  //   if (value[el] === undefined) {
  //     return true;
  //   }
  //   return false;
  // }
};

const validation = (input) => {
  const errors = {};
  if (!input.name) {
    errors.name = "Must be a name";
  } else if (input.name.length < 7) {
    errors.name = "Name must be more longer";
  } else if (input.name.length > 35) {
    errors.name = "Name must be more shorter";
  } else if (!regexName.test(input.name)) {
    errors.name = "Must be only letters";
  }
  if (input.healthScore <= 0 || input.healthScore > 100) {
    errors.healthScore = "The Score must be between 0 and 100";
  }
  if (input.image && !regexUrl.test(input.image)) {
    errors.image = "The url must be jpg,jpge and png";
  }
  if (input.summary.length < 15) {
    errors.summary = "The abstract must contain more than 20 letters";
  }

  if (testDiets(input.typeofdiets)) {
    errors.typeofdiets = "The recipe must have a type of diet";
  }

  return errors;
};

export default validation;
