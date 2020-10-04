export default (user, searchString) => {
  if (!searchString) {
    return true;
  }

  const loweredSearchString = searchString.toLowerCase();
  const searchBy = [
    "name",
    "email",
    "role",
  ];

  return searchBy.some((field) => {
    return user[field].toLowerCase().includes(loweredSearchString);
  });
};
