Date.prototype.getDaysInMonth = function(month, year){
  month = month || new Date().getMonth();
  year = year || new Date().getFullYear();

  return new Date(year, month, 0).getDate();
};
