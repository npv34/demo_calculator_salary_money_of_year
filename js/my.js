function getSalaryOfYear() {
    const LEVEL_SALARY_ONE = 1;
    let salary = parseInt(document.getElementById("luong1thang").value);
    let levelSalary = +document.getElementById("bacluong").value;
    let totalMoney = 0;
    if (levelSalary === LEVEL_SALARY_ONE) {
        if (salary < 10000000) {
            totalMoney = 11.1 * salary;
        } else {
            if (10000000 <= salary && salary < 50000000) {
                totalMoney = 11.1 * salary * 0.9;
            } else {
                totalMoney = 11.1 * salary * 0.8 * 0.9;
            }
        }
    } else {
        if (salary < 10000000) {
            totalMoney = 10.5 * salary;
        } else {
            if (10000000 <= salary && salary < 50000000) {
                totalMoney = 10.5 * salary * 0.9;
            } else {
                totalMoney = 10.5 * salary * 0.8 * 0.9;
            }
        }
    }

    document.getElementById("luongthucnhan").innerHTML = "Lương 1 năm của bạn là: " + totalMoney + "VND";

}
