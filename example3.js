// Sử dụng async/await để tránh callback hell và làm code dễ đọc

const process = async() => {
  const data = await getData();
  const parsedData = await parseData(data);
  const processedData = await processData(parsedData);
  await displayData(processedData);
  console.log('Done');
}

process();
