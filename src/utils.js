// Modifier date en String sous format day/month/year
export const formatDate = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return day + '/' + month + '/' + year;
};

export const roundPrice = (price) => {
  return Math.round((price + Number.EPSILON) * 100) / 100;
};
