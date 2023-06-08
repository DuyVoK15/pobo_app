export const formatDateToYYYYMMDD = (dateString) => {
    // Chuyển đổi chuỗi ngày tháng thành đối tượng Date
    const date = new Date(dateString);
  
    // Lấy các thành phần ngày, tháng, năm từ đối tượng Date
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    // Tạo chuỗi ngày tháng định dạng "YYYY/MM/DD"
    const formattedDate = `${year}/${month}/${day}`;
  
    return formattedDate;
  };

export const formatDateToAPI = (dateString) => {
    // Thay đổi định dạng chuỗi ngày tháng từ "2001/10/13" thành "2001-10-13"
    const formattedDateString = dateString.replace(/\//g, '-');
  
    // Chuyển đổi chuỗi ngày tháng sang đối tượng Date
    const date = new Date(formattedDateString);
  
    // Lấy các thành phần ngày, tháng, năm từ đối tượng Date
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    // Tạo chuỗi ngày tháng định dạng "YYYY-MM-DDT00:00:00+07:00"
    const formattedDate = `${year}-${month}-${day}T00:00:00+07:00`;
  
    return formattedDate;
  };