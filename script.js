// Returns and displays the day of the week for a day number (1-7).
function getDayName(dayNumber) {
  let day;

  switch (dayNumber) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Invalid day number. Please enter a number from 1 to 7.";
  }

  const message = "Day " + dayNumber + ": " + day;

  console.log(message);
  alert(message);

  return day;
}

// Example calls (each shows an alert, so click OK to continue)
getDayName(1);
getDayName(5);
getDayName(7);
getDayName(9);