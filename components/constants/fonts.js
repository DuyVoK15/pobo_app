import * as Font from 'expo-font';

// Định nghĩa các font bạn muốn sử dụng
export const loadFonts = async () => {
  await Font.loadAsync({
    // 'SVN-Gilroy-Bold': require("../../assets/fonts/._SVN-Gilroy Bold.otf"),
    'BeVietnamPro-Bold': require("../../assets/fonts/BeVietnamPro-Bold.ttf"),
    // Thêm các font khác nếu cần
  });
};

// Định nghĩa fontFamily cho các font
export const fontFamily = {
  SVNGilroyBold: 'SVN-Gilroy-Bold',
  BeVietnamProBold: 'BeVietnamPro-Bold',
  // Định nghĩa fontFamily cho các font khác nếu cần
};
