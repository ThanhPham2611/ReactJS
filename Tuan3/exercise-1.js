// 1. Khai báo 1 biến bootcampClass là 1 object, với các props như sau:
// - name: tên lớp, giá trị là 1 string tuỳ chọn
// - monitor: là 1 object với các props: name (string), age (só nguyên dương), averageScore (số thập phân, giá trị nhỏ hơn 10) có giá trị tuỳ chọn
// - headTeacher: là 1 object với các props: name(string), age (số nguyên dương), grade (enum, là 1 trong các thang rate: A,B,C,D,E,F)
// - students: là 1 array với 20 bạn, props tương tự như monitor và chỉ khác giá trị
const bootcampClass = {
    name: 'LearnReactJS',
    monitor: {
        name: 'Thanh',
        age: 22,
        averageScore: 9
    },
    headTeacher: {
        name: 'TuanAnh',
        age: 30,
        grade: 'A'
    },
    Student: function() {
        let arrayStudent = [];
        for(let i=1;i<=20;i++) {
            const students = {
                name: `Student ${i}`,
                age: Math.floor(Math.random() * (40-20) + 20),
                averageScore: Number((Math.random() * (10-5) + 5).toFixed(1))
            }
            arrayStudent.push(students)
        }
        return arrayStudent
    },
    
    monitorName: function() {
        return this.monitor.name
    },
    // 3. Tạo 1 hàm đọc ra tên của thầy giáo chủ nhiệm (headTeacher) với tham số đầu vào (argument) là object bootcampClass trên
    headTeacherName: function() {
        return this.headTeacher.name
    }

}

// 2. Tạo 1 hàm đọc ra tên của bạn lớp trưởng (monitor) với tham số đầu vào (argument) là object bootcampClass trên
function monitorName(bootcampClass) {
    return bootcampClass.monitor.name
}

// 3. Tạo 1 hàm đọc ra tên của thầy giáo chủ nhiệm (headTeacher) với tham số đầu vào (argument) là object bootcampClass trên
function headTeacherName(bootcampClass) {
    return bootcampClass.headTeacher.name
}


// 4. (optional) Tạo 1 hàm tính tổng số điểm trung bình của tất cả sinh viên trong lớp, với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

function averageGrade() {
    const average = bootcampClass.Student().map(score => {
        return score.averageScore
    })
    const sum = average.reduce((total,number) =>{
        return total + number
    }) 
    return sum / average.length
}

// 5. Xét điêm trung bình của lớp trưởng (monitor), 
// - nếu điểm số trên 7.5 thì alert ra "Đạt yêu cầu!"
// - nếu điểm từ 7.5 - 8.5 thì alert ra "Quá là đạt yêu cầu luôn!"
// - nếu điểm từ 8.5-10 thì alert ra "Bạn ấy không thuộc về thế giới này" 
// - còn lại thì alert ra "Thay lớp trưởng thôi!"
// tip: sử dụng if/else if/else hoặc switch/case/default
const grade = bootcampClass.monitor.averageScore

if(grade == 7.5) {
    alert('Đạt yêu cầu')
}
else if (grade > 7.5 && grade <= 8.5 ){
    alert('Quá đạt yêu cầu luôn')
}
else if (grade > 8.5 && grade < 10) {
    alert('Bạn ấy không thuộc về thế giới này !')
} 
else {
    alert('Thay đổi lớp trưởng thôi')
}



// 6. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, console.log ra từng sinh viên
for(let i=0; i < bootcampClass.Student().length; i++) {
    console.log(bootcampClass.Student()[i])

}




// 7. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, tính ra tổng số điểm trung bình. Sau đó xét các case:
// - Nếu điểm số thấp hơn 100, alert ra "Trainer thất bại!"
// - Nếu điểm số trong khoảng 100 - 150, alert ra "Tạm đạt yêu cầu!"
// - Nếu điểm số trong khoảng 150 - 200, alert ra "Đạt yêu cầu!"
// tip: sử dụng if/else if/else hoặc switch/case/default
let sum = 0;
for(let i=0; i<bootcampClass.Student().length; i++) {
    sum += bootcampClass.Student()[i].averageScore
}

if(sum < 100) {
    alert('Trainer thất bại!')
}
else if (sum >= 100 && sum <= 150) {
    alert('Tạm đạt yêu cầu')
}
else if(sum > 150 && sum <= 200) {
    alert('Đạt yêu cầu!')
}



// 8. (nâng cao, optional) Biến hàm ở bài số 2 và 3 thành method của object bootcampClass, thay thế đầu vào bằng từ khoá this
// * YOUR CODE HERE *
