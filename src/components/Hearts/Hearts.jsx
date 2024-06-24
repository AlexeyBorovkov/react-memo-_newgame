import React, { useState, useEffect } from "react";

export const Hearts = ({ lives }) => {
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    import("./Hearts.module.css").then(loadedStyles => {
      setStyles(loadedStyles.default);
    });
  }, []);

  if (!styles) {
    return <div>Loading...</div>; // Или другой индикатор загрузки
  }

  return (
    <div>
      {Array.from({ length: lives }, (_, i) => (
        <span key={i} className={styles.heart}>
          &#10084;
        </span> // Теперь класс 'heart' применяется из загруженных стилей
      ))}
    </div>
  );
};
