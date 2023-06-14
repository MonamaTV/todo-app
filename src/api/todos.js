
export const addTodo = async (todo) => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};

export const getTodos = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
export const searchEmployees = async (keyword) => {
  const response = await fetch(`http://localhost:3000/todos?name=${keyword}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getEmployee = async (employeeId) => {
    const response = await fetch(`http://localhost:3000/employees/${employeeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

export const updateEmployee = async (
  employeeId,
  employee
) => {
  const response = await fetch(
    `http://localhost:3000/employees/${employeeId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }
  );
  const data = await response.json();
  return data;
};
export const deleteEmployee = async (employeeId) => {
  const response = await fetch(
    `http://localhost:3000/todos/${employeeId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};