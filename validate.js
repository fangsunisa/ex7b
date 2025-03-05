function checkSID() {
    let sid = (document.getElementById("sid").value).trim();
    if (/^\d{10}$/.test(sid)) { /*^\d{10}$ เป็น Regular Expression 
		ที่ใช้ตรวจสอบว่า sid ประกอบด้วยตัวเลข0-9 และมีความยาว 10 ตัวหรือไม่*/
        return true;
    } else {
        return false;
    }
}

function checkCandiNo() {
    let candi = (document.getElementById("candi").value).trim();
    if (isNaN(candi) || candi < 1 || candi > 10) {
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    if (!checkSID()) {
        alert("Invalid value for Student ID! Must be 10 digits.");
        document.getElementById("sid").focus();
        return false;
    } else {
        if (!checkCandiNo()) {
            alert("Invalid value for Candidate No! Must be between 1 and 10.");
            document.getElementById("candi").focus();
            return false;
        } else {
            alert("Your input data passes validation!!");
            return true;
        }
    }
}