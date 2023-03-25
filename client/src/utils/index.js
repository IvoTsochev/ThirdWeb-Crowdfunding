export const daysLeft = (deadline) => {
  const futureDate = new Date(deadline * 1000);
  const currentDate = new Date();
  const timeDiff = futureDate.getTime() - currentDate.getTime();
  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysLeft;
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
