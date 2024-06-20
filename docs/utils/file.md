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

```javascript
/**
 * 根据dataType 设置 request headers
 *
 * @param    {string}  dataType
 */
const getDataType = (dataType) => {
  switch (dataType.toLowerCase()) {
    case 'json':
      return {
        'Content-Type': 'application/json',
      }; // 数据格式为json格式,用的多
    case 'text':
      return {
        'Content-Type': 'text/plain',
      }; // 纯文本传输，用得少
    case 'form':
      return {
        'Content-Type': 'application/x-www-form-urlencoded',
      }; // 数据格式为"key1=value1&key2=value2"
    case 'formdata':
      return {
        'Content-Type': 'multipart/form-data',
      }; // 用户传输文件
    default:
      return {};
  }
};
```