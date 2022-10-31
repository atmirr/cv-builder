import { useEffect } from "react";
import { map } from "lodash";

const usePressKeys = (ref, keys, callback) => {
  const handlePressKeys = (e) => {
    map(keys, (key) => {
      if (ref.current && e.key && e.key === key) {
        callback();
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handlePressKeys);

    return () => {
      document.removeEventListener("keydown", handlePressKeys);
    };
  });
};

export default usePressKeys;
