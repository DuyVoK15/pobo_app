import moment from "moment";

export const formatDateToYYYYMMDD = (dateString) => {
  // Chuyển đổi chuỗi ngày tháng thành đối tượng Date
  const date = new Date(dateString);

  // Lấy các thành phần ngày, tháng, năm từ đối tượng Date
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // Tạo chuỗi ngày tháng định dạng "YYYY/MM/DD"
  const formattedDate = `${year}/${month}/${day}`;

  return formattedDate;
};

export const formatDateToAPI = (dateString) => {
  // Thay đổi định dạng chuỗi ngày tháng từ "2001/10/13" thành "2001-10-13"
  const formattedDateString = dateString.replace(/\//g, "-");

  // Chuyển đổi chuỗi ngày tháng sang đối tượng Date
  const date = new Date(formattedDateString);

  // Lấy các thành phần ngày, tháng, năm từ đối tượng Date
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // Tạo chuỗi ngày tháng định dạng "YYYY-MM-DDT00:00:00+07:00"
  const formattedDate = `${year}-${month}-${day}T00:00:00+07:00`;

  return formattedDate;
};

export const formatDateTime = (dateString, timeString) => {
  //   var dateString = '2023/05/10';
  // var timeString = '07:08';
  var formattedDateString = dateString.replace(/\//g, "-");
  // Chuyển đổi chuỗi ngày tháng thành đối tượng Date
  var date = new Date(formattedDateString);

  // Kiểm tra giá trị hợp lệ cho giờ và phút
  var timeParts = timeString.split(":");
  var hour = parseInt(timeParts[0], 10);
  var minute = parseInt(timeParts[1], 10);

  if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
    // Đặt giờ và phút cho đối tượng Date
    date.setHours(hour);
    date.setMinutes(minute);

    // Định dạng lại thành chuỗi theo định dạng mong muốn (ISO 8601)
    var formattedDate = date.toISOString();

    return formattedDate;
  } else {
    console.log("Giá trị giờ không hợp lệ.");
  }
};

export const formatDateToVN = (dateTimeString) => {
  const inputDate = dateTimeString;

  // Tạo một đối tượng Date từ chuỗi đầu vào
  const date = new Date(inputDate);

  // Lấy các thành phần của ngày và giờ từ đối tượng Date
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0, cần cộng 1 và định dạng lại thành chuỗi 2 chữ số
  const day = date.getDate().toString().padStart(2, "0"); // Định dạng lại thành chuỗi 2 chữ số
  const hours = date.getHours().toString().padStart(2, "0"); // Định dạng lại thành chuỗi 2 chữ số
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Định dạng lại thành chuỗi 2 chữ số

  // Tạo chuỗi định dạng mới
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:00`;

  console.log(formattedDate);
  return formattedDate;
};
