interface Point {
    x: number
    y: number
}

const myPoint : Point = {
    x: 104,
    y: 234
}

interface otkutxedi {
    sigrdze : number
    sigane : number
}

interface kubi extends otkutxedi {
    simagle : number
}

const mykubi : kubi = {
    sigane : 100,
    simagle: 100,
    sigrdze: 199
}

interface rameaxali extends kubi {
    color : string
}

const raimecvladi : rameaxali = {
    sigane : 199, 
    simagle : 234,
    sigrdze : 123,
    color: 'asdasd'
}

console.log(raimecvladi)


/////

interface Employee {
  id: number;
  name: string;
  departmentId: number;
  salary: number;
}

interface Department {
  id: number;
  name: string;
  employees: Employee[];
}

interface Company {
  name: string;
  departments: Department[];
}

const company: Company = {
  name: 'My Company',
  departments: [
    {
      id: 1,
      name: 'Sales',
      employees: [
        { id: 1, name: 'John Doe', departmentId: 1, salary: 50000 },
        { id: 2, name: 'Jane Smith', departmentId: 1, salary: 60000 },
        { id: 3, name: 'Bob Johnson', departmentId: 1, salary: 55000 },
      ],
    },
    {
      id: 2,
      name: 'Marketing',
      employees: [
        { id: 4, name: 'Alice Williams', departmentId: 2, salary: 70000 },
        { id: 5, name: 'Tom Davis', departmentId: 2, salary: 65000 },
      ],
    },
  ],
};


console.log(company)