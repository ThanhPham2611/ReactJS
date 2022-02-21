//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// traineeIterator.forEach((item) => {
//   console.log(`fulname: ${item.lastName} ${item.firtName}`)
// }) 



//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// traineeIterator.forEach((item) => {
//   console.log(`${item.firtName} ${item.lastName} / ${item.grade}`)
// }) 


//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// traineeIterator.map(item => {
//   const newTraineeArray = [ {
//     newId: item.id,
//     fullName: `${item.firtName} ${item.lastName}`,
//     rank: item.grade
//   }]
//   console.log(newTraineeArray)
// })


//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// traineeIterator.map((item) => {
//   function grade() {
//     if (item.grade == 'A'){
//       return `Excellent`
//     }
//     else if (item.grade == 'B') {
//       return `Good`
//     }
//     else if (item.grade == 'C') {
//       return `Medium`
//     }
//     else if (item.grade == 'D') {
//       return 'Weak'
//     }
//     else if(item.grade == 'E') {
//       return `Poor`
//     }
//     else {
//       return `Disbanded`
//     }
//   }
//   const newTraineeArray = [{
//     id: item.id,
//     codeName: `${item.className} - ${item.firtName} ${item.lastName}`,
//     classification: grade()
//   }];
//   console.log(newTraineeArray)
// })




//5. Lọc ra các trainee với grade dưới B

// const grades = traineeIterator.map(item => {
//   return item.grade
// }).filter(grade => {
//   return grade > 'B'
// })
// console.log(grades) 



//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"

// const grades = traineeIterator.map(item => {
//   return item.grade
// }).filter(grade => {
//   return grade < 'C'
// })

// if((grades.length / traineeIterator.length) * 100 >= 50) {
//   console.log(`Effective training!`)
// }
// else if((grades.length / traineeIterator.length) * 100 < 40 ) {
//   console.log(`Average training`)
// }
// else if((grades.length / traineeIterator.length) * 100 == 0) {
//   console.log(`Failed training`)
// }



//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// traineeIterator.map(item => {
//   if(item.grade == 'A') {
//     console.log(`${item.firtName} ${item.lastName}`)
//   }
// })



//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// traineeIterator.map(item => {
//   if(item.grade == 'F') {
//     console.log(`${item.firtName} ${item.lastName}`)
//   }
// })



//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// console.log(traineeIterator.reduce((currentIndex,index) => {
//   return currentIndex.grade + index.grade
// }))



//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// numberIn = 8
// let factorial = []
// for(let i=1;i<=numberIn;i++) {
//   factorial.push(i)
// }
// console.log(factorial.reduce((currentNumber, number) => {
//   return currentNumber * number 
// })
// )


//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
let array = [10,0,22,12]

function arrayMin(array) {
  return array.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
}

function arrayMax(array) {
  return array.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

console.log(arrayMin(array))
console.log(arrayMax(array))


