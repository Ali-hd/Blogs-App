import dynamic from "next/dynamic";
const darkReaderOptions = { brightness: 100, contrast: 90, sepia: 10 };

// import {
//   enable as enableDarkMode,
//   disable as disableDarkMode,
//   isEnabled as isDarkReaderEnabled,
// } from "darkreader";

const handleDarkMode = async (mode, callback) => {
  if (typeof window != "undefined") {
    //next js fix for darkmode
    const { isEnabled, enable, disable, setFetchMethod } = await import(
      "darkreader"
    );
    setFetchMethod(window.fetch);
    if (mode == "dark") {
      enable(darkReaderOptions);
      callback(true);
    } else if (!mode) {
      const enabled = isEnabled();
      if (enabled) {
        disable();
        localStorage.setItem("theme", "light");
        callback(false);
      } else {
        enable(darkReaderOptions);
        localStorage.setItem("theme", "dark");
        callback(true);
      }
    }
  }
};

export default handleDarkMode;

// export async function toggleDarkMode() {
//   if (typeof window != "undefined") {
//     const { isEnabled, enable, disable, setFetchMethod } = await import(
//       "darkreader"
//     );
//     setFetchMethod(window.fetch);
//     const isOn = isEnabled();
//     isOn ? disable() : enable(darkReaderOptions);
//   }
// }
