export default (
  birthYear: number,
  birthMonth: number,
  birthDay: number,
): number => {
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const hasBirthdayPassed =
    today.getMonth() + 1 > birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);
  if (!hasBirthdayPassed) age--;
  return age;
};
