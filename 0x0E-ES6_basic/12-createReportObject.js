export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(temployeesList).length;
    },
  };
}
// let e = createEmployeesObject("engineering", ["John Doe", "Guillaume Salva"])
