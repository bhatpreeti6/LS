function extractRegion(code) {
  return code.split('.')[0].split('_')[1];
}
console.log(extractRegion('ko_KR.UTF-16')); // 'KR
console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'