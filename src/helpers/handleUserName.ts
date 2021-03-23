export const handleUserFullName = (
  first_name: string,
  middle_name: string | null,
  last_name: string
) => {
  let full_name;
  if (middle_name) {
    full_name = `${first_name} ${middle_name} ${last_name}`;
  } else {
    full_name = `${first_name} ${last_name}`;
  }
  return full_name;
};
