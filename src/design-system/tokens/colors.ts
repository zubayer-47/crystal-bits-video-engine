export const colors = {
  white: "#FFFFFF",
  gray: {
    50: "#F9FAFB", 100: "#F2F3F5", 200: "#E5E7EB", 300: "#D1D5DB",
    400: "#9CA3AF", 500: "#737982", 600: "#565D66", 700: "#3D434B",
    800: "#292E35", 900: "#202426",
  },
  blue: {
    50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 400: "#60A5FA",
    500: "#2878F0", 600: "#1D64D8", 700: "#174EA6",
  },
  semantic: {
    data: "#2878F0", processing: "#7357D9", storage: "#0D9488",
    hardware: "#565D66", software: "#D97706", warning: "#DC8B28",
    error: "#DC4545", success: "#16845B",
  },
  background: { primary: "#FFFFFF", secondary: "#F9FAFB", tertiary: "#F2F3F5" },
  surface: { primary: "#FFFFFF", secondary: "#F9FAFB" },
  text: { primary: "#202426", secondary: "#565D66", tertiary: "#737982", inverse: "#FFFFFF" },
  border: { subtle: "#E5E7EB", default: "#D1D5DB", strong: "#9CA3AF" },
  brand: { primary: "#2878F0", hover: "#1D64D8", strong: "#174EA6", subtle: "#EFF6FF" },
} as const;
