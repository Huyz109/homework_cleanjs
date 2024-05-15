// Xem đoạn code sau có vấn đề gì với JS
// So sánh == là so sánh tương đối, '123' == 123 => true nên cần phải chuyển sang so sánh ===

let value = "123";

if (value === 123) {
  console.log('The comparison is true!');
}
