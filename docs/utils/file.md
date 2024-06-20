```javascript
/**
 * json 转FormData
 * @param    {object}  data     被转数据 如果是FormData 直接返回
 * @returns  FormData
 */
const jsonToFormData = (data) => {
  if (data instanceof FormData) {
    return data;
  }
  if (typeof data === "object") {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (data[key] instanceof FileList) {
        Array.from(data[key]).forEach((file) => {
          formData.append(key, file);
        });
      } else if (data[key] instanceof Array) {
        data[key].forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    return formData;
  }

  return new FormData();
};
```
