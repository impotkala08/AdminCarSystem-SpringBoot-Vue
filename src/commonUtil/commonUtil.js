const selectMonth =(number)=> {
    var monthTH = null;
    if (number == 1) monthTH = "มกราคม";
    else if (number == 2) monthTH = "กุมภาพันธ์";
    else if (number == 3) monthTH = "มีนาคม";
    else if (number == 4) monthTH = "เมษายน";
    else if (number == 5) monthTH = "พฤษภาคม";
    else if (number == 6) monthTH = "มิถุนายน";
    else if (number == 7) monthTH = "กรกฏาคม";
    else if (number == 8) monthTH = "สิงหาคม";
    else if (number == 9) monthTH = "กันยายน";
    else if (number == 10) monthTH = "ตุลาคม";
    else if (number == 11) monthTH = "พฤศจิกายน";
    else if (number == 12) monthTH = "ธันวาคม";

    return monthTH;
  }


  const changDate =(number)=> {
    const date = new Date(number);
    var month = date.getMonth() + 1;
    var year = date.getFullYear() + 543;
    var day = date.getDate();
    var monthTH = this.selectMonth(month);
    return day+" "+monthTH+" "+year;
  }

  export default{
    selectMonth,
    changDate
  }