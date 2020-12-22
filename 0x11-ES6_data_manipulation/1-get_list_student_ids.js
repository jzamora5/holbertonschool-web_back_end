function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  const ids = studentsList.map((item) => item.id);

  return ids;
}

export default getListStudentIds;
