// Write your solution in this file!
const employee = {
    name: "grace",
    streetAddress: "11 Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    return Object.assign({}, employee, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    
    const newNow= Object.assign({}, employee);
  
    delete newNow[key];
  
    return newNow;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }