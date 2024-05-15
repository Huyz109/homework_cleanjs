// Sử dụng function để đóng gói logic và giảm lặp code
const process = () => {
  const mode = process.env.NODE_ENV;
  switch(mode) {
    case 'development':
      console.log('development mode');
      // Development-specific logic
      break;
  
    case 'production':
      console.log('production mode');
      // Production-specific logic
      break;
    
    default:
      console.log('');
  }
}

console.log('Starting process...');
process();
console.log('Process started.');
