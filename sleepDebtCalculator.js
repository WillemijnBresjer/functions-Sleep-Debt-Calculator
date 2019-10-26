function getSleepHours (day) {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 9;
      break;
    case 'wednesday':
      return 9;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 9;
      break;
};
}

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

/*
const getIdealSleepHours = () => { const idealHours = 9;
return idealHours * 7;
};
*/

function getIdealSleepHours(hours = 8) {
  return hours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest!');
  }
  console.log('Your sleep debt is ' + (idealSleepHours - actualSleepHours) + ' hours.');
}

calculateSleepDebt();