import React,{useState} from "react";
import ListStudents from "./excersise2-2";


const ClassWrapper = () => {
  const students = [
    {
      uuid: 1,
      fullName: `Nguyen Van A`,
      points: 10,
    },
    {
      uuid: 2,
      fullName: `Le Van B`,
      points: 8,
    },
    {
      uuid: 3,
      fullName: "Pham Thi C",
      points: 7,
    },
    {
      uuid: 4,
      fullName: "Tran Van D",
      points: 6,
    },
    {
      uuid: 5,
      fullName: "Ta Thi Lang",
      points: 1,
    },
  ];

  const [listStudent, setListStudent] = useState(students);

  const onAddNewStudent = () => {
    setListStudent(students.push({
      uuid: 6,
      fullName: "undefined",
      points: 0
    }))
  };

  const onDisbanStudent = (id) => {
    console.log(id);
  };
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Số định danh (uuid)</th>
            <th>Tên đầy đủ (FullName)</th>
            <th>Điểm (Points)</th>
            <th>Hành động (Actions)</th>
            <th><button onClick={() => onAddNewStudent()}>AddNewStudent</button></th>
          </tr>

          {listStudent.map((stu) => {
            return <tr>
            <td>{stu.uuid}</td>
            <td>{stu.fullName}</td>
            <td>{stu.points}</td>
            <td><button onClick={onDisbanStudent(stu.uuid)}>onDisbanStudent</button></td>
          </tr>
          })}
        </tbody>
      </table>
    </>
  );
};

export default ClassWrapper;
